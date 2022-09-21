import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import { devices, chromium } from "playwright";
import { CustomWorld } from "./customWorld";

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
  });
});

AfterAll(async function () {
  await global.browser.close();
});

Before(async function (this: CustomWorld) {
  const dev = devices[`${process.env.DEVICE}`]
  this.context = await global.browser.newContext({
    viewport: dev.viewport,
    userAgent: dev.userAgent
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.context.close();
});
