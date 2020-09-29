const User = {
    template:
    `<div class="user">
        <h2>ユーザーIDは {{ $route.params.userId }} です。</h2>
        <router-link to="/user/${$route.params.userId}/profile">ユーザーのプロフィールページを見る</router-link>
        <router-link to="/user/${$route.params.userId}/posts">ユーザーの投稿ページを見る</router-link>
        <router-view></router-view>
    </div>`
};

// ユーザー詳細ページ内で部分的に表示されるユーザーのプロフィールページ
const UserProfile = {
    template:
    `<div class="user-profile">
        <h3>こちらはユーザー {{ $route.params.userId }} のプロフィールページです。</h3>
    </div>`
};

// ユーザー詳細ページ内で部分的に表示されるユーザーの投稿ページ
const UserPosts = {
    template:
    `<div class="user-posts">
        <h3>こちらはユーザー {{ $route.params.userId }} の投稿ページです。</h3>
    </div>`
};

const router = new VueRouter({
    routes: [
        {
            path: '/user/:userId',
            name: 'user',
            component: User,
            children: [
                {
                    // /user/:userId/profile がマッチした時に
                    // UserProfile コンポーネントは User コンポーネントの <router-view> 内部でレンダリングされる
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // /user/:userId/posts がマッチした時に
                    // UserPosts コンポーネントは User コンポーネントの <router-view> 内部でレンダリングされる
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})