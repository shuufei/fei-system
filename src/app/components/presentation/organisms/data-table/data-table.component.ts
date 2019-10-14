import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fei-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() editableColumns: string[] = [];
  @Input() dataList: Data[] = [];
  @Output() clickedUpdate: EventEmitter<Data> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(data: Data) {
    this.clickedUpdate.emit(data);
  }

}

interface Data { [k: string]: any; }
