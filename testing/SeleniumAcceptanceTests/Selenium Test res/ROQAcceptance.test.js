const Browser = require('./Browser')
const browser = new Browser()
const timeout = 20000


beforeEach(async () => {
    browser.browserBuild();
    
}, timeout);

afterEach(async () => {
    await browser.browserExit();
}, timeout);

    //As a User i want to login Test case, Acceptance Tests 

test("TS_001, Testing Username can have Alphanumerical values", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const username = "admin";
            const usernameInput = await browser.getElement('username');
            await usernameInput.sendKeys(username);

    }, timeout);

test("TS_002, Testing Username can contain Numerical Values", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');
        
            const username = "admin1";
            const usernameInput = await browser.getElement('username');
            await usernameInput.sendKeys(username);

    }, timeout);

test("TS_003, Testing username can contain Special Characters", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const username = "admin%";
            const usernameInput = await browser.getElement('username');
            await usernameInput.sendKeys(username);

    }, timeout);

test("TS_004, Testing Username Cannot contain Special Characters", async ()=> { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const username = "admin%";
            const usernameInput = await browser.getElement('username');
            await usernameInput.sendKeys(username);
            expect(username).not.toBe('admin%'); //defect

    }, timeout);
    
test("TS_005, Testing password can contain Alphanumerical values", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const password = "HelloWorld";
            const passwordInput = await browser.getElement('password');
            await passwordInput.sendKeys(password);

    }, timeout);

test("TS_006, Testing password can contain numerical Values", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const password = "HelloWorld1";
            const passwordInput = await browser.getElement('password');
            await passwordInput.sendKeys(password);

    }, timeout);

test("TS_007, Testing password can contain Special Characters", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const password = "HelloWorld%";
            const passwordInput = await browser.getElement('password');
            await passwordInput.sendKeys(password);

    }, timeout);

test("TS_008, Testing password cannot contain special characters", async () => { //defect //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const password = "HelloWorld%";
            const passwordInput = await browser.getElement('password');
            await passwordInput.sendKeys(password);
            expect(password).not.toBe('HelloWorld%');

    }, timeout);

test("TS_009, Testing the user can click the log-in button on its own", async () => {

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const searchSubmit = await browser.getElementByTag('button');
            await searchSubmit.click();
            try {
                await searchSubmit.click();
            }
            catch (Exception){}
    
    }, timeout);

test("TS_010 Validate to be able to log in with correct details and it take you to the home page", async () => { //System Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');
    
            const username = "admin";
            const password = "HelloWorld";
            const usernameInput = await browser.getElement('username');
            const passwordInput = await browser.getElement('password');
            const searchSubmit = await browser.getElementByTag('button');
            await usernameInput.sendKeys(username);
            await passwordInput.sendKeys(password);
            await searchSubmit.click();
            await browser.waitForElementByCss('.svelte-mw6pti.svelte-mw6pti', timeout/2);
            const element = await browser.getElementByCss(".svelte-mw6pti.svelte-mw6pti ");
            const tagName = await element.getTagName();
            expect(tagName).toBe('header');
    
    }, timeout);

test("TS_011, Testing What happens when username is not filled in but password is", async () => { //Acceptance test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');
    
            const username = "";
            const password = "HelloWorld";
            const usernameInput = await browser.getElement('username');
            const passwordInput = await browser.getElement('password');
            const searchSubmit = await browser.getElementByTag('button');
            await usernameInput.sendKeys(username);
            await passwordInput.sendKeys(password);
            await searchSubmit.click();
            try {
                await searchSubmit.click();
                }
            catch (Exception){}

    }, timeout);

test("TS_012, Testing What happens when username is filled in but password is not filled", async () => { //Acceptance Test

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');
            
            const username = "admin";
            const password = "";
            const usernameInput = await browser.getElement('username');
            const passwordInput = await browser.getElement('password');
            const searchSubmit = await browser.getElementByTag('button');
            await usernameInput.sendKeys(username);
            await passwordInput.sendKeys(password);
            await searchSubmit.click();
            try {
                await searchSubmit.click();
            }
            catch (Exception){}
        
    }, timeout);

