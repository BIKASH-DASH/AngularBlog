import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Blog App';
  name = "brush"
  getName() {
    return this.name
  }
  obj = {
    name: "any", age: 14
  }

  arr = ['broush',"tony","peater"]
  siteName = window.location.href;

}
