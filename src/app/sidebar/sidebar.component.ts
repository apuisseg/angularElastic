import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
