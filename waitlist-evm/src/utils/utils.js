// Dynamically size the tracking and letter-spacing
// https://rsms.me/inter/dynmetrics/
export function setLetterSpacing(fontSize) {
  const a = -0.0223,
    b = 0.185,
    c = -0.1745;
  const tracking = a + b * Math.pow(Math.E, c * fontSize);
  return tracking.toFixed(3);
}

// Detect the input
export function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  this.setState({
    [name]: value,
  });
}

// Detect browser type
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://api.duckduckgo.com/?q=useragent&format=json",
  true
);

request.onload = function () {
  var data = JSON.parse(this.response);
  var isBrave = data["Answer"].includes("Brave");
  if (isBrave) {
    // console.log("is a brave browser");
  } else {
    // console.log("not brave browser");
  }
};

request.send();
