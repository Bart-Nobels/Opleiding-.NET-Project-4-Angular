import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Newsitem } from './newsitem.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly BASE_API_URL = "https://newsapi.org/v2"
  private readonly API_KEY1 = "d20d5fd6c25c444e9032979c6d2145c7"
  private readonly API_KEY2 = "ec27d90eddf14412a5c7312d058c428b"

  constructor(private httpClient: HttpClient) { }

  getAllNews(amount: number = 10): Observable<Newsitem[]> {
    return this.httpClient.get(`${this.BASE_API_URL}/top-headlines?sources=bbc-news&pageSize=${amount}&apiKey=${this.API_KEY1}`).pipe(
      map((response: any) => response.articles as Array<Newsitem>)
    );
  }

  getAllNewsByCategory(category: string, amount: number = 10): Observable<Newsitem[]> {
    return this.httpClient.get(`${this.BASE_API_URL}/top-headlines?country=us&category=${category}&pageSize=${amount}&apiKey=${this.API_KEY1}`).pipe(
      map((response: any) => response.articles as Array<Newsitem>)
    );
  }
}
