
//var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://skilltree.benis.hu";
var util = require("util");

var pbkdf2 = require("../../pbkdf2");
//var chartandtree = require("../../public/user/chartandtree");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



describe("hashPassword() and verifyPassword()", function(){
    it("Should hash the password and decode it correctly", function(){

        var hashedPW = pbkdf2.hashPassword("VeryPassword");
        var result = pbkdf2.verifyPassword("VeryPassword", hashedPW)

        expect(result).to.equal(true);
    });
});



describe("API test", function(){
    it("?", function(){

        request('GET', "/apitest", undefined, function(){
            if (this.readyState == 4 && this.status == 200){
                console.log(this.response);
                expect(true).to.equal(true);
            }
            
            
        });
        
    });
});



//NPM REQUEST
/* 
describe("API TEST", function(){
    it("Should return true", function(done){
        
        request.get({ url: "https://skilltree.benis.hu/apitest/" },
            function(error, response, body) {
                    
                    expect(response.statusCode).to.equal(200);
                    console.log(body);


                done();
            });

            
    });
});
*/










function request (type, url, sendData, callback) {
    var req = new XMLHttpRequest();
    req.open(type, "https://skilltree.benis.hu/" + url, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.setRequestHeader('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhdHJpazEiLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1MTYyMzkwMjJ9.DpR8IB4Ir3YLI7nfcpHRf3L64lEcmv2ixnSh8H1xVaI");
    req.responseType = "json";
    req.onreadystatechange = callback;

    if (sendData !== undefined)
        req.send(JSON.stringify(sendData));
    else
        req.send();
}