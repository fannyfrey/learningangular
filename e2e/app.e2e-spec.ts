import { QuickstartNewPage } from './app.po';

describe('quickstart-new App', () => {
  let page: QuickstartNewPage;

  beforeEach(() => {
    page = new QuickstartNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
