document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/visiteds')
    .then(res => res.json())
    .then(visited => console.log(visited))
    console.log("im here")
})