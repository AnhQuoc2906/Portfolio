//Set message after enter contact.
function sendContact(lang){
    if(lang ==='en'){
        const msg_en = document.getElementById("msg_en");

        const scriptURL = 'https://script.google.com/macros/s/AKfycbybO5beDGKD3HHj6hUFEVUz4tKGmoOxEHz6C9bust0iJntdizlRAMVeZ36GoRMfKExCUg/exec';
        const form = document.forms['submit-to-google-sheet-en']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg_en.innerHTML = "Message sent successfully";
                    setTimeout(function(){
                        msg_en.innerHTML = ""
                    }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })
    } else if(lang==='vi'){
        const msg_vi = document.getElementById("msg_vi");

        const scriptURL = 'https://script.google.com/macros/s/AKfycbybO5beDGKD3HHj6hUFEVUz4tKGmoOxEHz6C9bust0iJntdizlRAMVeZ36GoRMfKExCUg/exec';
        const form = document.forms['submit-to-google-sheet-vi']
        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg_vi.innerHTML = "Message sent successfully";
                    setTimeout(function(){
                        msg_vi.innerHTML = ""
                    }, 5000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })
    }
}
