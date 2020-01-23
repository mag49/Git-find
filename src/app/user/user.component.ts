import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any;
  username: string;
  repos:any;

  constructor(private userService:UserService) {
  }
    
   findUser(){
     this.userService.updateUser(this.username);
     this.userService.getUserInfo().subscribe(user =>{
      console.log(user)
      this.user = user;
      
    });
    this.userService.getUserRepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos;
    })
   }

   
  ngOnInit() {
    this.userService.updateUser('mag4');
    this.userService.getUserInfo().subscribe(user =>this.user = user);
    this.userService.getUserRepos().subscribe(repos =>this.repos = repos);
      
      

      
      
      

  }

}