import { HackernewsPage } from './app.po';

describe('hackernews App', () => {
  let page: HackernewsPage;

  beforeEach(() => {
    page = new HackernewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
