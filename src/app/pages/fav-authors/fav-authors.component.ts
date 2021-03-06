import { Component, OnInit } from '@angular/core';
import { DataFetchingService } from 'src/app/data-fetching.service';

@Component({
  selector: 'app-fav-authors',
  templateUrl: './fav-authors.component.html',
  styleUrls: ['./fav-authors.component.scss'],
})
export class FavAuthorsComponent implements OnInit {
  list: any = null;

  constructor(private actions: DataFetchingService) {}

  ngOnInit(): void {
    this.getFavList();
  }

  removeFromFav = (id: string) => {
    this.actions.addToFavs(id);
    this.getFavList();
  };

  getFavList = () => {
    if (localStorage.getItem('fav_list_full')) {
      const favList = JSON.parse(localStorage.getItem('fav_list_full') || '');
      if (favList.length > 0) this.list = favList;
      else this.list = null;
    }
  };
}
