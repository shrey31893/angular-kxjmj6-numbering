import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tests = [
  //         [{name:"Bob",score:40,subject:"Math"},{name:"John",score:55,subject:"Math"}],
  //         [{name:"Alice",score:70,subject:"English"},{name:"John",score:68,subject:"English"}]
  //       ]

  tests = [
    {
      node: { Key: 'Subscriptions' },
      children: [{ node: { Key: 'Sku by a Product' } }],
    },
    {
      node: { Key: 'Availabilities' },
      children: [
        {
          node: { Key: 'Price Sheet' },
          children: [{ node: { Key: 'Dell Offers' } }],
        },
      ],
    },
    {
      node: { Key: 'Offer Details from PAC' },
      children: [
        {
          node: { Key: 'COMIT API' },
          children: [
            {
              node: { Key: 'COMIT(MongoDB)' },
              children: [{ node: { Key: 'Offer Content from Studio' } }],
            },
          ],
        },
      ],
    },
  ];
}
