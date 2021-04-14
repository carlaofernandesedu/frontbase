define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class OldHttp {
        constructor(httpClient) {
            this.httpClient = httpClient;
        }
        query(callable) {
            console.log('iniciando comunicacao com servico');
            const url = 'https://jsonplaceholder.typicode.com/posts';
            this.httpClient.get(url).then((response) => {
                callable(response.body);
            });
        }
        post() {
        }
    }
    exports.default = OldHttp;
});
//# sourceMappingURL=old-http.js.map