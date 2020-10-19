import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../end-point.service';
import { toArray,map } from 'rxjs/operators';
@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
})
export class ChildCompComponent implements OnInit {
  usersData: any = [];
  items: any = [];
  constructor(private endpoint: EndPointService) {}

  ngOnInit(): void {
    this.endpoint.userData.subscribe((users) => {
      this.usersData = users;
     // console.log(users);
      this.items = this.usersData.data;
    });
  }
}
