const userData = [
    {
        id: 1,
        name: 'Ishii Takuro',
        description: '遊撃手'
    },
    {
        id: 2,
        name: 'Haru Toshio',
        description: '中堅手'
    }
]

// JSON を返す関数
// この関数を用いて擬似的に web API 経由で情報を取得したようにする
const getUsers = (callback) => {
    setTimeout(() => {
        callback(null, userData)
    }, 1000);
};

const getUser = (userId, callback) => {
    setTimeout(() => {
        const filterdUsers = userData.filter((user) => {
            return user.id === parseInt(userId, 10);
        });

        callback(null, filterdUsers && filterdUsers[0])
    });
};

const UserList = {
    // HTML 上の script タグの id を指定する
    template: '#user-list',
    data() {
        return {
            loading: false,
            users() { return {} }, // 初期の空配列
            error: null
        }
    },

    // 初期化時にデータを取得する
    created() {
        this.fetchData()
    },

    // $route の変更を watch することでルーティングが変更された時に再度データを取得
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.loading = true;

            // 取得したデータの結果を users に格納する
            // Function.prototype.bind は this のスコープを渡すために利用
            getUsers(((err, users) => {
                this.loading = false;

                if (err) {
                    this.error = err.toString();
                } else {
                    this.users = users;
                }
            }).bind(this))
        }
    }
};

const UserDetail = {
    template: '#user-detail',
    data() {
        return {
            loading: false,
            user: null,
            error: null
        }
    },

    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.loading = true;

            getUser(this.$route.params.userId, ((err, user) => {
                this.loading = false;

                if (err) {
                    this.error = err.toString();
                } else {
                    this.user = user;
                }
            }).bind(this));
        }
    }
}

const postUser = (params, callback) => {
    setTimeout(() => {
        params.id = userData.length + 1;
        userData.push(params);
        callback(null, params);
    }, 1000)
};

const UserCreate = {
    template: '#user-create',
    data() {
        return {
            sending: false,
            user: this.defaultUser(),
            error: null
        }
    },

    methods: {
        defaultUser() {
            return {
                name: '',
                description: ''
            }
        },

        createUser() {
            if (this.user.name.trim() === '') {
                this.error = 'Name は必須です';

                return;
            }

            if (this.user.description.trim() === '') {
                this.error = 'Description は必須です'

                return;
            }

            postUser(this.user, ((err, user) => {
                this.sending = false;

                if (err) {
                    this.error = err.toString();
                } else {
                    this.error = null;
                    this.user = this.defaultUser();
                    alert('新規ユーザーが登録されました');
                    this.$router.push('/users');
                }
            }).bind(this))
        }
    }
}

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
        },
        { // ルート定義の追加
            path: '/users/new',
            component: UserCreate
        },
        {
            path: '/users/:userId',
            component: UserDetail
        }
    ]
});

const app = new Vue({
    el: '#app',
    router: router
})