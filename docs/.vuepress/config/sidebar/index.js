//侧边栏
module.exports = {
	'/views/': [
		'',
		{
			title: '技术总结',
			collapsable: true,
			children: [
				'summary/sum_db_001',

			]
		},
		{
			title: '设计模式',
			collapsable: true,
			children: [
				'designPattern/design01',
				'designPattern/design02',
				'designPattern/design03',
				'designPattern/design04',
				'designPattern/design05',
				'designPattern/design06',
				'designPattern/design07',
				'designPattern/design08',
				'designPattern/design09',
				'designPattern/design10'
			]
		},
		{
			title: '数据结构和算法',
			collapsable: true,
			children: [
				'algorithm/algorithm01',
				'algorithm/algorithm02',
				'algorithm/algorithm03',
				'algorithm/algorithm04',
				'algorithm/algorithm05',
				'algorithm/algorithm06',
				'algorithm/algorithm07',
				'algorithm/algorithm08'
			]
		},
		{
			title: '规范',
			collapsable: true,
			children: [
				'specification/git',
				'specification/linux01'
			]
		},
		{
			title: '前端',
			collapsable: true,
			children: [
				'web/array_api',
				'web/http',
				'web/module',
				'web/js-json',
				'web/vue-communication',
				'web/utils'
			]
		},
		{
			title: '后端',
			collapsable: true,
			children: [
				'java/SSH',
				'java/swagger2',
				'java/ck_spring_001',
				'java/ck_spring_002',
				'java/ck_spring_003',
				'java/ck_spring_003',
				'java/sum_java_001'
			]
		},
		{
			title: '随笔',
			collapsable: true,
			children: [
				'essay/20190928'
			]
		}

	]
}
