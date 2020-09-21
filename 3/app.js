Vue.component('list-item', {
    template: '<li>{{ contents }}</li>',
    data() {
        return {
            contents: 'bar'
        }
    }
})

new Vue({
    el: '#example'
})