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
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('user');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('user');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[1]/div[3]/h4/div')).click();
    expect(element(by.id('equiposTitle'))).not.toBeNull();
    var tabla = element(by.id('tablaEquipos'));
    var registros = tabla.all(by.tagName('tr'));
    var cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(0);
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[2]/div/app-consultar-equipo/div[1]/table/tbody/tr[1]/td[4]/button[1]/span[1]/img')).click();
    expect(element(by.id('candidatosTitle'))).not.toBeNull();
    tabla = element(by.id('tablaCandidatos'));
    registros = tabla.all(by.tagName('tr'));
    cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(0);
  });

  it('should add available candidate', () => {
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('user');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('user');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[1]/div[3]/h4/div')).click();
    expect(element(by.id('equiposTitle'))).not.toBeNull();
    var tabla = element(by.id('tablaEquipos'));
    var registros = tabla.all(by.tagName('tr'));
    var cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(0);
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[2]/div/app-consultar-equipo/div[1]/table/tbody/tr[1]/td[4]/button[1]/span[1]/img')).click();
    expect(element(by.id('candidatosTitle'))).not.toBeNull();
    tabla = element(by.id('tablaCandidatos'));
    registros = tabla.all(by.tagName('tr'));
    cantidad = registros.count().then(function (cant) {
      return cant;
    });
    expect(cantidad).toBeGreaterThan(1);
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[2]/div/app-consultar-equipo/div[1]/div[2]/table/tbody/tr[1]/td[4]/mat-checkbox/label/span[1]')).click();
    element(by.id('saveEquiposBtn')).click().then(function () {
      browser.sleep(5000);
    });
    expect(element(by.id('toast-container'))).not.toBeNull();
  });

  });
