Vue.directive('fallback-image', {
    bind(el, binding) {
        console.log('bind', binding);

        const once = binding.modifiers.once;

        el.addEventListener('error', function onError() {
            // 値として指定された no image の URL を img 要素の src 属性値として設定する
            el.src = binding.value;

            // once 修飾子が指定されている場合は、イベントリスナーを削除する
            if (once) {
                el.removeEventListener('error', onError)
            }
        });
    },
    update(el, binding) {
        console.log('update', binding);

        if (
            binding.oldValue !== binding.value &&
            binding.oldValue === el.src
        ) {
            el.src = binding.value;
        }
    }
})

const vm = new Vue({
    el: '#app',
    data() {
        return {
            altText: 'logo',
            noImageURL: 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
        }
    }
})