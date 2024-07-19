import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng18-code-coverage';
  testData = 1;
  unreachableData = 1;

  test() {
    this.testData++;
  }

  unreachableFromUI() {
    this.unreachableData++;
  }
}
