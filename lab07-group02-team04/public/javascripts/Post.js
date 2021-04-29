var  data = {
      startDate: 1,
      endDate: 1,
      user: 1,
      internship: 1
  };


function myFunction () {

  var bad = {
    "start" : '08.25.2021',
    "end" : '09.25.2021'};

  //  var bad = "EVAL "  + JSON.stringify(text) + " 0\r\n";
/*    var x = new XMLHttpRequest();
    x.open("POST", "http://localhost:3000/Datum");
    x.send(bad);*/
return context.post({
      url: "localhost:3000/Datum",
      body: {
          "start" : '08.25.2021',
          "end" : '09.25.2021'},
          encodeBodyAsJSON: true
    })
    .then(response => {
      // The response body is encoded as raw BSON.Binary. Parse it to JSON.
      const ejson_body = EJSON.parse(response.body.text());
      return ejson_body;
    })
};

function transferParameters(){

  this.data = {
        startDate: document.getElementById('start').innerHTML,
        endDate: document.getElementById('end').innerHTML,
        user: document.getElementById('name').innerHTML,
        internship: document.getElementById('description').innerHTML
    }
}

module.exports = {
  data
};
