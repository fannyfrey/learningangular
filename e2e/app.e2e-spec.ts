import { LearningangularPage } from './app.po';

describe('learningangular App', () => {
  let page: LearningangularPage;

  beforeEach(() => {
    page = new LearningangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
