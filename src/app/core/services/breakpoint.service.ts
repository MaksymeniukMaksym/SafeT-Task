import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  public isTablet: Observable<boolean>;
  public isWeb: Observable<boolean>;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.isWeb = this.breakpointObserver.observe('(min-width: 1025px)').pipe(map(result => result.matches));

    this.isTablet = this.breakpointObserver.observe('(max-width: 1024px)').pipe(map(result => result.matches));

  }
}
