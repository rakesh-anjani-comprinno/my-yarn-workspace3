import { Component } from '@angular/core';
import { MyLibraryAComponent } from "@my-yarn-workspace3/my-library-a";


@Component({
  selector: 'lib-my-library-b',
  imports: [MyLibraryAComponent],
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