test("TS_013, Testing what happens when Username and Password are both not filled in", async () => {

        await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');

            const username = "";
            const password = "";
            const usernameInput = await browser.getElement('username');
            const passwordInput = await browser.getElement('password');
            const searchSubmit = await browser.getElementByTag('button');
            await usernameInput.sendKeys(username);
            await passwordInput.sendKeys(password);
            await searchSubmit.click();
            try {
                await searchSubmit.click();
            }
            catch (Exception){}

    }, timeout);

    //As a user i want to add customers Test case, Acceptance Tests

test("TS_001, Validate the User can click add new customer", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const searchSubmit1 = await browser.getElementByTag('button');
            await searchSubmit1.click();
            
    }, timeout);

   
test("TS_002, Validate the user can input alphanumerical values within the Customer name field", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const companyname = "ROQ Express";
            const companynameInput = await browser.getElementByTag('input');
            await companynameInput.sendKeys(companyname);

    }, timeout);
    
test("TS_003, Validate the user can input special Characters within the Customer Name Field", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const companyname = "ROQ Express%";
            const companynameInput = await browser.getElementByTag('input');
            await companynameInput.sendKeys(companyname);

}, timeout);

test("TS_004, Validate the user cannot input special Characters within the Customer Name Field", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

        const companyname = "ROQ Express%";
        const companynameInput = await browser.getElementByTag('input');
        await companynameInput.sendKeys(companyname);
        expect(companyname).not.toBe('ROQ Express%');

}, timeout);

test("TS_005, Validate the user can input numerical values within the Customer Name Field", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const companyname = "ROQ Express1";
            const companynameInput = await browser.getElementByTag('input');
            await companynameInput.sendKeys(companyname);

}, timeout);

test("TS_006, Validate the Customer Name Field Cannot be left Blank", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const companyname = "";
            const companynameInput = await browser.getElementByTag('input');
            await companynameInput.sendKeys(companyname);
            expect(companyname).not.toBe('');

}, timeout);

test("TS_007, Validate the user can press create new customer then Add the Customer", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

            const searchSubmit1 = await browser.getElementByTag('button');
            await searchSubmit1.click();

            const companyname = "ROQ Express";
            const companynameInput = await browser.getElementByTag('input');
            await companynameInput.sendKeys(companyname);

            const searchSubmit2 = await browser.getElementByTag('button');
            await searchSubmit2.click();

}, timeout);

    //As a user i want to create a new site test case, Acceptance Tests

test("TS_001, Validate the user can press Create Site once in the newly created Customer", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const searchSubmit3 = await browser.getElementByTag('button');
            await searchSubmit3.click();

}, timeout);

test("TS_002, validate the site name can contain alphanumerical values", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress Site";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);

}, timeout);

test("TS_003, validate the site name can contain Numerical Values", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress site1";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);

}, timeout);

test("TS_004, validate the site name can contain special characters", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress site%";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);

}, timeout);

test("TS_005, validate the site name cannot contain special characters", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress site%";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);
            expect(sitename).not.toBe('ROQExpress site%');

}, timeout);

test("TS_006, validate the site address can contain alphanumerical values", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const siteaddress = "ROQExpress address";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);

}, timeout);

test("TS_007, validate the site address can contain numerical values", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const siteaddress = "ROQExpress address1";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);

}, timeout);

test("TS_008, validate the site address can contain special characters", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const siteaddress = "ROQExpress address%";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);

}, timeout);

test("TS_009, validate the site address cannot contain special characters", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const siteaddress = "ROQExpress address%";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);
            expect(siteaddress).not.toBe('ROQExpress address%');

}, timeout);

test("TS_010, validate the user can input the site name and address at the same time", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "Testsite";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);

            const siteaddress = "Testaddress";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);

}, timeout);

test("TS_011, validate the sitename field cannot be left blank", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);
            expect(sitename).not.toBe('');

}, timeout);

