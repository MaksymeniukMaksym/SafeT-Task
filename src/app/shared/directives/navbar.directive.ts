import { NavbarService } from './../../core/services/navbar.service';
import { BreakpointService } from '../../core/services/breakpoint.service';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[appNavbar]',
})
export class NavbarDirective {

  private isTablet = false;

  constructor(
    private _elementRef: ElementRef,
    private breakpointService: BreakpointService,
    private navbarService: NavbarService

  ) {
    this.breakpointService.isTablet.subscribe((data) => {
      this.isTablet = data;
    })

  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && this.isTablet) {
      this.navbarService.toggleOpenState(false);
      this.navbarService.toggleBlurState(false);

    }
  }
}
