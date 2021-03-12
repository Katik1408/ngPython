import { Component } from '@angular/core';

//Decorator

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Main Title';
  a: number = 5;
  isActive = false;
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = true;
  isSpecial = false;
  // url = 'assets\\images\\bike.jpg'
  getData() {
    return 'This is from function';
  }
  changeData() {
    this.title = 'New Title';
  }

  students = [
    {
      name: 'Rahul',
      Age: 25,
      place: 'Bangalore',
    },
    { name: 'Rohit', Age: 25, place: 'Delhi' },
    {
      name: 'Harsh',
      Age: 24,
      place: 'Noida',
    },
    {
      name: 'Venkat',
      Age: 24,
      place: 'Noida',
    },
  ];
}
