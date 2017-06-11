<template>
	<div class="resume">
		<div>
			<img src="./resume.jpg" alt="2048图片">
		</div>
		<div class="desc">
			<ol>
				<li v-for="item in desc" v-if="desc.length > 0">
					{{item}}
				</li>
			</ol>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			desc: []
		}
	},
	created() {
		this.$http.get('/static/data.json').then((res) => {
			this.desc = res.data.czz.details.resume.desc
		})
	}
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
	.resume
		img
			width: 100%
		.desc
			padding: 0 1rem
			line-height: 1.4rem
			ol,li
				list-style: decimal
</style>
