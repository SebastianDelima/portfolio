document.addEventListener('DOMContentLoaded', ()=>{
    
    let objectConfig = {
        method:"POST",
        headers: {
    
            'Content-Type': 'application/json',
            "Accept": 'application/json'
    
        },
        body: JSON.stringify({
            
           times: 1
    
        })
    }

    fetch('http://localhost:3000/visiteds', objectConfig)
    .then(res => res.json())
    .then(res => console.log(res))
   
    console.log(window.location.origin )

})


