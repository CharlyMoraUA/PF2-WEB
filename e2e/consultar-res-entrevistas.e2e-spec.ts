import { browser, by, element, protractor } from 'protractor';
import { ABCJobsPage } from './app.po';
import { delay } from 'rxjs';

describe('ABC Jobs - Consultar resultados entrevistas', () => {
  let page: ABCJobsPage;
  var originalTimeout;
  var EC = protractor.ExpectedConditions;

  beforeEach(() => {
    page = new ABCJobsPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    browser.driver.manage().window().maximize();
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should load interview results page', () => {
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('marthas');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('clave123');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
    var sidebarOption = element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[1]/app-sidebar/div[2]/ul/li[2]/a/p'));
    sidebarOption.click().then(function () {
      browser.sleep(2000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/resultadosEntrevistas");
    expect(element(by.id('interviewTitle'))).not.toBeNull; 
    expect(element(by.id("getBtn")).isEnabled()).toBeFalse;
    var backButton = element(by.id("backBtn"));
    backButton.click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
  });

  it('should get interview results from candidate', async () => {
    page.navigateTo();
    element(by.id('loginCompanyBtn')).click();
    element(by.id('userText')).clear();
    element(by.id('userText')).sendKeys('marthas');
    element(by.id('passwordText')).clear();
    element(by.id('passwordText')).sendKeys('clave123');
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    element(by.id('loginCompanyBtn')).click().then(function () {
      browser.sleep(3000)
    });
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
    element(by.xpath('/html/body/app-root/app-admin-layout/div[1]/div[1]/app-sidebar/div[2]/ul/li[2]/a/p')).click();
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/resultadosEntrevistas");
    expect(element(by.id('interviewTitle'))).not.toBeNull;
    element(by.cssContainingText("option","Cédula de Ciudadanía")).click();
    element(by.id('numDocText')).sendKeys('7026');
    element(by.id('getBtn')).click().then(function () {
      browser.sleep(5000)
    });
    var tabla = element(by.id('resultsTable'));
    var registros = tabla.all(by.tagName('tr'));
    expect(registros.count()).toBeGreaterThan(0);
    expect(tabla).not.toBeNull;
    expect(element(by.id("CandidateNameText"))).not.toBeNull;
    expect(await element(by.id("intNameText")).getText()).toEqual("Nombre de la entrevista");
    var backButton = element(by.id("backBtn"));
    browser.actions().mouseMove(backButton).click().perform();
    expect<any>(browser.getCurrentUrl()).toEqual("http://localhost:4200/#/gestion-empresa");
  });

});
