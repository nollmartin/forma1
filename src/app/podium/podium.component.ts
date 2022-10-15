import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {

  @Input() index:number | undefined;
  @Input() list:string[] | undefined;

  @Output() changePodium = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  eldug() {
    this.changePodium.emit(false);
  }

}
