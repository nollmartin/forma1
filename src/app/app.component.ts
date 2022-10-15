import { Component } from '@angular/core';
import {ressults} from './datas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forma1';
  results = ressults;
  selectedIndex: number = -1;
  selectedList: string[] = [];
  podium: boolean = false;

  updateSelectedIndex(indexNumber:number) {
    this.selectedIndex=indexNumber;
    this.selectedList = this.results[indexNumber].podium;
    this.podium = true;
  }

  podiumChanged(podium:boolean) {
    this.podium = podium;
    this.selectedIndex=-1;
  }
}
