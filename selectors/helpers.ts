
export class HelpersSelectors{
    
    async selector_by_text(text:string){
        return `//*[contains(text(),"${text}")]`
    }
}