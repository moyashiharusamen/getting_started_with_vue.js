const counterButton = Vue.extend({
    template: '<span>{{counter}}個 <button @click="addToCart">追加</button></span>',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addToCart() {
            this.counter += 1;
            this.$emit('increment'); // increment カスタムイベントの発火
        }
    }
})

new Vue({
    el: '#fruits-counter',
    components: {
        'counter-button': counterButton
    },
    data: {
        total: 0, // カート内の合計商品数
        fruits: [
            { name: '梨' },
            { name: 'イチゴ' }
        ]
    },
    methods: {
        incrementCartStatus() {
            this.total += 1;
        }
    }
})