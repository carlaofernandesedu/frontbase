define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ValidatorManager {
        constructor(chainRules) {
            this.chainRules = chainRules;
        }
        isValid() {
            for (let item of this.chainRules) {
                let valor = document.querySelector(item.selector).value;
                for (let itemRule of item.rules) {
                    if (!itemRule(valor)) {
                        alert(item.message);
                        return false;
                    }
                }
            }
            return true;
        }
    }
    exports.default = ValidatorManager;
});
//# sourceMappingURL=validator-manager.js.map