var Post03 = /** @class */ (function () {
    function Post03() {
        this.seletorButtonList = "#" + BoxList.Id + ">button[type=button]";
        this.seletorButtonForm = "#" + BoxForm.Id + ">button[type=button]";
        this.init();
    }
    Post03.prototype.ListarPosts = function (boxLista, boxForm) {
        boxLista.Esconder(false);
        boxForm.Esconder(true);
    };
    Post03.prototype.CadastrarPost = function (boxLista, boxForm) {
        boxLista.Esconder(true);
        boxForm.Esconder(false);
    };
    Post03.prototype.init = function () {
        var _this = this;
        var boxList = new BoxList();
        var boxForm = new BoxForm();
        document.querySelector(this.seletorButtonList).addEventListener("click", function () { _this.CadastrarPost(boxList, boxForm); });
        document.querySelector(this.seletorButtonForm).addEventListener("click", function () { _this.ListarPosts(boxList, boxForm); });
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
var paginaPost = new Post03();
