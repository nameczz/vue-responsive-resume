<template>
	<div class="resume">
		<swipe>
			<swipe-item>
				<img src="./imgs/1.png" alt="elm01">
			</swipe-item>
			<swipe-item>
				<img src="./imgs/2.png" alt="elm01">
			</swipe-item>
			<swipe-item>
				<img src="./imgs/3.png" alt="elm01">
			</swipe-item>
			<swipe-item>
				<img src="./imgs/4.png" alt="elm01">
			</swipe-item>
			<swipe-item>
				<img src="./imgs/5.png" alt="elm01">
			</swipe-item>
			<swipe-item>
				<img src="./imgs/6.png" alt="elm01">
			</swipe-item>
		</swipe>
		<div class="desc">
			<ol>
				<li v-for="item in desc">
					{{item}}
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
import Swipe from '@/components/slider.vue'
import SwipeItem from '@/components/slider-item.vue'
export default {
	data() {
		return {
			desc: []
		}
	},
	created() {
		this.$http.get('/static/data.json').then((res) => {
			this.desc = res.data.czz.details.elma.desc
		})
	},
	components: {
		Swipe,
		SwipeItem
	}
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
	.desc
		margin-top: 1rem
		padding:1rem
		line-height: 1.6rem
		ol,li
			list-style: decimal
</style>
