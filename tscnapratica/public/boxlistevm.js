"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoxListEvm = /** @class */ (function () {
    function BoxListEvm() {
    }
    BoxListEvm.prototype.Esconder = function (esconder) {
        var elemento = document.getElementById(BoxListEvm.Id);
        if (esconder)
            elemento.style.display = 'none';
        else
            elemento.removeAttribute('style');
    };
    BoxListEvm.prototype.init = function () {
    };
    BoxListEvm.Id = 'box-post-list';
    return BoxListEvm;
}());
exports.BoxListEvm = BoxListEvm;
//# sourceMappingURL=boxlistevm.js.map