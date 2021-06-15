import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Blog App';
  name = "brush"
  getName(eName:any) {
    alert("the name "+eName)
  }
  obj = {
    name: "any", age: 14
  }

  arr = ['broush',"tony","peater"]
  siteName = window.location.href;

  myEvent = (event:any) => {
    console.log(event)
  }

  myKeyup = (event:any) => {
    console.log(event)
  }
}
