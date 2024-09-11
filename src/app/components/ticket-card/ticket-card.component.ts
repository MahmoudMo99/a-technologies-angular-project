import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css'],
})
export class TicketCardComponent {
  linkText: string = 'www.tazkty.com/473847';

  constructor() {}
  copyText(): void {
    navigator.clipboard
      .writeText(this.linkText)
      .then(() => {
        alert(`${this.linkText}
        Copied to clipboard`);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }
}
