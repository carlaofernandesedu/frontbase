define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpResposta {
        constructor(body, status) {
            this.body = body;
            this.status = status;
        }
    }
    exports.default = HttpResposta;
});
//# sourceMappingURL=http-resposta.js.map