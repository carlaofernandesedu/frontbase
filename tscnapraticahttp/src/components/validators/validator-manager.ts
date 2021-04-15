interface ValidatorRuleCallable{
    (value:string):boolean;
}

export default class ValidatorManager{

    constructor(private chainRules:Array<{selector:string,rules:Array<ValidatorRuleCallable>,message:string}>){

    }

    isValid():boolean{
        for (let item of this.chainRules)
        {
            let valor = (document.querySelector(item.selector)as HTMLInputElement).value;
            for(let itemRule of item.rules)
            {
               if (!itemRule(valor))
               {
                  alert(item.message);
                  return false;     
               }
            }
        }
        return true;
    }
}