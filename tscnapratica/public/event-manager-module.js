define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventManagerModule = /** @class */ (function () {
        function EventManagerModule() {
            this.listerers = {};
        }
        EventManagerModule.prototype.addListeners = function (eventName, callable) {
            if (!(this.listerers[eventName] instanceof Array)) {
                this.listerers[eventName] = [];
            }
            this.listerers[eventName].push(callable);
        };
        EventManagerModule.prototype.runEventName = function (eventName) {
            for (var _i = 0, _a = this.listerers[eventName]; _i < _a.length; _i++) {
                var callable = _a[_i];
                callable();
            }
        };
        return EventManagerModule;
    }());
    exports.EventManagerModule = EventManagerModule;
});
//# sourceMappingURL=event-manager-module.js.map