define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxFormModule = /** @class */ (function () {
        function BoxFormModule() {
            this.init();
        }
        BoxFormModule.prototype.Esconder = function (esconder) {
            var elemento = document.getElementById(BoxFormModule.Id);
            if (esconder)
                elemento.style.display = 'none';
            else
                elemento.removeAttribute('style');
        };
        BoxFormModule.prototype.init = function () {
        };
        BoxFormModule.Id = 'box-post-form';
        return BoxFormModule;
    }());
    exports.BoxFormModule = BoxFormModule;
});
//# sourceMappingURL=box-form-module.js.map