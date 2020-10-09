import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() {}

  name:any = 'Muhammad Arslan';
  age:any = 27;
  married:boolean = false;
  child_list:any = [
      {id: 1, name: 'Xyz', age: 1},
      {id: 2, name: 'Abc', age: 2},
      {id: 1, name: 'Xyz', age: 1},
      {id: 2, name: 'Abc', age: 2},
  ];
}