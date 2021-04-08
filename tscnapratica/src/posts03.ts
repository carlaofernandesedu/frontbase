class Post03 
{
    private seletorButtonList:string = `#${BoxList.Id}>button[type=button]`;
    private seletorButtonForm:string = `#${BoxForm.Id}>button[type=button]`;

    constructor(){
        this.init();
    }

    ListarPosts(boxLista:BoxList,boxForm:BoxForm)
    {
        boxLista.Esconder(false);
        boxForm.Esconder(true);
    }

    CadastrarPost(boxLista:BoxList,boxForm:BoxForm)
    {
        boxLista.Esconder(true);
        boxForm.Esconder(false);
    }

    init()
    {
        let boxList = new BoxList();
        let boxForm = new BoxForm();
        document.querySelector(this.seletorButtonList).addEventListener("click",
        () => {this.CadastrarPost(boxList,boxForm)});
        document.querySelector(this.seletorButtonForm).addEventListener("click",
        () => {this.ListarPosts(boxList,boxForm)});
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

   
    init(){

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

   
    init(){

    }

}

let paginaPost = new Post03();