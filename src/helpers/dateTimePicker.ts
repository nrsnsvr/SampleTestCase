class DateTimePicker {
    get startDate() {
        return $("[aria-labelledby='j_idt219:j_idt221']");
    }

    get endDate() {
        return $("[aria-labelledby='j_idt219:j_idt224']");
    }

    get months() {
        return $(".ui-datepicker-month");
    }

    get monthsList() {
        return this.months.$$("option");
    }

    get years() {
        return $(".ui-datepicker-year");
    }

    get yearsList() {
        return this.years.$$("option");
    }

    days(day:number) {
        return $('//a[.=' + day + ']');
    }

    dateSelect(whichDatePicker: WebdriverIO.Element, month: number, year: number, day: number) {
        whichDatePicker.click();
        this.monthsList[month].click();
        this.yearsList[year].click();
        this.days(day).click();
    }

}
export const DateTime = new DateTimePicker();