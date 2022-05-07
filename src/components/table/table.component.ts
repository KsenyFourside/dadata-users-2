import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  constructor(private http: HttpClient) {}

  users: User[] = [];

  isModalVisible = false;
  selectedUser: User | null = null;

  ngOnInit() {
    this.http
      .get(
        'https://api.randomdatatools.ru/?count=100&params=LastName,FirstName,FatherName,Address'
      )
      .subscribe((results: any) => {
        const users: User[] = results.map((user: any, index: number) => ({
          id: index,
          firstName: user.FirstName,
          lastName: user.LastName,
          middleName: user.FatherName,
          address: user.Address,
        }));

        this.users = users;
      });
  }

  changeModalVisibility(isVisible: boolean, user: User | null) {
    this.isModalVisible = isVisible;
    this.selectedUser = user;
  }

  changeUser(changedUser: User) {
    this.users = this.users.map((user) => {
      if (user.id === changedUser.id) return changedUser;
      else return user;
    });
  }
}
