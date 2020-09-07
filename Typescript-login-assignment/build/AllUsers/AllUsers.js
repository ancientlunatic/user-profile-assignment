var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MultipleUsers", "../Common Method/validate", "../Common Method/LoadData"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MultipleUsers_1 = require("./MultipleUsers");
    var validate_1 = require("../Common Method/validate");
    var LoadData_1 = require("../Common Method/LoadData");
    var RegisterElement = /** @class */ (function () {
        function RegisterElement() {
        }
        RegisterElement.prototype.Register = function () {
            document.querySelectorAll(".records").forEach(function (item) {
                item.addEventListener("click", function (event) {
                    LoadData_1.LoadHistory.ClearHistory();
                    var userId = event.target.id;
                    new MultipleUsers_1.CardTemplate().GetUserName(userId);
                    var data = document.getElementById(userId).previousElementSibling.innerHTML;
                    LoadData_1.LoadHistory.MapHistory(data);
                });
            });
        };
        return RegisterElement;
    }());
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, getUsers, template;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!validate_1.validateSession.checkValidSession()) return [3 /*break*/, 2];
                    user = new MultipleUsers_1.MultipleUser();
                    return [4 /*yield*/, user.FetchData()];
                case 1:
                    getUsers = _a.sent();
                    template = new MultipleUsers_1.CardTemplate();
                    template.GenerateCard(getUsers);
                    new RegisterElement().Register();
                    return [3 /*break*/, 3];
                case 2:
                    localStorage.removeItem("user");
                    window.location.href = "login.html";
                    _a.label = 3;
                case 3: return [2 /*return*/, ""];
            }
        });
    }); })();
    document.getElementById("profile").addEventListener("click", function (event) {
        window.location.href = "UserProfile.html";
    });
    document.getElementById("calculator").addEventListener("click", function (event) {
        window.location.href = "calculator.html";
    });
    document.getElementById("logout").addEventListener("click", function (event) {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
});
// document.addEventListener("click" , event=>
// {
//     let targetClass = (event.target as HTMLButtonElement).className;
//     if(targetClass == "records")
//     {
//     LoadHistory.ClearHistory();
//         let userId = (event.target as HTMLButtonElement).id;
//         let data = (document.getElementById(userId) as HTMLButtonElement).previousElementSibling.innerHTML;
//         LoadHistory.MapHistory(data);
//     }
// })
