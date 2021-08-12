fetchData(process.argv[2]);

const fund = [
  {
    name: "B-INCOMESSF",
    index: 1
  },
  {
    name: "BM70SSF",
    index: 5
  },
  {
    name: "BEQSSF",
    index: 9
  },
  {
    name: "B-FUTURESSF",
    index: 13
  }
];

function fetchData(nameNav) {
  console.log(nameNav);
  const request = require("request");

  request(
    {
      headers: {
        accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        cookie: "hasCookie=true"
      },
      uri: "https://codequiz.azurewebsites.net",
      method: "GET"
    },
    function (err, res, body) {
      let one = body.split("<table>");
      let two = one[1].split("</table>");
      let three = two[0].split("</th></tr>");

      let navData = three[1].split("</td><td>");

      let obj = fund.find((element) => element.name == nameNav);
      console.log(navData[obj.index]);
    }
  );
}
