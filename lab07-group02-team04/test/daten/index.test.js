const request = require("supertest");
const app = require("../../app");
//const mongoose = require("../../mongoose");

require("../testSetup")

var id = "60171f05d9074e9305caa610";

describe('Test adding to the database', () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/calculator")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the GET method", done => {
    request(app)
      .get("/result")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the POST method", done => {
    request(app)
      .post("/Datum")
      .then(response => {
        console.log(response.body.result._id);
        this.id = response.body.result._id;
        console.log("hhhhhhh");
        console.log(this.id);
        expect(response.statusCode).toBe(200);
        done();
      });
  });

console.log("neuneuneu");
console.log(this.id);

  test("It should response the GET method", done => {
    var pfad = "/Datum/" + id;
    request(app)
      .get(pfad)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });


});
