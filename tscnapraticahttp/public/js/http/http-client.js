define(["require", "exports", "http/http-resposta"], function (require, exports, http_resposta_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var httpVerbs;
    (function (httpVerbs) {
        httpVerbs["GET"] = "GET";
        httpVerbs["POST"] = "POST";
    })(httpVerbs || (httpVerbs = {}));
    class HttpClient {
        get(url) {
            return new Promise((resolve, reject) => {
                let conexaoHttp = this.createXmlHttpRequest(httpVerbs.GET, url);
                this.configureCallbacks(conexaoHttp, resolve, reject);
                conexaoHttp.send();
            });
        }
        post(url, data) {
            return new Promise((resolve, reject) => {
                let conexaoHttp = this.createXmlHttpRequest(httpVerbs.POST, url);
                this.configureCallbacks(conexaoHttp, resolve, reject);
                conexaoHttp.send(data);
            });
        }
        createXmlHttpRequest(verb, url) {
            let conexaoHttp = new XMLHttpRequest();
            const async = true;
            conexaoHttp.open(verb, url, async);
            return conexaoHttp;
        }
        configureCallbacks(conexaoHttp, resolve, reject) {
            conexaoHttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200 || this.status == 201) {
                        const resposta = new http_resposta_1.default(this.responseText, this.status);
                        resolve(resposta);
                    }
                }
            };
        }
    }
    exports.default = HttpClient;
});
//# sourceMappingURL=http-client.js.map