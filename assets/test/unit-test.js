
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

describe("API ADMIN TEST WITH ADMIN TOKEN", function () {
    it("Should return {success:true}", function (done) {
        /*
        const bodyData = {
            username: 'testuser',
        }

        var headerData = {
            'x-access-token': adminToken
        }

        var url = baseUrl + '/admin/testAdmin';

        var options = {
            method: 'get',
            form: bodyData,
            headers: headerData,
            json: true,
            url: url
        }
        request(options, function (err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err;
            }
            var headers = res.headers;
            var statusCode = res.statusCode;
            console.log('headers: ', headers);
            console.log('statusCode: ', statusCode);
            console.log('body: ', body);

            done();
        });
        */

        request.get({
            url: baseUrl + "/admin/testAdmin", 
            json: true, 
            body: { username: "testuser"} , 
            headers: {'x-access-token': adminToken }   }, function (error, response, body) { 
                console.log(error, body);

                done();
            });

    });
});
/*
describe("API ADMIN TEST WITHOUT ADMIN TOKEN", function(){
    it("Should fail", function(done){
        
        request.get({ url: baseUrl + "/admin/testAdmin" },
            function(error, response, body) {

                console.log(body);

                //expect(JSON.parse(body).success).to.equal(false);

                done();
            });
    });
});*/


// fixing delete user, not testing add untill then
describe("Adding user", function(){
    it("Should add", function(done){

        request.post({
            url: baseUrl + "/registration", 
            json: true, 
            body: { username: "testuser", email: "test@test.com", password: "Abc123"} , 
            headers: {'x-access-token': adminToken }   }, function (error, response, body) { 
                console.log(error, body);

                done();
            });
    });
});




describe("Deleting user", function(){
    it("Should delete", function(done){
        request.post({
            url: baseUrl + "/admin/deleteUser", 
            json: true, 
            body: { username: "testuser"} , 
            headers: {'x-access-token': adminToken }   }, function (error, response, body) { 
                console.log(error, body);

                done();
        });

    });
});







