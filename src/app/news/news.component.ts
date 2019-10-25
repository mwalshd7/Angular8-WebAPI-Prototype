import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { TruncateModule } from 'ng2-truncate';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles: any;

  constructor(private apiSerive: ApiService) { }

  ngOnInit() {
    this.apiSerive.getNews().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      this.articles = data['articles'];
    });
  }

}
