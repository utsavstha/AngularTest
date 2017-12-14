import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name:string;
    age:number;
    email:string;
    posts:Post;
    isEdit:boolean;
    address:{
	street:string,
	state:string,
	city:string;
    }

    hobbies:string[];
    constructor(private dataService:DataService) {
	console.log('constructor ran..');
    }

    ngOnInit() {
	this.name = 'Utsav Shrestha';
	this.age = 24;
	this.email = 'utsav@gmail.com';
	this.address = {
	    street:'Tusal',
	    state:'None',
	    city:'kathmandu'
	}

	this.hobbies = ['write code','series watching'];
	this.dataService.getPosts().subscribe((posts)=> {
	     this.posts = posts; 
	 });
    }

    onClick(){
	this.name = 'Shrestha Utsav';
	this.hobbies.push('New hobby');
    }
    addHobby(hobby){
	this.hobbies.push(hobby);
	return false;
    }

    deleteHobby(hobby){
	for(let i = 0; i < this.hobbies.length; i++){
	    if(this.hobbies[i] == hobby){
		this.hobbies.splice(i, 1);
	    }
	}
    }

    toggleEdit(){
	this.isEdit = !this.isEdit;
    }
}

interface Post{
    id: number,
    title: string,
    body: string,
    userId: number
}
