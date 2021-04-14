define(["require", "exports", "http/old-http", "http/http-client", "components/post-table"], function (require, exports, old_http_1, http_client_1, post_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostOldWay {
        constructor(requisicao) {
            this.requisicao = requisicao;
            this.init();
        }
        listar(resposta) {
            console.log("servico retornado:");
            new post_table_1.default("#my-table>tbody", JSON.parse(resposta), ["title", "body"]).make();
        }
        init() {
            this.requisicao.query(this.listar);
        }
    }
    new PostOldWay(new old_http_1.default(new http_client_1.default()));
});
//# sourceMappingURL=post-oldway.js.map