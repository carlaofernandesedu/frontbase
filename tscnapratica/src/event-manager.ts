interface ListenerInterface
{
    ():void
}

export class EventManager
{
    private listerers:{[eventName:string]:Array<ListenerInterface>} = {};

    addListeners(eventName:string, callable:ListenerInterface)
    {
       if(!(this.listerers[eventName] instanceof Array)){
           this.listerers[eventName] = [];
       }
       this.listerers[eventName].push(callable);
    }

    runEventName(eventName:string){
        for(let callable of this.listerers[eventName] ){
           callable();
        }
    }
}