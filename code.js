const menuBtn = document.querySelectorAll('.menu-btn');
const menu = document.querySelectorAll('.menu');
const links = document.querySelectorAll('.menu li');


menuBtn.forEach(btn => {
    btn.addEventListener('click', sideNavToggle);
});

function sideNavToggle() {
    //animation delay
    let delay = 100;
    //Toggle open class
    menu.classList.toggle('menu-open');

    //sidenav link slide animations
    setTimeout(() => {
        //Reset animations after all of them end
        resetAnimations();
    }, delay * (links.length + 1));

    //add animation to link

    links.forEach(link => {
        //opacity
        link.style.opacity = "0";
        //animation
        link.style.animation =
            "slideIn 400ms ease-in-out forwards";
        //Delay
        link.style.animationDelay = delay + "ms";
        //Increase delay for each link
        delay += 100;
    });
    //reset animation so that they can be started again

    function resetAnimations() {
        //select all links
        links.forEach(link => {
            //remove animations
            link.style.animation = "none";
            //set opacity back to default
            link.style.opacity = "1";
        });
    }

}