    const form = document.querySelector("form");
    form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        const kata = form.istilah.value;
        const res = await fetch('/readPadanan',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                kata:kata
            })
        });
        const data = await res.json();
        const padanan = document.querySelector(".padanan")
        const isiPadanan = document.createElement("p");
        isiPadanan.textContent=data.padanan;
        padanan.appendChild(isiPadanan);
        if(data.pengertian){
            const headingPengertian = document.querySelector("#headingPengertian");
            const pengertian = document.querySelector("#pengertian");
            headingPengertian.style.display="flex";
            pengertian.textContent=data.pengertian;
        }
    });