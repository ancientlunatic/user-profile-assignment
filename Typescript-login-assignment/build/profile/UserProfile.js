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
        define(["require", "exports", "../Common Method/HttpRequest", "../signup/UserData"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpRequest_1 = require("../Common Method/HttpRequest");
    var UserData_1 = require("../signup/UserData");
    var profile = /** @class */ (function () {
        function profile() {
        }
        profile.GetUserId = function () {
            var user = localStorage["user"];
            if (user != null && user != undefined) {
                var item = JSON.parse(user);
                return parseInt(item.id);
            }
            return -1;
        };
        profile.GetUserData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var userId, url, resposnse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userId = this.GetUserId();
                            url = "https://localhost:44324/api/OAuth/user?id=" + encodeURI(userId.toString());
                            return [4 /*yield*/, HttpRequest_1.FetchRequest.Getrequest(url)];
                        case 1:
                            resposnse = _a.sent();
                            console.log(resposnse);
                            if (resposnse != null) {
                                return [2 /*return*/, resposnse];
                            }
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        profile.MapData = function (user) {
            if (user.profileImagePath != "" && user.profileImagePath != null)
                document.getElementById("profileImage").src = "https://localhost:44324/" + user.profileImagePath;
            document.getElementById("name").innerText = user.firstName + " " + user.lastName;
            document.getElementById("role").innerText = user.role;
            document.getElementById("Email").innerText = user.userName;
            document.getElementById("phonenum").innerText = user.phoneNumber;
        };
        return profile;
    }());
    exports.profile = profile;
    var UpdateUser = /** @class */ (function () {
        function UpdateUser() {
        }
        UpdateUser.BindData = function (user) {
            document.getElementById("Fname").value = user.FirstName;
            document.getElementById("Lname").value = user.LastName;
            document.getElementById("profile").value = "";
            document.getElementById("phone").value = user.PhoneNumber;
            document.getElementById("Username").value = user.UserName;
            document.getElementById("password").value = user.password;
        };
        UpdateUser.upload = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, data, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = "https://localhost:44324/api/OAuth/update";
                            data = UserData_1.SignUp.Getfields();
                            return [4 /*yield*/, HttpRequest_1.FetchRequest.PostFormRequest(url, data)];
                        case 1:
                            response = _a.sent();
                            if (response != null) {
                                return [2 /*return*/, true];
                            }
                            return [2 /*return*/, false];
                    }
                });
            });
        };
        return UpdateUser;
    }());
    exports.UpdateUser = UpdateUser;
});
