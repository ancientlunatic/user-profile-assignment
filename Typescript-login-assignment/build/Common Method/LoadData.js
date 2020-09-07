(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./LocalStorage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LocalStorage_1 = require("./LocalStorage");
    var LoadHistory = /** @class */ (function () {
        function LoadHistory() {
        }
        LoadHistory.MapHistory = function (key) {
            var history = LocalStorage_1.StorageData.GetParseValue(key);
            if (history) {
                history.forEach(function (element) {
                    var list = document.createElement("li");
                    list.innerText = element;
                    document.getElementById("record").appendChild(list);
                });
            }
        };
        LoadHistory.ClearHistory = function () {
            var parent = document.getElementById("record");
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        };
        return LoadHistory;
    }());
    exports.LoadHistory = LoadHistory;
});
