import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/users.models';


const baseUrl = 'http://localhost:3000';
//pour indiqué qu'il est un service qui peut être injecté ailleurs dans l'application
@Injectable({
  providedIn: 'root' , //service au niveau de la racine,une seule instance de ce service sera partagée par tous les composants qui injectent ce service.
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(`${baseUrl}/login`); // Remplacez l'URL par celle de votre API.
  }



  getEmail(email : User["email"]) {
     
      return this.http.get<any>(`${baseUrl}/check-email/${email}`, { withCredentials: true }); // Remplacez l'URL par celle de votre API.
      }

  addUser(user : User) : Observable<User> 
  {
    return this.http.post<User>(`${baseUrl}/signup`,user, { withCredentials: true });
   
  }

  
}
