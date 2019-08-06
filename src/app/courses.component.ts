import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
  `
})
export class Courses {
  email;
  onKeyUp() {
    console.log(this.email);
  }
}
