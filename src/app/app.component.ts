import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  products: any = [];
  visibleForm = false;

  toggleForm() {
    this.visibleForm = !this.visibleForm;
  }

  ngOnInit(): void {}
}
