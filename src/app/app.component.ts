import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myQR';
  elementType = 'url';
  github = 'https://github.com/nishidhparmar';
  linkdin = 'https://www.linkedin.com/in/nishidhparmar';
  resume = 'https://drive.google.com/file/d/13DzvrOUoe_OSpAylYWyr3sR_n5C9m1SP/view';

}
