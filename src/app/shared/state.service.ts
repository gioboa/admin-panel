import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StateService {
  private clients: HTMLElement[] = [];

  public registerClient(client: HTMLElement) {
    this.clients.push(client);
  }

  public setState(state: any) {
    const newState = JSON.stringify(state);
    for (const client of this.clients) {
      client.setAttribute('state', newState);
    }
  }
}
