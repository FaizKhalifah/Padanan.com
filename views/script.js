    const form = document.querySelector("form");
    form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        const kata = form.istilah.value.trim().toLowerCase();
        const res = await fetch('/readPadanan',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                kata:kata
            })
        });
        const data = await res.json();
        const isiPadanan = document.querySelector("#isiPadanan");
        if(data.padanan){
            isiPadanan.textContent=data.padanan;
        }else{
            isiPadanan.textContent=data;
        }
        const headingPengertian = document.querySelector("#headingPengertian");
        const pengertian = document.querySelector("#pengertian");
        if(data.pengertian){
            headingPengertian.style.display="flex";
            pengertian.textContent=data.pengertian;
        }else{
            headingPengertian.style.display="none";
            pengertian.textContent="";
        }
    });