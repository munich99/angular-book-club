import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { JwtResponse } from  './jwt-response';

import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



    constructor(public httpClient:HttpClient) { }

    AUTH_SERVER = "http://localhost:3000";

    authSubject = new BehaviorSubject(false);

    register(user: User): Observable<JwtResponse>{
        return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,user). // hole dir den User vom Server mit post
                    // tap -> performt für jeden von der Quelle ausgegebenen Wert Nebeneffekte aus Observableund gibt einen Observablemit der Quelle identischen Wert zurück
                    pipe(tap((res:  JwtResponse) =>{

                            if(res.user){
                                localStorage.set('ACCESS_TOKEN', res.user.access_token);
                                localStorage.set('expires_in', res.user.expires_in);
                                this.authSubject.next(true);
                            }

                        })                    
                    )                   

    }



    public login (Userinfo:User){
        localStorage.setItem('ACCESS_TOKEN', "access_token");
        localStorage.setItem('EXPIRES_IN', "expires_in");
    }

    public isLoggedIn(){
        return localStorage.getItem('ACCESS_TOKEN') !== null;

    }

    public logout(){
        localStorage.removeItem('ACCESS_TOKEN');
    }

}
