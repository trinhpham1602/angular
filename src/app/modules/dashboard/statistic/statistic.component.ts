import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit, OnChanges {
  @Input('name') name: string;
  constructor() {
    this.name = '';
  }
  ngOnInit() {
    console.log('chay 1111');
  }
  ngOnChanges() {
    console.log('chay 2222');
  }
}
