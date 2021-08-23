import BasePage from './BasePage';
import { getAbsoluteUrl } from '../helpers/utils';

class SmartPulse extends BasePage {
    get maximize() {
        return browser.maximizeWindow();
    }
    
    get open() {
        return browser.url(getAbsoluteUrl('transparency'));
    }
    
    get page() {
        return browser.getUrl();
    }
    
    wait(second: number) {
        browser.pause(second * 1000);
    }

    waitUntil(condition: () => boolean) {
        return browser.waitUntil(condition);
    }

    scrollPage(element: WebdriverIO.Element) {
        return element.scrollIntoView({ block: "center", inline: "center" });
    }

    subMenuOpen(element: WebdriverIO.Element) {
        element.waitForDisplayed();
        this.scrollPage(element);
        element.waitForDisplayed();
        element.click();
    }

    get production() {
        return $("//a[contains(.,'ÜRETİM')]");
    }

    get planning() {
        return $("//ul[@class='active-menu']//a[contains(.,'Planlama')]");
    }

    get kgup() {
        return $("//a[@href='/transparency/uretim/planlama/kgup.xhtml']");
    }

    get loading() {
        return $(".loading");
    }
    
    passLoading() {
        this.loading.waitForDisplayed();
        this.waitUntil(() => !this.loading.isDisplayed());
    }

    get apply() {
        return $(".ui-button-text");
    }

    get excelButton() {
        return $("[src='/transparency/javax.faces.resource/images/excel.png.xhtml?ln=assets']");
    }

    scrollAndClickElement(element: WebdriverIO.Element) {
        this.scrollPage(element);
        element.waitForDisplayed();
        element.click();
      }
}
export default new SmartPulse();
