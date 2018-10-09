import { NgxWowDemoPage } from './app.po';

describe('ngx-wow-demo App', () => {
  let page: NgxWowDemoPage;

  beforeEach(() => {
    page = new NgxWowDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
