(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{529:function(a,e,t){"use strict";t.r(e);var s=t(16),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"常見問題"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常見問題"}},[a._v("#")]),a._v(" 常見問題")]),a._v(" "),t("h2",{attrs:{id:"開啟假墻防禦後搜索頁篩選頁的選項參數如何高亮展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#開啟假墻防禦後搜索頁篩選頁的選項參數如何高亮展示"}},[a._v("#")]),a._v(" 開啟假墻防禦後搜索頁篩選頁的選項參數如何高亮展示?")]),a._v(" "),t("p",[a._v("為了防禦假墻我們把url參數編碼方式或空白方式處理掉了。關閉假墻防禦就不會出現這個問題。")]),a._v(" "),t("p",[a._v("那麽原來使用搜索頁面、分類篩選頁面的模板可能需要做有些簡單調整才能正確顯示篩選高亮。\n在模板頭部插入定義變量（在調用$pp變量之前插入就可以）\n"),t("code",[a._v("{php}$pp = mac_param_url(); {/php}")]),a._v("\n然後把原來判斷高亮的代碼修改一下即可，把"),t("code",[a._v("$param")]),a._v(" 替換為 "),t("code",[a._v("$pp")]),a._v(" 即可， 來看例子。")]),a._v(" "),t("p",[t("strong",[a._v("未修改的地區篩選：")])]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("<a {if condition=\"$param['area'] eq ''\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>'','lang'=>$param['lang'],'year'=>$param['year'],'level'=>$param['level'],'letter'=>$param['letter'],'state'=>$param['state'],'tag'=>$param['tag'],'class'=>$param['class'],'order'=>$param['order'],'by'=>$param['by'] ],'show')}\">全部\n\n{empty name=\"$obj.type_extend.area\"}\n{maccms:foreach name=\":explode(',',$obj.parent.type_extend.area)\" id=\"vo2\" key=\"key2\"}\n<a {if condition=\"$param['area'] eq $vo2\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>$vo2,'lang'=>$param['lang'],'year'=>$param['year'],'level'=>$param['level'],'letter'=>$param['letter'],'state'=>$param['state'],'tag'=>$param['tag'],'class'=>$param['class'],'order'=>$param['order'],'by'=>$param['by'] ],'show')}\">{$vo2}\n\n{/maccms:foreach}\n{else /}\n{maccms:foreach name=\":explode(',',$obj.type_extend.area)\" id=\"vo2\" key=\"key2\"}\n<a {if condition=\"$param['area'] eq $vo2\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>$vo2,'lang'=>$param['lang'],'year'=>$param['year'],'level'=>$param['level'],'letter'=>$param['letter'],'state'=>$param['state'],'tag'=>$param['tag'],'class'=>$param['class'],'order'=>$param['order'],'by'=>$param['by'] ],'show')}\">{$vo2}\n\n{/maccms:foreach}\n{/empty}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br")])]),t("p",[t("strong",[a._v("修改後的代碼是：")])]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[a._v("<a {if condition=\"$pp['area'] eq ''\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>'','lang'=>$pp['lang'],'year'=>$pp['year'],'level'=>$pp['level'],'letter'=>$pp['letter'],'state'=>$pp['state'],'tag'=>$pp['tag'],'class'=>$pp['class'],'order'=>$pp['order'],'by'=>$pp['by'] ],'show')}\">全部\n{empty name=\"$obj.type_extend.area\"} {maccms:foreach name=\":explode(',',$obj.parent.type_extend.area)\" id=\"vo2\" key=\"key2\"}\n<a {if condition=\"$pp['area'] eq $vo2\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>$vo2,'lang'=>$pp['lang'],'year'=>$pp['year'],'level'=>$pp['level'],'letter'=>$pp['letter'],'state'=>$pp['state'],'tag'=>$pp['tag'],'class'=>$pp['class'],'order'=>$pp['order'],'by'=>$pp['by'] ],'show')}\">{$vo2}\n{/maccms:foreach} {else /} {maccms:foreach name=\":explode(',',$obj.type_extend.area)\" id=\"vo2\" key=\"key2\"}\n<a {if condition=\"$pp['area'] eq $vo2\"} class=\"current\" {/if} href=\"{:mac_url_type($obj,['area'=>$vo2,'lang'=>$pp['lang'],'year'=>$pp['year'],'level'=>$pp['level'],'letter'=>$pp['letter'],'state'=>$pp['state'],'tag'=>$pp['tag'],'class'=>$pp['class'],'order'=>$pp['order'],'by'=>$pp['by'] ],'show')}\">{$vo2}\n{/maccms:foreach} {/empty}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"為什麽無法在線播放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#為什麽無法在線播放"}},[a._v("#")]),a._v(" 為什麽無法在線播放?")]),a._v(" "),t("p",[a._v("程序只提供數據管理功能，無法直接實現站內播放功能，如有需要請自行整合第三方提供的插件。")]),a._v(" "),t("h2",{attrs:{id:"上傳失敗常見問題"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上傳失敗常見問題"}},[a._v("#")]),a._v(" 上傳失敗常見問題？")]),a._v(" "),t("p",[a._v("由於采用最新的TP框架，需要開啟"),t("code",[a._v("php")]),a._v("的"),t("code",[a._v("fileinfo")]),a._v("支持庫，"),t("code",[a._v("php.ini")]),a._v("裏 "),t("code",[a._v("extension=php_fileinfo.dll；")]),a._v("寶塔等面板裏直接安裝開啟 。\n上傳失敗問題請檢查"),t("code",[a._v("php")]),a._v("臨時文件目錄權限和cms系統文件存儲目錄權限。\n"),t("code",[a._v("windows")]),a._v("一般是："),t("code",[a._v("C:/windows/temp，``linux")]),a._v("一般是"),t("code",[a._v("/var/tmp")]),a._v("。 "),t("code",[a._v("cms")]),a._v("存儲目錄"),t("code",[a._v("upload")]),a._v("。\n如果開啟第三方存儲，請檢查三方存儲配置信息。\n也可能是"),t("code",[a._v("php.ini")]),a._v("配置文件裏"),t("code",[a._v("post")]),a._v("和"),t("code",[a._v("upload")]),a._v("大小限製，修改的值大一些即可。\n"),t("code",[a._v("upload_max_filesize = 8M")]),a._v(" "),t("code",[a._v("post_max_size = 10M")])]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("如果使用的是"),t("code",[a._v("php5.")]),a._v("6版本（php7版本不受影響），還需要設置"),t("code",[a._v("php.ini")]),a._v("開啟"),t("code",[a._v("always_populate_raw_post_data = -1")]),a._v(" 這個選項，也就是去掉這項配置前面的分號即可。")])]),a._v(" "),t("h2",{attrs:{id:"運行安裝頁面出現空白頁面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#運行安裝頁面出現空白頁面"}},[a._v("#")]),a._v(" 運行安裝頁面出現空白頁面")]),a._v(" "),t("ul",[t("li",[a._v("該情況一般為Runtime目錄沒有修改寫入權限")])]),a._v(" "),t("h2",{attrs:{id:"提示-sqlstate-22001"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提示-sqlstate-22001"}},[a._v("#")]),a._v(" 提示 SQLSTATE_22001")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("SQLSTATE[22001]: String data, right truncated: 1406 Data too long for column '' at row 1  或者 Warning: 1265 Data truncated for column 類似錯誤")])]),a._v(" "),t("p",[a._v("該錯誤就插入字段長度超過設定的長度，一般程序會在數據庫字段設置字符長度在插入之前程序很少會先判斷數據長度和截取數據 這樣會影響性能，所以你就需要修改你數據庫的配置文件一般在"),t("code",[a._v("MYSQL")]),a._v(" 安裝目錄中的"),t("code",[a._v("my.ini")]),a._v("中 搜索"),t("code",[a._v('sql-mode sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v("\n把其中的"),t("code",[a._v("STRICT_TRANS_TABLES")]),a._v(",去掉 建議使用該方法\n"),t("code",[a._v('sql-mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v("\n或者把\n"),t("code",[a._v('sql-mode="STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"')]),a._v(" 直接刪除")]),a._v(" "),t("h2",{attrs:{id:"數據庫連接配置文件。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#數據庫連接配置文件。"}},[a._v("#")]),a._v(" 數據庫連接配置文件。")]),a._v(" "),t("p",[a._v("RE:手動修改數據庫連接信息，數據庫密碼等/application/database.php")]),a._v(" "),t("h2",{attrs:{id:"如何重裝蘋果cms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何重裝蘋果cms"}},[a._v("#")]),a._v(" 如何重裝蘋果cms？")]),a._v(" "),t("p",[a._v("RE:需要刪除/application/data/install/install.lock")]),a._v(" "),t("h2",{attrs:{id:"采集資源為何播放不了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采集資源為何播放不了"}},[a._v("#")]),a._v(" 采集資源為何播放不了？")]),a._v(" "),t("p",[a._v("（資源類型是youku、tudou、iqiyi等等）第三方網址")]),a._v(" "),t("ul",[t("li",[a._v("方法1，整合資源站的播放器js文件。")]),a._v(" "),t("li",[a._v("方案2，開啟全局解析或獨立解析和播放器解析狀態。")])]),a._v(" "),t("h2",{attrs:{id:"寶塔nginx環境404"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寶塔nginx環境404"}},[a._v("#")]),a._v(" 寶塔Nginx環境404？")]),a._v(" "),t("p",[a._v("寶塔Nginx環境下，程序安裝完畢後除非首頁其他頁面全部404的問題？\nRE:方法，進入寶塔軟件設置，找到對應的php版本-設置，安裝擴展，找到PATH_INFO這項，點擊關閉，然後重新安裝一下就ok了，這個可能是寶塔的bug。")]),a._v(" "),t("h2",{attrs:{id:"采集完數據後為何無法播放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#采集完數據後為何無法播放"}},[a._v("#")]),a._v(" 采集完數據後為何無法播放？？？")]),a._v(" "),t("p",[a._v("RE:檢查采集數據的播放地址，如果是完成的http地址，則需要開啟播放器的解析狀態用解析播放；如果采集的數據ID可會直接用本地播放器來播放。")]),a._v(" "),t("h2",{attrs:{id:"為何新增加了分類-前臺頁面進入提示沒有權限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#為何新增加了分類-前臺頁面進入提示沒有權限"}},[a._v("#")]),a._v(" 為何新增加了分類，前臺頁面進入提示沒有權限？？？")]),a._v(" "),t("p",[a._v("RE:因為新加的分類默認所有會員組都是沒有權限的，需要進入會員組裏配置每個組的分類權限，保存一下即可。")]),a._v(" "),t("h2",{attrs:{id:"改亂了怎麽辦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改亂了怎麽辦"}},[a._v("#")]),a._v(" 改亂了怎麽辦？")]),a._v(" "),t("ul",[t("li",[a._v("路由規則改錯了，頁面權都打不開了，怎麽恢復到默認的？？？")]),a._v(" "),t("li",[a._v("下載完整安裝包，復製application/route.php 替換到網站裏，就可以打開了，然後在後臺重新修改下路由規則。")])]),a._v(" "),t("h2",{attrs:{id:"nginx下除了首頁其他都是404怎麽辦"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx下除了首頁其他都是404怎麽辦"}},[a._v("#")]),a._v(" nginx下除了首頁其他都是404怎麽辦？")]),a._v(" "),t("p",[a._v("修改一下偽靜態規則，一般都可以解決了。 如果修改了後臺文件入口admin.php，則改為對應的文件名。")]),a._v(" "),t("div",{staticClass:"language-linux line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" if (!-e $request_filename) {\n   rewrite ^/index.php(.*)$ /index.php?s=$1 last;\n   rewrite ^/admin.php(.*)$ /admin.php?s=$1 last;\n   rewrite ^/api.php(.*)$ /api.php?s=$1 last;\n   rewrite ^(.*)$ /index.php?s=$1 last;\n   break;\n}\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"頁面提交數據後過段時間才生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#頁面提交數據後過段時間才生效"}},[a._v("#")]),a._v(" 頁面提交數據後過段時間才生效")]),a._v(" "),t("p",[a._v("這個一般是web服務配置了緩存導致的~~\n訪問"),t("code",[a._v("phpinfo()")]),a._v(",看看是不是你開啟了"),t("code",[a._v("ZendOpcache")]),a._v("之類的"),t("code",[a._v("opcode")]),a._v("緩存."),t("code",[a._v("ZendOpcache")]),a._v("裏面有個過期時間配置,如"),t("code",[a._v("opcache")]),a._v("."),t("code",[a._v("revalidate_freq=60")]),a._v(",表示60秒後腳本再次被訪問時會檢測PHP文件的時間戳,有改變則更新opcode緩存,你可以設為0,這樣每次訪問都會檢測文件時間戳,你的修改就能生效了.\n在"),t("code",[a._v("php.ini")]),a._v("文件中找到\n"),t("code",[a._v("opcache.enable=1")]),a._v("\n或\n"),t("code",[a._v("opcache.enable_cli=1")]),a._v("\n改為"),t("code",[a._v("0")]),a._v("，重啟"),t("code",[a._v("php-fpm，done")])]),a._v(" "),t("h2",{attrs:{id:"為什麽播放器不能全屏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#為什麽播放器不能全屏"}},[a._v("#")]),a._v(" 為什麽播放器不能全屏？")])])}),[],!1,null,null,null);e.default=r.exports}}]);