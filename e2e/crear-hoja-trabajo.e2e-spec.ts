import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Crear Hoja de Trabajo', () => {
  let page: ABCJobsPage;

  beforeEach(() => {
    page = new ABCJobsPage();
  });

  it('should load create worksheet form', () => {
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
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[2]/div/app-mis-proyectos/div[2]/div/table/tbody/tr/td[4]/mat-icon')).click();
    expect(element(by.id('agregarHojaTrabajoBtn'))).not.toBeNull();
    element(by.id('agregarHojaTrabajoBtn')).click();
    expect(element(by.id('crearHojaTrabajoTitle'))).not.toBeNull();
  });

  it('should try to create worksheet', () => {
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
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[2]/app-gestion-empresa/div/div/div/div/div/div[2]/div/app-mis-proyectos/div[2]/div/table/tbody/tr/td[4]/mat-icon')).click();
    expect(element(by.id('agregarHojaTrabajoBtn'))).not.toBeNull();
    element(by.id('agregarHojaTrabajoBtn')).click();
    expect(element(by.id('crearHojaTrabajoTitle'))).not.toBeNull();
    element(by.id('nombreTrabajoTxt')).clear();
    element(by.id('nombreTrabajoTxt')).sendKeys('Hoja de Trabajo 1');  
    element(by.id('descripcionTxt')).clear(); 
    element(by.id('descripcionTxt')).sendKeys('Descripcion de la Hoja de Trabajo 1');
    element(by.id('creaHojaBtn')).click().then(function () {
      browser.sleep(3000)
     });
     expect(element(by.id('toast-container'))).not.toBeNull();
    });
  });
