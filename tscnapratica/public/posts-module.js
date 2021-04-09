"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_manager_module_1 = require("./event-manager-module");
var box_list_module_1 = require("./box-list-module");
var box_form_module_1 = require("./box-form-module");
var PostModule = /** @class */ (function () {
    function PostModule(_boxLista, _boxForm, eventManager) {
        this._boxLista = _boxLista;
        this._boxForm = _boxForm;
        this.eventManager = eventManager;
        this.seletorButtonList = "#" + box_list_module_1.BoxListModule.Id + ">button[type=button]";
        this.seletorButtonForm = "#" + box_form_module_1.BoxFormModule.Id + ">button[type=button]";
        this.init();
    }
    PostModule.prototype.associarEventosAcoes = function () {
        var _this = this;
        this.eventManager.addListeners(PostModule.acaoCadastrarPost, function () { _this._boxLista.Esconder(false); });
        this.eventManager.addListeners(PostModule.acaoCadastrarPost, function () { _this._boxForm.Esconder(true); });
        this.eventManager.addListeners(PostModule.acaoListarPosts, function () { _this._boxLista.Esconder(true); });
        this.eventManager.addListeners(PostModule.acaoListarPosts, function () { _this._boxForm.Esconder(false); });
    };
    PostModule.prototype.associarEventosAcionadores = function () {
        var _this = this;
        document.querySelector(this.seletorButtonList).addEventListener("click", function () { _this.eventManager.runEventName(PostModule.acaoCadastrarPost); });
        document.querySelector(this.seletorButtonForm).addEventListener("click", function () { _this.eventManager.runEventName(PostModule.acaoListarPosts); });
    };
    PostModule.prototype.init = function () {
        this.associarEventosAcionadores();
    };
    PostModule.acaoCadastrarPost = "CadastrarPost";
    PostModule.acaoListarPosts = "ListarPosts";
    return PostModule;
}());
new PostModule(new box_list_module_1.BoxListModule(), new box_form_module_1.BoxFormModule(), new event_manager_module_1.EventManagerModule());
//# sourceMappingURL=posts-module.js.map