import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../facts/customWorld";
import { CartTask } from "../tasks/cart";
import { SearchTask } from "../tasks/search"
import { CartQuestion } from "../questions/cart";



Given("an user on {string}", async function (this: CustomWorld, url: string) {
  await this.page.goto(`https://${url}`)
  
});

When("he searchs for the book {string} and select the book with the title {string}", async function (this: CustomWorld, text: string, title: string) {
  const search = await new SearchTask(this)
  await search.search_article(`${text}`)
  await search.select_found_article(`${title}`)
   
});

When("add the article to the cart", async function (this: CustomWorld) {
  const cartTask = await new CartTask(this)
  await cartTask.add_to_cart()
  await cartTask.cart_page()
});


Then("the user can see the book written {string} in his cart", async function (this: CustomWorld, author: string) {
  const cartQuestion = await new CartQuestion(this) 
  await cartQuestion.item_exist(author)  
  
});
