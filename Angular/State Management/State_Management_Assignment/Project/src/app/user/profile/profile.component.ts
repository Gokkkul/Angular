import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  edit = false;
  username: string = ''
  user: string |null |object = '';
  isLoggedIn: boolean= false;
  userId: any;
  email:string = '';
  id:number = 0;

  constructor(private auth: AuthService, private route: ActivatedRoute){
    this.auth.user$.subscribe((username:any) => {
      this.user = username.username;
      this.id = username.id;
      console.log(this.user);
      
    })
    

    this.auth.isLoggedIn$.subscribe((state) => {
      this.isLoggedIn = state;
    })

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);
      
    });
    let userList = this.auth.users.filter(item => item.id == this.userId);
    
    console.log(userList[0]);
    this.auth.editProfile(userList[0].name,userList[0].email);
    

  }

  editProfile(username:string,email:string){
    this.edit = true;
    this.username = username;
    this.email = email;
    this.auth.editProfile(this.username,this.email);
  }


}




