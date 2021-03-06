import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface IListItem {
  bio: string;
  link: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
  method: any;
}

@Injectable({
  providedIn: 'root',
})
export class InteractionsService {
  private listItemData = new Subject<IListItem>();
  listItemData$ = this.listItemData.asObservable();

  constructor() {}

  populateListItem(item: IListItem) {
    this.listItemData.next(item);
  }
}
