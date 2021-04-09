import {EventManagerModule} from './event-manager-module';
import {BoxListModule} from './box-list-module';
import {BoxFormModule} from './box-form-module';

class PostModule
{
    private seletorButtonExibirList:string = `#${BoxFormModule.Id}>button[type=button]`;
    private seletorButtonExibirForm:string = `#${BoxListModule.Id}>button[type=button]`;

    static acaoCadastrarPost = "CadastrarPost";
    static acaoListarPosts = "ListarPosts";

    constructor(private _boxLista:BoxListModule,private _boxForm:BoxFormModule, private eventManager : EventManagerModule){
        this.init();
    }

    private associarEventosAcoes()
    {
        this.eventManager.addListeners(PostModule.acaoCadastrarPost,()=>{this._boxLista.Esconder(true)});
        this.eventManager.addListeners(PostModule.acaoCadastrarPost,()=>{this._boxForm.Esconder(false)});

        this.eventManager.addListeners(PostModule.acaoListarPosts,()=>{this._boxLista.Esconder(false)});
        this.eventManager.addListeners(PostModule.acaoListarPosts,()=>{this._boxForm.Esconder(true)});
    }

    private associarEventosAcionadores()
    {
        document.querySelector(this.seletorButtonExibirList).addEventListener("click",
        () => {this.eventManager.runEventName(PostModule.acaoListarPosts)});
        document.querySelector(this.seletorButtonExibirForm).addEventListener("click",
        () => {this.eventManager.runEventName(PostModule.acaoCadastrarPost)});

    }

    private init()
    {
       this.associarEventosAcoes();
       this.associarEventosAcionadores();
    }
}

new PostModule(new BoxListModule(),new BoxFormModule(),new EventManagerModule());
