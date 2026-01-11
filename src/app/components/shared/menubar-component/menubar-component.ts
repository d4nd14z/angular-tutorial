import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'menubar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menubar-component.html',
  styleUrls: ['./menubar-component.css'],
})
export class MenubarComponent {

  constructor(private router: Router) {}

  public goToLogin = () => {
    this.router.navigate(['/login']);
  }

}
