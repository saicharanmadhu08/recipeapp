import { UdemyProjectPage } from './app.po';

describe('udemy-project App', () => {
  let page: UdemyProjectPage;

  beforeEach(() => {
    page = new UdemyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
