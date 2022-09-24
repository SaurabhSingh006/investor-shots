import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  showHamburgerMenuOnDesktopView: boolean = true;
  sidebarStatus$ = new BehaviorSubject(false);

  constructor() { }
}
