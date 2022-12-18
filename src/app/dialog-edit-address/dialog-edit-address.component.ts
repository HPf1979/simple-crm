import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent implements OnInit {
  user: User = new User();
  loading = false;
  userId: string;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('Edit address finished', result);
        this.dialogRef.close();
      });
  }
}
