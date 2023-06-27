import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss'],
})
export class VariableComponent implements OnInit {
  @Input() value: string;
  @Input() name: string;
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}
}
