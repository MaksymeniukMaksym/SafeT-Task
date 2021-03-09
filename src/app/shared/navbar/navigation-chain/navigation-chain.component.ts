import { Component, Input, OnInit } from '@angular/core';
import { NavigationChainModels } from 'src/app/core/models/navigation-chain.model';

@Component({
  selector: 'app-navigation-chain',
  templateUrl: './navigation-chain.component.html',
  styleUrls: ['./navigation-chain.component.scss']
})
export class NavigationChainComponent implements OnInit {

  @Input() navigation: NavigationChainModels;

  constructor() { }

  ngOnInit() {
    console.log(this.navigation)
  }

}
