const redirectRouter = new VueRouter({
    routes: [
        { path: '/a', redirect: '/b' },
        { path: '/b', component: B },
        { path: '/notfound', compontn: NotFound },
        // 現在の URL が定義したルートのいずれにもマッチしなかった時に /notfound に遷移する
        { path: '*', redirect: '/notfound' }
    ]
});

const aliasRouter = new VueRouter({
    routes: [
        { path: '/a', component: A, alias: '/b' },
        { path: '/c', component: C, alias: ['/d', '/e'] }
    ]
});