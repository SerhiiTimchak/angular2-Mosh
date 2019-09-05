import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent {
  contactMethods = [{ id: 1, name: "Viber" }, { id: 2, name: "Watsa" }];
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }
}
