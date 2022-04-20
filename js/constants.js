const YEAR = (new Date()).getFullYear()
const API = "https://sf7d6paxe6.execute-api.us-east-1.amazonaws.com/dev"

console.log("\u00A9 " + YEAR.toString() + " Paywake Corporation")

$(document).ready(() => {
  try {
    $("#__YEAR")[0].innerHTML = YEAR.toString()
  } catch (e) {}
})
