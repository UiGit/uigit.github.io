(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{539:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"插件目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件目录"}},[s._v("#")]),s._v(" 插件目录")]),s._v(" "),t("h2",{attrs:{id:"文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[s._v("#")]),s._v(" 文件结构")]),s._v(" "),t("p",[t("code",[s._v("苹果cmsv10")]),s._v("所有插件都是存放在"),t("code",[s._v("addons")]),s._v("目录，一个插件一个目录，目录名必须和插件标识相同，且全部为小写，不允许出现大写或下划线等特殊符号。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("maccms\n └─ addons\n │   └─mydemo //插件标识\n │        ├─application    //此文件夹中所有文件会覆盖到根目录的/application文件夹\n │        ├─assets        //此文件夹中所有文件会复制到/static/addons/mydemo文件夹\n │        ├─controller    //此文件夹为插件控制器目录\n │        ├─lang            //此文件夹为插件语言包目录\n │        ├─model            //此文件夹为插件模型目录\n │        ├─view            //此文件夹为插件视图目录\n │        ├─Mydemo.php        //此文件为插件核心安装卸载控制器,必需存在\n │        ├─bootstrap.js    //此文件为插件JS启动文件\n │        ├─LICENSE        //版权文件\n │        ├─config.html    //自定义插件配置视图模板，可选\n │        ├─config.php    //插件配置文件,我们在后台插件管理中点配置按钮时配置的文件,必需存在\n │        ├─info.ini        //插件信息文件,用于保存插件基本信息，插件开启状态等,必需存在\n │        └─install.sql    //插件数据库安装文件,此文件仅在插件安装时会进行导入\n ...\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("其中的"),t("code",[s._v("application")]),s._v("文件夹会覆盖到根目录，这两个文件夹主要用于我们后台管理功能的开发，我们可以先在后台开发好对应的管理功能后，再将对应的功能打包进插件即可，苹果cms在插件安装和卸载时会自动进行文件冲突检测，如果遇到冲突的文件会提醒用户是否进行覆盖或删除。")])]),s._v(" "),t("p",[t("code",[s._v("assets")]),s._v("这个文件夹很关键，"),t("code",[s._v("苹果cms")]),s._v(" 会将"),t("code",[s._v("assets")]),s._v("中的所有文件夹和文件复制到"),t("code",[s._v("/static/addons/插件标识/")]),s._v("文件夹中去，"),t("code",[s._v("assets")]),s._v("文件夹中的所有文件不会进行文件冲突检测，"),t("code",[s._v("/static/addons/插件标识/")]),s._v("这个目录下的文件，我们在视图文件中可以直接通过"),t("code",[s._v("__ADDON__")]),s._v("指向这个路径。因此在开发视图时我们可以先使用相对路径设计，完成后我们再统一加上这个"),t("code",[s._v("__ADDON__")]),s._v("的前缀")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("controller")]),s._v("、"),t("code",[s._v("lang")]),s._v("、"),t("code",[s._v("model")]),s._v("和"),t("code",[s._v("view")]),s._v("这四个文件夹是我们插件前台功能的"),t("code",[s._v("MVC")]),s._v("部分，这部分文件夹不会复制或移动到其它位置。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Mydemo.php")]),s._v("这个文件是插件的核心文件，我们可以在这个文件中编写插件安装或卸载时执行的脚本，或者在此插件中编写菜单的生成或删除，同时插件的行为方法也是编写在此文件中的，插件所支持的行为事件会在后面讲到。此文件命令规则为插件标识首字母大写。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("bootstrap.js")]),s._v("这个文件是插件的启动文件，插件在安装完启用后，"),t("code",[s._v("苹果cms")]),s._v("会将此文件中的内容合并到"),t("code",[s._v("/static//js/addons.js")]),s._v("中去，你可以在此编写插件核心JS或注册事件，在此JS中可以使用"),t("code",[s._v("require")]),s._v("依赖其它模块。同时在此插件中可以使用Fast、"),t("code",[s._v("Backend、Lang")]),s._v("等全局对象，因为在此之前此类对象已经加载且注册。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("config.html")]),s._v("这个文件是插件的配置时使用的视图模板，可选，当存在时，插件管理中点配置按钮会调用这个视图文件。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("config.php")]),s._v("这个文件是插件的配置文件，我们在后台插件管理中点配置按钮时会保存在此文件，"),t("code",[s._v("config.php")]),s._v("详细使用方法和说明请参考配置章节。")])])]),s._v(" "),t("h2",{attrs:{id:"info-ini介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#info-ini介绍"}},[s._v("#")]),s._v(" info.ini介绍")]),s._v(" "),t("p",[s._v("这个文件仅用于保存插件基础信息和开启状态，此文件的内容格式为")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mydemo")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("title")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("示例插件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("intro")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("这是一个示例插件的介绍")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("author")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("大图模板")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("website")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("http://www.datll.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("version")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1.0.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("state")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("image")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/static/addons/mydemo/img/logo.jpg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("url")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/addons/mydemo.html")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("code",[s._v("install.sql")]),s._v("这个文件中只能是"),t("code",[s._v("SQL")]),s._v("语句，同时在此文件中可以使用"),t("code",[s._v("__PREFIX__")]),s._v("表示数据库表前缀，苹果cms在安装导入SQL时自动进行替换。"),t("code",[s._v("install.sq")]),s._v("l的详细使用方法请参考数据库章节")])])}),[],!1,null,null,null);a.default=e.exports}}]);