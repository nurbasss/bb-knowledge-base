import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent implements OnInit {
  categoryList: any[] = [
    {
      name: 'Карты',
      id: 1,
      toggle: false,
      subCategories: [
        { id: 1, name: 'Дебетовые карты' },
        { id: 2, name: 'Дебетовые карты' },
        { id: 3, name: 'Дебетовые карты' },
      ],
    },
    {
      name: 'Карты',
      id: 2,
      toggle: false,
      subCategories: [
        { id: 1, name: 'Дебетовые карты' },
        { id: 2, name: 'Дебетовые карты' },
      ],
    },
    {
      name: 'Карты',
      id: 3,
      toggle: false,
      subCategories: [
        { id: 1, name: 'Дебетовые карты' },
        { id: 2, name: 'Дебетовые карты' },
        { id: 3, name: 'Дебетовые карты' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
