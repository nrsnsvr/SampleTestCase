import SmartPulse from "src/pages/SmartPulse";
import { expect } from 'chai';
import { UrlService } from '../src/sevices/url.service';
import { DateTime } from '../src/helpers/dateTimePicker';

describe('Smart Pulse', () => {
    const dotenv = require("dotenv");
    dotenv.config();
    it('Test Case 1', () => {
        SmartPulse.maximize;
        SmartPulse.open;
        SmartPulse.subMenuOpen(SmartPulse.production);
        SmartPulse.subMenuOpen(SmartPulse.planning);
        SmartPulse.subMenuOpen(SmartPulse.kgup);
        SmartPulse.passLoading();
        expect(SmartPulse.page).to.eq(UrlService.kgupPage);
        DateTime.dateSelect(DateTime.startDate,2,9,30);
        DateTime.dateSelect(DateTime.endDate,2,9,30);
        SmartPulse.apply.click();
        SmartPulse.passLoading();
        SmartPulse.scrollAndClickElement(SmartPulse.excelButton);
        SmartPulse.wait(3);
    });
});