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
            path: '/werk/Rozet',
            component: rozet, props: {artworkTwo}
        },
        {
            path: '/werk/Bloemen',
            component: bloemen, props: {artworkThree}
        },
        {
            path: '/werk/Hand',
            component: hand, props: {artworkFour}
        },
        {
            path: '/werk/Lijnen',
            component: lijnen, props: {artworkFive}
        },
        {
            path: '/werk/cirkels/1',
            component: cirkels1, props: {artworkOne}
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

//Get year and 
var d = new Date();
var year = d.getFullYear();

//set copyright in #footer
const footer = document.getElementById('footer');
footer.innerHTML = '<p>&copy; Copyright ' + year + ', Brigitte Stark</p>';