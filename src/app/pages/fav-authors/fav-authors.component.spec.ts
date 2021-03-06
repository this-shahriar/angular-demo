import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavAuthorsComponent } from './fav-authors.component';

describe('FavAuthorsComponent', () => {
  let component: FavAuthorsComponent;
  let fixture: ComponentFixture<FavAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
