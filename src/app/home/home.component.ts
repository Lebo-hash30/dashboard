import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdminService } from "../admin.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 problems : any;

  constructor(public router: Router,private adminService: AdminService,) { }
 

  ngOnInit(): void {
    this.adminService.getAll().then((res:any)=>{
     this.problems =res
     console.log(this.problems)
    })
  }

}
