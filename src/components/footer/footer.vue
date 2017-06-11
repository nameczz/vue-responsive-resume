<template>
    <div class="footer">
        <p class="text-wrapper">
            <ol v-if="selfDesc.length > 0">
                <li v-for="text in selfDesc">
                    {{ text }}
                </li>
            </ol>
        </p>
        <div class="img-wrapper">
            <img src="./pc.png">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selfDesc: []
        }
    },
    created() {
        this.$http.get('/static/data.json').then((res) => {
            this.selfDesc = res.data.czz.texts
        })
    }
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
    .footer
        display: flex
        align-items: center
        background: #00d3ff
        .text-wrapper
            flex: 2
            padding:1rem
            ol,li
                list-style: decimal
        .img-wrapper
            flex: 1
            img
                width: 100%

</style>
