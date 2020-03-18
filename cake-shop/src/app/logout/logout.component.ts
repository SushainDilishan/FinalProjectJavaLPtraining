import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: TokenStorageService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.signOut();
    this.router.navigate(['login']);
  }
}
