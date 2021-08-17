(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{540:function(s,a,t){"use strict";t.r(a);var n=t(16),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"模块预留扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块预留扩展"}},[s._v("#")]),s._v(" 模块预留扩展")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("v10已经模块可扩展的功能包含：上传，邮件，短信，支付，url推送，富文本编辑器。 第三方开发者可根据系统自带的模块参考写新的扩展，完全不影响程序后期的升级，实现无缝结合。")])]),s._v(" "),t("h2",{attrs:{id:"重要位置1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要位置1"}},[s._v("#")]),s._v(" 重要位置1：")]),s._v(" "),t("p",[s._v("（主要存放处理类库） \\application\\common\\extend\\")]),s._v(" "),t("h2",{attrs:{id:"重要位置2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要位置2"}},[s._v("#")]),s._v(" 重要位置2：")]),s._v(" "),t("p",[s._v("（主要存放后台显示配置） \\application\\admin\\view\\extend\\")]),s._v(" "),t("h2",{attrs:{id:"第三方类库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三方类库"}},[s._v("#")]),s._v(" 第三方类库")]),s._v(" "),t("p",[s._v("在苹果cms插件开发过程中经常需要引用于第三方的类库，此时可以采用以下两种方式进行引入。")]),s._v(" "),t("h3",{attrs:{id:"手动修改文件命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动修改文件命名空间"}},[s._v("#")]),s._v(" 手动修改文件命名空间")]),s._v(" "),t("p",[s._v("如果我们引入的第三方类库文件比较少，我们可以采取手动修改文件命名空间的功能。例如我们需要引入HashMap.php这个类库，这个类库功能比较单一，只有一个文件，此时我们可以将HashMap.php文件放在addons/mydemo/library目录下，然后再修改HashMap.php中的namespace，修改为")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("addons"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mydemo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("library")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name-definition class-name"}},[s._v("HashMap")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//类库代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("ul",[t("li",[s._v("其中mydemo为你的插件目录名。")]),s._v(" "),t("li",[s._v("通过以上修改后，我们在我们的服务端任何位置均可使用")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hashMap")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("addonos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mydemo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("HaspMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$hashMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("myNormalMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("来实例化我们的类，静态方法可以通过")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("addonos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("mydemo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("library"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("HashMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("myStaticMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中"),t("code",[s._v("myNormalMethod")]),s._v("为"),t("code",[s._v("HaspMap")]),s._v("的公共方法，"),t("code",[s._v("myStaticMethod")]),s._v("为"),t("code",[s._v("HashMa")]),s._v("p的静态方法。")]),s._v(" "),t("h3",{attrs:{id:"通过行为载入命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过行为载入命名空间"}},[s._v("#")]),s._v(" 通过行为载入命名空间")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果我们引入的第三方类库是一个composer包，或者说这个类已经使用了命名空间，如果手动修改类库的命名空间工作量过大时，我们可以通过在行为中载入命名空间。")])]),s._v(" "),t("li",[t("p",[s._v("比如我们需要引入https://gitee.com/yansongda/pay这个微信支付库处理类库。")])]),s._v(" "),t("li",[t("p",[s._v("首先我们下载这个源码包，把源码包中的src中的代码拷贝到addons/mydemo/library/Yansongda这个目录下，如图：")])])]),s._v(" "),t("p",[t("strong",[s._v("首先我们在Mydemo.php中新增一个")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 应用初始化\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-definition function"}},[s._v("appInit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//先判断是否已经通过其它方式引入了此类")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("class_exists")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"\\Yansongda\\Pay\\Pay"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Loader")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addNamespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Yansongda\\Pay'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ADDON_PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'mydemo'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'library'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Yansongda'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("如图：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("最后我们再到后台管理右上角清下缓存即可。")])]),s._v(" "),t("li",[t("p",[s._v("我们在通过行为载入命名空间时务必检查下第三方类库的命名空间使用的名称。比如我们打开Pay.php这个文件可以看到它的头部使用的命名空间是Yansongda\\Pay，如图：")])]),s._v(" "),t("li",[t("p",[s._v("因此我们在使用\\think\\Loader::addNamespace导入命名空间时的第一个参数要写Yansongda\\Pay，如果命名空间导入不正确，后续都将不能正确的引入。")])]),s._v(" "),t("li",[t("p",[s._v("类库的使用方法和上方手动引入类库的使用方法一致。")])])]),s._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("ul",[t("li",[s._v("如果在引用时出现类未找到，请检查类的命名空间是否正确，其次请检查目录、文件、类名大小写是否正确。")]),s._v(" "),t("li",[s._v("插件开发引用类库，请全部使用命名空间的方法，请勿使用require或include进行载入。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);