export class ConsultationBookingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('consultation-booking-app h1')).getText();
  }
}
