(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Common Method/LocalStorage", "../Common Method/LoadData", "../Common Method/validate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LocalStorage_1 = require("../Common Method/LocalStorage");
    var LoadData_1 = require("../Common Method/LoadData");
    var validate_1 = require("../Common Method/validate");
    (function () {
        if (validate_1.validateSession.checkValidSession()) {
            var item = LocalStorage_1.StorageData.GetParseValue("user");
            LoadData_1.LoadHistory.MapHistory(item.username);
            document.getElementById("greet").innerText = "Welcome " + item.name;
            document.getElementById("calc").style.display = "block";
        }
        else {
            localStorage.removeItem("user");
            window.location.href = "login.html";
        }
    })();
    var Calcullator = /** @class */ (function () {
        function Calcullator() {
        }
        Calcullator.clr = function () {
            document.getElementById("result").value = "";
        };
        Calcullator.append = function (num) {
            document.getElementById("result").value += num;
        };
        Calcullator.solve = function () {
            var querry = document.getElementById("result").value;
            try {
                if (!this.calcRegex.test(querry)) {
                    throw "";
                }
                var result = eval(querry);
                var output = querry + " = " + result;
                document.getElementById("result").value = result;
                this.SaveData(output);
                this.GenerateHistory(output);
            }
            catch (_a) {
                document.getElementById("errormessage").innerText = "please  enter the valid expression ";
                setTimeout(function () {
                    document.getElementById("errormessage").innerText = "";
                }, 3000);
            }
        };
        Calcullator.SaveData = function (output) {
            var user = LocalStorage_1.StorageData.GetParseValue("user");
            if (user) {
                var username = user.username;
                var history_1 = LocalStorage_1.StorageData.GetParseValue(username);
                if (history_1) {
                    history_1.push(output);
                    LocalStorage_1.StorageData.SetData(username, JSON.stringify(history_1));
                }
                else {
                    var data = new Array();
                    data.push(output);
                    LocalStorage_1.StorageData.SetData(username, JSON.stringify(data));
                }
            }
        };
        Calcullator.GenerateHistory = function (history) {
            var list = document.createElement("li");
            list.innerText = history;
            document.getElementById("record").appendChild(list);
        };
        Calcullator.calcRegex = new RegExp("^[0-9+-/*=.]{1,}$");
        return Calcullator;
    }());
    document.getElementById("logout").addEventListener("click", function (event) {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
    document.getElementById("profilePage").addEventListener("click", function (event) {
        window.location.href = "UserProfile.html";
    });
    document.getElementById("clr").addEventListener("click", function (event) {
        Calcullator.clr();
    });
    document.getElementById("solve").addEventListener("click", function (event) {
        Calcullator.solve();
    });
    (document).addEventListener("click", function (event) {
        var _a, _b;
        var clsname = (_a = event.target) === null || _a === void 0 ? void 0 : _a.className;
        if (clsname == "vb") {
            var val = (_b = event.target) === null || _b === void 0 ? void 0 : _b.value;
            Calcullator.append(val);
        }
    });
    (document).addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            Calcullator.solve();
        }
    });
});
