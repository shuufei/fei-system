import { Injectable } from '@angular/core';

export abstract class DataTableService<T> {
  abstract columns: (keyof T)[];
  abstract editableColumns: (keyof T)[];
  abstract dataList: (T)[];
  abstract loadData: () => void;
  abstract update: (data: T) => void;
}

@Injectable({
  providedIn: 'root'
})
export class DataTableDefaultService implements DataTableService<any> {

  constructor() { }

  get columns() { return []; }
  get editableColumns() { return []; }
  get  dataList() { return []; }
  loadData() {}
  update(data: any) {}
}
