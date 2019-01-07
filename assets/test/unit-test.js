var expect = require("chai").expect;
var tools = require("../../pbkdf2");
var api = require("../../app");

describe("hashPassword() and verifyPassword()", function(){
    it("Should hash the password and decode it correctly", function(){

        var hashedPW = tools.hashPassword("VeryPassword");
        var result = tools.verifyPassword("VeryPassword", hashedPW)

        expect(result).to.equal(true);
    });
} )

