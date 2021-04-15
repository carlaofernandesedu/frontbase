export default class Form{
    static getValueFromField(selector:string,){
        let el = document.querySelector(selector);
        if (el as HTMLInputElement)
           return (el as HTMLInputElement).value;
    }
}