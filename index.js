
function changeNavColor() {

    let navBar = document.querySelector('#navBar')
    let prevScrollPos = 0

    window.addEventListener('scroll', () => {

        if((document.body.getBoundingClientRect()).top > prevScrollPos){
            navBar.id = "navBarScrolled"
            console.log("up")
        }else if(document.body.getBoundingClientRect().top === 0){
            navBar.id = "navBar"
        }
        else{
            console.log("sown")
            navBar.id = "navBar"
        }
        prevScrollPos = (document.body.getBoundingClientRect()).top;
    })
}

    changeNavColor()