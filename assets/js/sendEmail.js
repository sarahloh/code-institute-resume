function sendMail(contactForm) {
    emailjs.send("gmail", "sarah", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
      function(response) {
          console.log("SUCCESS", response);
      },
      function(error) {
          console.log("FAILED", error);
      }
    );
    // console.log(contactForm.name.value);
    // console.log(contactForm.emailaddress.value);
    // console.log(contactForm.projectsummary.value);
}