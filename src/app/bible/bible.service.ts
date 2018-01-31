

export class BibleService {

  getTheorems(db) {
    return db.list('/theorems').valueChanges();
  }
  
}
