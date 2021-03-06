import { Component, Input, OnInit } from '@angular/core';
import { DataFetchingService } from 'src/app/data-fetching.service';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss'],
})
export class ListitemComponent implements OnInit {
  @Input('author') author: any;
  @Input('removeFromFav') removeFromFav: any;

  constructor(private actions: DataFetchingService) {}

  ngOnInit(): void {}

  addToFav = (id: string) => this.actions.addToFavs(id);
}
