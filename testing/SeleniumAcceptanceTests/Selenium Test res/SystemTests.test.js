const Browser = require('./Browser')
const browser = new Browser()
const timeout = 20000


beforeEach(async () => {
    browser.browserBuild();

}, timeout);

afterEach(async () => {
    await browser.browserExit();
}, timeout);

// test("TS_001 Can we create two origin vending machines for a new customer", async () => {
//     // Browser has to be changed whenever each test is ran
//     // create new customer, new main site, try to create more than one origin machine
//     await browser.browserNavigate("http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=10a83f55-42ff-4b60-8490-823575c80751&site=cd6ee770-43ff-4ecb-9e5b-347d078e43dd");
//     // can bypass this via api 
//     const username = "admin";
//     const password = "HelloWorld";
//     const usernameInput = await browser.getElement('username');
//     const passwordInput = await browser.getElement('password');
//     const searchSubmit = await browser.getElementByTag('button');
//     await usernameInput.sendKeys(username);
//     await passwordInput.sendKeys(password);
//     await searchSubmit.click();

//     const mainName = "TestOne";
//     const mainLocation = "TestOne";
//     const mainNameTwo = "TestOneTwo";
//     const mainLocationTwo = "TestOneTwo";

//     await browser.waitForElementByCss("bar button", timeout); // Create machine button
//     const originMachine = await browser.getElementByCss("bar button", timeout)
//     await originMachine.click();

//     // await browser.waitForElementByCss("item", timeout);
//     // const createSite = await browser.getElementByCss("item");
//     // await createSite.click();

//     await browser.waitForElementByCss("#placeholder1", timeout); // send name of machine to placeholder1
//     const giveMainName = await browser.getElement("placeholder1");
//     await giveMainName.sendKeys(mainName);

//     await browser.waitForElementByCss("#placeholder2", timeout); // send name of location to placeholder2
//     const giveLocationName = await browser.getElement("placeholder2");
//     await giveLocationName.sendKeys(mainLocation);

//     const searchOkbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
//     await searchOkbutton.click();

//     await browser.waitForElementByCss("#placeholder1", timeout); // send name of machine to placeholder1
//     const giveMainNameTwo = await browser.getElement("placeholder1");
//     await giveMainNameTwo.sendKeys(mainNameTwo);

//     await browser.waitForElementByCss("#placeholder2", timeout); // send name of location to placeholder2
//     const giveLocationNameTwo = await browser.getElement("placeholder2");
//     await giveLocationNameTwo.sendKeys(mainLocationTwo);

//     const searchOkbuttonTwo = await browser.getElementByCss('buttons > button:nth-child(2)');
//     await searchOkbuttonTwo.click();

// }, timeout);

test("TS_002 Creating 10 machines at once", async () => {
    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b&machines=a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2');

    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();

    const nameOne = "Machine01";
    const nameTwo = "Machine02";
    const nameThree = "Machine03";
    const nameFour = "Machine04";
    const nameFive = "Machine05";
    const nameSix = "Machine06";
    const nameSeven = "Machine07";
    const nameEight = "Machine08";
    const nameNine = "Machine09";
    const nameTen = "Machine10";
    // Machine One
    await browser.waitForElementByCss("bar button", timeout); // Create machine button
    const createMachine = await browser.getElementByCss("bar button", timeout)
    await createMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine one
    const machineNameOne = await browser.getElement("placeholder1");
    await machineNameOne.sendKeys(nameOne);

    const OKbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbutton.click();
    // Machine Two
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineTwo = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineTwo.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine two
    const machineNameTwo = await browser.getElement("placeholder1");
    await machineNameTwo.sendKeys(nameTwo);

    const OKbuttonTwo = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonTwo.click();
    // Machine Three
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineThree = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineThree.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameThree = await browser.getElement("placeholder1");
    await machineNameThree.sendKeys(nameThree);

    const OKbuttonThree = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonThree.click();
    // Machine Four
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineFour = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineFour.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameFour = await browser.getElement("placeholder1");
    await machineNameFour.sendKeys(nameFour);

    const OKbuttonFour = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonFour.click();
    // Machine Five
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineFive = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineFive.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameFive = await browser.getElement("placeholder1");
    await machineNameFive.sendKeys(nameFive);

    const OKbuttonFive = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonFive.click();
    // Machine Six
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineSix = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineSix.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameSix = await browser.getElement("placeholder1");
    await machineNameSix.sendKeys(nameSix);

    const OKbuttonSix = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonSix.click();
    // Machine Seven
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineSeven = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineSeven.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameSeven = await browser.getElement("placeholder1");
    await machineNameSeven.sendKeys(nameSeven);

    const OKbuttonSeven = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonSeven.click();
    // Machine Eight
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineEight = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineEight.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameEight = await browser.getElement("placeholder1");
    await machineNameEight.sendKeys(nameEight);

    const OKbuttonEight = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonEight.click();
    // Machine Nine
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineNine = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineNine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameNine = await browser.getElement("placeholder1");
    await machineNameNine.sendKeys(nameNine);

    const OKbuttonNine = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonNine.click();
    // Machine Ten
    await browser.waitForElementByCss("bar:not(.creating) > button", timeout); // Create machine button
    const createMachineTen = await browser.getElementByCss("bar button", timeout)
    await browser.waitForElementByCss("bar button", timeout);
    await createMachineTen.click();

    await browser.waitForElementByCss("#placeholder1", timeout); // creates machine Three
    const machineNameTen = await browser.getElement("placeholder1");
    await machineNameTen.sendKeys(nameTen);

    const OKbuttonTen = await browser.getElementByCss('buttons > button:nth-child(2)');
    await OKbuttonTen.click();
}, timeout);

