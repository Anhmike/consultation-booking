import { ConsultationBookingPage } from './app.po';

describe('consultation-booking App', function() {
  let page: ConsultationBookingPage;

  beforeEach(() => {
    page = new ConsultationBookingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('consultation-booking works!');
  });
});
