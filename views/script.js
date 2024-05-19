const form = document.querySelector("form");
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const kata = form.kata.value;
    const res = await fetch('/readPadanan',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            kata:kata
        })
    });
    const data = await res.json();
    console.log(data);
    return;
})