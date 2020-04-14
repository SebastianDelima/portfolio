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

    fetch('https://immense-anchorage-11617.herokuapp.com/visiteds', objectConfig)
    .then(res => res.json())
    .then(res => console.log(res))
   

})


