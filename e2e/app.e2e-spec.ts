import { Loja6Page } from './app.po';

describe('loja6 App', () => {
  let page: Loja6Page;

  beforeEach(() => {
    page = new Loja6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
