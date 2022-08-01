import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlogPost } from '../BlogPost';
import blogData from "../data.json";
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  querySub: any;
  post: IBlogPost = new IBlogPost();

  constructor(private _postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this._postService.getPostById(params['id']).subscribe(data => {
        console.log(data);
        this.post = data;
      })
    })
  }

}
