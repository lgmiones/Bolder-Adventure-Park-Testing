import { Component, Input, OnInit, OnDestroy, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Embeds a ROLLER form (forms.roller.app) in an iframe.
 *
 * Usage:
 *   <app-roller-form formId="1f373db44c7d47b"></app-roller-form>
 *
 * The ROLLER widget broadcasts its height to the parent window, so we listen
 * for those messages and resize the iframe — no inner scrollbar.
 */
@Component({
  selector: 'app-roller-form',
  templateUrl: './roller-form.component.html',
  styleUrls: ['./roller-form.component.scss']
})
export class RollerFormComponent implements OnInit, OnDestroy {
  /** The form id from the forms.roller.app URL. */
  @Input() formId = '';
  /** ROLLER venue slug. */
  @Input() venue = 'bolderadventurepark';
  /** Fallback height used until (or unless) the widget reports its own. */
  @Input() minHeight = 1000;

  safeUrl: SafeResourceUrl | null = null;
  height = 1000;

  private listener?: (e: MessageEvent) => void;

  constructor(private sanitizer: DomSanitizer, private zone: NgZone) {}

  ngOnInit(): void {
    this.height = this.minHeight;

    const url = `https://forms.roller.app/#/${this.venue}/${this.formId}/form`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    this.listener = (event: MessageEvent) => {
      // only trust messages coming from ROLLER
      if (typeof event.origin !== 'string' || event.origin.indexOf('roller.app') === -1) {
        return;
      }

      const reported = this.readHeight(event.data);
      if (reported > 200) {
        this.zone.run(() => {
          this.height = Math.max(reported + 40, this.minHeight);
        });
      }
    };

    window.addEventListener('message', this.listener);
  }

  ngOnDestroy(): void {
    if (this.listener) {
      window.removeEventListener('message', this.listener);
      this.listener = undefined;
    }
  }

  /** ROLLER may report height as a number, a numeric string, or an object. */
  private readHeight(data: any): number {
    if (typeof data === 'number') {
      return data;
    }
    if (typeof data === 'string') {
      const parsed = parseInt(data.replace(/[^0-9]/g, ''), 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    if (data && typeof data === 'object') {
      const candidate = data.height ?? data.documentHeight ?? data.scrollHeight ?? 0;
      const parsed = typeof candidate === 'number' ? candidate : parseInt(candidate, 10);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  }
}
