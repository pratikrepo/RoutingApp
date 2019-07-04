import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `<h3>The department id is : {{departmentID}}</h3>
          <a (click)="goNext()">Next</a>
          <a (click)="goPrevious()">Previous</a>
          <div>
          <button (click)="gotoDepartments()">Back</button>
          </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) { }
  public departmentID ;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
    let id = parseInt(params.get('id'));
    this.departmentID=id;
  });}
   /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
this.departmentID=id;*/
  
  goNext(){
let nextID = this.departmentID + 1;
this.router.navigate(['/departments',nextID]);
  }
  goPrevious(){
    let previousID = this.departmentID -1;
    this.router.navigate(['/departments', previousID]);

  }
gotoDepartments(){
  let selectedID = this.departmentID ? this.departmentID : null ;
  this.router.navigate(['/departments',{id:selectedID}]);   
}
}
