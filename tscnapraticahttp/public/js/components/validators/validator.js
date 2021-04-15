define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Validator {
        static required(value) {
            return typeof value !== undefined && value !== '' && value !== null;
        }
        static mincarac(value) {
            return value.length >= 3;
        }
    }
    exports.default = Validator;
});
//# sourceMappingURL=validator.js.map