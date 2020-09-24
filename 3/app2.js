Vue.component('user-login', {
    template: '#login-template',
    data() {
        return {
            userid: '',
            password: ''
        }
    },
    methods: {
        login() {
            auth.login(this.userid, this.password)
        }
    }
})

const auth = {
    login(id, pass) {
        alert(`userid: ${id}\npassword: ${pass}`);
    }
}

new Vue({
    el: '#login-example'
});