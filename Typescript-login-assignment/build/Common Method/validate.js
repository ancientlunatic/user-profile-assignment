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
    var validateSession = /** @class */ (function () {
        function validateSession() {
        }
        validateSession.checkValidSession = function () {
            var item = LocalStorage_1.StorageData.GetParseValue("user");
            if (item) {
                if (item.exp > new Date().getTime()) {
                    return true;
                }
                else {
                    return false;
                }
            }
        };
        return validateSession;
    }());
    exports.validateSession = validateSession;
    var FormValidatation = /** @class */ (function () {
        function FormValidatation() {
            this.imageSize = 1 * 1024 * 1024;
            this.nameRegex = new RegExp("^[a-zA-Z]{3,20}$");
            this.emailRegex = new RegExp("^[a-zA-Z0-9._]{3,}@[a-z0-9]{2,}(.com|.co.in)$");
            this.phoneNumberRegex = new RegExp("^[6-9]{1}[0-9]{9}$");
            this.passwordRegex = new RegExp("^[a-zA-Z0-9@#$%^&*]{3,25}$");
        }
        FormValidatation.prototype.validate = function (data) {
            var result = false;
            if (!this.nameRegex.test(data.FirstName)) {
                document.getElementById("FnameErr").innerText = "Plese enter the Correct First Name";
                result = true;
            }
            else {
                document.getElementById("FnameErr").innerText = "";
            }
            if (!this.nameRegex.test(data.LastName)) {
                document.getElementById("LnameErr").innerText = "Plese enter the Correct First Name";
                result = true;
            }
            else {
                document.getElementById("LnameErr").innerText = "";
            }
            if (!this.emailRegex.test(data.UserName)) {
                document.getElementById("UnameErr").innerText = "Please enter valid username format ex. abc@xyz.com /co.in use special char '._'";
                result = true;
            }
            else {
                document.getElementById("UnameErr").innerText = "";
            }
            if (!this.passwordRegex.test(data.password)) {
                document.getElementById("passwordErr").innerText = "password must be 3 or more digit ";
                result = true;
            }
            else {
                document.getElementById("passwordErr").innerText = "";
            }
            if (!this.phoneNumberRegex.test(data.PhoneNumber)) {
                document.getElementById("PnumberErr").innerText = "Enter a valid phone number";
                result = true;
            }
            else {
                document.getElementById("PnumberErr").innerText = "";
            }
            return result;
        };
        FormValidatation.prototype.validateImageFile = function (data) {
            var result = false;
            if (!data.ProfileImage) {
                document.getElementById("ProfileErr").innerText = "please select one picture";
                result = true;
            }
            else if (data.ProfileImage.size > this.imageSize) {
                document.getElementById("ProfileErr").innerText = "Image size is larger then expected.. Must be less then " + (this.imageSize / 1024 / 1024).toFixed(3) + " mb";
                result = true;
            }
            else {
                document.getElementById("ProfileErr").innerText = "";
            }
            return result;
        };
        FormValidatation.prototype.validateImageSize = function (data) {
            var result = false;
            if (data.ProfileImage && data.ProfileImage.size > this.imageSize) {
                document.getElementById("ProfileErr").innerText = "Image size is larger then expected.. Must be less then " + (this.imageSize / 1024 / 1024).toFixed(3) + " mb";
                result = true;
            }
            else {
                document.getElementById("ProfileErr").innerText = "";
            }
            return result;
        };
        return FormValidatation;
    }());
    exports.FormValidatation = FormValidatation;
});
