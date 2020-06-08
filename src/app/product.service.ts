import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  create(product){
    return this.db.collection('/products').add(product);
  }

  getAll(){
    return this.db.collection('/products').snapshotChanges().pipe(
      map( actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, data};
      }))
    );
  }
  get(productId){
    return this.db.doc('/products/' + productId).snapshotChanges();
  }

  update(productId, product){
    return this.db.doc('/products/'+ productId).update(product);
  }

  delete(productId){
    return this.db.doc('/products/'+ productId).delete();
  }
}



