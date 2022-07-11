const YEAR = (new Date()).getFullYear()
const API = "https://0zynwo3qw4.execute-api.us-east-1.amazonaws.com/dev"

console.log("\u00A9 " + YEAR.toString() + " İnvestTurkey Şirketi")

$(document).ready(() => {
  try {
    $("#__YEAR")[0].innerHTML = YEAR.toString()
  } catch (e) {}
})
