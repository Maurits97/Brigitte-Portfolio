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
            component: cirkels, props: {artworkOne}
        },
        {
            path: '/werk/rozet',
            component: rozet, props: {artworkTwo}
        },
        {
            path: '/werk/bloemen',
            component: bloemen, props: {artworkThree}
        },
        {
            path: '/werk/hand',
            component: hand, props: {artworkFour}
        },
        {
            path: '/werk/lijnen',
            component: lijnen, props: {artworkFive}
        },
        {
            path: '/werk/sgraffito',
            component: sgraffito, props: {artworkSix}
        },
        {
            path: '/werk/cirkels/one',
            component: cirkelsDetail, props: {artworkOne}
        },
        {
            path: '/werk/cirkels/two',
            component: cirkelsDetail, props: {artworkOne}
        },
        {
            path: '/werk/cirkels/three',
            component: cirkelsDetail, props: {artworkOne}
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