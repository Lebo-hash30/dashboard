import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from "./admin.service";
import { ActivatedRoute } from '@angular/router';


import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';


  constructor(public router: Router,private adminService: AdminService,private db: AngularFirestore) { 


   
this.adminService.getAll().then((res)=>{
  console.log(res)
})

    
  }
  }
  
  
  
  

