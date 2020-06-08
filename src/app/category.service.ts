import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getCategories(){
    // return this.db.doc('/categories').collection()
    return this.db.collection('/categories').snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return {id,data}
      }))
    )
  }
}
