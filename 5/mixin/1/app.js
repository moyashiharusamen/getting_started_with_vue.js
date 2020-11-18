// ミックスインの定義
const Sharable = {
    data() {
        return {
            _isProcessing: false
        }
    },
    created() {
        console.log('Sharable ミックスインのフックが呼ばれました')
    },
    methods: {
        share() {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true
            // 実際はここで SNS の SDK の API を呼び出す
            setTimeout(() => {
                window.alert('シェアしました')
                this._isProcessing = false
            }, 300)
        }
    }
}

const IconShareButton = {
    mixins: [Sharable],
    created() {
        console.log('IconShareButton のフックが呼ばれました')
    },
    template: `
        <button @click="share"><i class="fas fa-share-square"></i></button>
    `
}

const TextShareButton = {
    mixins: [Sharable],
    created() {
        console.log('TextShareButton のフックが呼ばれました')
    },
    template: `
        <button @click="share">{{ buttonLabel }}</button>
    `,
    data() {
        return {
            buttonLabel: 'シェアする'
        }
    }
}

new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
})