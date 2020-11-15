import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuManagementService {

  //#region variables
  
  isMenuOpen: boolean;

  //#endregion variables

  constructor() { }




  //#region methods
  
  /**Metodo per la chiusura del menu */
  public closeMenu() {
    this.isMenuOpen = false;
  }

  /**Metodo per la chiusura del menu */
  public openMenu() {
    this.isMenuOpen = true;
  }
  
  //#endregion methods

}
