define(["require", "exports", "../http/http-wrapper", "../components/form", "../components/validators/validator-manager", "../components/validators/validator"], function (require, exports, http_wrapper_1, form_1, validator_manager_1, validator_1) {
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
            if (!this.isValid())
                return;
            let data = { title: form_1.default.getValueFromField("#title"), body: form_1.default.getValueFromField("#body") };
            this.httpWrapper.post(data).then((response) => {
                console.log(response);
                alert('submetido' + data.title + '-' + data.body);
            });
        }
        isValid() {
            let validator = new validator_manager_1.default([
                { selector: '#title', rules: [validator_1.default.required, validator_1.default.mincarac], message: 'titulo invalido' },
                { selector: '#body', rules: [validator_1.default.required], message: 'conteudo invalido' }
            ]);
            return validator.isValid();
        }
        init() {
            this.associarEventos();
        }
    }
    const httpWrapper = new http_wrapper_1.default();
    new PostNewPage(httpWrapper);
});
//# sourceMappingURL=post-new-page.js.map