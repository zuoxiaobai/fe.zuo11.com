(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{375:function(_,v,t){"use strict";t.r(v);var r=t(27),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"数据库系统概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统概述"}},[_._v("#")]),_._v(" 数据库系统概述")]),_._v(" "),t("p",[_._v("数据库技术是对数据进行管理的技术。")]),_._v(" "),t("h2",{attrs:{id:"数据库基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库基本概念"}},[_._v("#")]),_._v(" 数据库基本概念")]),_._v(" "),t("p",[t("strong",[_._v("数据、数据库、数据库管理系统、数据库系统")]),_._v(" 是数据库中最常用的四个基本概念。")]),_._v(" "),t("h3",{attrs:{id:"什么是数据-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据-识记"}},[_._v("#")]),_._v(" 什么是数据(识记)")]),_._v(" "),t("p",[_._v("数据(Data)是描述事物的"),t("strong",[_._v("符号记录")]),_._v("，是指利用物理符号记录下来的，可以鉴别的信息。")]),_._v(" "),t("p",[_._v("分三点：描述一个事物的记录，利用物理符号记录，且比较好鉴别。")]),_._v(" "),t("p",[_._v("来看一组数据：张三、男、26、北京、上海、13912345678")]),_._v(" "),t("p",[_._v("数据是信息存在的方式，比如上面的北京、上海两个位置。必须对数据进行解释处理才会有意义。如果不说明一个是出生地，一个是工作地，你不知道他是做什么的。"),t("strong",[_._v("我们把对数据的解释处理称为数据的语义")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"什么是数据库-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库-识记"}},[_._v("#")]),_._v(" 什么是数据库(识记)")]),_._v(" "),t("p",[_._v("数据库(Database, DB) 是指"),t("strong",[_._v("长期存储")]),_._v("在计算机中"),t("strong",[_._v("有组织")]),_._v("的、"),t("strong",[_._v("可共享")]),_._v("的数据集合。")]),_._v(" "),t("ul",[t("li",[_._v("长期存储，当数据比较多时，现在用不到，但以后的某个时间可能会用到。数据不能被扔掉，就需要把数据存到数据库，长期存储。")]),_._v(" "),t("li",[_._v("有组织，当数据比较多且种类不同时，不可能随意存放，需要是有组织的。")]),_._v(" "),t("li",[_._v("可共享，存到数据库的数据，不只某一个人可以访问，其他人也可以访问，是共享的。")])]),_._v(" "),t("p",[_._v("数据要按照一定的"),t("strong",[_._v("数据模型(创建数据库的人给的一种规则)组织、描述和存储")]),_._v("，具有较小的"),t("strong",[_._v("冗余度(重复的，多余的)")]),_._v("、较高的"),t("strong",[_._v("数据独立性(比如：张三、男、26，这三个信息是对张三的描述，我们把'男'删掉，对张三26岁这两个信息没有影响)")]),_._v("，系统"),t("strong",[_._v("易于扩展")]),_._v("，并可以被多个用户"),t("strong",[_._v("分享")]),_._v("。")]),_._v(" "),t("p",[_._v("数据的三个基本特点："),t("strong",[_._v("永久存储、有组织、可共享")]),_._v(" （注意数据库定义时是长期存储，数据的特点是永久存储）")]),_._v(" "),t("h3",{attrs:{id:"数据库管理系统-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库管理系统-识记"}},[_._v("#")]),_._v(" 数据库管理系统(识记)")]),_._v(" "),t("p",[_._v("数据库管理系统(DBMS)是专门用于"),t("strong",[_._v("建立")]),_._v("和"),t("strong",[_._v("管理")]),_._v("数据库的一套软件，介于"),t("strong",[_._v("应用程序")]),_._v("和"),t("strong",[_._v("操作系统")]),_._v("之间。")]),_._v(" "),t("p",[_._v("数据库管理系统的功能：")]),_._v(" "),t("ol",[t("li",[_._v("数据定义功能(定义数据，有了数据才能进行操作)")]),_._v(" "),t("li",[_._v("数据操纵功能(数据的增删改查)")]),_._v(" "),t("li",[_._v("数据库的运行管理功能")]),_._v(" "),t("li",[_._v("数据库的建立和维护功能")]),_._v(" "),t("li",[_._v("数据组织、存储和管理功能")]),_._v(" "),t("li",[_._v("其他功能(数据共享、网络通信功能、数据传输访问)")])]),_._v(" "),t("h3",{attrs:{id:"数据库系统的构成-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统的构成-识记"}},[_._v("#")]),_._v(" 数据库系统的构成(识记)")]),_._v(" "),t("p",[_._v("数据库系统(DBS)构成如下图，一些情况把数据库也叫数据库系统")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_1_%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%9E%84%E6%88%90.png",alt:"1_1_数据库系统构成.png"}})]),_._v(" "),t("h3",{attrs:{id:"练习题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习题"}},[_._v("#")]),_._v(" 练习题")]),_._v(" "),t("p",[_._v("通常，一个完整的数据库系统包括数据库、数据库管理系统及相关实用工具、( ______ )、互数据库管理员和用户。 (填空题) 答案为：应用程序")]),_._v(" "),t("p",[_._v("数据库系统构成里面的简称：")]),_._v(" "),t("ul",[t("li",[_._v("DB 数据库")]),_._v(" "),t("li",[_._v("DBMS 数据库管理系统")]),_._v(" "),t("li",[_._v("DBS 数据库系统")]),_._v(" "),t("li",[_._v("DBA(Database administrator) 数据库管理员")])]),_._v(" "),t("h2",{attrs:{id:"数据管理技术的发展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据管理技术的发展"}},[_._v("#")]),_._v(" 数据管理技术的发展")]),_._v(" "),t("p",[_._v("数据库管理技术的发展")]),_._v(" "),t("h3",{attrs:{id:"人工管理阶段-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#人工管理阶段-识记"}},[_._v("#")]),_._v(" 人工管理阶段(识记)")]),_._v(" "),t("p",[_._v("人工管理阶段的特点：")]),_._v(" "),t("ul",[t("li",[_._v("数据不保存")]),_._v(" "),t("li",[_._v("应用程序管理数据")]),_._v(" "),t("li",[_._v("数据面向应用程序")])]),_._v(" "),t("h3",{attrs:{id:"文件系统阶段-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件系统阶段-识记"}},[_._v("#")]),_._v(" 文件系统阶段(识记)")]),_._v(" "),t("p",[_._v("应用程序1 应用程序2 应用程序n ...")]),_._v(" "),t("p",[_._v("文件系统")]),_._v(" "),t("p",[_._v("数据1 数据2 数据n ...")]),_._v(" "),t("h3",{attrs:{id:"数据库系统阶段-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统阶段-领会"}},[_._v("#")]),_._v(" 数据库系统阶段(领会)")]),_._v(" "),t("p",[_._v("数据库系统的特点：")]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("数据集成( 主要目的 )")])]),_._v(" "),t("li",[_._v("数据共享性高")]),_._v(" "),t("li",[_._v("数据冗余小")]),_._v(" "),t("li",[_._v("数据一致性(如果多人操作数据库，一方改了，另一方获取的数据也需要是改动过的)")]),_._v(" "),t("li",[_._v("数据独立性高(数据定义与使用数据的应用程序分离称为数据独立)")]),_._v(" "),t("li",[_._v("实施统一管理与控制("),t("strong",[_._v("主要包括：数据的安全性、完整性、并发控制与故障恢复等，即数据保护")]),_._v(")")]),_._v(" "),t("li",[_._v("减少应用程序开发与维护的工作量")])]),_._v(" "),t("h3",{attrs:{id:"练习题-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习题-2"}},[_._v("#")]),_._v(" 练习题")]),_._v(" "),t("p",[_._v("1.下面描述中，不属于数据库系统特点的是( )。单选题，答案: B")]),_._v(" "),t("ul",[t("li",[_._v("A 数据独立性高")]),_._v(" "),t("li",[_._v("B 数据冗余性高")]),_._v(" "),t("li",[_._v("C 数据共享性好")]),_._v(" "),t("li",[_._v("D 数据一致性好")])]),_._v(" "),t("p",[_._v("2.数据的（  ）是数据库管理系统的主要目的。填空题，答案：集成")]),_._v(" "),t("p",[_._v("3.数据定义与使用数据的应用程序分离称为(  )。 填空题，答案：数据独立")]),_._v(" "),t("p",[_._v("4.数据库管理系统具有对数据的统一管理和控制功能，主要包括数据的独立性、完整性、并发控制与（   ）等，即数据保护。 填空题，答案：故障恢复")]),_._v(" "),t("h2",{attrs:{id:"数据库系统的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统的结构"}},[_._v("#")]),_._v(" 数据库系统的结构")]),_._v(" "),t("h3",{attrs:{id:"数据库系统的结构分类-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统的结构分类-识记"}},[_._v("#")]),_._v(" 数据库系统的结构分类(识记)")]),_._v(" "),t("ul",[t("li",[_._v("从DBA的视角，分为内部系统结构、外部系统结构\n"),t("ul",[t("li",[_._v("内部系统结构，采用"),t("strong",[_._v("三级模式：模式、内模式、外模式")])]),_._v(" "),t("li",[_._v("外部系统结构，分为：\n"),t("ul",[t("li",[_._v("集中式结构(一台或多台计算机组成的中心节点，将数据集中在中心节点处理)")]),_._v(" "),t("li",[_._v("分布式结构(分在不同的计算机上处理)")]),_._v(" "),t("li",[_._v("并行结构(同时操作许多数据项)")])])])])]),_._v(" "),t("li",[_._v("从数据库应用和用户的视角，分为：\n"),t("ul",[t("li",[t("strong",[_._v("客户/服务器结构(CS)")])]),_._v(" "),t("li",[t("strong",[_._v("浏览器/服务器结构(BS)")])])])])]),_._v(" "),t("h3",{attrs:{id:"数据库系统的三级模式结构-领会、重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库系统的三级模式结构-领会、重要"}},[_._v("#")]),_._v(" 数据库系统的三级模式结构(领会、重要)")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_2_%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E4%B8%89%E7%BA%A7%E6%A8%A1%E5%BC%8F%E7%BB%93%E6%9E%84.png",alt:"1_2_数据库系统三级模式结构.png"}})]),_._v(" "),t("h4",{attrs:{id:"模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[_._v("#")]),_._v(" 模式")]),_._v(" "),t("p",[_._v("也称为"),t("strong",[_._v("概念模式")]),_._v("或"),t("strong",[_._v("逻辑模式")]),_._v("，是数据在逻辑上的视图，即"),t("strong",[_._v("概念视图")]),_._v(" (视图：数据在用户面前的展现)。")]),_._v(" "),t("p",[t("strong",[_._v("模式是数据库的核心，也是数据库设计的关键。")])]),_._v(" "),t("h4",{attrs:{id:"外模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外模式"}},[_._v("#")]),_._v(" 外模式")]),_._v(" "),t("p",[_._v("也称为"),t("strong",[_._v("子模式")]),_._v("或"),t("strong",[_._v("用户模式")]),_._v(", "),t("strong",[_._v("数据视图，即用户视图")]),_._v("，不同的应用程序会对应不同的外模式(用户视图)，外模式可以有多种，一个外模式可以对应一个或多个应用")]),_._v(" "),t("p",[t("strong",[_._v("外模式作用：简化数据库接口，方便使用")])]),_._v(" "),t("h4",{attrs:{id:"内模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内模式"}},[_._v("#")]),_._v(" 内模式")]),_._v(" "),t("p",[_._v("物理级别（现实存在的）的对应的都是内模式，也称为"),t("strong",[_._v("存储模式")]),_._v("，是"),t("strong",[_._v("内部视图")]),_._v("或"),t("strong",[_._v("存储视图")])]),_._v(" "),t("p",[_._v("外模式对应的是用户(应用程序)\n模式对应的是概念、逻辑、组织这些东西\n内模式对应的是物理级别的东西，如存储")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("名称")]),_._v(" "),t("th",[_._v("别称")]),_._v(" "),t("th",[_._v("视图类型")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("模式")]),_._v(" "),t("td",[_._v("（ ）模式，（ ）模式")]),_._v(" "),t("td",[_._v("（ ）视图")])]),_._v(" "),t("tr",[t("td",[_._v("外模式")]),_._v(" "),t("td",[_._v("（ ）模式，或（ ）模式")]),_._v(" "),t("td",[_._v("（ ）视图，即 （ ）视图")])]),_._v(" "),t("tr",[t("td",[_._v("内模式")]),_._v(" "),t("td",[_._v("（ ）模式")]),_._v(" "),t("td",[_._v("（ ）视图 或 （ ）视图")])])])]),_._v(" "),t("h4",{attrs:{id:"练习题-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习题-3"}},[_._v("#")]),_._v(" 练习题")]),_._v(" "),t("p",[_._v("1.在数据库系统中，描述全部数据的整体逻辑结构的是(  )。单选器，答案：B")]),_._v(" "),t("ul",[t("li",[_._v("A 外模式")]),_._v(" "),t("li",[_._v("B 概念模式")]),_._v(" "),t("li",[_._v("C 内模式")]),_._v(" "),t("li",[_._v("D 存储模式")])]),_._v(" "),t("p",[_._v("2.从数据库管理员的视角看，数据库外部体系结构通常表现为集中式结构、分布式结构、（  ）。填空题，答案：并行结构")]),_._v(" "),t("p",[_._v("3.外模式也称为子模式或（  ）。单选题，答案：B")]),_._v(" "),t("ul",[t("li",[_._v("A 逻辑模式")]),_._v(" "),t("li",[_._v("B 用户模式")]),_._v(" "),t("li",[_._v("C 存储模式")]),_._v(" "),t("li",[_._v("D 概念模式")])]),_._v(" "),t("h3",{attrs:{id:"三级模式结构的两层映像-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三级模式结构的两层映像-领会"}},[_._v("#")]),_._v(" 三级模式结构的两层映像(领会)")]),_._v(" "),t("p",[_._v("所谓"),t("strong",[_._v("映像")]),_._v("，就是一种"),t("strong",[_._v("对应规则")]),_._v("，它指出映象双方是如何进行转换的。")]),_._v(" "),t("p",[t("strong",[_._v("外模式/模式映象")]),_._v("，外模式和模式之间的映象。保证了数据与程序的"),t("strong",[_._v("逻辑独立性")]),_._v("。\n"),t("strong",[_._v("内模式/模式映象")]),_._v("，内模式和模式之间的映象。保证了数据与程序的"),t("strong",[_._v("物理独立性")])]),_._v(" "),t("p",[_._v("练习题：")]),_._v(" "),t("p",[_._v("所谓映象，就是一种（  ），它指出映象双方是如何进行转换的。填空，答案：对应规则")]),_._v(" "),t("h3",{attrs:{id:"客户-服务器结构-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户-服务器结构-识记"}},[_._v("#")]),_._v(" 客户/服务器结构(识记)")]),_._v(" "),t("p",[_._v('客户/服务器结构(Client/Server, C/S)中, "客户端"、"前台" 或 "表示层" '),t("strong",[_._v("主要完成与数据库使用者的交互任务")]),_._v('；"服务器"、"后台"或"数据层" '),t("strong",[_._v("主要负责数据管理")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_3_cs%E7%BB%93%E6%9E%84.png",alt:"1_3_cs结构.png"}})]),_._v(" "),t("p",[_._v("单机方式：数据层和表示层在一个机器上。\n网络方式：数据层和表示层分布在一个网络的不同机器上。把数据放在网络里的一个机器上，通过网络里的另一个机器去访问这个数据。")]),_._v(" "),t("h3",{attrs:{id:"浏览器-服务器结构-识记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-服务器结构-识记"}},[_._v("#")]),_._v(" 浏览器/服务器结构(识记)")]),_._v(" "),t("p",[_._v("浏览器/服务器结构(Browser/Server, B/S)，是一种基于web应用的客户/服务器结构，也称为"),t("strong",[_._v("三层")]),_._v("客户/服务器结构。")]),_._v(" "),t("p",[_._v("三层：表示层、处理层（中间层）、数据层")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_4_bs%E7%BB%93%E6%9E%84.png",alt:"1_4_bs结构.png"}})]),_._v(" "),t("h2",{attrs:{id:"数据模型-重要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型-重要"}},[_._v("#")]),_._v(" 数据模型(重要)")]),_._v(" "),t("h3",{attrs:{id:"什么是模型-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是模型-领会"}},[_._v("#")]),_._v(" 什么是模型(领会)")]),_._v(" "),t("p",[t("strong",[_._v("模型（Model）"),t("strong",[_._v("是现实世界特征的模拟和抽象表达。"),t("strong",[_._v("数据模型")]),_._v("是对现实世界数据特征的抽象，描述的是数据的")]),_._v("共性内容")]),_._v("。")]),_._v(" "),t("h3",{attrs:{id:"数据的特征-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的特征-领会"}},[_._v("#")]),_._v(" 数据的特征(领会)")]),_._v(" "),t("ul",[t("li",[_._v("静态特征，分三种：\n"),t("ul",[t("li",[_._v("数据的基本结构")]),_._v(" "),t("li",[_._v("数据间的联系")]),_._v(" "),t("li",[_._v("数据取值范围的约束")])])]),_._v(" "),t("li",[_._v("动态特征，指对数据可以进行符合一定规则的操作。")])]),_._v(" "),t("h3",{attrs:{id:"数据模型的组成要素-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型的组成要素-领会"}},[_._v("#")]),_._v(" 数据模型的组成要素(领会)")]),_._v(" "),t("ul",[t("li",[_._v("数据结构，描述的是系统的"),t("strong",[_._v("静态特征")]),_._v("，即数据对象的"),t("strong",[_._v("数据类型、内容、属性")]),_._v("以及数据对象之间的"),t("strong",[_._v("联系")]),_._v("。\n"),t("ul",[t("li",[_._v("层级模型、网状模型、关系模型(二维表格)模型")])])]),_._v(" "),t("li",[_._v("数据操作，描述的是系统的"),t("strong",[_._v("动态特征")]),_._v("，操作分为: 更新(增、删除、改)、检索(查)")]),_._v(" "),t("li",[_._v("数据约束，描述的是数据结构中数据间的语法和语义关联")])]),_._v(" "),t("h3",{attrs:{id:"数据模型的分类-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模型的分类-领会"}},[_._v("#")]),_._v(" 数据模型的分类(领会)")]),_._v(" "),t("p",[_._v("数据模型分为：概念模型、逻辑模型、物理模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_5_%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%E5%88%86%E7%B1%BB.png",alt:"1_5_数据模型分类.png"}})]),_._v(" "),t("h3",{attrs:{id:"什么是概念层数据模型-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是概念层数据模型-领会"}},[_._v("#")]),_._v(" 什么是概念层数据模型(领会)")]),_._v(" "),t("p",[t("strong",[_._v("概念层")]),_._v("是数据抽象级别的"),t("strong",[_._v("最高层")]),_._v("。概念层数据模型，也称为数据的"),t("strong",[_._v("概念模型")]),_._v("或"),t("strong",[_._v("信息模型")]),_._v("，这类模型主要用于数据库的"),t("strong",[_._v("设计阶段")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_6_%E6%A6%82%E5%BF%B5%E6%A8%A1%E5%9E%8B.png",alt:"1_6_概念模型.png"}})]),_._v(" "),t("h3",{attrs:{id:"信息世界涉及的基本概念-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#信息世界涉及的基本概念-领会"}},[_._v("#")]),_._v(" 信息世界涉及的基本概念(领会)")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("实体(Entity)")]),_._v("，如学生、商品、课程等，"),t("strong",[_._v("长方形")])]),_._v(" "),t("li",[t("strong",[_._v("属性(Attribute)")]),_._v("，实体所具有的一些特性，"),t("strong",[_._v("椭圆形")])]),_._v(" "),t("li",[t("strong",[_._v("码或键(key)")]),_._v("，也是一个属性，是唯一标识某个实体的属性。")]),_._v(" "),t("li",[t("strong",[_._v("域(Domain)")]),_._v("，区域，范围，属性的取值范围")]),_._v(" "),t("li",[t("strong",[_._v("实体型(Entity Type)")]),_._v("，有些实体具有相同的属性，比如张三和李四都是26岁，那么年龄就是他们相同的属性。"),t("strong",[_._v("用实体的名字和属性名字的集合")]),_._v("，来抽象和刻画共同的实体类型，我们称之为实体型。")]),_._v(" "),t("li",[t("strong",[_._v("实体集(Entity Set)")]),_._v(" 张三和李四，在年龄上是相同的实体。相同实体的集合，称之为实体集。")]),_._v(" "),t("li",[t("strong",[_._v("联系(Relationship)")]),_._v("，实体之间的关系，"),t("strong",[_._v("菱形")])])]),_._v(" "),t("p",[_._v("数据模型中有 "),t("strong",[_._v('"型"（type）')]),_._v(" 和 "),t("strong",[_._v('"值"（value）')]),_._v("  两个概念")]),_._v(" "),t("p",[_._v("型：姓名，性别，年龄，籍贯，所在城市，联系电话")]),_._v(" "),t("p",[_._v("值：张三，男，26，北京，上海，13912345678")]),_._v(" "),t("h3",{attrs:{id:"概念模型的表示方法-er图-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念模型的表示方法-er图-领会"}},[_._v("#")]),_._v(" 概念模型的表示方法-ER图(领会)")]),_._v(" "),t("p",[_._v("概念模型的表示方法为ER图，实体关系图，见上面的图片-ER图示例")]),_._v(" "),t("h3",{attrs:{id:"什么是逻辑层数据模型-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是逻辑层数据模型-领会"}},[_._v("#")]),_._v(" 什么是逻辑层数据模型(领会)")]),_._v(" "),t("p",[t("strong",[_._v("逻辑层")]),_._v("是数据抽象级别的"),t("strong",[_._v("中间层")]),_._v("。逻辑层数据模型也称为数据的"),t("strong",[_._v("逻辑模型")]),_._v("。任何DBMS都是基于某种"),t("strong",[_._v("逻辑数据模型")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_7_%E9%80%BB%E8%BE%91%E6%A8%A1%E5%9E%8B.png",alt:"1_7_逻辑模型.png"}})]),_._v(" "),t("h3",{attrs:{id:"练习题-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习题-4"}},[_._v("#")]),_._v(" 练习题")]),_._v(" "),t("p",[_._v("1.数据结构描述的是系统的（  ）特性，即数据对象的数据类型、内容、属性以及数据对象之间的联系。填空题，答案：静态")]),_._v(" "),t("p",[_._v("2.（  ）描述的是系统的动态特性，是对各种对象的实例允许执行的操作的集合。单选题，答案：C")]),_._v(" "),t("ul",[t("li",[_._v("A 数据模型")]),_._v(" "),t("li",[_._v("B 数据结构")]),_._v(" "),t("li",[_._v("C 数据操作")]),_._v(" "),t("li",[_._v("D 数据约束")])]),_._v(" "),t("p",[_._v("3.在设计数据库时，通常用（  ）来抽象，表示现实世界的各种事物及其联系。填空题，答案：概念模型")]),_._v(" "),t("p",[_._v("4.简述信息世界涉及哪些基本概念。简答题\n实体、属性、码或键、域、实体型、实体集、联系")]),_._v(" "),t("p",[_._v('5.数据模型中有 "型" 和 （  ）两个不同的概念。填空题，答案：值')]),_._v(" "),t("p",[_._v("6.简述E-R模型的表示方法。简答题")]),_._v(" "),t("ol",[t("li",[_._v("实体，用矩形表示，矩形框内写明实体的名称；\n2）属性，用椭圆形表示，并用无向边将其与对应的实体连接起来；\n3）联系，用菱形表示，菱形框内写明联系的名称，并用无向边分别与有关实体连接起来，同时在无向边旁标上联系的类型(1:1、1:N或M:N), 如果一个联系具有属性，则这些属性也用无向边与该联系连接起来")])]),_._v(" "),t("h3",{attrs:{id:"逻辑模型的类型-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑模型的类型-领会"}},[_._v("#")]),_._v(" 逻辑模型的类型(领会)")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("层次模型")]),_._v(" "),t("ul",[t("li",[_._v("是最早使用的一种数据模型")]),_._v(" "),t("li",[_._v("有且仅有一个节点没有父节点，称为"),t("strong",[_._v("根节点")])]),_._v(" "),t("li",[_._v("其他节点有且仅有一个父节点")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_8_%E9%80%BB%E8%BE%91%E6%A8%A1%E5%9E%8B_%E5%B1%82%E6%AC%A1%E6%A8%A1%E5%9E%8B.png",alt:"1_8_逻辑模型_层次模型.png"}})])]),_._v(" "),t("li",[t("p",[_._v("网状模型")]),_._v(" "),t("ul",[t("li",[_._v("以网状结构表示实体与实体间的联系")]),_._v(" "),t("li",[_._v("允许结点有多个父结点")]),_._v(" "),t("li",[_._v("可以没有父节点")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_9_%E9%80%BB%E8%BE%91%E6%A8%A1%E5%9E%8B_%E7%BD%91%E7%8A%B6%E6%A8%A1%E5%9E%8B.png",alt:"1_9_逻辑模型_网状模型.png"}})])]),_._v(" "),t("li",[t("p",[_._v("关系模型")]),_._v(" "),t("ul",[t("li",[_._v("用"),t("strong",[_._v("二维表结构")]),_._v("来表示实体间的联系")]),_._v(" "),t("li",[_._v("优点：建立在严格的数学概念的基础上；概念单一；存取路径对用户透明，有更高的数据独立性，更好的安全性。\n"),t("img",{attrs:{src:"/images/db/1_10_%E9%80%BB%E8%BE%91%E6%A8%A1%E5%9E%8B_%E5%85%B3%E7%B3%BB%E6%A8%A1%E5%9E%8B.png",alt:"1_10_逻辑模型_关系模型.png"}})])])]),_._v(" "),t("li",[t("p",[_._v("面向对象模型")]),_._v(" "),t("ul",[t("li",[_._v("既是概念模型，又是逻辑模型")]),_._v(" "),t("li",[_._v("表达能力丰富，对象可复用、维护方便\n"),t("img",{attrs:{src:"/images/db/1_11_%E9%80%BB%E8%BE%91%E6%A8%A1%E5%9E%8B_%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E6%A8%A1%E5%9E%8B.png",alt:"1_11_逻辑模型_面向对象模型.png"}})])])])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("逻辑模型类型")]),_._v(" "),t("th",[_._v("对应特性")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("层次模型")]),_._v(" "),t("td",[_._v("最早使用的一种数据模型；有且仅有一个结点没有（ ），称作（ ）；其他节点有且仅有一个（ ）")])]),_._v(" "),t("tr",[t("td",[_._v("网状模型")]),_._v(" "),t("td",[_._v("以（ ）结构表示实体与实体间的联系；允许结点有多个父节点；可以有结点没有父节点")])]),_._v(" "),t("tr",[t("td",[_._v("关系模型")]),_._v(" "),t("td",[_._v("用（ ）结构表示实体间的联系；优点：建立在严格的（ ）基础上；概念单一；存取路径对用户透明，有更高的数据独立性，更好的安全保密性。")])]),_._v(" "),t("tr",[t("td",[_._v("（）模型")]),_._v(" "),t("td",[_._v("既是概念模型，又是逻辑模型；表达能力丰富，对象可复用、维护方便")])])])]),_._v(" "),t("h3",{attrs:{id:"什么是物理层数据模型-领会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是物理层数据模型-领会"}},[_._v("#")]),_._v(" 什么是物理层数据模型(领会)")]),_._v(" "),t("p",[_._v("物理层数据模型，也称为数据的"),t("strong",[_._v("物理模型")]),_._v("，描述数据在存储介质上的组织结构，是逻辑模型的物理实现。")]),_._v(" "),t("ul",[t("li",[_._v("是数据库"),t("strong",[_._v("最底层")]),_._v("的抽象")]),_._v(" "),t("li",[_._v("设计目标是提高数据库性能和有效利用存储空间")])]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("数据模型分类")]),_._v(" "),t("th",[_._v("对应特性")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("概念模型")]),_._v(" "),t("td",[_._v("数据抽象级别的（ ）；主要用于数据库的（ ）")])]),_._v(" "),t("tr",[t("td",[_._v("逻辑模型")]),_._v(" "),t("td",[_._v("数据抽象级别的（ ）；任何DBMS都是基于某种（）")])]),_._v(" "),t("tr",[t("td",[_._v("物理模型")]),_._v(" "),t("td",[_._v("描述数据在存储介质上的组织结构，是（ ）的物理实现；是数据库（ ）的抽象；设计目标是提高数据库性能和有效利用存储空间。")])])])]),_._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[_._v("#")]),_._v(" 小结")]),_._v(" "),t("p",[t("img",{attrs:{src:"/images/db/1_12_%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%E5%B0%8F%E7%BB%93.png",alt:"1_12_数据模型小结.png"}})]),_._v(" "),t("h3",{attrs:{id:"练习题-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习题-5"}},[_._v("#")]),_._v(" 练习题")]),_._v(" "),t("p",[_._v("1.下面数据模型中，采用二维表格结构来表示实体与实体之间联系的模型是（ ）。单选题，答案：A")]),_._v(" "),t("ul",[t("li",[_._v("A 关系模型")]),_._v(" "),t("li",[_._v("B 网络模型")]),_._v(" "),t("li",[_._v("C 网状模型")]),_._v(" "),t("li",[_._v("D 层次模型")])]),_._v(" "),t("p",[_._v("2.（ ）是数据库系统最早使用的一种数据模型。填空题，答案：层次模型")]),_._v(" "),t("p",[_._v("3.简诉面向对象数据模型的优点。简答题")]),_._v(" "),t("p",[_._v("面向对象数据模型用面向对象观点来描述现实世界实体的逻辑组织、对象间的联系。其表达能力丰富、具有对象可复用、维护方便等优点。")]),_._v(" "),t("p",[_._v("4.（ ）是数据库最底层的抽象，它确定数据的物理存储结构、数据存储路径以及调整、优化数据库的性能。填空题，答案：物理模型")]),_._v(" "),t("p",[_._v("5.简述概念模型、逻辑模型、物理模型之间的关系。简答题")]),_._v(" "),t("p",[_._v("三个不同的数据模型之间"),t("strong",[_._v("既相互独立又存在关联")]),_._v("。从"),t("strong",[_._v("现实世界到概念模型的转换")]),_._v("是由数据库设计人员完成的；"),t("strong",[_._v("从概念模型到逻辑模型的转换")]),_._v("可以由数据库设计人员完成，也可以用数据库设计工具协助设计人员完成；从"),t("strong",[_._v("逻辑模型到物理模型的转换")]),_._v("主要由数据库管理系统完成。")])])}),[],!1,null,null,null);v.default=a.exports}}]);