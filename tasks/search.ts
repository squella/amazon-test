import { CustomWorld } from "../facts/customWorld";
import { PageActions } from "../interactions/actions";
import { NavBar } from "../selectors/navegation-bar"
import { HelpersSelectors } from "../selectors/helpers"

export class SearchTask{
    private pageActions: PageActions
    private navBar = new NavBar()
    private helpersSelectors = new HelpersSelectors()

    constructor(customworld: CustomWorld){
        this.pageActions = new PageActions(customworld)
    }

    async search_article(text: string){
        await this.pageActions.fill(this.navBar.input_text, text)
        await this.pageActions.press_enter()
    }

    async select_found_article(title: string){
        let selector = await this.helpersSelectors.selector_by_text(title)
        await this.pageActions.click(selector)
    }
    
}