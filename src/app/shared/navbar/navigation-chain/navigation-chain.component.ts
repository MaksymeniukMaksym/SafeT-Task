import { Component, Input, OnInit } from '@angular/core';
import { NavigationChainModels } from 'src/app/core/models/navigation-chain.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SlideInOutAnimation } from './navigation-chain.animation';

@Component({
  selector: 'app-navigation-chain',
  templateUrl: './navigation-chain.component.html',
  styleUrls: ['./navigation-chain.component.scss'],
  animations: [SlideInOutAnimation]
})
export class NavigationChainComponent implements OnInit {

  @Input() navigation: NavigationChainModels;
  @Input() color: string;
  @Input() parentPath: string = '';
  @Input() curentUrl$: Observable<string>;

  public fullUrl = '';
  public isOpen = true;
  public isParent = false;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.parentPath) {
      this.fullUrl = '/' + this.parentPath + '/' + this.navigation.path;
    } else {
      this.fullUrl = '/' + this.navigation.path;
    }
    this.isParent = !!this.navigation.children.length;

  }

  public toggleDropDownList() {
    this.isOpen = !this.isOpen;
  }
  public goToUrl() {
    this.router.navigate([this.fullUrl]);
  }

}
