import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

/**
 * The TopBarComponent provides a simple UI with a fixed position at the top
 * of the screen for the Movies view and Profile view. This is also where the user can log out.
 */
export class TopBarComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  /**
   * Navigates to the movies view
   */
  toMovies(): void {
    this.router.navigate(['movies']);
  }

  /**
  * Navigates to the user's profile view
  */
  toProfile(): void {
    this.router.navigate(['profile']);
  }

  /**
  * Logs out the user by clearing the localStorage,
  * thereby deleting the "user" and "token" key/values
  */
  logOut(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}