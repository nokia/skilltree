
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://skilltree.benis.hu";
var util = require("util");
var pbkdf2 = require("../../pbkdf2");
var adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOiJ0cnVlIn0.sxF3V-G_wcsoY9dYphBwn4MgJx3gQANp2EgftqbVNwk";  //username: admin <- need to exist in order to work


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

describe("API ADMIN TEST WITH ADMIN TOKEN", function(){
    it("Should return {success:true}", function(done){
        
        request.get({ url: baseUrl + "/admin/testAdmin", headers: { 'x-access-token': adminToken, 'Content-type': 'application/json' } },
            function(error, response, body) {
                var body = JSON.parse(response.body);
                
                expect(body.success).to.equal(true);
                done();
            });
    });
});

describe("API ADMIN TEST WITHOUT ADMIN TOKEN", function(){
    it("Should fail", function(done){
        
        request.get({ url: baseUrl + "/admin/testAdmin", headers: {} },
            function(error, response, body) {

                var body = JSON.parse(response.body);
                
                expect(body.success).to.equal(false);

                done();
            });
    });
});



describe("Adding user", function(){
    it("Should fail", function(done){
        
        request.post(
            {   
                url: baseUrl + "/registration", 
                body: 
                {
                    username: "testuser", 
                    email: "test@test.test",
                }, 
                headers: 
                {
                }
            
            },
            function(error, response, body) {
                /*
                var body = JSON.parse(response.body);
                
                expect(body.success).to.equal(true);*/

                console.log(response);
                
                done();
            });
    });
});






