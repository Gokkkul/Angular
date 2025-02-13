import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { user } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  users!: user []

  // id!: string | null;
  id!: any;

  constructor(private route: ActivatedRoute,private service: UsersService){}
  ngOnInit(): void {

    this.users = this.service.userList;
    this.id = this.route.snapshot.paramMap.get('id');
  }
  

}
