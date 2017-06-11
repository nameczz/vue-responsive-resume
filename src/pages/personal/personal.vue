<template>
	<div class="personal">
		<div class="desc">
			<h1>技术栈</h1>
			<ol>
				<li v-for="item in desc">
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
			desc: ['1.vue全家桶: Vuex, Vue-router,Vue','2.HTML/CSS/HTML5/CSS3', '3.Git常用命令', '4.熟练使用stylus前端预编译工具' ,'5.nodejs: 了解express,会简单操作mongodb数据库,接口返回等', '6.Jquery', '7.具有英语文档阅读能力', '8.P.S.是一个很好沟通，脾气好的人。：）']
		}
	},
	created() {
	}
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
	.personal
		.desc
			padding: 1rem 0
			h1
				font-size: 1.8rem
				padding-left: 1rem
				border-left: 4px solid #e60
			ol,li
				list-style: decimal
			li
				line-height: 3rem
				font-size: 1.4rem
				padding-left: 1rem
</style>
