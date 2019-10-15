import { Injectable } from '@angular/core';
import { ActionButtonService } from '../action-button.service';
import { ApiService } from 'src/app/core/api.service';
import uuidv4 from 'uuid/v4';

@Injectable({
  providedIn: 'root'
})
export class UpdateItemButtonService implements ActionButtonService {

  public targetId: number | null = null;

  public uuid = uuidv4();

  constructor(private api: ApiService) {}

  get label() {
    return '更新';
  }

  action() {
    if (this.targetId == null) { return; }
    this.api.updateItem(this.targetId);
  }

}
