import { TextMaskTestPage } from './app.po';

describe('text-mask-test App', function() {
  let page: TextMaskTestPage;

  beforeEach(() => {
    page = new TextMaskTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
