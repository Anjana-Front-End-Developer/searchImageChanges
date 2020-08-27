import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ImageActionTypes } from './actions';
import { ImagesService } from '../services/images.service';

@Injectable()
export class storeEffects {
  @Effect()
  loadItems$ = this.actions$.pipe(
    ofType(ImageActionTypes.LoadItems),
    mergeMap((action:any) =>
      this.serv.getSearchedImages(action.payload.queryString).pipe(
        map(items => {
          return { type: ImageActionTypes.LoadSuccess, payload: {queryString:action.payload.queryString,items:items['results']}};
        }),
        catchError(() => EMPTY)
      )
    )
  )
  

  constructor(
    private actions$: Actions,
    private serv: ImagesService
  ) {}
}
