import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public test = [1, 2, 3, 4, 5, 6, 7]

  public navigations = [
    {
      title: 'infastructure',
      image: '',
      path: '',
      children: [
        {
          title: 'Services',
          image: '',
          path: '',
          children: []
        }, {
          title: 'Ports',
          image: '',
          path: '',
          children: []
        }, {
          title: 'Cluster',
          image: '',
          path: '',
          children: []
        },
      ]
    }, {
      title: 'Rules',
      image: '',
      path: '',
      children: []
    }, {
      title: 'Authetication',
      image: '',
      path: '',
      children: [{
        title: 'Policies',
        image: '',
        path: '',
        children: []
      }, {
        title: 'Connectors',
        image: '',
        path: '',
        children: []
      }, {
        title: 'Authetication steps',
        image: '',
        path: '',
        children: []
      },]
    }, {
      title: 'Trusted groups',
      image: '',
      path: '',
      children: []
    }, {
      title: 'Reports',
      image: '',
      path: '',
      children: [{
        title: 'Audit',
        image: '',
        path: '',
        children: []
      }, {
        title: 'User activity',
        image: '',
        path: '',
        children: []
      }, {
        title: 'Logs',
        image: '',
        path: '',
        children: []
      },]
    }, {
      title: 'Settings',
      image: '',
      path: '',
      children: [{
        title: 'Genetal',
        image: '',
        path: '',
        children: []
      }, {
        title: 'License',
        image: '',
        path: '',
        children: []
      }, {
        title: 'Web SSL',
        image: '',
        path: '',
        children: []
      }, {
        title: 'User managment',
        image: '',
        path: '',
        children: []
      }, {
        title: 'EULA',
        image: '',
        path: '',
        children: []
      },]
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
