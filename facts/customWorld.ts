import { World as CucumberWorld} from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright";

export interface CustomWorld extends CucumberWorld {
  context: BrowserContext;
  page: Page;
}