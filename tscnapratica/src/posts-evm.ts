interface ListenerInterface
{
    ():void
}

class EventManager
{
    private listeners : { [eventName:string] : Array<ListenerInterface> } = {};

    addListeners(eventName:string, callable:ListenerInterface)
    {
       if(!(this.listeners[eventName] instanceof Array)){
           this.listeners[eventName] = [];
       }
       this.listeners[eventName].push(callable);
    }

    runEventName(eventName:string){
        for(let callable of this.listeners[eventName] ){
           callable();
        }
    }
}

class BoxListEvm {

    static Id:string = 'box-post-list';
    constructor(){
    }
    
    Esconder(esconder:boolean)
    {
        const elemento = document.getElementById(BoxListEvm.Id);
        if(esconder)
          elemento.style.display = 'none';
        else 
          elemento.removeAttribute('style');
        
    }

   
    private init(){

    }

}

class BoxFormEvm{
    static Id:string = 'box-post-form';
    constructor(){
        this.init();
    }
    
    Esconder(esconder:boolean)
    {
        const elemento = document.getElementById(BoxFormEvm.Id);
        if(esconder)
          elemento.style.display = 'none';
        else 
          elemento.removeAttribute('style');
    }

   
    private init(){

    }

}
class PostEvm
{
    private seletorButtonExibirList:string = `#${BoxFormEvm.Id}>button[type=button]`;
    private seletorButtonExibirForm:string = `#${BoxListEvm.Id}>button[type=button]`;

    static acaoCadastrarPost = "CadastrarPost";
    static acaoListarPosts = "ListarPosts";

    constructor(private _boxLista:BoxListEvm,private _boxForm:BoxFormEvm, private eventManager : EventManager){
        this.init();
    }

    private associarEventosAcoes()
    {
        this.eventManager.addListeners(PostEvm.acaoCadastrarPost,()=>{this._boxLista.Esconder(true)});
        this.eventManager.addListeners(PostEvm.acaoCadastrarPost,()=>{this._boxForm.Esconder(false)});

        this.eventManager.addListeners(PostEvm.acaoListarPosts,()=>{this._boxLista.Esconder(false)});
        this.eventManager.addListeners(PostEvm.acaoListarPosts,()=>{this._boxForm.Esconder(true)});
    }

    private associarEventosAcionadores()
    {
        document.querySelector(this.seletorButtonExibirList).addEventListener("click",
        () => {this.eventManager.runEventName(PostEvm.acaoListarPosts)});
        document.querySelector(this.seletorButtonExibirForm).addEventListener("click",
        () => {this.eventManager.runEventName(PostEvm.acaoCadastrarPost)});

    }

    private init()
    {
       this.associarEventosAcoes();
       this.associarEventosAcionadores();
    }
}

new PostEvm(new BoxListEvm(),new BoxFormEvm(),new EventManager());
