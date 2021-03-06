import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataFetchingService } from '../../data-fetching.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  pageTotal: number = 0;
  pageQuery: string = '?limit=10';

  constructor(public authorsList: DataFetchingService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList = () =>
    this.authorsList.getAuthorList(this.pageQuery).subscribe((data) => {
      this.authorsList.setList(data?.results);
      this.pageTotal = data.totalCount;
    });

  pageChange = (e: PageEvent) => {
    console.log(e);
    this.pageQuery = `?limit=${e.pageSize}&skip=${e.pageIndex * e.pageSize}`;
    this.getList();
  };
}
