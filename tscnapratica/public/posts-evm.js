var EventManager = /** @class */ (function () {
    function EventManager() {
        this.listeners = {};
    }
    EventManager.prototype.addListeners = function (eventName, callable) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    EventManager.prototype.runEventName = function (eventName) {
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
var BoxListEvm = /** @class */ (function () {
    function BoxListEvm() {
    }
    BoxListEvm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxListEvm.Id);
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
        var elemento = document.getElementById(BoxFormEvm.Id);
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
var PostEvm = /** @class */ (function () {
    function PostEvm(_boxLista, _boxForm, eventManager) {
        this._boxLista = _boxLista;
        this._boxForm = _boxForm;
        this.eventManager = eventManager;
        this.seletorButtonExibirList = "#" + BoxFormEvm.Id + ">button[type=button]";
        this.seletorButtonExibirForm = "#" + BoxListEvm.Id + ">button[type=button]";
        this.init();
    }
    PostEvm.prototype.associarEventosAcoes = function () {
        var _this = this;
        this.eventManager.addListeners(PostEvm.acaoCadastrarPost, function () { _this._boxLista.Esconder(true); });
        this.eventManager.addListeners(PostEvm.acaoCadastrarPost, function () { _this._boxForm.Esconder(false); });
        this.eventManager.addListeners(PostEvm.acaoListarPosts, function () { _this._boxLista.Esconder(false); });
        this.eventManager.addListeners(PostEvm.acaoListarPosts, function () { _this._boxForm.Esconder(true); });
    };
    PostEvm.prototype.associarEventosAcionadores = function () {
        var _this = this;
        document.querySelector(this.seletorButtonExibirList).addEventListener("click", function () { _this.eventManager.runEventName(PostEvm.acaoListarPosts); });
        document.querySelector(this.seletorButtonExibirForm).addEventListener("click", function () { _this.eventManager.runEventName(PostEvm.acaoCadastrarPost); });
    };
    PostEvm.prototype.init = function () {
        this.associarEventosAcoes();
        this.associarEventosAcionadores();
    };
    PostEvm.acaoCadastrarPost = "CadastrarPost";
    PostEvm.acaoListarPosts = "ListarPosts";
    return PostEvm;
}());
new PostEvm(new BoxListEvm(), new BoxFormEvm(), new EventManager());
//# sourceMappingURL=posts-evm.js.map