<template>
	<div class="tabs">
		<div class="tab" v-for="(item, index) in allTab" @click="nav(url[index], index)" :class="{active: num===index}">
            {{item}}
        </div>
	</div>
</template>

<script>

export default {
    props: {
        allTab: {
            type: Array,
            required: true
        },
        url: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            num: 0
        }
    },
    created () {
        this.$router.push({name: 'personal'})
    },
    methods: {
        nav(url, index) {
            this.num = index;
            this.$router.push({name: url});
        }
    }
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
    @import '~common/stylus/mixin'

    .tabs
        display: flex
        align-items: center
        text-align: center
        border-1px(#e9e9e9)
        .tab
            flex: 1
            padding: 0.2rem 0
            cursor: pointer
            border-right: 1px solid #e9e9e9
            font-size: 0.8rem
        .active
            background: #e9e9e9

</style>
