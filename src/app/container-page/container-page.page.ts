import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONSTANCTS } from '../Constancts/COSTANCTS';
import { MenuManagementService } from '../Services/menu-management.service';

@Component({
  selector: 'container-page',
  templateUrl: './container-page.html',
  styleUrls: ['./container-page.scss'],
})
export class ContainerPage implements OnInit {
  public folder: string;

  constructor(
    private menu_management_service: MenuManagementService,
    private activatedRoute: ActivatedRoute) 
    { }

  ngOnInit() {
    this.folder = CONSTANCTS.ApplicationName;
  }

  /**Metodo che permette la gestione dell'apertura / chisura del menu */
  manageMenu() {
    console.log('manageMenu()');
    this.menu_management_service.openMenu();
  }


}
