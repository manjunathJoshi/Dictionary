import {Injectable}  from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class DictionaryService {
    public bookmarkArray:any=[];
    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();
    private bookmarkval = new BehaviorSubject({});
    Bookmarkvalue = this.bookmarkval.asObservable();


    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get('../assets/data.json');
      }

    bookmarkItems(item){
        this.bookmarkArray.push(item);
    }
    getBookMarkItem(){
        // return this.bookmarkArray.filter(distinct);
        return Array.from(new Set(this.bookmarkArray));
    }
    //for behaviour shared service
    changeMessage(message: string) {
        this.messageSource.next(message)
      }
    changebookmarksval(val:string){
        this.bookmarkval.next(val)
    }
}