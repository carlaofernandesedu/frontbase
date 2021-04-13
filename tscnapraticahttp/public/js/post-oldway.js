define(["require", "exports", "http/old-http", "http/http-client"], function (require, exports, old_http_1, http_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostOldWay = /** @class */ (function () {
        function PostOldWay(requisicao) {
            this.requisicao = requisicao;
            this.init();
        }
        PostOldWay.prototype.listar = function (resposta) {
            var elemento = document.getElementById('#listapost');
            console.log(resposta);
        };
        PostOldWay.prototype.init = function () {
            this.requisicao.query(this.listar);
        };
        return PostOldWay;
    }());
    new PostOldWay(new old_http_1.default(new http_client_1.default()));
});
//# sourceMappingURL=post-oldway.js.map