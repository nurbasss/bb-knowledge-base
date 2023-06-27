import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VariableModalComponent } from '@app/shared/components/variable-modal/variable-modal.component';
import { BehaviorSubject, Observable, Subscription, first } from 'rxjs';
import { Variable } from '@app/data/models/variable';
import { Category, Subcategory } from '@app/data/models/category';
import { CategoryService } from '@app/core/services/category.service';
import { VariableService } from '@app/core/services/variable.service';
import { AddVariableModalComponent } from '@app/shared/components/add-variable-modal/add-variable-modal.component';
import { PostService } from '@app/core/services/post.service';
import {
  errorMessage,
  successMessage,
  validateFormFields,
} from '@app/core/helper';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageUploadComponent } from '@app/modules/post/components/image-upload/image-upload.component';

@Component({
  selector: 'bb-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreatePostComponent
  extends SubscriptionAccumulator
  implements OnInit, OnDestroy
{
  public form: FormGroup;
  //public editor: any = Editor;
  public showChooseVariableModal$ = new BehaviorSubject<boolean>(false);
  public showAddVariableModal$ = new BehaviorSubject<boolean>(false);
  public showImageUploadModal$ = new BehaviorSubject<boolean>(false);
  public dataToInsert = new BehaviorSubject<string>('');
  public dataToInsertSubscription: Subscription;
  public editorData: string = '';
  public variables: Variable[] = [];
  public subcategories: Subcategory[] = [];
  public usedVariableIds: any = [];
  public type: string = 'create';
  public postId: number;
  public editPost: any;
  public isEditPostLoading: boolean = false;
  public prefillCategory$ = new BehaviorSubject<any>(null);
  public prefillSubCategory$ = new BehaviorSubject<any>(null);
  public prefillSubscription: Subscription;

  public tags: any[] = [
    { name: 'Тэг 1' },
    { name: 'Тэг 2' },
    { name: 'Тэг 3' },
    { name: 'Тэг 4' },
  ];

  init = {
    content_style: '.variable { background-color: yellow; }',
    height: 500,
    valid_elements:
      'bb-variable[*],br[*],table[*],tr[*],td[*],th[*],tbody[*],thead[*],tfoot[*],img[*]',
    menubar: 'edit view format tools table help',
    // forced_root_block: 'div',
    // force_br_newlines: true,
    // force_p_newlines: false,
    plugins: [
      //  'noneditable',
      'table',
      'image',
      'link',
      'advlist',
      'autolink',
      'lists',
      //'imagetools',
      'charmap',
      //'print',
      'preview',
      //'hr',
      'anchor',
      'pagebreak',
      'code',
    ],
    toolbar:
      'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link | imageButton | chooseVariableButton | addVariableButton |',
    setup: (editor: any) => {
      editor.ui.registry.addButton('chooseVariableButton', {
        text: 'Добавить переменную',
        onAction: () => {
          this.showChooseVariableModal$.next(true);
          this.dataToInsert.next('');
          if (this.dataToInsertSubscription) {
            this.dataToInsertSubscription.unsubscribe();
          }
          this.dataToInsertSubscription = this.dataToInsert.subscribe(value => {
            if (value) {
              editor.insertContent(value);
            }
          });
        },
      });
      editor.ui.registry.addButton('addVariableButton', {
        text: 'Создать переменную',
        onAction: () => {
          this.showAddVariableModal$.next(true);
          this.dataToInsert.next('');
          if (this.dataToInsertSubscription) {
            this.dataToInsertSubscription.unsubscribe();
          }
          this.dataToInsertSubscription = this.dataToInsert.subscribe(value => {
            if (value) {
              editor.insertContent(value);
            }
          });
        },
      });
      editor.ui.registry.addButton('imageButton', {
        icon: 'image',
        onAction: () => {
          this.showImageUploadModal$.next(true);
          this.dataToInsert.next('');
          if (this.dataToInsertSubscription) {
            this.dataToInsertSubscription.unsubscribe();
          }
          this.dataToInsertSubscription = this.dataToInsert.subscribe(value => {
            if (value) {
              editor.insertContent(value);
            }
          });
        },
      });
      editor.on('keydown', e => {
        if (e.keyCode == 13 && e.shiftKey) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        if (e.keyCode === 13) {
          editor.insertContent('<br>');
        }
      });
    },
  };

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private changeDetector: ChangeDetectorRef,
    public categoryService: CategoryService,
    private variableService: VariableService,
    private postService: PostService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.form = this.fb.group({
      title: [null, Validators.required],
      category: [null, Validators.required],
      subcategory: [null, Validators.required],
      postTags: [null],
      editorContent: [null, Validators.required],
    });
  }

  override ngOnDestroy(): void {
    this.prefillSubCategory$.next(null);
    this.prefillCategory$.next(null);
    if (this.prefillSubscription) {
      this.prefillSubscription.unsubscribe();
    }
    this.unsubscribeAll();
  }

  ngOnInit(): void {
    //this.openVariableModal();
    this.showChooseVariableModal$.subscribe(val => {
      if (val) {
        document.getElementById('choose')?.click();
      }
    });
    this.showAddVariableModal$.subscribe(val => {
      if (val) {
        document.getElementById('add')?.click();
      }
    });
    this.showImageUploadModal$.subscribe(val => {
      if (val) {
        document.getElementById('imageUpload')?.click();
      }
    });
    this.variableService.getAllVariables();
    this.categoryService.getCategoryList();
    this.route.params.subscribe(params => {
      this.type = params['action'];
      if (this.type === 'edit') {
        this.postId = params['id'];
        this.getPostById();
      }
    });
    this.addSubscriber(
      this.route.queryParams.pipe(first()).subscribe((params: any) => {
        const catId = params?.category;
        const subId = params?.subcategory;
        this.prefillCategory$.next(catId);
        this.prefillSubCategory$.next(subId);
        this.changeDetector.detectChanges();
      })
    );
    this.addSubscriber(
      this.categoryService.categoryList$.subscribe((list: any) => {
        if (list) {
          this.prefillSubscription = this.prefillCategory$.subscribe(data => {
            if (data) {
              this.form.controls['category'].setValue(
                this.categoryService.getCategoryById(data)
              );
              this.onCategoryChange(this.form.controls['category'].value);
              this.form.controls['subcategory'].setValue(
                this.categoryService.getLocalSubcategoryById(
                  this.prefillSubCategory$.value
                )
              );
              this.changeDetector.detectChanges();
            }
          });
        }
      })
    );
  }

  addNewTag = (term: string) => {
    return { name: term };
  };

  handler() {}

  openChooseVariableModal() {
    const modalRef = this.modalService.open(VariableModalComponent, {
      scrollable: true,
      modalDialogClass: 'mw-740',
      centered: true,
    });
    modalRef.result.then(result => {
      if (result) {
        const content = this.form.controls['editorContent'];
        const prev = content.value ? content.value + ' ' : '';
        const res = `&nbsp;<bb-variable class="variable mceNonEditable" var=\"${result.id}\">${result.value}</bb-variable>&nbsp;`;
        this.dataToInsert.next(res);
      }
    });
  }

  handleVariables(markup: string) {
    this.usedVariableIds = [];
    const regex =
      /<bb-variable\s+class="([^"]+)"\s+var="([^"]+)">([^<]+)<\/bb-variable>/g;
    let match;
    while ((match = regex.exec(markup)) !== null) {
      const id = Number(match[2]);
      if (!this.usedVariableIds.includes(id)) {
        this.usedVariableIds.push(id);
      }

      // const variable = this.variables.find(
      //   (item: Variable) => item.id === Number(id)
      // );
      // const variableElement = document.getElementById(id);
      // if (variable && variableElement) {
      //   variableElement.innerHTML = variable.value;
      // }
    }
  }

  openAddVariableModal() {
    const modalRef = this.modalService.open(AddVariableModalComponent, {
      modalDialogClass: 'mw-740 mh-600',
      centered: true,
    });
    modalRef.result.then(result => {
      if (result) {
        const content = this.form.controls['editorContent'];
        const prev = content.value ? content.value + ' ' : '';
        const res = `&nbsp;<bb-variable class=\"variable mceNonEditable\"  var=\"${result.id}\" >${result.value}</bb-variable>&nbsp;`;
        this.dataToInsert.next(res);
        this.variableService.getAllVariables();
      }
    });
  }

  onCategoryChange(selectedCategory: Category) {
    this.subcategories = [];
    this.form.controls['subcategory'].setValue(null);
    if (selectedCategory) {
      this.subcategories = selectedCategory.sub_categories;
    }
    this.changeDetector.detectChanges();
  }

  onFormSubmit() {
    if (this.form.valid) {
      const markup = this.form.controls['editorContent'].value;
      this.handleVariables(markup);
      let body: any = {
        title: this.form.controls['title'].value,
        description: markup.replace(/<[^>]*>/g, ''),
        content: markup,
        sub_category_id: this.form.controls['subcategory'].value.id,
        variable_ids: this.usedVariableIds,
      };
      if (this.type === 'edit' && this.editPost) {
        body._method = 'PUT';
        this.postService.updatePost(body, this.postId).subscribe({
          next: (data: any) => {
            successMessage('Пост успешно изменен', this.toastr);
            if (data?.posts?.id) {
              this.router.navigate(['posts/post/' + data?.posts?.id]);
            } else {
              this.router.navigate(['home']);
            }
          },
        });
      } else {
        this.postService.createPost(body).subscribe({
          next: (data: any) => {
            successMessage('Пост успешно добавлен', this.toastr);
            if (data?.posts?.id) {
              this.router.navigate(['posts/post/' + data?.posts?.id]);
            } else {
              this.router.navigate(['home']);
            }
          },
          error: (err: any) => {
            errorMessage(err, this.toastr);
          },
        });
      }
    } else {
      validateFormFields(this.form, this.toastr);
    }
  }

  getPostById() {
    this.isEditPostLoading = true;
    this.changeDetector.detectChanges();
    this.postService.getPostById(this.postId).subscribe({
      next: (data: any) => {
        this.editPost = data.posts;
        this.prefillCategory$.next(this.editPost?.sub_category_id);
        this.form.controls['editorContent'].setValue(this.editPost?.content);
        this.form.controls['title'].setValue(this.editPost?.title);
        this.form.controls['category'].setValue(
          this.categoryService.getCategoryBySubcateryId(
            this.editPost?.sub_category_id
          )
        );
        this.onCategoryChange(this.form.controls['category'].value);
        this.form.controls['subcategory'].setValue(
          this.categoryService.getLocalSubcategoryById(
            this.editPost.sub_category_id
          )
        );
        this.isEditPostLoading = false;
        this.changeDetector.detectChanges();
      },
      error: (error: any) => {
        errorMessage(error, this.toastr);
        this.isEditPostLoading = false;
        this.changeDetector.detectChanges();
      },
    });
  }

  openImageUploadModal() {
    const modalRef = this.modalService.open(ImageUploadComponent, {
      centered: true,
    });
    modalRef.result.then(result => {
      if (result) {
        const content = this.form.controls['editorContent'];
        const prev = content.value ? content.value + ' ' : '';
        const res = `<img src=\"http://${result.replaceAll('//', '/')}\" />`;
        this.dataToInsert.next(res);
        this.variableService.getAllVariables();
      }
    });
  }
}
