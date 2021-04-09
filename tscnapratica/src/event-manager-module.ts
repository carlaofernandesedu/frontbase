interface ListenerInterfaceModule
{
    ():void
}

export class EventManagerModule
{
    private listerers:{[eventName:string]:Array<ListenerInterfaceModule>} = {};

    addListeners(eventName:string, callable:ListenerInterfaceModule)
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