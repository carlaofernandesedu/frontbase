var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listerers = [];
    }
    EventManager.prototype.addListeners = function (eventName, callable) {
        if (!(this.listerers[eventName] instanceof Array)) {
            this.listerers[eventName] = [];
        }
        this.listerers[eventName].push(callable);
    };
    EventManager.prototype.runEventName = function (eventName) {
        for (var _i = 0, _a = this.listerers[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
var Post03Evm = /** @class */ (function () {
    function Post03Evm(_boxLista, _boxForm, eventManager) {
        this._boxLista = _boxLista;
        this._boxForm = _boxForm;
        this.eventManager = eventManager;
        this.seletorButtonList = "#" + BoxList.Id + ">button[type=button]";
        this.seletorButtonForm = "#" + BoxForm.Id + ">button[type=button]";
        this.init();
    }
    Post03Evm.prototype.associarEventosAcoes = function () {
        var _this = this;
        this.eventManager.addListeners(Post03Evm.acaoCadastrarPost, function () { _this._boxLista.Esconder(false); });
        this.eventManager.addListeners(Post03Evm.acaoCadastrarPost, function () { _this._boxForm.Esconder(true); });
        this.eventManager.addListeners(Post03Evm.acaoListarPosts, function () { _this._boxLista.Esconder(true); });
        this.eventManager.addListeners(Post03Evm.acaoListarPosts, function () { _this._boxForm.Esconder(false); });
    };
    Post03Evm.prototype.associarEventosAcionadores = function () {
        var _this = this;
        document.querySelector(this.seletorButtonList).addEventListener("click", function () { _this.eventManager.runEventName(Post03Evm.acaoCadastrarPost); });
        document.querySelector(this.seletorButtonForm).addEventListener("click", function () { _this.eventManager.runEventName(Post03Evm.acaoListarPosts); });
    };
    Post03Evm.prototype.init = function () {
        this.associarEventosAcionadores();
    };
    Post03Evm.acaoCadastrarPost = "CadastrarPost";
    Post03Evm.acaoListarPosts = "ListarPosts";
    return Post03Evm;
}());
var BoxListEvm = /** @class */ (function () {
    function BoxListEvm() {
    }
    BoxListEvm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxList.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxListEvm.prototype.init = function () {
    };
    BoxListEvm.Id = 'box-post-list';
    return BoxListEvm;
}());
var BoxFormEvm = /** @class */ (function () {
    function BoxFormEvm() {
        this.init();
    }
    BoxFormEvm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxForm.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxFormEvm.prototype.init = function () {
    };
    BoxFormEvm.Id = 'box-post-form';
    return BoxFormEvm;
}());
var eventManagerEvm = new EventManager();
var paginaPostEvm = new Post03Evm(new BoxListEvm(), new BoxFormEvm(), eventManagerEvm);
//# sourceMappingURL=posts03eventmanager.js.map