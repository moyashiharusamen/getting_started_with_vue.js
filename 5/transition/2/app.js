new Vue({
    el: '#app',
    data() {
        return {
            animationClass: 'bounce',
            isShown: false
        }
    },
    computed: {
        activeClass() {
            // 設定するクラスの値を計算する。
            // インプットフィールドの入力に応じて再計算される
            return `${this.animationClass} animated`
        }
    }
})