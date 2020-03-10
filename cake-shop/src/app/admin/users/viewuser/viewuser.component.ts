import { Component, OnInit,Input } from '@angular/core';
import { User } from '../../../model/User';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  
  @Input()
  user : User;

  constructor() { }

  ngOnInit(): void {
  }

}
