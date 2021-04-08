class EventManager
{
    private listerers = [];

    addListeners(eventName, callable)
    {
       if(!(this.listerers[eventName] instanceof Array)){
           this.listerers[eventName] = [];
       }
       this.listerers[eventName].push(callable);
    }

    runEventName(eventName){
        for(let callable of this.listerers[eventName] ){
           callable();
        }
    }
}

class Post03Evm
{
    private seletorButtonList:string = `#${BoxList.Id}>button[type=button]`;
    private seletorButtonForm:string = `#${BoxForm.Id}>button[type=button]`;

    static acaoCadastrarPost = "CadastrarPost";
    static acaoListarPosts = "ListarPosts";

    constructor(private _boxLista:BoxListEvm,private _boxForm:BoxFormEvm, private eventManager : EventManager){
        this.init();
    }

    private associarEventosAcoes()
    {
        this.eventManager.addListeners(Post03Evm.acaoCadastrarPost,()=>{this._boxLista.Esconder(false)});
        this.eventManager.addListeners(Post03Evm.acaoCadastrarPost,()=>{this._boxForm.Esconder(true)});

        this.eventManager.addListeners(Post03Evm.acaoListarPosts,()=>{this._boxLista.Esconder(true)});
        this.eventManager.addListeners(Post03Evm.acaoListarPosts,()=>{this._boxForm.Esconder(false)});
    }

    private associarEventosAcionadores()
    {
        document.querySelector(this.seletorButtonList).addEventListener("click",
        () => {this.eventManager.runEventName(Post03Evm.acaoCadastrarPost)});
        document.querySelector(this.seletorButtonForm).addEventListener("click",
        () => {this.eventManager.runEventName(Post03Evm.acaoListarPosts)});

    }

    private init()
    {
       this.associarEventosAcionadores();
    }
}

class BoxListEvm {

    static Id:string = 'box-post-list';
    constructor(){
    }
    
    Esconder(esconder:boolean)
    {
        const elemento = document.getElementById(BoxList.Id);
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
        const elemento = document.getElementById(BoxForm.Id);
        if(esconder)
          elemento.style.display = 'none';
        else 
          elemento.removeAttribute('style');
    }

   
    private init(){

    }

}

const eventManagerEvm = new EventManager();
let paginaPostEvm = new Post03Evm(new BoxListEvm(),new BoxFormEvm(),eventManagerEvm);
