import {EventManager} from './event-manager';
import {BoxListEvm} from './boxlistevm';
import {BoxFormEvm} from './boxformevm';

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

new Post03Evm(new BoxListEvm(),new BoxFormEvm(),new EventManager());
