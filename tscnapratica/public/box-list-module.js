define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxListModule = /** @class */ (function () {
        function BoxListModule() {
        }
        BoxListModule.prototype.Esconder = function (esconder) {
            var elemento = document.getElementById(BoxListModule.Id);
            if (esconder)
                elemento.style.display = 'none';
            else
                elemento.removeAttribute('style');
        };
        BoxListModule.prototype.init = function () {
        };
        BoxListModule.Id = 'box-post-list';
        return BoxListModule;
    }());
    exports.BoxListModule = BoxListModule;
});
//# sourceMappingURL=box-list-module.js.map