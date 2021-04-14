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
            // conexaoHttp.onreadystatechange = function()
            // {
            //     if(this.readyState == 4 && this.status == 200)
            //     {
            //         console.log('retornou dados');
            //         callable(this.responseText);
            //     }
            // }
            // conexaoHttp.send();
        }
        post() {
        }
    }
    exports.default = OldHttp;
});
//# sourceMappingURL=old-http.js.map