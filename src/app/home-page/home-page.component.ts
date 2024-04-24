import { Component } from '@angular/core';
import { NewsService } from '../news/news.service';
import { CommonModule } from '@angular/common';
import { Newsitem } from '../news/newsitem.model';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [CommonModule, HeaderComponent]
})
export class HomePageComponent {
  storeNews: Array<Newsitem> = [];
  newsItems: Array<Newsitem> = [];
  headlines: Array<Newsitem> = [];

  constructor(private newsService: NewsService) {
    this.newsService.getAllNews().subscribe((responseNews: any) => {
      this.storeNews = responseNews;
      console.log(responseNews);
      for (let i = 0; i < this.storeNews.length; i++) {
        const item = this.storeNews[i];
        if (i === 0) {
          this.headlines.push(item);
        } else {
          this.newsItems.push(item);
        }
      }
    });
  }
}
