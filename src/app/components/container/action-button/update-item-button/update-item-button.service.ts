import { Injectable } from '@angular/core';
import { ActionButtonService } from '../action-button.service';
import { ApiService } from 'src/app/core/api.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateItemButtonService implements ActionButtonService {

  public targetId: number | null = null;

  constructor(private api: ApiService) { }

  get label() {
    return '更新';
  }

  action() {
    console.log('--- action: ', this.targetId);
    if (this.targetId == null) { return; }
    this.api.updateItem(this.targetId);
  }

}
