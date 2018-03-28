import { Observable } from 'rxjs/Observable';
import { Theorem } from '../../model/theorem';
import { AngularFireDatabase } from 'angularfire2/database';
export declare class BibleService {
    private af;
    constructor(af: AngularFireDatabase);
    findAllTheorems(): Observable<Theorem[]>;
}
