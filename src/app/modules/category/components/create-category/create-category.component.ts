import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bb-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  public type: string = 'category';
  public form: FormGroup;

  public categories: any[] = [
    {
      name: 'Категория 1',
    },
    {
      name: 'Категория 2',
    },
    {
      name: 'Категория 3',
    },
    {
      name: 'Категория 4',
    },
  ];

  public tags: any[] = [
    { name: 'Тэг 1' },
    { name: 'Тэг 2' },
    { name: 'Тэг 3' },
    { name: 'Тэг 4' },
  ];
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      users: [null, Validators.required],
      name: [null, Validators.required],
      description: [null],
      tags: [null],
      category: [null],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.form.reset();
    });
  }

  getTitle() {
    if (this.type === 'subcategory') {
      return 'Создать подкатегорию';
    } else {
      return 'Создать категорию';
    }
  }

  addNewTag = (term: string) => {
    return { name: term };
  };
}
