import { Component, OnInit } from '@angular/core';
import BlogData from "../data.json";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  PostsData: any = BlogData;

  constructor() { }

  ngOnInit(): void {
  }

}
