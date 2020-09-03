//adding artwork steps:
//Step 0: remember the number of the artwork (example: 2018032)
//Step 1: Go to artwork.js
//Step 2: Add artwork to concerned art theme
//Step 3: Go to ArtworkInfo.js
//Step 4: add artwork details to the object, leave index blank if no info.

//all routes
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home, props: {showcase}
        },
        {
            path: '/werk',
            component: werk, props: {artworkOne, artworkTwo, artworkThree, artworkFour, artworkFive, artworkSix}
        },
        {
            path: '/overmij',
            component: overmij, props: {overmijText}
        },
        {
            path: '/contact',
            component: contact, props: {contactText}
        },
        {
            path: '/werk/cirkels',
            name: 'cirkels',
            component: cirkels, 
            props: {artworkOne}
        },
        {
            path: '/werk/rozet',
            name: 'rozet',
            component: rozet, 
            props: {artworkTwo}
        },
        {
            path: '/werk/bloemen',
            name: 'bloemen',
            component: bloemen, 
            props: {artworkThree}
        },
        {
            path: '/werk/hand',
            name: 'hand',
            component: hand, 
            props: {artworkFour}
        },
        {
            path: '/werk/lijnen',
            name: 'lijnen',
            component: lijnen, 
            props: {artworkFive}
        },
        {
            path: '/werk/sgraffito',
            name: 'sgraffito',
            component: sgraffito, 
            props: {artworkSix}
        },
        {
            path: '/werk/:work/:image',
            component: detail, 
            props: {allArtworkInfo}
        },
    ]
})

var app = new Vue({
    router,
    el: '#app',
    data: {
    },
}).$mount('#app') 


//adding 'class active' so that the nav item is bold when clicked.
$(".nav__item").click(function(){
    $(".nav__item").removeClass('active');//to make sure there will be only one with the class 'active'
    $(this).addClass('active');
  });

//Get year
var d = new Date();
var year = d.getFullYear();

//set copyright in #footer
const footer = document.getElementById('footer');
footer.innerHTML = '<p>&copy; Copyright ' + year + ', Brigitte Stark</p>';