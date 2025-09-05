var navbar = document.querySelector("nav ul");
var togglebtn = document.querySelector("#togglebtn");
var bg_overlay_shadow = document.querySelector(".bg-overlay-shadow");


togglebtn.addEventListener(
    "click",
    function(){
        navbar.classList.toggle("open");
        togglebtn.classList.toggle("fa-xmark");
        bg_overlay_shadow.classList.add("done")
    }
)

bg_overlay_shadow.addEventListener(
    "click",
    function(){
        navbar.classList.toggle("open");
        togglebtn.classList.toggle("fa-xmark");
        bg_overlay_shadow.classList.remove("done")
    }
)

document.addEventListener(
    "scroll",
    function(){
        if(window.scrollY > 63) {
            document.body.classList.add("sticky")
        }else{
            document.body.classList.remove("sticky")
        }
    }
)








$('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]



});



var btclick = document.querySelectorAll(".bt-click");
var tabcontentmenu = document.querySelectorAll(".tab-content-menu")


btclick[0].classList.add("bt-click-color");
btclick.forEach(

    function (btn, index) {

        btn.addEventListener(
            "click",
            function () {
                tabcontentmenu.forEach(
                    
                    function (value, i) {
                        
                        if (index == i) {
                            
                    
                            tabcontentmenu[i].classList.add("tab-show")
                            btclick[i].classList.add("bt-click-color")
                            

                        } else {

                            tabcontentmenu[i].classList.remove("tab-show")
                            btclick[i].classList.remove("bt-click-color")



                        }

                    }

                )

            }

        )

    }

)
