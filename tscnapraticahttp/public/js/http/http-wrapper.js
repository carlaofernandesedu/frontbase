define(["require", "exports", "./http-client"], function (require, exports, http_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class HttpWrapper {
        constructor() {
            this.httpClient = new http_client_1.default();
        }
        query() {
            console.log('iniciando comunicacao com servico');
            const url = 'https://jsonplaceholder.typicode.com/posts';
            return this.httpClient.get(url).then(function (response) {
                return JSON.parse(response.body);
            });
        }
        post() {
        }
    }
    exports.default = HttpWrapper;
});
//# sourceMappingURL=http-wrapper.js.map