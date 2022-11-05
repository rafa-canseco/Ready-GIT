function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message :document.getElementById("message").value,
        subject :document.getElementById("subject").value
    }
    emailjs.send("service_sj0o61e","template_nx0nqbb", params).then(function (res) {
        alert("Mensaje enviado correctamente!" + res.status);
    })
    
    }