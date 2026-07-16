function revealSections(){

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section =>{

        const windowHeight = window.innerHeight;

        const elementTop = section.getBoundingClientRect().top;

        const visible = 120;

        if(elementTop < windowHeight - visible){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// Back to Top Button

const topButton = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});