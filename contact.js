//Set message after enter contact.
const msg = document.getElementById("msg");

const scriptURL = 'https://script.google.com/macros/s/AKfycbybO5beDGKD3HHj6hUFEVUz4tKGmoOxEHz6C9bust0iJntdizlRAMVeZ36GoRMfKExCUg/exec';
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})