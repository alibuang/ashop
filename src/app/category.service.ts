import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getCategories(){
    // return this.db.doc('/categories').collection()
    return this.db.collection('/categories',
    ref => ref.orderBy("name")
    ).valueChanges();
  }
}
