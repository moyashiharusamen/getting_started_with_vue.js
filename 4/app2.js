const UserList = {
    template: '#user-list'
};

const router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>トップページです。</div>'
            }
        },
        {
            path: '/users',
            component: UserList
        }
    ]
});

const app = new Vue({
    el: '#app',
    router: router
})