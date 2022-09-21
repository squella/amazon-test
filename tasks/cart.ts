import { CustomWorld } from "../facts/customWorld";
import { PageActions } from "../interactions/actions";
import { ArticleSelected } from "../selectors/result-info-bar"
import { NavBar } from "../selectors/navegation-bar";


export class CartTask{
    private pageActions: PageActions
    private articleSelected = new ArticleSelected()
    private nav_bar = new NavBar()
    
    constructor(customworld: CustomWorld){
        this.pageActions = new PageActions(customworld)
    }
    
    async add_to_cart(){
        await this.pageActions.click(this.articleSelected.add_to_cart_btn)
    }

    async cart_page(){
        await this.pageActions.click(this.nav_bar.nav_cart)

    }
    
}