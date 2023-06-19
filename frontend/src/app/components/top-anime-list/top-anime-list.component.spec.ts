import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimeListComponent } from './top-anime-list.component';

describe('TopAnimeListComponent', () => {
  let component: TopAnimeListComponent;
  let fixture: ComponentFixture<TopAnimeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopAnimeListComponent]
    });
    fixture = TestBed.createComponent(TopAnimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
