import { Component, OnInit } from '@angular/core';
import { DataFetchingService } from '../../data-fetching.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  pageInfo: any = {};
  constructor(public authorsList: DataFetchingService) {}

  ngOnInit(): void {
    this.authorsList.getAuthorList('?limit=10&skip=20').subscribe((data) => {
      this.authorsList.setList(data?.results);
      this.pageInfo = data;
    });
  }
}
