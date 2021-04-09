define(["require", "exports", "./event-manager-module", "./box-list-module", "./box-form-module"], function (require, exports, event_manager_module_1, box_list_module_1, box_form_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostModule = /** @class */ (function () {
        function PostModule(_boxLista, _boxForm, eventManager) {
            this._boxLista = _boxLista;
            this._boxForm = _boxForm;
            this.eventManager = eventManager;
            this.seletorButtonExibirList = "#" + box_form_module_1.BoxFormModule.Id + ">button[type=button]";
            this.seletorButtonExibirForm = "#" + box_list_module_1.BoxListModule.Id + ">button[type=button]";
            this.init();
        }
        PostModule.prototype.associarEventosAcoes = function () {
            var _this = this;
            this.eventManager.addListeners(PostModule.acaoCadastrarPost, function () { _this._boxLista.Esconder(true); });
            this.eventManager.addListeners(PostModule.acaoCadastrarPost, function () { _this._boxForm.Esconder(false); });
            this.eventManager.addListeners(PostModule.acaoListarPosts, function () { _this._boxLista.Esconder(false); });
            this.eventManager.addListeners(PostModule.acaoListarPosts, function () { _this._boxForm.Esconder(true); });
        };
        PostModule.prototype.associarEventosAcionadores = function () {
            var _this = this;
            document.querySelector(this.seletorButtonExibirList).addEventListener("click", function () { _this.eventManager.runEventName(PostModule.acaoListarPosts); });
            document.querySelector(this.seletorButtonExibirForm).addEventListener("click", function () { _this.eventManager.runEventName(PostModule.acaoCadastrarPost); });
        };
        PostModule.prototype.init = function () {
            this.associarEventosAcoes();
            this.associarEventosAcionadores();
        };
        PostModule.acaoCadastrarPost = "CadastrarPost";
        PostModule.acaoListarPosts = "ListarPosts";
        return PostModule;
    }());
    new PostModule(new box_list_module_1.BoxListModule(), new box_form_module_1.BoxFormModule(), new event_manager_module_1.EventManagerModule());
});
//# sourceMappingURL=posts-module.js.map