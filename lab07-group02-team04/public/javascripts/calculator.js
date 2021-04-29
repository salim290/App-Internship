
function calcDates(){
  //var url_string = window.location.href; //window.location.href
  //var url = new URL(url_string);
//  var startDate = new Date(url.searchParams.get("startDate"));
//  var endDate = new Date(url.searchParams.get("endDate"));

  var start = document.getElementById('start').innerHTML;
  var end = document.getElementById('end').innerHTML;

  var startDate = new Date(start);
  var endDate = new Date(end);

  console.log(start);
  console.log(end);

  var differenz = (endDate.getTime() - startDate.getTime());
  // differenz noch in Millisekunden (und 86400000 Milisekunden = 1 Tag)
  differenz = differenz/86400000;
  //console.log(differenz);

  var answer;
  if (startDate>endDate){
    answer = "this dates you entered aren't valid , please try again ";

  }
  else if(differenz < 112){
      let days = 112 - differenz;
      answer = "The internship is not long enough. It need to be " + days + " days longer!";
  }
  else { answer = "The internship is long enough! Let's go! :)";
  }
  //console.log(answer);
  document.getElementById("appe").innerHTML = answer;
}
