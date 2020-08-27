import { Action } from '@ngrx/store'


export enum ImageActionTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    LoadItems = 'Load items from server',
    LoadSuccess = 'Load success',
    UPDATE_PRODUCT = "UPDATE_PRODUCT",
    Update = "Update"
}

export class AddProduct implements Action {
    readonly type = ImageActionTypes.ADD_PRODUCT
    constructor(public payload: {name:any;desc:any,value:any}){}
}
export class LoadItems implements Action {
    readonly type = ImageActionTypes.LoadItems;
  
    constructor(public payload:{queryString:any}) {}
  }
  export class LoadSuccess implements Action {
    readonly type = ImageActionTypes.LoadSuccess;
  
    constructor(public payload:any) {}
  }
  export class Update implements Action {
    readonly type = ImageActionTypes.Update;
  
    constructor(public payload:{pName:any;nName:any,nDesc:any,arr:any}) {}
  }
  
export type ImageActions = AddProduct | LoadItems | Update | LoadSuccess;