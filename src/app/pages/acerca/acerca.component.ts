import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResult } from '../../interfaces/users';

@Component({
  selector: 'app-acerca',
  standalone: false,
  templateUrl: './acerca.component.html',
  styleUrl: './acerca.component.css'
})
export class AcercaComponent implements OnInit {

  users!: UserResult;

  constructor(private service: UserService) {}

  ngOnInit(): void {
      this.service.getUsers().subscribe((result: UserResult) => {
        this.users = result;
      });
  }
}