test("TS_012, validate the siteaddress field cannot be left blank", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const siteaddress = "";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);
            expect(siteaddress).not.toBe('');

}, timeout);

test("TS_013, validate the user can input values within sitename and siteaddress and press Ok", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);
            
            const siteaddress = "21 ROQ lane";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);

            const searchSubmit4 = await browser.getElementByTag('button');
            await searchSubmit4.click();

}, timeout);

test("TS_014, validate you cant create a site with only the sitename field filled in", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "ROQExpress";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);

            const siteaddress = "";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);
            expect(siteaddress).not.toBe('');

}, timeout);

test("TS_015, validate you cant create a site with only the siteaddress field filled in", async () => {

        await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=240c6040-694b-4b41-9951-35602840e946');

            const sitename = "";
            const sitenameInput = await browser.getElementByTag('input');
            await sitenameInput.sendKeys(sitename);
            expect(siteaddress).not.toBe(''); 

            const siteaddress = "21 ROQ Lane";
            const siteaddressInput = await browser.getElementByTag('input');
            await siteaddressInput.sendKeys(siteaddress);
             
}, timeout);

// Junaid Vending Machine Acceptance Tests

test("TC001 - Validate the user can input alphanumerical Values within the Location Field ", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click(); //logging in

    const machine = "Test";
    const locationName = "Test";

    await browser.waitForElementByCss("bar button", timeout); //clicks the create machine button
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); //enters "Test" into machine name tab
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    await browser.waitForElementByCss("#placeholder2", timeout);// enters Test as location name tab
    const machineLocation = await browser.getElement("placeholder2");
    await machineLocation.sendKeys(locationName);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC002 - Validate the user can input Numerical Values within the Location Field ", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click(); //logging in

    const machine = "TestTwo";
    const locationName = "Test1";

    await browser.waitForElementByCss("bar button", timeout); //clicks the create machine button
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); //enters "numerical values 123" into machine name tab
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    await browser.waitForElementByCss("#placeholder2", timeout);// enters Test1 as location name tab
    const machineLocation = await browser.getElement("placeholder2");
    await machineLocation.sendKeys(locationName);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC003 - Validate the user Cannot enter Special Characters within the Location field", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();

    const machine = "NameTestThree";
    const locationName = "Test%";

    await browser.waitForElementByCss("bar button", timeout);
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout);
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    await browser.waitForElementByCss("#placeholder2", timeout);// enters Test% as location name tab
    const machineLocation = await browser.getElement("placeholder2");
    await machineLocation.sendKeys(locationName);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC004 - Validate the User can input alphanumerical values within the Vending Machine Name Field", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click(); //logging in

    const machine = "NameTestFour";

    await browser.waitForElementByCss("bar button", timeout); //clicks the create machine button
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); //enters "NameTest" into machine name tab
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC005 - Validate the Vending Machine Name Field cannot contain Special Characters", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss("bar button", timeout);
    const machine = "NameTestFive%";
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout);
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);
    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC006 - Entering machine name with numerical values", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss("bar button", timeout);
    const machine = "NameTestSix1";
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout);
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);
    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC007 - Validate whether the Vending machine can have a long name.", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss("bar button", timeout);

    const machine = "NameTestNameLongName";

    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout);
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC008 - Validate a Vending machine cant be created with no Location", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss("bar button", timeout);

    const machine = "Test eight No Location Test";

    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout);
    const machineName = await browser.getElement("placeholder1");
    await machineName.sendKeys(machine);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC009 - Validate a Vending machine cant be created with no name", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();

    const locationName = "NoNameTestNine";

    await browser.waitForElementByCss("bar button", timeout);
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();


    await browser.waitForElementByCss("#placeholder2", timeout);// enters NoLocationTest as location name tab
    const machineLocation = await browser.getElement("placeholder2");
    await machineLocation.sendKeys(locationName);

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

test("TC010 - Validate a Vending machine cant be created with no name and no location", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();

    await browser.waitForElementByCss("bar button", timeout);
    const createMachine = await browser.getElementByTag("button");
    await createMachine.click();

    const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOkbutton.click();
}, timeout);

