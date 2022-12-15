import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent implements OnInit {
  user = new User();
  

  constructor() {}

  ngOnInit(): void {}

  onNoClick() {}

  saveUser() {
    console.log('Current user is', this.user);
  }
}
