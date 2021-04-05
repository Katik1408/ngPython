import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  message = '';

  datafromChild = '';
  constructor() {}

  ngOnInit(): void {}

  receiveData(data) {
    this.datafromChild = data;
  }
}
