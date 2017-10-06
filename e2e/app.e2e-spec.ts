import { AngularSearchEmployeeInfoPage } from './app.po';

describe('angular-search-employee-info App', () => {
  let page: AngularSearchEmployeeInfoPage;

  beforeEach(() => {
    page = new AngularSearchEmployeeInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
