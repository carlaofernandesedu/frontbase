export class BoxListEvm {

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
