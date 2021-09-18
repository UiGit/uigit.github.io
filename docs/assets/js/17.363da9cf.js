(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{507:function(t,a,e){"use strict";e.r(a);var v=e(16),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"采集接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#采集接口"}},[t._v("#")]),t._v(" 采集接口")]),t._v(" "),e("h2",{attrs:{id:"入库接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入库接口"}},[t._v("#")]),t._v(" 入库接口")]),t._v(" "),e("ul",[e("li",[t._v("站外入库接口一般是给第三方软件（如：火车头、ET等）提供的入库方案。")]),t._v(" "),e("li",[t._v("使用前请在后台系统-站外入库配置 设置好 免登录入库密码，和 分类名称对应系统分类规则。")]),t._v(" "),e("li",[t._v("系统默认api入库接口文件为http://域名/api.php，根据需要可修改入库文件。")])]),t._v(" "),e("h2",{attrs:{id:"下载模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载模块"}},[t._v("#")]),t._v(" 下载模块")]),t._v(" "),e("p",[t._v("官方提供的 "),e("a",{attrs:{href:"https://github.com/magicblack/maccms10/tree/master/%E8%AF%B4%E6%98%8E%E6%96%87%E6%A1%A3/%E7%81%AB%E8%BD%A6%E5%A4%B4%E6%A8%A1%E5%9D%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("【苹果CMSV10火车头入库模块】"),e("OutboundLink")],1),t._v("！")]),t._v(" "),e("h3",{attrs:{id:"火车头配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#火车头配置"}},[t._v("#")]),t._v(" 火车头配置")]),t._v(" "),e("p",[t._v("网站根地址填写 "),e("code",[t._v("http://域名/api.php/")]),t._v("点击测试，输入验证密码，何必要信息测试入库。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("接口必要信息是")]),t._v(" "),e("p",[t._v("名称， 分类ID 或 分类名称 （如果同时存在以 分类ID为准）")])]),t._v(" "),e("h3",{attrs:{id:"入库接口地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入库接口地址"}},[t._v("#")]),t._v(" 入库接口地址")]),t._v(" "),e("ul",[e("li",[t._v("视频 "),e("code",[t._v("/api.php/receive/vod")])]),t._v(" "),e("li",[t._v("文章 "),e("code",[t._v("/api.php/receive/art")])]),t._v(" "),e("li",[t._v("演员 "),e("code",[t._v("/api.php/receive/actor")])]),t._v(" "),e("li",[t._v("角色 "),e("code",[t._v("/api.php/receive/role")])]),t._v(" "),e("li",[t._v("网址 "),e("code",[t._v("/api.php/receive/website")])])]),t._v(" "),e("h3",{attrs:{id:"接口参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口参数"}},[t._v("#")]),t._v(" 接口参数")]),t._v(" "),e("ul",[e("li",[t._v("请求方式 "),e("code",[t._v("POST")])]),t._v(" "),e("li",[t._v("Content-Type "),e("code",[t._v("form-data")])])]),t._v(" "),e("p",[t._v("可以是模型的全字段，如视频入库可以使用 "),e("RouterLink",{attrs:{to:"/theme/theme-vod.html#视频字段"}},[t._v("视频字段")]),t._v(" 全部字段作为参数，")],1),t._v(" "),e("p",[e("strong",[t._v("通用必填参数")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("示例值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("pass")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("a54s848s")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("入库密码，后台可自定义")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type_id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("绑定分类id")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("XXX_name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("极地救援预告片")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("名称必填 vod_name、art_name、actor_name、vod_role")])])])]),t._v(" "),e("p",[e("strong",[t._v("视频必填")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("示例值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("vod_play_from")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("dplayer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("后台播放器id ，空值会发布失败")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("vod_play_url")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高清$http://www.baidu.com/vod.mp4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("播放地址，没有播放地址会发布失败")])])])]),t._v(" "),e("p",[t._v("多个播放组可是使用 "),e("code",[t._v("$$$")]),t._v(" 进行分割"),e("code",[t._v("id")]),t._v("，然后播放地址也要进行分组，也是用 "),e("code",[t._v("$$$")]),t._v(" 如下示例:")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 播放器分组 --\x3e")]),t._v("\ndplayer$$$videojs$$$ppvod\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 播放地址分组 --\x3e")]),t._v("\n高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4$$$ \n高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4$$$ \n高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4#高清$http://www.1.com/vod.mp4\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h2",{attrs:{id:"开放资源api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开放资源api"}},[t._v("#")]),t._v(" 开放资源api")]),t._v(" "),e("p",[t._v("api接口仅供提供数据，可以直接在苹果CMS后台联盟采集中加入-并提供给他人采集。\n联盟资源分配唯一标识ID，用来区别绑定分类，这个ID一般由苹果CMS官方提供，不可随意\n修改设置，否则造成入库分类错乱。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("视频接口同时支持老板xml格式的数据，增加参数 &at=xml即可。")])]),t._v(" "),e("h3",{attrs:{id:"视频列表地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频列表地址"}},[t._v("#")]),t._v(" 视频列表地址")]),t._v(" "),e("ul",[e("li",[t._v("接口地址 "),e("code",[t._v("/api.php/provide/vod/?ac=list")])])]),t._v(" "),e("h3",{attrs:{id:"视频详情地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频详情地址"}},[t._v("#")]),t._v(" 视频详情地址")]),t._v(" "),e("ul",[e("li",[t._v("接口地址 "),e("code",[t._v("/api.php/provide/vod/?ac=detail")])])]),t._v(" "),e("h3",{attrs:{id:"文章列表地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章列表地址"}},[t._v("#")]),t._v(" 文章列表地址")]),t._v(" "),e("ul",[e("li",[t._v("接口地址 "),e("code",[t._v("/api.php/provide/art/?ac=list")])])]),t._v(" "),e("h3",{attrs:{id:"文章详情地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文章详情地址"}},[t._v("#")]),t._v(" 文章详情地址")]),t._v(" "),e("ul",[e("li",[t._v("接口地址 "),e("code",[t._v("/api.php/provide/art/?ac=detail")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);