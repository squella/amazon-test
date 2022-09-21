import { CustomWorld } from "../facts/customWorld";

export class PageActions{
    protected customworld: CustomWorld

    constructor(customworld){
        this.customworld = customworld
    }
    
    async click(selector: string){
        await this.customworld.page.click(selector)
    }
    
    async fill(selector: string, value: string){
        await this.customworld.page.fill(selector, value)
    }

    async press_enter(){
        await this.customworld.page.keyboard.press('Enter')
    }

    async text_content(selector: string){
        return await this.customworld.page.textContent(selector)
    }

}

