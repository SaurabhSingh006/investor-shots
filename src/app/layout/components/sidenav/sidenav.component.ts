import { ChangeDetectorRef, Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  //Sidenav Properties
  sidenavStatus: boolean = false;
  showHamburgerMenuOnDesktopView: boolean = false;

  //Mobile Width
  mobileQuery: any;
  _mobileQueryListener: any;

  constructor(
    private appService: AppService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
  ) {}

  ngOnInit() {
    this.showHamburgerMenuOnDesktopView = this.appService.showHamburgerMenuOnDesktopView;
    //Updating the state using behaviour subject
    this.appService.sidebarStatus$.subscribe(
      (status) => (this.sidenavStatus = status)
    );

    //Code here for knowing whether the screen is mobile or desktop
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => {
      //Open sidenav for desktop
      if (!this.mobileQuery.matches) {
        this.appService.sidebarStatus$.next(false);
      }

      return this.changeDetectorRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onMenuClick() {
    this.appService.sidebarStatus$.next(!this.sidenavStatus);
  }

  onSidenavLinkClick() {
    if (this.mobileQuery.matches) {
      this.appService.sidebarStatus$.next(false);
    }
  }

  handleLogout() {
    localStorage.setItem('token', '');
  }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

}
