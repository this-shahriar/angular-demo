import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiList } from 'src/api/apiList';

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
export class AuthorsListService {
  constructor(private http: HttpClient) {}

  getAuthorList(): Observable<authorsResp> {
    return this.http.get<authorsResp>(apiList.get_authors);
  }
}
