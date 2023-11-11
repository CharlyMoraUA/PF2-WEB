import { browser, element, by } from 'protractor';

export class ABCJobsPage {
  navigateTo() {
    return browser.get('http://localhost:4200/#/landing');
  }
}
