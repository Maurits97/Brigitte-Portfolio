//all routes
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: home, props: {showcase}
        },
        {
            path: '/galerij',
            component: galerij
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
            path: '/galerij/subonderwerp1',
            component: subonderwerp1, props: {artworkOnderwerp1}
        },
        {
            path: '/galerij/subonderwerp2',
            component: subonderwerp2
        },
        {
            path: '/galerij/subonderwerp3',
            component: subonderwerp3
        },
        {
            path: '/galerij/subonderwerp4',
            component: subonderwerp4
        },
        {
            path: '/galerij/subonderwerp5',
            component: subonderwerp5
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
