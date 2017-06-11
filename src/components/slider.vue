<template>
    <div class="slider">
        <div class="slider-items-wrap" :style="wrapStyle">
            <slot></slot>
        </div>
        <div class="slider-indicators">
            <div class="slider-indicator" v-for="n in nums" :class="{ 'is-active': n === index+1 }"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'slider',
    data() {
        return {
            ready: false,
            index: 0,
            timer: null,
            nums: 0,
            touchStart: {
                pageX: null,
                time: null
            }
        };
    },
    props: {
        auto: {
            type: Boolean,
            required: false,
            default: true
        },
        timeGap: {
            type: Number,
            required: false,
            default: 3000
        }
    },
    computed: {
        wrapStyle: function () {
            return {
                "transform": 'translateX(-' + this.index * 100 + '%)'
            }
        }
    },
    mounted() {
        this.ready = true;
        this.nums = this.$children.length;
        this.setTimer();
        this.$el.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.OnTouchStart(event.changedTouches[0].pageX);
        });
        this.$el.addEventListener('touchend', (event) => {
            this.OnTouchEnd(event.changedTouches[0].pageX);
        });
        const isSupportTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch;
        if (!isSupportTouch) {
            this.$el.addEventListener('mousedown', (event) => {
                event.preventDefault();
                this.OnTouchStart(event.pageX);
            });
            this.$el.addEventListener('mouseup', (event) => {
                this.OnTouchEnd(event.pageX);
            });
        }
    },
    destroyed() {
        this.clearTimer();
    },
    methods: {
        setTimer() {
            if (this.auto) {
                this.timer = setInterval(() => {
                    if (!this.userTouched) {
                        this.next();
                    }
                }, this.timeGap);
            }
        },
        clearTimer() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        next() {
            if (this.index == this.$children.length - 1) {
                this.index = 0;
            } else {
                this.index += 1;
            }
        },
        prev() {
            if (this.index == 0) {
                this.index = this.$children.length - 1;
            } else {
                this.index -= 1;
            }
        },
        OnTouchStart(pageX) {
            this.clearTimer();
            this.touchStart.pageX = pageX;
            this.touchStart.time = new Date().getTime();
        },
        OnTouchEnd(pageX) {
            if (new Date().getTime() - this.touchStart.time < 100 || Math.abs(pageX - this.touchStart.pageX) < 10) {
                this.$emit('sliderTap', { index: this.index });
                return;
            }
            if (pageX - this.touchStart.pageX < 0) {
                this.next();
            } else {
                this.prev();
            }
            this.setTimer();
        }
    }
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
.slider 
    width: 100%
    overflow: hidden
    position: relative
    .slider-items-wrap 
        position: relative
        display: flex
        flex-flow: row nowrap
        transform: translate(0, 0, 0)
        transition: transform .8s ease
        .slider-item 
            width: 100%
            flex-grow: 0
            flex-shrink: 0
        .is-active 
            display: block
            -webkit-transform: none
            transform: none
    .slider-indicators 
        position: absolute
        bottom: -10px
        left: 50%
        margin-bottom: 0.8rem
        z-index: 100
        -webkit-transform: translateX(-50%)
        transform: translateX(-50%)
        .slider-indicator 
            width: 8px
            height: 8px
            display: inline-block
            border-radius: 100%
            background: #000
            margin: 0 3px
        .is-active 
            background: #00d3ff

</style>