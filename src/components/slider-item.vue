<template>
    <div :class="{'slider-item':true,'is-active':active}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'slide-item',
    data() {
        return {
            active: false
        }
    }
};
</script>
<style>
.slider-item img {
    width: 100%;
    display: block;
}
</style>
