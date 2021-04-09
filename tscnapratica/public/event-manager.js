define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventManager = /** @class */ (function () {
        function EventManager() {
            this.listerers = {};
        }
        EventManager.prototype.addListeners = function (eventName, callable) {
            if (!(this.listerers[eventName] instanceof Array)) {
                this.listerers[eventName] = [];
            }
            this.listerers[eventName].push(callable);
        };
        EventManager.prototype.runEventName = function (eventName) {
            for (var _i = 0, _a = this.listerers[eventName]; _i < _a.length; _i++) {
                var callable = _a[_i];
                callable();
            }
        };
        return EventManager;
    }());
    exports.EventManager = EventManager;
});
//# sourceMappingURL=event-manager.js.map