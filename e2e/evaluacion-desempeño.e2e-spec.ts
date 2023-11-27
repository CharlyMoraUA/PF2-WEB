import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Evaluacion de desmpeño', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should load current available candidates', () => {
    // login empresa
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('maupenaa');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('miclave123');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(8000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
    
    const trElement = element(by.id('proyecto-1'));
    const matIcon = trElement.element(by.tagName('mat-icon'));
    matIcon.click();
    browser.sleep(1000)
    
    element(by.id('gotoworksheets')).click();
    browser.sleep(1000)

    const trElement2 = element(by.id('hoja-trabajo-2'));
    const but = trElement2.element(by.tagName('button'));
    but.click();
    browser.sleep(1000)

    const trElement3 = element(by.id('candidato-hoja-40'));
    const but2 = trElement3.element(by.tagName('button'));
    but2.click();
    browser.sleep(1000)
    
    element(by.id('evaluationcomments')).clear();
    element(by.id('evaluationcomments')).sendKeys('This is an evaluation comment');
    
    browser.sleep(1000)
    const matFormField = element(by.id('selectscore'));
    
    const option3 = matFormField.element(by.id('select3'));
    option3.click();
    
    element(by.id('crearevaluacionboton')).click();
    browser.sleep(1000)
    
    expect(element(by.className('toast-success'))).not.toBeNull();
  });

});
