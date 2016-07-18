"use strict";
module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				banner:'/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
			},
			/*最小化、混淆、合并javascript 文件*/
			target:{
				files:{
					'js/all.min.js':['js/all.js']
				}
			},
			minjs:{//最小化、混淆所有js/ 目录下的javascript文件
				files:[{
					expand:true,
					cwd:'js/',//源文件目录
					src:['app.js','!**/*.min.js'],//所有的js文件
					dest:'build/'//输出到此目录下
				}]
			}
		},
		watch:{
			/*监控文件变化并执行相应任务*/
			img:{
				files:['img/**/*.{png,jpg,jpeg}'],
				options:{
					livereload:true
				}
			},
			css:{
				options:{
					event:['changed','added'],
					livereload:true
				},
				files:['css/**/*.css']
			},
			js:{
				options:{
					livereload:true
				},
				files:['js/**/*.js']
			},
			html:{
				options:{
					livereload:true
				},
				files:['*.html']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['uglify:minjs','watch']);
	grunt.registerTask('target',['uglify:target']);
	grunt.registerTask('minjs',['uglify:minjs']);
};