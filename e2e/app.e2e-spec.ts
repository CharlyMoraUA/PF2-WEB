import { by, element } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs App', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(element(by.cssContainingText('.card .card-header .card-title', 'ABC Jobs'))).not.toBeNull();
  });
});
