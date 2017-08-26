import { WebsiteClientPage } from './app.po';

describe('website-client App', () => {
  let page: WebsiteClientPage;

  beforeEach(() => {
    page = new WebsiteClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
