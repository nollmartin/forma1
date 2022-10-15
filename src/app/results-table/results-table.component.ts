import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Result} from '../datas';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {

@Input() results: Result[] | undefined; 
@Input() selectedIndex: number = 0;

@Output() changeIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeIndexClicked(index:number) {
    this.changeIndex.emit(index);
  }

}
