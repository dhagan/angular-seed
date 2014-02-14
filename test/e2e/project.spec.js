/**
 * Created by dhagan on 2/13/14.
 */
describe("protractor-patients", function () {
    describe("patient", function () {
        it("should display the correct title", function () {
            browser.get('/angular-seed/app/project.html#/');
            expect(browser.getTitle()).toBe('Patients');
        });
    });
});

