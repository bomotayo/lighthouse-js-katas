const urlDecode = function(text) {
  // Put your solution here
    var obj = {};
    var arr = text.split("&");

    for(let i=0; i < arr.length; i++){
        obj[arr[i].split("=")[0]] = arr[i].split("=")[1].replace(/%20/ig, ' ');
    }

	return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"