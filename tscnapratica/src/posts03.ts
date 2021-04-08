class Post03 
{
    private seletorButtonList:string = `#${BoxList.Id}>button[type=button]`;
    private seletorButtonForm:string = `#${BoxForm.Id}>button[type=button]`;
    private _boxLista:BoxList;
    private _boxForm:BoxForm;

    constructor(boxLista:BoxList,boxForm:BoxForm){
        this._boxLista = boxLista;
        this._boxForm = boxForm;
        this.init();
    }

    ListarPosts()
    {
        this._boxLista.Esconder(false);
        this._boxForm.Esconder(true);
    }

    CadastrarPost()
    {
        this._boxLista.Esconder(true);
        this._boxForm.Esconder(false);
    }

    private init()
    {
        document.querySelector(this.seletorButtonList).addEventListener("click",
        () => {this.CadastrarPost()});
        document.querySelector(this.seletorButtonForm).addEventListener("click",
        () => {this.ListarPosts()});
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


let paginaPost = new Post03(new BoxList(),new BoxForm());