test("TS_003 Special Characters machine", async () => {
    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=4b6b9e30-b420-45e1-8fb9-0e93ab33caca&site=5bf7b3d2-d2da-4c64-a9f7-059af714501c&machines=3b207542-9872-4e97-a6db-608f76d641b5');

    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();

    const newName = '"';
    await browser.waitForElementByCss("bar button", timeout); // Create machine button
    const newMachine = await browser.getElementByCss("bar button", timeout)
    await newMachine.click();

    await browser.waitForElementByCss("#placeholder1", timeout); //
    const giveMainName = await browser.getElement("placeholder1");
    await giveMainName.sendKeys(newName);

    await browser.waitForElementByCss("#placeholder2", timeout); // 
    const giveLocationName = await browser.getElement("placeholder2");
    await giveLocationName.sendKeys("Location");

    const Okbutton = await browser.getElementByCss('buttons > button:nth-child(2)');
    await Okbutton.click();

}, timeout);

// System tests for site machines

// test("TS_004 Check if Origin machine is in site", async () => {
//     await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d&site=b8a32ff1-b3ce-491c-8ed7-0b3b90ca806b');

    
//     const username = "admin";
//     const password = "HelloWorld";
//     const usernameInput = await browser.getElement('username');
//     const passwordInput = await browser.getElement('password');
//     const searchSubmit = await browser.getElementByTag('button');
//     await usernameInput.sendKeys(username);
//     await passwordInput.sendKeys(password);
//     await searchSubmit.click();
 
    
//     const element = await browser.getElementByCss("a9f8f817-a0bb-4c8c-9a0e-70a0a77e3ed2");
//     const tagName = await element.getId();
//     expect(tagName).toBe('Entrace');
// },timeout);

test("TS_001 To be able to log in and create a customer ", async () => {

    await browser.browserNavigate('http://localhost:8080/?domain=7bd996ad-79f9-4197-ac33-8ef5181899af');

    //logging into the app
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss('bar button', timeout / 2);
    //creating the customer
    const enterDetails = "Zak LTD";
    const createCustomer = await browser.getElementByCss('button');
    await createCustomer.click();
    await browser.waitForElementByCss('fields', timeout / 2);
    const usernameInput1 = await browser.getElement('placeholder1');
    await usernameInput1.sendKeys(enterDetails);
    const searchOk = await browser.getElementByCss('buttons > button:nth-child(2)');
    await searchOk.click();

}, timeout);

test("TS_010 Validate to be able to log in with correct details and it take you to the home page", async () => {

    await browser.browserNavigate('http://localhost:8080/login?domain=7bd996ad-79f9-4197-ac33-8ef5181899af&customer=27828019-4e08-42a1-a536-d773ecf83d4d');
    const username = "admin";
    const password = "HelloWorld";
    const usernameInput = await browser.getElement('username');
    const passwordInput = await browser.getElement('password');
    const searchSubmit = await browser.getElementByTag('button');
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password);
    await searchSubmit.click();
    await browser.waitForElementByCss('.svelte-mw6pti.svelte-mw6pti', timeout / 2);
    const element = await browser.getElementByCss(".svelte-mw6pti.svelte-mw6pti ");
    const tagName = await element.getTagName();
    expect(tagName).toBe('header');
    
}, timeout);