"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoxFormEvm = /** @class */ (function () {
    function BoxFormEvm() {
        this.init();
    }
    BoxFormEvm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxFormEvm.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxFormEvm.prototype.init = function () {
    };
    BoxFormEvm.Id = 'box-post-form';
    return BoxFormEvm;
}());
exports.BoxFormEvm = BoxFormEvm;
//# sourceMappingURL=boxformevm.js.map