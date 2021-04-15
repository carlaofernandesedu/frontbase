define(["require", "exports", "../http/http-wrapper"], function (require, exports, http_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PostNewPage {
        constructor(httpWrapper) {
            this.httpWrapper = httpWrapper;
            this.init();
        }
        associarEventos() {
            document.querySelector('#my-form').addEventListener('submit', (event) => {
                event.preventDefault();
                this.submit();
                return false;
            });
        }
        submit() {
            alert('ok');
        }
        isValid() {
            return false;
        }
        init() {
            this.associarEventos();
        }
    }
    const httpWrapper = new http_wrapper_1.default();
    new PostNewPage(httpWrapper);
});
//# sourceMappingURL=post-new-page.js.map