import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteImagesComponent } from './fvrt-images.component';

describe('FavouriteImagesComponent', () => {
  let component: FavouriteImagesComponent;
  let fixture: ComponentFixture<FavouriteImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
