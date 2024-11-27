import { Component } from '@angular/core';
import { MyLibraryAComponent } from "my-library-a";

@Component({
  selector: 'lib-my-library-b',
  imports: [],
  template: `
    <p>
      my-library-b works!
    </p>
    <lib-my-library-a></lib-my-library-a>
  `,
  styles: ``
})
export class MyLibraryBComponent {

}
