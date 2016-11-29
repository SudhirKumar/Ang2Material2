import { AngIgnitCliPage } from './app.po';

describe('ang-ignit-cli App', function() {
  let page: AngIgnitCliPage;

  beforeEach(() => {
    page = new AngIgnitCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
