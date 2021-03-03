import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AdminService {


  listopportuniites = []
  constructor(private firestore: AngularFirestore,) { }


  getAll() {

    return new Promise((resolve, reject) => {
      try {
        this.firestore
          .collection("Dashproblems")
          .valueChanges()
          .subscribe((item:any) => {
          resolve(item);
          });
      } catch (error) {
        reject(error);
      }
    });
  } 
  



  
  
}





