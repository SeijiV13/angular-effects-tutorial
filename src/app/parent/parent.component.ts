import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  user = 'user1';
  constructor() { }

  ngOnInit(): void {
    this.user = 'user2';
  }

  displayUser(event) {
    console.log(event)
  }
}
