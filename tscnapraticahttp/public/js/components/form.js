define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Form {
        static getValueFromField(selector) {
            let el = document.querySelector(selector);
            if (el)
                return el.value;
        }
    }
    exports.default = Form;
});
//# sourceMappingURL=form.js.map