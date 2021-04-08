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

class Post03 
{
    private seletorButtonList:string = `#${BoxList.Id}>button[type=button]`;
    private seletorButtonForm:string = `#${BoxForm.Id}>button[type=button]`;

    static acaoCadastrarPost = "CadastrarPost";
    static acaoListarPosts = "ListarPosts";

    private _boxLista:BoxList;
    private _boxForm:BoxForm;

    constructor(boxLista:BoxList,boxForm:BoxForm, private eventManager : EventManager){
        this._boxLista = boxLista;
        this._boxForm = boxForm;
        this.init();
    }

    private associarEventosAcoes()
    {
        this.eventManager.addListeners(Post03.acaoCadastrarPost,()=>{this._boxLista.Esconder(false)});
        this.eventManager.addListeners(Post03.acaoCadastrarPost,()=>{this._boxForm.Esconder(true)});

        this.eventManager.addListeners(Post03.acaoListarPosts,()=>{this._boxLista.Esconder(true)});
        this.eventManager.addListeners(Post03.acaoListarPosts,()=>{this._boxForm.Esconder(false)});
    }

    private associarEventosAcionadores()
    {
        document.querySelector(this.seletorButtonList).addEventListener("click",
        () => {this.eventManager.runEventName(Post03.acaoCadastrarPost)});
        document.querySelector(this.seletorButtonForm).addEventListener("click",
        () => {this.eventManager.runEventName(Post03.acaoListarPosts)});

    }

    private init()
    {
       this.associarEventosAcionadores();
    }
}

class BoxList {

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


class BoxForm{
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

const eventManager = new EventManager();
let paginaPost = new Post03(new BoxList(),new BoxForm(),eventManager);
