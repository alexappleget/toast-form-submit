function sendContactInfo() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'your email goes here',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Entry",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}