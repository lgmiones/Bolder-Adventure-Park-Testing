import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // None = styles are truly global so HomeComponent can use the same
  // class names without duplication across the SPA
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isNavOpen = false;

  /** Key of the desktop dropdown currently open ('tickets' | 'plan' | 'experiences' | null) */
  openMenu: string | null = null;
  /** Key of the mobile side-menu accordion group currently open */
  openSideGroup: string | null = null;

  private menuCloseTimer: ReturnType<typeof setTimeout> | null = null;

  showIntro: boolean;

  constructor(private router: Router) {
    const KEY = 'bolder_intro_shown';
    this.showIntro = !sessionStorage.getItem(KEY);
    if (this.showIntro) {
      sessionStorage.setItem(KEY, '1');
    }
  }

  ngOnInit(): void {
    // Re-run scroll observer on every route change
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        // Small delay lets the new component render before observing
        setTimeout(() => this.initScrollObserver(), 80);
      });
  }

  initScrollObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = el.dataset['srDelay'] ?? '0s';
            el.classList.add('sr-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.13, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.sr:not(.sr-visible)').forEach(el => observer.observe(el));
  }

  /* Mobile slide-out menu */
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav(): void {
    this.isNavOpen = false;
    this.openSideGroup = null;
    this.openMenu = null;
  }

  toggleSideGroup(key: string): void {
    this.openSideGroup = this.openSideGroup === key ? null : key;
  }

  /* Desktop dropdown menus (multi) */
  openDropdown(key: string): void {
    if (this.menuCloseTimer !== null) {
      clearTimeout(this.menuCloseTimer);
      this.menuCloseTimer = null;
    }
    this.openMenu = key;
  }

  scheduleDropdownClose(): void {
    this.menuCloseTimer = setTimeout(() => {
      this.openMenu = null;
      this.menuCloseTimer = null;
    }, 180);
  }
}
