import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public serverResponse: any;

  constructor(private httpClient: HttpClient) {}

  public makePost(): void {
    this.httpClient.post("api/antiforgerytest", {}).subscribe(
      (result: any) => {
        this.serverResponse = result;
      },
      ex => {
        this.serverResponse = ex.error.text;
      }
    );
  }

  public setCsrfCookie(): void {
    this.httpClient
      .get("api/antiforgerytest/csrf-token")
      .subscribe((result: any) => {
        this.serverResponse = result;
      });
  }
}
