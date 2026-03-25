const toast = document.querySelector(".toast");
const toastFailed = document.querySelector(".toast5")
const form = document.querySelector(".formbody")
const toast2 = document.querySelector(".toast2")
const playbtns = document.querySelectorAll(".btns") 
// const touchbtn = document.querySelector(".touchbtn")
const toast3 = document.querySelector(".toast3")
const form22 = document.querySelector(".form22")
const subsButton = document.querySelector(".subs")
const subInput = document.querySelector(".Subscribe")
const toast4 = document.querySelector(".toast4")
const logo = document.querySelector(".logo")

const heroBtn = document.querySelector(".heroBtn")
heroBtn.addEventListener("click" , ()=>{
    document.querySelector("#TEXT").scrollIntoView({behavior:"smooth"})
})

form.addEventListener("submit" , (e)=>{

    e.preventDefault()

    const name = document.querySelector(".fnamess")
    const email = document.querySelector(".emailss")
    const phone = document.querySelector(".phoness")

    console.log(name , email)

    if (name.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === ""){
        toastFailed.classList.add("show")

        setTimeout(()=>{
            toastFailed.classList.remove("show")
        },3000)
        return;
    }

    toast.classList.add("show");

    setTimeout(()=>{
        toast.classList.remove("show");
    },3000)

    form.reset()
})

playbtns.forEach(btn =>{
    btn.addEventListener("click" , (e)=>{
        e.preventDefault()

        toast2.classList.add("show")
        setTimeout(()=>{
            toast2.classList.remove("show")
        },3000)
    })
})

form22.addEventListener("submit" , (e)=>{
    e.preventDefault()

    toast3.classList.add("show")
    setTimeout(()=>{
        toast3.classList.remove("show")
    },3000)

    e.target.reset();
})

subsButton.addEventListener("click" , (e)=>{
    e.preventDefault()

    toast4.classList.add("show")
    setTimeout(()=>{
        toast4.classList.remove("show")
    },3000)

    subInput.value = ""
})

logo.addEventListener("click", (e) => {
    e.preventDefault();
    const homeSection = document.querySelector("#HERO");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
});