var Post03 = /** @class */ (function () {
    function Post03(boxLista, boxForm) {
        this.seletorButtonList = "#" + BoxList.Id + ">button[type=button]";
        this.seletorButtonForm = "#" + BoxForm.Id + ">button[type=button]";
        this._boxLista = boxLista;
        this._boxForm = boxForm;
        this.init();
    }
    Post03.prototype.ListarPosts = function () {
        this._boxLista.Esconder(false);
        this._boxForm.Esconder(true);
    };
    Post03.prototype.CadastrarPost = function () {
        this._boxLista.Esconder(true);
        this._boxForm.Esconder(false);
    };
    Post03.prototype.init = function () {
        var _this = this;
        document.querySelector(this.seletorButtonList).addEventListener("click", function () { _this.CadastrarPost(); });
        document.querySelector(this.seletorButtonForm).addEventListener("click", function () { _this.ListarPosts(); });
    };
    return Post03;
}());
var BoxList = /** @class */ (function () {
    function BoxList() {
    }
    BoxList.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxList.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxList.prototype.init = function () {
    };
    BoxList.Id = 'box-post-list';
    return BoxList;
}());
var BoxForm = /** @class */ (function () {
    function BoxForm() {
        this.init();
    }
    BoxForm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxForm.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxForm.prototype.init = function () {
    };
    BoxForm.Id = 'box-post-form';
    return BoxForm;
}());
var paginaPost = new Post03(new BoxList(), new BoxForm());
//# sourceMappingURL=posts03.js.map