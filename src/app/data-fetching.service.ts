import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiList } from '../api/apiList';

interface IAuthors {
  bio: string;
  link: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
}

interface authorsResp {
  count: number;
  lastItemIndex: number;
  results: IAuthors[];
  totalCount: number;
}

@Injectable()
export class DataFetchingService {
  list: any = null;
  constructor(private http: HttpClient) {}

  getAuthorList(query: string): Observable<authorsResp> {
    return this.http.get<authorsResp>(apiList.get_authors + query);
  }

  setList = (list: any) => {
    this.list = list;
    this.updateFavView(this.list);
  };

  addToFavs = (id: string) => {
    if (localStorage.getItem('fav_list')) {
      const favList = JSON.parse(localStorage.getItem('fav_list') || '');
      let newList = [];
      if (favList.includes(id))
        newList = favList.filter((item: string) => item !== id);
      else newList = [...favList, id];
      localStorage.setItem('fav_list', JSON.stringify(newList));
    } else localStorage.setItem('fav_list', JSON.stringify([id]));
    this.updateFavView(this.list);
  };

  updateFavView = (mainList: any) => {
    if (localStorage.getItem('fav_list')) {
      const favList = JSON.parse(localStorage.getItem('fav_list') || '');
      this.list = mainList.map((item: any) =>
        favList.includes(item._id)
          ? { ...item, fav: true }
          : { ...item, fav: false }
      );
    } else this.list = mainList;
    localStorage.setItem(
      'fav_list_full',
      JSON.stringify(this.list.filter((item: any) => item.fav))
    );
  };
}
