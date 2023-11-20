import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Asociar candidato a equipo', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should load current available candidates', () => {
    page.navigateTo();
    element(by.id('loginCandidateBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('user');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('user');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCandidateBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestionCandidatos");
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[1]/app-sidebar/div[2]/ul/li[2]/a/p')).click();
    expect(element(by.id('infoLaboralBtn'))).not.toBeNull();
    element(by.id('infoLaboralBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect(element(by.id('agregarInfoLaboral'))).not.toBeNull();
    var tabla = element(by.id('tablaInfoLaboral'));
    var registros = tabla.all(by.tagName('tr'));
    var cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(0);
  });

  });
