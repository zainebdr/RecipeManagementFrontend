import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/users.models';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLogin=true   ; // Par défaut, le formulaire est utilisé pour la connexion
  registerForm: FormGroup;
  user : User | undefined;
 

  constructor(private cookieService:CookieService,private fb: FormBuilder,private userService: UserService ,private route: ActivatedRoute, private router: Router) {
   
    /*this.route.params.subscribe(params => {
      this.isLogin = params['mode'] === 'signup';
      console.log('parraaams ',params['mode']);
    });*/
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
  
    })
    ;}
  goToSignupPage() {
    this.isLogin= false;
  //  this.router.navigate(['/signup']);
    console.log('jesuis singup avec is login',this.isLogin);
    // Utilisez le chemin de la route que vous avez défini
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const user : User = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        _id: ''
      };
      console.log('user : ',user);

    //Pour le signup
     if (!this.isLogin) {
    
      this.userService.addUser(user).subscribe(
        (addedUser) => {
        console.log(addedUser);
        console.log('user added with is  :', addedUser._id);
        this.isLogin=true;
        this.router.navigate(['/'], { skipLocationChange: true });

        },
       (error) => {
        // Gérer les erreurs ici, si la requête échoue
        console.error(error);
      }
    );

    }

    //pour le login
    else{
      
      this.userService.getEmail(user.email).subscribe((data) => {
        if (data.exists) {
          console.log('Email already exists', data.exists,user.email);
          localStorage.setItem("jwt",data.jwt)
          this.router.navigate(['/recipes'], { skipLocationChange: true });

        } else {
          console.log('Email does not exist');
        }
      });

    };}
    
  };
  toggleForm() {
    this.isLogin = !this.isLogin; // Permet de basculer entre les formulaires de connexion et d'inscription
    this.registerForm.reset(); // Réinitialise le formulaire
  };

  
}