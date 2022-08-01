import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import BlogData from '../app/data.json'
import { IBlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  data: any = BlogData;

  constructor() { }

  getPosts(): Observable<IBlogPost[]> {
    return this.data;
  }
  getPostById(id: Number): Observable<IBlogPost> {
    let returnData: any;
    for (let i in this.data) {
      console.log(this.data[i])
      let x = 10;
      console.log(x -= 10);
      if (this.data[i]._id == id)
        returnData = this.data[i];
    }
    return of(returnData);
  }
}
