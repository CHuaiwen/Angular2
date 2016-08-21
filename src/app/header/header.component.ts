import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'div.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'The Will Will Web!';
  titleurl = 'http://blog.miniasp.com/';
  subtitle = '<b>記載著 Will 在網路世界的學習心得與技術分享</b>';
  num = 10;
  constructor() { }

  ngOnInit() {
  }
  AddNum($event: MouseEvent) {
    console.log($event);
    //如果按住Alt再click事件則num-1
    if ($event.altKey) {
      this.num -= 1;
    } else {
      this.num += 1;
    }
  }
  getClass(){
    return {
      'red': this.num%2==1,
      'blue':this.num%2==0
    };
  }
}
