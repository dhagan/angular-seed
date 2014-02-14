/**
 * Created by dhagan on 2/13/14.
 */
describe("protractor-patients", function () {
    describe("patient", function () {
        it("should display the correct title", function () {
            browser.get('/angular-seed/app/project.html#/');
            expect(browser.getTitle()).toBe('Patients');
            var ptor;

                ptor = protractor.getInstance();
            ptor.sleep(6000);
        });
    });
    describe("new", function () {
        it("it should allow input", function () {
            browser.get('/angular-seed/app/project.html#/new');
            element(by.model('project.deployed')).click();
            var deployed = element(by.model('project.deployed'));
            expect(deployed.getText()).toContain('true');
        });
        /*
        it('deployed should change state', function() {
            var deployed = element(by.binding('project.deployed'));
            expect(deployed.getText()).toContain('false');
            element(by.model('deployed')).click();
            expect(deployed.getText()).toContain('false');
        });
        */
    });
});

