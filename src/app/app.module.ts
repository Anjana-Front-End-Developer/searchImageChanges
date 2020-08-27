import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ImagesService } from './services/images.service';
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from '../app/material.module';
import { storeEffects } from './store/effects';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducer';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';

import { SearchImagesComponent } from './search-images/search-images.component';
import { FavouriteImagesComponent } from './favourite-images/fvrt-images.component';
import { AddToFavouriteDialogComponent } from './addFavourite-dialog/add-to-fvrt-dialog.component';
import { EditFavouriteListDialogComponent } from './editFavouriteList-dialog/edit-fvrtlist-dialog.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchimages',
    pathMatch: 'full'
  },
  {
    path: 'searchimages',
    component: SearchImagesComponent
  },
  {
    path: 'favoritesimages',
    component: FavouriteImagesComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FavouriteImagesComponent,
    SearchImagesComponent,
    AddToFavouriteDialogComponent,
    EditFavouriteListDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ cart: reducer }),
    EffectsModule.forRoot([storeEffects]),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AddToFavouriteDialogComponent, EditFavouriteListDialogComponent],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

