import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'The Will Will Web!';
  test2 = 'qwe';
  keyword = 'Test';

  doSearch(keyword: string) {
    this.keyword = keyword;
  }
  deleteArticle(item: any) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }
  data: any[];
  constructor(private http: Http) {
    http.get('api/articles.json')
        .subscribe(value => this.data = value.json());
  }
}
