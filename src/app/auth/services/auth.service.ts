import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Credentials, User } from '@example-app/auth/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login({ username, password }: Credentials): Observable<User> {
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    if (username !== 'test' && username !== 'ngrx') {
      return throwError(() => 'Invalid username or password');
    }

    return of({ name: 'User test' });
  }

  logout() {
    return of(true);
  }
}
