define(["require", "exports", "../http/http-wrapper", "../components/form"], function (require, exports, http_wrapper_1, form_1) {
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
            let data = { title: form_1.default.getValueFromField("#title"), body: form_1.default.getValueFromField("#body") };
            this.httpWrapper.post(data).then((response) => {
                console.log(response);
                alert('submetido' + data.title + '-' + data.body);
            });
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