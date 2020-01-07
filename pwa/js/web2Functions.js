function httpGETmetaTransfer(from, to, amount, fee, nonce, signature) {

  var params = "?" + "from=" + from.toString() + "&to=" +  to.toString() + "&amount=" + amount.toString() + "&fee=" + fee.toString() + "&nonce=" + nonce.toString() + "&signature=" + signature.toString()
  console.log(params)

   var xhttp = createCORSRequest('GET', "http://localhost:7777/metaTransfer" + params);
   sendRequest(xhttp)
}

function httpGETmetaApprove(from, to, amount, fee, nonce, signature) {
  var params = "?" + "from=" + from.toString() + "&to=" +  to.toString() + "&amount=" + amount.toString() + "&fee=" + fee.toString() + "&nonce=" + nonce.toString() + "&signature=" + signature.toString()
   console.log(params)

  var xhttp = createCORSRequest('GET', "http://localhost:7777/metaApprove" + params);
  sendRequest(xhttp)
}
function httpGETmetaTransferFrom(from, to, by, amount, fee, nonce,signature) {
  var params = "?" + "from=" + from.toString() + "&to=" +  to.toString() + "&by=" +  by.toString() + "&amount=" + amount.toString() + "&fee=" + fee.toString() + "&nonce=" + nonce.toString() + "&signature=" + signature.toString()
   console.log(params)

  var xhttp = createCORSRequest('GET', "http://localhost:7777/metaTransferFrom" + params);
  sendRequest(xhttp)
}


function sendRequest(xhttp){
  if (!xhttp) {
    throw new Error('CORS not supported');
  }

  // xhttp.onreadystatechange = function()  {
  //   if (this.readyState == 4 && this.status == 200) {
  //     document.getElementById("demo").innerHTML =
  //     this.responseText;
  //   }
  // };

  xhttp.onload = function() {
   var responseText = xhttp.responseText;
   console.log(responseText);
   // process the response.
  };

  xhttp.onerror = function() {
    console.log('There was an error!');
  };
    console.log(xhttp)

    //xhttp.withCredentials = true;

    //xhttp.open("GET", "http://localhost:4444", true);
    var data = {fname:"asdfasdf",lname:"assdo"}
    xhttp.send(data);
}



function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    console.log(url)
    xhr.open(method, url, true);


  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}
