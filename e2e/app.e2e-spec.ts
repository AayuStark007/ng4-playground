import { Ng4PlaygroundPage } from './app.po';

describe('ng4-playground App', () => {
  let page: Ng4PlaygroundPage;

  beforeEach(() => {
    page = new Ng4PlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
