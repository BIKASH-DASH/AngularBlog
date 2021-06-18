import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Blog App';
  name = "brush"
  show = 'green';
  names = [
    {
      name: 'biaksh',
      age: 32,
      email: "biaksh@gmail.com",
    },
    {
      name: 'sameer',
      age: 34
    },
    {
      name: 'dash',
      age: 25
    },
  ]

  getUserValue(value:any) {
    console.log(value)
  }

}
