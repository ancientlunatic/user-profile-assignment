(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageData = /** @class */ (function () {
        function StorageData() {
        }
        StorageData.GetParseValue = function (key) {
            var data = localStorage.getItem(key);
            if (data) {
                return JSON.parse(data);
            }
            return null;
        };
        StorageData.GetValue = function (key) {
            return localStorage.getItem(key);
        };
        StorageData.SetData = function (key, data) {
            localStorage.setItem(key, data);
        };
        return StorageData;
    }());
    exports.StorageData = StorageData;
});
