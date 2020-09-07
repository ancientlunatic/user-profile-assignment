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
        define(["require", "exports", "../Models/Usermodel", "../Common Method/HttpRequest", "../Common Method/Constants"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Usermodel_1 = require("../Models/Usermodel");
    var HttpRequest_1 = require("../Common Method/HttpRequest");
    var Constants_1 = require("../Common Method/Constants");
    var CardTemplate = /** @class */ (function () {
        function CardTemplate() {
        }
        CardTemplate.prototype.GenerateCard = function (user) {
            var _this = this;
            user.forEach(function (element) {
                _this.CreateCard(element);
            });
        };
        CardTemplate.prototype.CreateCard = function (element) {
            var div = document.createElement("div");
            div.setAttribute("class", "card");
            document.getElementById("container").appendChild(div);
            var img = document.createElement("img");
            img.setAttribute("src", Constants_1.Constants.BaseURl + "/" + element.imagePath);
            img.setAttribute("alt", "USer");
            img.style.width = "100%";
            div.appendChild(img);
            var childDiv = document.createElement("div");
            childDiv.setAttribute("class", "container");
            div.appendChild(childDiv);
            var heading = document.createElement("h4");
            var bold = document.createElement("b");
            bold.innerText = element.FirstName + " " + element.LastName;
            heading.appendChild(bold);
            childDiv.appendChild(heading);
            var paragraph = document.createElement("p");
            paragraph.innerText = element.UserName;
            var button = document.createElement("button");
            button.setAttribute("id", "user" + element.UserId);
            button.setAttribute("class", "records");
            button.innerText = "Show History";
            childDiv.appendChild(paragraph);
            childDiv.appendChild(button);
        };
        CardTemplate.prototype.GetUserName = function (userId) {
            try {
                var userName = document.getElementById(userId).parentElement.firstChild.firstChild.firstChild.data;
                document.getElementById("userhistory").innerText = userName + " history";
            }
            catch (_a) { }
        };
        return CardTemplate;
    }());
    exports.CardTemplate = CardTemplate;
    var MultipleUser = /** @class */ (function () {
        function MultipleUser() {
        }
        MultipleUser.prototype.FetchData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, result, users, persons;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = Constants_1.Constants.BaseURl + "/api/admin/all";
                            return [4 /*yield*/, HttpRequest_1.FetchRequest.Getrequest(url)];
                        case 1:
                            result = _a.sent();
                            if (result.statusCode != 200) {
                                return [2 /*return*/, null];
                            }
                            users = result.result;
                            persons = new Array();
                            users.forEach(function (element) {
                                var user = new Usermodel_1.Person();
                                user.MapData(element);
                                persons.push(user);
                            });
                            return [2 /*return*/, persons];
                    }
                });
            });
        };
        return MultipleUser;
    }());
    exports.MultipleUser = MultipleUser;
});
