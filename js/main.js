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
            component: home, 
            props: {showcase}
        },
        {
            path: '/exposities',
            component: exposities, 
            props: {expositiesText}
        },
        {
            path: '/mijnwerk',
            component: werk, 
            props: {artworkZero, artworkOne, artworkTwo, artworkThree, artworkFour, artworkFive, artworkSix, artworkSeven, werkboekjeOne, werkboekjeTwo, werkboekjeThree, werkboekjeFour}
        },
        {
            path: '/overmij',
            component: overmij, 
            props: {overmijText}
        },
        {
            path: '/contact',
            component: contact, 
            props: {contactText}
        },
        {
            path: '/mijnwerk/ramen',
            name: 'ramen',
            component: ramen, 
            props: {artworkZero}
        },
        {
            path: '/mijnwerk/lijnen',
            name: 'lijnen',
            component: lijnen, 
            props: {artworkOne}
        },
        {
            path: '/mijnwerk/rozet',
            name: 'rozet',
            component: rozet, 
            props: {artworkTwo}
        },
        {
            path: '/mijnwerk/windroos',
            name: 'windroos',
            component: windroos, 
            props: {artworkThree}
        },
        {
            path: '/mijnwerk/boomstam',
            name: 'boomstam',
            component: boomstam, 
            props: {artworkFour}
        },
        {
            path: '/mijnwerk/hand',
            name: 'hand',
            component: hand, 
            props: {artworkFive}
        },
        {
            path: '/mijnwerk/driehoekenvierkant',
            name: 'driehoekenvierkant',
            component: driehoekenvierkant, 
            props: {artworkSix}
        },
        {
            path: '/mijnwerk/cirkel',
            name: 'cirkel',
            component: cirkel, 
            props: {artworkSeven}
        },
        {
            path: '/mijnwerk/dekrachtvanimperfectie',
            name: 'dekrachtvanimperfectie',
            component: dekrachtvanimperfectie, 
            props: {werkboekjeOne}
        },
        {
            path: '/mijnwerk/foutjes',
            name: 'foutjes',
            component: foutjes, 
            props: {werkboekjeTwo}
        },
        {
            path: '/mijnwerk/sgraffitos',
            name: 'sgraffitos',
            component: sgraffitos, 
            props: {werkboekjeThree}
        },
        {
            path: '/mijnwerk/droedelen',
            name: 'droedelen',
            component: droedelen, 
            props: {werkboekjeFour}
        },
        {
            path: '/mijnwerk/:work/:image',
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