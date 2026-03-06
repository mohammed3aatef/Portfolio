function showMessage(message, type) {
  resMes.innerText = message;
  resMes.className = "col-6 alert mt-3 text-center fw-bold alert-" + type;
  resMes.style.display = "block";
  resMes.style.opacity = "1";

  setTimeout(function () {
    resMes.style.transition = "0.5s";
    resMes.style.opacity = "0";

    setTimeout(function () {
      resMes.style.display = "none";
      resMes.style.opacity = "1";
    }, 500);
  }, 3000);
}

myForm.onsubmit = function (ev) {
  ev.preventDefault();

  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var phone = document.querySelector('input[name="phone"]').value;
  var message = document.querySelector("textarea").value;

  if (!name || !email || !phone || !message) {
    showMessage("All fields are required!", "danger");
    return;
  }

  $.post("functions/add_message.php", {
    name,
    email,
    phone,
    message,
  })
    .done(function (res) {
      showMessage(res, "success");
      myForm.reset();
    })
    .fail(function () {
      showMessage("Server error. Please try again.", "danger");
    });
};
