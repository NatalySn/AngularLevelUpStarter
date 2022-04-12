import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hometask3';
  public attrbutes = { id: 'hello' };

  public onClick() {
    this.attrbutes = { id: 'paragraph' };
  }
}
