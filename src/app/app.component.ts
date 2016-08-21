import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  keyword = '';
  doSearch($event: KeyboardEvent) {
    console.log($event);
    //.target代表$event的主體標籤(節點)，是一個HTMLInputElement
    let input = $event.target as HTMLInputElement;
    //keyCode==13代表Enter鍵
    if ($event.keyCode == 13){
        this.keyword = input.value;
    }
  }
}
