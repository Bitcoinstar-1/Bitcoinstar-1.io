const verifyEmail = (obj) => {
  const email = obj.value.trim()
  if (email.length && email.includes("@") && email.includes(".")) {
    obj.removeAttribute("invalid")
    return email
  }
  obj.setAttribute("invalid", "true")
  return false
}

const verifyName = (obj) => {
  const name = obj.value.trim()
  if (name.length) {
    obj.removeAttribute("invalid")
    return name
  }
  obj.setAttribute("invalid", "true")
  return false
}

const invest = () => {
  const onComplete = () => {
    $(".splash")[0].innerHTML = "<h1>We are <span class='gradient-2'>changing</span> the way people wake up.</h1><br><h3>Your submission has been received! We'll be in touch.</h3>"
  }
  if (verifyEmail($("#email")[0]) && verifyName($("#name")[0])) {
    $.ajax({
      url: (API + "/invest"),
      type: "PUT",
      data: {
        email: $("#email")[0].value.trim(),
        name: $("#name")[0].value.trim(),
        name: ($("#equity")[0].value || "").trim(),
      },
      success: (data) => {
        onComplete()
      },
      error: (data) => {
        console.log(data)
        onComplete()
      }
    })
  }
}