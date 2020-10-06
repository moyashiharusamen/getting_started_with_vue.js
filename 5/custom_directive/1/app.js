Vue.directive('fallback-image', {
    bind(el) {
        el.addEventListener('error', () => {
            // 画像のロードに失敗したら実行される処理
            el.src = 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image';
        });
    }
})

new Vue({
    el: '#app'
})