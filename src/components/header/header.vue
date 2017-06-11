<template>
	<div class="header">
		<div class="content">
			<div class="avatar">
				<img src="./img/avatar.png" alt="lost">
			</div>
			<div class="description">
				<ul v-if="infos.description">
					<h1>WHO I AM</h1>
					<li v-for="item in infos.description">
						{{ item }}
					</li>
				</ul>
			</div>
			<div class="contact">
				<h1>CONTACT</h1>
				<ul v-if="infos.contact">
					<li v-for="(item, key) in infos.contact">
						{{ key }}: {{ item }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			infos: {}
		};
	},
	created() {
		this.$http.get('/static/data.json').then((res) => {
			this.infos = res.data.czz;
			console.log(this.infos.length)
		})
	},
	components: {
	}
};
</script>

<style lang="stylus" rel='stylesheet/stylus'>
	.header
		background: #00d3ff
		padding: 0.6rem
		.content
			display: flex
			margin: 0 auto
			color: #3e484a
			max-width: 992px
			.avatar
				position: relative
				flex: 1
				text-align: center
				img
					max-width:182px
					width: 80%
			.description
				flex: 1
			.contact
				flex: 1
				white-space: nowrap
			h1
				font-size: 1rem
			li
				margin-bottom: 0.4rem
				font-size: 0.8rem
</style>
