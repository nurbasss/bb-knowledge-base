import { SubscriptionAccumulator } from '@core/helper/SubscriptionAccumulator';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VariableModalComponent } from '@app/shared/components/variable-modal/variable-modal.component';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AddVariableModalComponent } from '@app/shared/components/add-variable-modal/add-variable-modal.component';

@Component({
  selector: 'bb-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreatePostComponent implements OnInit {
  public form: FormGroup;
  //public editor: any = Editor;
  public showChooseVariableModal$ = new BehaviorSubject<boolean>(false);
  public showAddVariableModal$ = new BehaviorSubject<boolean>(false);
  public dataToInsert = new BehaviorSubject<string>('');
  public dataToInsertSubscription: Subscription;
  public editorData: string = '';
  template = `
  <div class="modal-header">
  <h4 class="modal-title">Hi there!</h4>
  <button
    type="button"
    class="btn-close"
    aria-label="Close"
    (click)="activeModal.dismiss('Cross click')"></button>
</div>
<div class="modal-body">
  <p>Eto modalka peremennoi</p>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-outline-dark"
    (click)="activeModal.close('Close click')">
    Close
  </button>
</div>
`;
  public tags: any[] = [
    { name: 'Тэг 1' },
    { name: 'Тэг 2' },
    { name: 'Тэг 3' },
    { name: 'Тэг 4' },
  ];

  init = {
    content_style: '.variable { background-color: yellow; }',
    height: 500,
    menubar: 'file edit view insert format tools table help',
    plugins: [
      'noneditable',
      'table',
      'image',
      'link',
      'advlist autolink lists imagetools charmap print preview hr anchor pagebreak code',
    ],
    toolbar:
      'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | bullist numlist | link | image | chooseVariableButton | addVariableButton |',
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
    },
  };

  constructor(private fb: FormBuilder, private modalService: NgbModal) {
    this.form = this.fb.group({
      postTags: [null],
      editorContent: [null],
    });
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
  }

  addNewTag = (term: string) => {
    return { name: term };
  };

  handler() {
    console.log('clicked');
  }

  openChooseVariableModal() {
    //this.modalService.open(this.template);
    // this.showModal$.subscribe(value => {
    //   if (value) {
    const modalRef = this.modalService.open(VariableModalComponent, {
      scrollable: true,
      modalDialogClass: 'mw-740',
      centered: true,
    });
    modalRef.result.then(result => {
      if (result) {
        const content = this.form.controls['editorContent'];
        const prev = content.value ? content.value + ' ' : '';
        const res = `&nbsp;<strong class=\"variable mceNonEditable\">${result.value}</strong>&nbsp;`;
        this.dataToInsert.next(res);
      }
    });
    //   }
    // });
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
        const res = `&nbsp;<strong class=\"variable mceNonEditable\">${result.value}</strong>&nbsp;`;
        this.dataToInsert.next(res);
      }
    });
  }
}
