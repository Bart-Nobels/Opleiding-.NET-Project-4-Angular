import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Newsitem } from '../newsitem.model';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-news-by-category',
  standalone: true,
  templateUrl: './news-by-category.component.html',
  styleUrls: ['./news-by-category.component.css'],
  imports: [CommonModule, HeaderComponent]
})
export class NewsByCategoryComponent {
  storeNews: Array<Newsitem> = [];
  newsItems: Array<Newsitem> = [];
  headlines: Array<Newsitem> = [];

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      const nameCategory = parameters['categoryname'];

      // Clear arrays:
      this.storeNews = [];
      this.newsItems = [];
      this.headlines = [];

      this.newsService.getAllNewsByCategory(nameCategory).subscribe((responseNews: any) => {
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
    });
  }
}

