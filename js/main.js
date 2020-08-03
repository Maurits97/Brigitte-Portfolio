//all routes
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home, props: {showcase}
        },
        {
            path: '/werk',
            component: werk, props: {artworkOne, artworkTwo, artworkThree, artworkFour, artworkFive}
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
            path: '/werk/subonderwerp2',
            component: rozet, props: {artworkTwo}
        },
        {
            path: '/werk/subonderwerp3',
            component: bloemen, props: {artworkThree}
        },
        {
            path: '/werk/subonderwerp4',
            component: hand, props: {artworkFour}
        },
        {
            path: '/werk/subonderwerp5',
            component: lijnen, props: {artworkFive}
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

//Get year and set copyright
var d = new Date();
var year = d.getFullYear();

const footer = document.getElementById('footer');
footer.innerHTML = '&copy; Copyright ' + year + ', Brigitte Stark';

