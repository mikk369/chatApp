const {
  Builder,
  Browser,
  By,
  Key,
  until,
  WebDriverWait,
} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder(
  'C:/Users/jogdi/Desktop/chromedriver.exe'
);

async function test() {
  //launch the browser
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeService(service)
    .build();

  // set window to fullscreen
  await driver.manage().window().maximize();

  // navigate to app
  driver.get('http://localhost:8080/');

  // find signup button on NAV
  const signUpButton = await driver.findElement(By.className('sign-up'));

  //   click to button with wait
  setTimeout(() => {
    signUpButton.click();
  }, 2000);
  driver.get('http://localhost:8080/signup');

  //   fill the form
  await driver.findElement(By.id('emailInput')).sendKeys('bob3@gmail.com');
  await driver.findElement(By.id('passwordInput')).sendKeys('bob123456');
  await driver.findElement(By.id('passwordConfirm')).sendKeys('bob123456');

  //   click signup button on FORM
  const signup = await driver.wait(
    until.elementLocated(By.id('signUpButton')),
    10 * 1000
  );
  setTimeout(() => {
    signup.click();
  }, 2000);

  // fill login form
  driver.get('http://localhost:8080/login');
  await driver
    .findElement(By.id('exampleInputEmail1'))
    .sendKeys('bob3@gmail.com');
  await driver
    .findElement(By.id('exampleInputPassword1'))
    .sendKeys('bob123456');

  // get button by id and click login
  const login = await driver.wait(
    until.elementLocated(By.id('loggInButton')),
    10 * 1000
  );
  await login.click();

  // write message
  await driver
    .wait(until.elementLocated(By.id('textInput')), 10 * 1000)
    .sendKeys('Hello from the testWorld!');

  //   click send button
  const sendMessageButton = await driver.wait(
    until.elementLocated(By.id('sendMessage')),
    10 * 1000
  );
  sendMessageButton.click();

  // write second message
  await driver
    .wait(until.elementLocated(By.id('textInput')), 10 * 1000)
    .sendKeys('One more message from test!');

  //   click send button
  sendMessageButton.click();

  setTimeout(() => {
    sendMessageButton.click();
  }, 5000);

  // logout
  const LoggOutButton = await driver.wait(
    until.elementLocated(By.id('logOutButton')),
    10 * 1000
  );
  LoggOutButton.click();
}
test();
