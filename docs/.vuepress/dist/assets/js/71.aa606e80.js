(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{437:function(t,s,a){"use strict";a.r(s);var n=a(27),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-在html中使用javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在html中使用javascript"}},[t._v("#")]),t._v(" 2. 在HTML中使用JavaScript")]),t._v(" "),a("p",[t._v("向HTML中插入 JavaScript 代码的主要方法就是使用 "),a("code",[t._v("script")]),t._v("元素")]),t._v(" "),a("h2",{attrs:{id:"script元素属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script元素属性"}},[t._v("#")]),t._v(" "),a("code",[t._v("script")]),t._v("元素属性")]),t._v(" "),a("p",[a("code",[t._v("script")]),t._v(' 属性里面默认的type 为 "text/javascript", 需要注意的是 async 与 defer 属性')]),t._v(" "),a("p",[t._v("HTML4.1 与 HTML5 里面 async 与 defer 属性的值不一致(之前值为 async, defer，H5 为 true, false)，现在这里以 H5 为主")]),t._v(" "),a("h2",{attrs:{id:"script使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script使用方式"}},[t._v("#")]),t._v(" "),a("code",[t._v("script")]),t._v("使用方式")]),t._v(" "),a("p",[t._v("在HTML里 "),a("code",[t._v("script")]),t._v(" 元素的使用方法有两种:")]),t._v(" "),a("ul",[a("li",[t._v("嵌入脚本")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- \n  1. 嵌入脚本里面不能使用src属性，如果使用了src引入了外部js文件，内嵌的内容会失效 \n  2. 嵌入脚本内部不要出现 <\/script> 结束标志。这样后面的代码不会继续执行，如果一定要加入请使用 <\\/script>\n--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v(" 嵌入脚本内容 ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用外部脚本")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入外部脚本，如果是第三方的js文件，需要确保其安全可靠。--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"script位置与执行顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script位置与执行顺序"}},[t._v("#")]),t._v(" "),a("code",[t._v("script")]),t._v("位置与执行顺序")]),t._v(" "),a("ul",[a("li",[t._v("放到 "),a("code",[t._v("head")]),t._v(" 元素内部，页面一加载就按顺序加载执行，这种情况当JS被加载执行完成，页面才会开始渲染，如果网速慢，载入文件大等会导致页面空白一段时间")]),t._v(" "),a("li",[t._v("或者放到 "),a("code",[t._v("body")]),t._v(" 元素的最后面，顺序执行，等页面渲染完后再去加载执行。")]),t._v(" "),a("li",[t._v("使用async与defer属性会改变script的默认执行顺序\n"),a("ul",[a("li",[t._v("async为true时，后续的页面渲染和js加载执行会并行处理(异步)")]),t._v(" "),a("li",[t._v("defer为true时，后续的页面渲染和js加载会并行处理，但js的执行会等到页面完全渲染好后才开始。")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/js/script%E5%85%83%E7%B4%A0%E9%87%8Casync%E4%B8%8Edefer%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8C%BA%E5%88%AB.png",alt:"图解async与defer属性的区别"}})]),t._v(" "),a("p",[t._v("详情请参见 "),a("a",{attrs:{href:"https://segmentfault.com/q/1010000000640869",target:"_blank",rel:"noopener noreferrer"}},[t._v("defer和async的区别"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"当浏览器禁用了js或不支持js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当浏览器禁用了js或不支持js"}},[t._v("#")]),t._v(" 当浏览器禁用了JS或不支持JS")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("body")]),t._v(" 元素里面，最后加入 "),a("code",[t._v("noscript")]),t._v(" 元素，当JS被禁用或不支持时，会显示noscript元素内部的内容")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("本页面需要浏览器支持（启用）JavaScript!"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("noscript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);