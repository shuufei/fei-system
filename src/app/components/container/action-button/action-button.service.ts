import { Injectable } from '@angular/core';

export abstract class ActionButtonService {
  abstract targetId: number | null;
  abstract label: string;
  abstract action: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class ActionButtonDefaultService implements ActionButtonService {
  targetId: number | null = null;

  constructor() {}

  get label() {
    return 'action';
  }

  action() {}
}
