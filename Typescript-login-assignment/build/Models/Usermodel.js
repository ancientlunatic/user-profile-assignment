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
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.MapData = function (result) {
            this.FirstName = result.firstName;
            this.LastName = result.lastName;
            this.password = result.password;
            this.PhoneNumber = result.phoneNumber;
            this.UserName = result.userName;
        };
        return User;
    }());
    exports.User = User;
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.MapData = function (result) {
            this.UserId = result.id;
            this.FirstName = result.firstName;
            this.LastName = result.lastName;
            this.PhoneNumber = result.phoneNumber;
            this.UserName = result.userName;
            this.imagePath = result.profileImagePath;
        };
        return Person;
    }());
    exports.Person = Person;
});
