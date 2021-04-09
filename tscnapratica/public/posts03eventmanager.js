"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_manager_1 = require("./event-manager");
var boxlistevm_1 = require("./boxlistevm");
var boxformevm_1 = require("./boxformevm");
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
new Post03Evm(new boxlistevm_1.BoxListEvm(), new boxformevm_1.BoxFormEvm(), new event_manager_1.EventManager());
//# sourceMappingURL=posts03eventmanager.js.map