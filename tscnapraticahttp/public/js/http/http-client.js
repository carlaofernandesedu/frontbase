define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var httpVerbs;
    (function (httpVerbs) {
        httpVerbs["GET"] = "GET";
        httpVerbs["POST"] = "POST";
    })(httpVerbs || (httpVerbs = {}));
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.get = function (url) {
            var conexaoHttp = this.createXmlHttpRequest(httpVerbs.GET, url);
            conexaoHttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log('retornou dados');
                }
            };
            conexaoHttp.send();
        };
        HttpClient.prototype.createXmlHttpRequest = function (verb, url) {
            var conexaoHttp = new XMLHttpRequest();
            var async = true;
            conexaoHttp.open(verb, url, async);
            return conexaoHttp;
        };
        return HttpClient;
    }());
    exports.default = HttpClient;
});
//# sourceMappingURL=http-client.js.map