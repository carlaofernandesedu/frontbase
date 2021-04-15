export default class Validator{
    static required(value:string):boolean{
        return typeof value!==undefined && value!=='' && value!==null;
    }

    static mincarac(value:string):boolean{
        return value.length >= 3;
    }
}