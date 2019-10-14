import { Injectable } from '@angular/core';

export abstract class ActionButtonService {
  abstract label: string;
  abstract action: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ActionButtonDefaultService implements ActionButtonService {

  constructor() { }

  get label() {
    return 'action';
  }

  action() {}
}
