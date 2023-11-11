import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Agregar información laboral', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should load current working information', () => {
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

  it('should add new working information', () => {
    page.navigateTo();
    element(by.id('loginCandidateBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('user');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('user');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCandidateBtn')).click().then(function () {
      delay(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestionCandidatos");
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[1]/app-sidebar/div[2]/ul/li[2]/a/p')).click();
    expect(element(by.id('infoLaboralBtn'))).not.toBeNull();
    element(by.id('infoLaboralBtn')).click().then(function () {
      browser.sleep(5000)
    });
    expect(element(by.id('agregarInfoLaboral'))).not.toBeNull();
    var tabla = element(by.id('tablaInfoLaboral'));
    var registros = tabla.all(by.tagName('tr'));
    var cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(0);
    element(by.id('agregarInfoLaboral')).click();
    expect(element(by.id('empresaText'))).not.toBeNull();
    element(by.id('cargoText')).sendKeys('Otro Cargo');
    element(by.id('anoInicioText')).sendKeys('1997');
    element(by.id('anoFinText')).sendKeys('1999');
    element(by.id('empresaText')).sendKeys('SW de pruebas');
    element(by.id('descripcionText')).sendKeys('Trabajo automatizando pruebas');
    element(by.id('agregarInfoLaboralBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/editarCandidatos");
    element(by.id('infoLaboralBtn')).click().then(function () {
      browser.sleep(5000)
    });
    tabla = element(by.id('tablaInfoLaboral'));
    registros = tabla.all(by.tagName('tr'));
    registros.count().then(function (cant) {
      expect(cantidad).toBeLessThan(cant);
    });
  });
});
