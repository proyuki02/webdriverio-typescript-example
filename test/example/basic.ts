function open(): void {
  browser.url("https://webdriver.io");
}

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    open();
    expect(browser).toHaveTitle(
      "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    );
  });
});
