import {
  element,
  setTimeout,
  browser,
} from "websocket-webdriver";

describe("WebSocket-WebDriver", () => {
  beforeEach(async () => {
    jest.setTimeout(200000);
    setTimeout(40000);
    await browser.reload();
  });

  it("should test success.", async () => {
    await element("#add").click();
    expect(await element("ul > li:nth-child(1)").getText()).toBe(":0");
  });

  it("should test success.", async () => {
    await element("#text").sendKeys("Hoge");
    await element("#add").click();
    expect(
      await element("ul > li:nth-child(1)").getText()
    ).toBe("Hoge:0");
    await element("#add").click();
    await element("#add").click();
    await element("#add").click();
    expect(
      await element("ul > li:nth-child(4)").getText()
    ).toBe(":3");
  });
});