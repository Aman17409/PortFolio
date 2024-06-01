// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Thank you for your message!');
//     this.reset();
// });
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//         .then(function() {
//             alert('Thank you for your message!');
//         }, function(error) {
//             alert('Failed to send message, please try again later.');
//         });

//     this.reset();
// });
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector("#mail").addEventListener("click", () => {
  redirectToEmail("amansuman8541@gmail.com");
  console.log("hello");
});
function redirectToEmail(emailAddress) {
  window.location.href = "mailto:" + emailAddress;
}
document.querySelector("#call").addEventListener("click", () => {
    call("8541006570")
});
function call(number) {
  window.location.href = 'tel:' + number;
}

