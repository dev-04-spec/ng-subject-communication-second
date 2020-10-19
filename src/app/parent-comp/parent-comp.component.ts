import { Component, OnInit } from '@angular/core';
import { EndPointService } from '../end-point.service';
import { User } from '../user.model';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css'],
})
export class ParentCompComponent implements OnInit {
  constructor(private endpoint: EndPointService) {}

  ngOnInit(): void {}
  fetchUsers(): void {
    let datArr = this.endpoint.getUsers();
    const source = from(datArr);
    source.subscribe((users) => {
      console.log(users);
      this.sendTochild(users);
    });
    // .pipe(map(d=>d.))
    // .subscribe((users) => {
    //
    // });
  }
  sendTochild(users): void {
    this.endpoint.userData.next(users);
  }
}
