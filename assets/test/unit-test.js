
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://skilltree.benis.hu";
var util = require("util");
var pbkdf2 = require("../../pbkdf2");

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

//var chartandtree = require("../../public/user/chartandtree");
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



describe("hashPassword() and verifyPassword()", function(){
    it("Should hash the password and decode it correctly", function(){

        var hashedPW = pbkdf2.hashPassword("VeryPassword");
        var result = pbkdf2.verifyPassword("VeryPassword", hashedPW)

        expect(result).to.equal(true);
    });
});


//NPM REQUEST

describe("API TEST", function(){
    it("Should return true", function(done){
        
        request.get({ url: baseUrl + "/apitest" },
            function(error, response, body) {
                
                expect(response.body.success).to.equal(true);
                done();
            });
    });
});










