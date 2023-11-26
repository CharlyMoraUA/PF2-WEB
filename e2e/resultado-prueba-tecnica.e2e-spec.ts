import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Resultados prueba tecnica', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should NOT load tests when sending an invalid candidate id', () => {
    // login empresa
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('maupenaa');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('miclave123');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(1000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
   
    element(by.id('menuTestResults')).click();

    element(by.id('docnumber')).clear();
    element(by.id('docnumber')).sendKeys('12345679');

    element(by.id('submitdoc')).click().then(function () {
      browser.sleep(1000)
    });

    expect(element(by.id('noresultsmessage'))).not.toBeNull();

  });

  it('should load tests when sending a valid candidate id', () => {
    // login empresa
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('maupenaa');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('miclave123');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(1000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");

    element(by.id('menuTestResults')).click();

    element(by.id('docnumber')).clear();
    element(by.id('docnumber')).sendKeys('12345678');

    element(by.id('submitdoc')).click().then(function () {
      browser.sleep(1000)
    });
    expect(element(by.id('namelabel'))).not.toBeNull();

    expect(element(by.className('prueba ng-star-inserted'))).not.toBeNull();

    const elementsWithClass = element.all(by.className('prueba ng-star-inserted'));
    elementsWithClass.count().then((count) => {
      expect(count).toBe(3);
    });
  });


});
