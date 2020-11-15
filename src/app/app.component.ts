import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuManagementService } from './Services/menu-management.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Variabili
  actualUser: string; 
  greetUser: string;

  //#endregion Variabili

  constructor(
    private menu_management_service: MenuManagementService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.greetUser = this.actualUser != null ? "Benvenuto " + this.actualUser : "Non hai ancora fatto l'accesso"; 
    this.menu_management_service.isMenuOpen = true; 
  }

  ngOnInit() {

  }

  /**Metodo che consente di effettuare l'accesso all'applicazione */
  loginManage() {
    console.log('loginManage()')
    // this.menu_management_service.closeMenu(); // Poi non si può più riaprire

    // Setto la url del sito per avviare il componente 'login' secondo le regole di routing impostate
    // https://stackoverflow.com/questions/51909800/how-to-navigate-to-other-page-in-angular-6/51910073
    // location.href="http://localhost:8100/expenseManagement/login"
    this.router.navigate( [ '/expenseManagement/login' ]);


    
  }
}
