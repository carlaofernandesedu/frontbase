define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OldHttp = /** @class */ (function () {
        function OldHttp(httpClient) {
            this.httpClient = httpClient;
        }
        OldHttp.prototype.query = function (callable) {
            console.log('iniciando comunicacao com servico');
            var url = 'https://jsonplaceholder.typicode.com/posts';
            this.httpClient.get(url);
            // conexaoHttp.onreadystatechange = function()
            // {
            //     if(this.readyState == 4 && this.status == 200)
            //     {
            //         console.log('retornou dados');
            //         callable(this.responseText);
            //     }
            // }
            // conexaoHttp.send();
        };
        OldHttp.prototype.post = function () {
        };
        return OldHttp;
    }());
    exports.default = OldHttp;
});
//# sourceMappingURL=old-http.js.map