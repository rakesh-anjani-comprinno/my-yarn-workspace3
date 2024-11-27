import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyLibraryBComponent } from "@my-yarn-workspace3/my-library-b";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-app1';
}
