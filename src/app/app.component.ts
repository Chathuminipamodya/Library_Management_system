import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SharedModule,AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LIbrary';
}
