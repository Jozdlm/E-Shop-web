import { toSignal } from '@angular/core/rxjs-interop';
import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { ISession } from '../session';
import { Auth, User, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: Auth = inject(Auth);

  private _currentSession = signal<ISession>({
    id: '1',
    username: 'Jozuan Martinez',
    email: 'jmprueba@example.com',
    token: 'Zwq123fjxjkl3ñ56j5l43d',
  });

  public user$ = user(this._auth);
  public user = toSignal<User | null>(this.user$);

  public currentSession = computed<ISession>(() => {
    return this._currentSession();
  });

  constructor() {
    effect(() => console.log(this.user()));
  }
}
