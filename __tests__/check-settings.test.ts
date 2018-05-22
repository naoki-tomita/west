import {
  element,
  setTimeout,
  captureScreenShot,
} from "websocket-webdriver";

describe("WebSocket-WebDriver", () => {
  beforeAll(() => {
    jest.setTimeout(200000);
  });

  it("should test success.", async () => {
    await element("#add").click();
    const text = await element("ul > li:nth-child(1)").getText();
    expect(text).toBe(":0");
    await element("#add").click();
    await element("#add").click();
    await element("#add").click();
    await element("#add").click();
    await element("#add").click();
    const text2 = await element("ul > li:nth-child(5)").getText();
    expect(text2).toBe(":4");
  });
});