import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Sends website form submissions to the park inbox via FormSubmit.co.
 * No backend or API key required — FormSubmit relays the data to the email.
 *
 * NOTE: the first submission triggers a one-time activation email to
 * bolder@bolderpark.com. Someone must click the "Activate Form" link in
 * that email once; after that, all submissions are delivered automatically.
 */
@Injectable({ providedIn: 'root' })
export class FormMailService {
  /** Park inbox that receives every form. */
  private readonly endpoint =
    'https://formsubmit.co/ajax/bolder@bolderpark.com';

  constructor(private http: HttpClient) {}

  /**
   * Post the form fields to FormSubmit.
   * @param data    the form field values (name/email/message/…)
   * @param subject the subject line for the email that lands in the inbox
   */
  send(data: Record<string, unknown>, subject: string): Observable<unknown> {
    return this.http.post(this.endpoint, {
      ...data,
      _subject: subject,
      _template: 'table',
      _captcha: 'false'
    });
  }
}
