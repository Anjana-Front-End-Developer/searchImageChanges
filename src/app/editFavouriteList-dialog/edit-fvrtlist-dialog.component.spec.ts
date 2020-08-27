import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavouriteListDialogComponent } from './edit-fvrtlist-dialog.component';

describe('EditFavouriteListDialogComponent', () => {
  let component: EditFavouriteListDialogComponent;
  let fixture: ComponentFixture<EditFavouriteListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFavouriteListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFavouriteListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
