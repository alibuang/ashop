import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AppUser } from './models/app-user';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  save(user: firebase.User){
    console.log(user.displayName + " : " +user.email)

    this.db.doc('users/'+user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  get(uid:string): AngularFirestoreDocument<AppUser>{
    return this.db.doc('/users/'+uid);
  }
}
