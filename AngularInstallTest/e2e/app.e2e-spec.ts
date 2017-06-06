import { AngularInstallTestPage } from './app.po';

describe('angular-install-test App', () => {
  let page: AngularInstallTestPage;

  beforeEach(() => {
    page = new AngularInstallTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
