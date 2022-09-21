import { expect } from "chai";
import { CustomWorld } from "../facts/customWorld";
import { PageActions } from "../interactions/actions";
import { HelpersSelectors } from "../selectors/helpers";


export class CartQuestion{
    private pageActions: PageActions
    private helpersSelectors = new HelpersSelectors()
    
    constructor(customworld: CustomWorld){
        this.pageActions = new PageActions(customworld)
    }
    
    async item_exist(text:string){
        let item = await this.pageActions.text_content(await this.helpersSelectors.selector_by_text(await text))
        await expect(item).to.have.string(text)
    }

    
}