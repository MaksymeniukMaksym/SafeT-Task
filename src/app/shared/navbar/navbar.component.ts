import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public navigations = [
    {
      title: 'Infrastructure',
      image: '/assets/icon/navbar/infastructure/Infrastructure.svg',
      path: 'infrastructure',
      color: '#FEAE1B',
      children: [
        {
          title: 'Services',
          image: '/assets/icon/navbar/infastructure/sub/Services.svg',
          path: 'services',
          color: '',
          children: []
        }, {
          title: 'Ports',
          image: '/assets/icon/navbar/infastructure/sub/Ports.svg',
          path: 'ports',
          color: '',
          children: []
        }, {
          title: 'Cluster',
          image: '/assets/icon/navbar/infastructure/sub/Cluster.svg',
          path: 'cluster',
          color: '',
          children: []
        },
      ]
    }, {
      title: 'Rules',
      image: '/assets/icon/navbar/rules/Rules.svg',
      path: 'rulse',
      color: '#4339F2',
      children: []
    }, {
      title: 'Authetication',
      image: '/assets/icon/navbar/authetication/Authetication.svg',
      path: 'authetication',
      color: '#37C5AB',
      children: [{
        title: 'Policies',
        image: '/assets/icon/navbar/authetication/sub/Policies.svg',
        path: 'policies',
        color: '',
        children: []
      }, {
        title: 'Connectors',
        image: '/assets/icon/navbar/authetication/sub/Connectors.svg',
        path: 'connectors',
        color: '',
        children: []
      }, {
        title: 'Authetication steps',
        image: '/assets/icon/navbar/authetication/sub/AutheticationSteps.svg',
        path: 'authetication-steps',
        color: '',
        children: []
      },]
    }, {
      title: 'Trusted groups',
      image: '/assets/icon/navbar/trusted-groups/TrustedGroups.svg',
      path: 'trusted-groups',
      color: '#FF551B',
      children: []
    }, {
      title: 'Reports',
      image: '/assets/icon/navbar/reports/Reports.svg',
      path: 'reports',
      color: '#7A6FF0',
      children: [{
        title: 'Audit',
        image: '/assets/icon/navbar/reports/sub/Audit.svg',
        path: 'audit',
        color: '',
        children: []
      }, {
        title: 'User activity',
        image: '/assets/icon/navbar/reports/sub/UserActivity.svg',
        path: 'user-activity',
        color: '',
        children: []
      }, {
        title: 'Logs',
        image: '/assets/icon/navbar/reports/sub/Logs.svg',
        path: 'logs',
        color: '',
        children: []
      },]
    }, {
      title: 'Settings',
      image: '/assets/icon/navbar/settings/Settings.svg',
      path: 'settings',
      color: '#62D26F',
      children: [{
        title: 'General',
        image: '/assets/icon/navbar/settings/sub/General.svg',
        path: 'general',
        color: '',
        children: []
      }, {
        title: 'License',
        image: '/assets/icon/navbar/settings/sub/License.svg',
        path: 'license',
        color: '',
        children: []
      }, {
        title: 'Web SSL',
        image: '/assets/icon/navbar/settings/sub/WebSSL.svg',
        path: 'web',
        color: '',
        children: []
      }, {
        title: 'User managment',
        image: '/assets/icon/navbar/settings/sub/UserManagment.svg',
        path: 'user-managment',
        color: '',
        children: []
      }, {
        title: 'EULA',
        image: '/assets/icon/navbar/settings/sub/EULA.svg',
        path: 'eula',
        color: '',
        children: []
      },]
    },

  ]

  private _curentUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public curentUrl$: Observable<string> = this._curentUrl;

  constructor(private router: Router) {
  }

  ngOnInit() {
    (this.router.events as any).pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      console.log(e.url)
      this._curentUrl.next(e.url);
    })
  }

}
