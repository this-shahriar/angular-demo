import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { AuthorsComponent } from './pages/authors/authors.component';
import { FavAuthorsComponent } from './pages/fav-authors/fav-authors.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListitemComponent } from './reusables/listitem/listitem.component';
import { DataFetchingService } from './data-fetching.service';
import { MatPaginatorModule } from '@angular/material/paginator';

const material = [
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavAuthorsComponent,
    ListitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...material,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DataFetchingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
