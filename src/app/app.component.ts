import { NavbarService } from './core/services/navbar.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isBlur$: Observable<boolean>;

  constructor(private navbarService: NavbarService) {
    this.isBlur$ = this.navbarService.isBlur$;

  }
}
