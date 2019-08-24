<template>
	<view class="main-container">
		<view class="header">
			<scroll-view scroll-x="true" :scroll-left="tabPosition">
				<text class="swiper-tab-item" data-index='0' v-bind:class="currentTab==0?'active':''" @click="clickTab($event)">订阅</text>
				<text class="swiper-tab-item" data-index='1' v-bind:class="currentTab==1?'active':''" @click="clickTab($event)">头条</text>
				<text class="swiper-tab-item" data-index='2' v-bind:class="currentTab==2?'active':''" @click="clickTab($event)">热门</text>
				<text class="swiper-tab-item" data-index='3' v-bind:class="currentTab==3?'active':''" @click="clickTab($event)">游戏</text>
				<text class="swiper-tab-item" data-index='4' v-bind:class="currentTab==4?'active':''" @click="clickTab($event)">科技</text>
				<text class="swiper-tab-item" data-index='5' v-bind:class="currentTab==5?'active':''" @click="clickTab($event)">影视</text>
				<text class="swiper-tab-item" data-index='6' v-bind:class="currentTab==6?'active':''" @click="clickTab($event)">娱乐</text>
				<text class="swiper-tab-item" data-index='7' v-bind:class="currentTab==7?'active':''" @click="clickTab($event)">订阅</text>
				<text class="swiper-tab-item" data-index='8' v-bind:class="currentTab==8?'active':''" @click="clickTab($event)">头条</text>
				<text class="swiper-tab-item" data-index='9' v-bind:class="currentTab==9?'active':''" @click="clickTab($event)">热门</text>
				<text class="swiper-tab-item" data-index='10' v-bind:class="currentTab==10?'active':''" @click="clickTab($event)">游戏</text>
				<text class="swiper-tab-item" data-index='11' v-bind:class="currentTab==11?'active':''" @click="clickTab($event)">科技</text>
				<text class="swiper-tab-item" data-index='12' v-bind:class="currentTab==12?'active':''" @click="clickTab($event)">影视</text>
				<text class="swiper-tab-item" data-index='13' v-bind:class="currentTab==13?'active':''" @click="clickTab($event)">娱乐</text>
				<text class="swiper-tab-item" data-index='14' v-bind:class="currentTab==14?'active':''" @click="clickTab($event)">订阅</text>
				<text class="swiper-tab-item" data-index='15' v-bind:class="currentTab==15?'active':''" @click="clickTab($event)">头条</text>
				<text class="swiper-tab-item" data-index='16' v-bind:class="currentTab==16?'active':''" @click="clickTab($event)">热门</text>
				<text class="swiper-tab-item" data-index='17' v-bind:class="currentTab==17?'active':''" @click="clickTab($event)">游戏</text>
				<text class="swiper-tab-item" data-index='18' v-bind:class="currentTab==18?'active':''" @click="clickTab($event)">科技</text>
				<text class="swiper-tab-item" data-index='19' v-bind:class="currentTab==19?'active':''" @click="clickTab($event)">影视</text>
				<text class="swiper-tab-item" data-index='20' v-bind:class="currentTab==20?'active':''" @click="clickTab($event)">娱乐</text>

			</scroll-view>
		</view>

		<view class="publish-content">
			<swiper :current="currentTab" duration="250" @change="swiperTab" style="height: 100%;">
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view @click="deleteItem">删除</view>
								<button open-type="share">分享</button>
								<view @click="shareItem">分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>

					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>
						<view class="item">
							<view class="item-header">
								<text class="essayName">专业IOS 修屏幕师傅</text>
								<text class="publish-date">发布于03.17</text>
							</view>
							<view class="item-content">
								<view class="content">
									岗位职责:
									职位描述岗位职责在项目经理的带领下，从事公司WEB项目的前端开发1配合UI设计师和产品策划人员研究并改善用户体验；2与后端工程师及其他开发人员完成前端页面开发、功能实现与后期维护，不断优化完善解决方案；3根据项目经理要求，高效完成前端页面的开发工作。任职要求1精通DIVCSS和W3C标准；2熟练掌握Javascript，熟练使用js编写面向对象的应用程序；3熟悉各浏览器的差异、原理，精通jQuery等JS框架；4熟悉针对主流浏览器的代码兼容及优化；5熟悉ReactjsVuejs等主流框架中的任意一种，可以使用less或sass进行前端开发，了解webpack、gulp等构建工具配置和使用.
								</view>
							</view>
							<view class="item-btn">
								<view>删除</view>
								<view>分享</view>
								<view>刷新</view>
							</view>
						</view>


					</scroll-view>
				</swiper-item>
			</swiper>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentTab: 0,
				showTab: true,
				windowHeight: 0,
				windowWidth: 0,
				tabPosition: 0
			}
		},
		onLoad: function() {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight;
					this.windowWidth = res.windowWidth;
					console.log(this.windowHeight);
					console.log(this.windowWidth);
				}
			})
		},
		//分享按钮事件处理;
		onShareAppMessage: function(res) {
			uni.showShareMenu({
				withShareTicket:true,
				success:function(res){
					console.log('成功');
					console.log(res);
				},
				fail:function(res){
					console.log('你似不似龙鸣');
					console.log(res);
				}
			})
			return {
				title:'你浓郁的腿毛,是我一生的信仰',
				path:'/pages/index/index',
				imageUrl:'/static/foothair.jpg'
			}
			
		},
		methods: {
			//滑动切换选项卡;
			swiperTab: function(e) {
				this.currentTab = e.detail.current;
				let singleNavWidth = this.windowWidth / 7;
				this.tabPosition = (this.currentTab - 2) * singleNavWidth;
			},
			//点击切换选项卡;
			clickTab: function(event) {
				this.currentTab = event.currentTarget.dataset.index;
			},
			scroll: function(e) {
				console.log(e);
				let y = Math.round(e.detail.deltaY);
				if (y > 0) {
					if (y >= 10) {
						this.showTab = true;
					}
				} else if (y < 0) {
					if (y <= -10) {
						this.showTab = false;
					}
				}
				console.log(y);
			},
			scrollToupper: function(e) {
				console.log('滚动到顶部');
				console.log(e);
			},
			deleteItem: function() {
				uni.showModal({
					title: '操作提示',
					content: '删除后不可恢复,是否删除?',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '加载中,请稍后...'
							})
							//调用删除接口,若返回有效数据,则隐藏加载状态,刷新页面;

							//刷新页面;

							//隐藏加载状态;
							uni.hideLoading();
						}
					}
				})
			},
			shareItem: function() {
				uni.showShareMenu({
					withShareTicket:true,
					success:function(res){
						console.log('成功');
						console.log(res);
					},
					fail:function(res){
						console.log('你似不似龙鸣');
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
	}

	.main-container {
		padding: 0;
		background-color: #F2F2F2;
		height: 100%;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 100upx;
		background-color: #FFFFFF;
		position: fixed;
		white-space: nowrap;
		z-index: 100;
		width: 100%;
	}

	.header text {
		font-size: 32upx;
		display: inline-block;
		margin: 0 24upx;
	}

	.publish-content {
		padding-top: 100upx;
		height: 100%;
		box-sizing: border-box;

	}

	.swiper-tab-item {
		font-size: 30upx;
		padding: 10upx 0;
	}

	.active {
		color: rgb(0, 160, 233);
		border-bottom: rgb(0, 160, 233) solid 5upx;
	}

	.item {
		background-color: #FFFFFF;
		padding: 0 24upx;
		margin: 10upx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.item-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0;
		width: 100%;
	}

	.item-header .essayName {
		font-size: 34upx;
		font-weight: bold;
	}

	.item-header .publish-date {
		color: rgb(85, 85, 85);
		font-size: 28upx;
	}

	.item-content {
		background-color: #FFFFFF;
		padding-bottom: 30upx;
		border-bottom: 3upx solid #F2F2F2;
		display: -webkit-box;
		font-size: 28upx;
		color: #000000;
		line-height: 50upx;
		word-break: break-all;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item-content .content {
		font-size: 30upx;
		padding: 15upx;
		color: rgb(51, 51, 51);
		background-color: rgb(242, 242, 242);
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		border-radius: 15upx;

	}

	.item-btn {
		margin-top: 15upx;
		display: flex;
		align-self: flex-end;
		align-items: center;
		justify-content: flex-end;
		padding: 15upx 0;
	}

	.item-btn view {
		color: rgb(250, 146, 95);
		border: solid 2upx rgb(250, 146, 95);
		border-radius: 10upx;
		width: 150upx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 15upx;
		font-size: 30upx;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	/* 	.pullUp{
		animation: pullUp 0.5s ease forwards;
	}
	.pullDwon{
		animation: pullDown 0.5s ease forwards;
	}
	.itemUp{
		animation: itemUp 0.1s ease forwards;
		animation-delay: 0.5s;
	}
	.itemDown{
		animation: itemDown 0.5s ease forwards;
		animation-delay: 0.5s;
	}
	@keyframes pullUp{
		from{
			top: 0;
		}
		to{
			top: -100upx;
		}
	}
	@keyframes pullDown{
		from{
			top: -100upx;
		}
		to{
			top: 0;
		}
	}
	@keyframes itemUp{
		from{
			padding-top: 100upx;
		}
		to{
			padding-top: 0;
		}
	}
	@keyframes itemDown{
		from{
			padding-top: 0;
		}
		to{
			padding-top: 100upx;
		}
	} */
</style>
