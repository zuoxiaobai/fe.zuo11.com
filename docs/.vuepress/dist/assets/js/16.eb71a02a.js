(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{380:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库应设计与开发实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库应设计与开发实例"}},[t._v("#")]),t._v(" 数据库应设计与开发实例")]),t._v(" "),a("p",[t._v("实例：高校在线选课系统数据库设计")]),t._v(" "),a("p",[t._v("系统模块如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/db/7_1_%E9%AB%98%E6%A0%A1%E5%9C%A8%E7%BA%BF%E9%80%89%E8%AF%BE%E7%B3%BB%E7%BB%9F.png",alt:"7_1_高校在线选课系统.png"}})]),t._v(" "),a("h2",{attrs:{id:"需求描述与分析-领会"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求描述与分析-领会"}},[t._v("#")]),t._v(" 需求描述与分析(领会)")]),t._v(" "),a("p",[t._v("功能性需求\n非功能性需求")]),t._v(" "),a("h2",{attrs:{id:"系统设计-综合应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统设计-综合应用"}},[t._v("#")]),t._v(" 系统设计(综合应用)")]),t._v(" "),a("p",[t._v("质量要求：")]),t._v(" "),a("ul",[a("li",[t._v("可靠性")]),t._v(" "),a("li",[t._v("正确性")]),t._v(" "),a("li",[t._v("兼容性")]),t._v(" "),a("li",[t._v("健壮性(容错性)")])]),t._v(" "),a("p",[t._v("功能模块设计\n数据库设计")]),t._v(" "),a("h3",{attrs:{id:"确定实体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定实体"}},[t._v("#")]),t._v(" 确定实体")]),t._v(" "),a("p",[t._v("根据功能模块，看有哪些实体")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据图自己思考的实体")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("学生")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("学生"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、姓名、学号、年级、班级、年龄、院系"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("课程")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("课程"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、课程名称、学分、是否是公共课"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("开课信息")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("课程"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、上课位置、上课时间、限制人数、教师"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("院系")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("院系"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、院系名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("教师")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("教师"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、姓名、年龄"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("成绩")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("课程"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、学生"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、成绩"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("教师课程")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("教师"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、课程"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("学生选课")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("开课信息"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("、学生"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("参考答案")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("学生（学号、姓名、性别、密码）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("教师（教师工号、姓名、性别、年龄、职称、密码）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("课程（课程号、课程名、学分、时间、地点、类别、开课学院、限选人数）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("院系（院系名称、办公地点、教师人数）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v("系统管理员（姓名、"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),t._v("号、密码）\n")])])]),a("h3",{attrs:{id:"用er图描述局部信息结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用er图描述局部信息结构"}},[t._v("#")]),t._v(" 用ER图描述局部信息结构")]),t._v(" "),a("p",[t._v("上述实体之间存在哪些相互联系？")]),t._v(" "),a("ol",[a("li",[t._v("学生-课程")]),t._v(" "),a("li",[t._v("教师-课程")]),t._v(" "),a("li",[t._v("教师-院系")]),t._v(" "),a("li",[t._v("学生-院系")]),t._v(" "),a("li",[t._v("系统管理员-学生")]),t._v(" "),a("li",[t._v("系统管理员-教师")]),t._v(" "),a("li",[t._v("系统管理员-课程")]),t._v(" "),a("li",[t._v("系统管理员-院系")])]),t._v(" "),a("p",[t._v("E-R图")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/db/7_2_ER%E5%9B%BE.png",alt:"7_2_ER图.png"}})]),t._v(" "),a("h3",{attrs:{id:"逻辑结构与规范化设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑结构与规范化设计"}},[t._v("#")]),t._v(" 逻辑结构与规范化设计")]),t._v(" "),a("p",[t._v("如何将ER图装换为关系模式")]),t._v(" "),a("ul",[a("li",[t._v("学生（"),a("strong",[t._v("学号")]),t._v("、姓名、性别、登录密码、院系编号）")]),t._v(" "),a("li",[t._v("院系（"),a("strong",[t._v("院系编号")]),t._v("、系名、学生人数、教师人数、办公地点）")]),t._v(" "),a("li",[t._v("教师（"),a("strong",[t._v("职工号")]),t._v("、姓名、性别、年龄、职称、登录密码、院系编号）")]),t._v(" "),a("li",[t._v("课程（"),a("strong",[t._v("课程号")]),t._v("、课程名称、课程类别、学分、上课时间、上课地点、开课学院、限选人数、职工号）")]),t._v(" "),a("li",[t._v("系统管理员（"),a("strong",[t._v("ID号")]),t._v("、姓名、登录密码）")]),t._v(" "),a("li",[t._v("选修（"),a("strong",[t._v("学号")]),t._v("、课程号、成绩）")]),t._v(" "),a("li",[t._v("管理学生（管理员ID号、学号、操作时间）")]),t._v(" "),a("li",[t._v("管理院系（管理员ID号、院系编号、操作时间）")]),t._v(" "),a("li",[t._v("管理教师（管理员ID号、职工号、操作时间）")]),t._v(" "),a("li",[t._v("管理课程（管理员ID、课程号、操作时间）")])]),t._v(" "),a("p",[t._v("数据库的实现")]),t._v(" "),a("h3",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[t._v("#")]),t._v(" 创建数据库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("CREATE DATABASE db_xuanke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"创建数据表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据表"}},[t._v("#")]),t._v(" 创建数据表")]),t._v(" "),a("p",[t._v("以学生信息表为例子，把关系模式全部创建成表")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("CREATE TABLE student "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  StuNo INT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NOT NULL COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学号'")]),t._v(",\n  StuName VARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NOT NULL COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓名'")]),t._v(",\n  StuSex CHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'性别'")]),t._v(",\n  Pwd VARCHAR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" DEFAULT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'00000000'")]),t._v(" COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'登录密码'")]),t._v(",\n  DeptNo INT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NOT NULL COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'所属院系'")]),t._v(",\n  PRIMARY KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StuNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n  FOREIGN KEY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DeptNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" REFERENCES department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DeptNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ON DELETE RESTRICT ON UPDATE RESTRICT\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" COMMENT "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'学生信息表'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关于外键部分，可以参考: 参照完整性约束")]),t._v("\n")])])]),a("ul",[a("li",[t._v("院系编码表 deptcode")]),t._v(" "),a("li",[t._v("院系表 department")]),t._v(" "),a("li",[t._v("教师表 teacher")]),t._v(" "),a("li",[t._v("课程编码表 coursecode")]),t._v(" "),a("li",[t._v("课程表 course")]),t._v(" "),a("li",[t._v("系统管理员表 administrator")]),t._v(" "),a("li",[t._v("选修表 electing")]),t._v(" "),a("li",[t._v("管理学生表 adminstu")]),t._v(" "),a("li",[t._v("管理院系表 admindept")]),t._v(" "),a("li",[t._v("管理教师表 adminteacher")]),t._v(" "),a("li",[t._v("管理课程表 admincourse")])]),t._v(" "),a("h2",{attrs:{id:"系统功能实现-综合应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统功能实现-综合应用"}},[t._v("#")]),t._v(" 系统功能实现(综合应用)")]),t._v(" "),a("h3",{attrs:{id:"实现数据库行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现数据库行为"}},[t._v("#")]),t._v(" 实现数据库行为")]),t._v(" "),a("h4",{attrs:{id:"安全控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全控制"}},[t._v("#")]),t._v(" 安全控制")]),t._v(" "),a("p",[t._v("例子：为心来的教务管理人员金老师(用户名jin)分配具备管理学生、院系、教师和课程的权限")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GRANT SELECT,UPDATE,INSERT,DELETE ON db_xuanke.* TO "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jin'")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"管理学生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理学生"}},[t._v("#")]),t._v(" 管理学生")]),t._v(" "),a("p",[t._v("例子：金老师在学生管理功能中添加一名计算机学院的女生黄然")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("INSERT INTO db_xuanke.student SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StuNo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170922")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StuName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'黄然'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("StuSex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'女'")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Pwd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DEFAULT, DeptNo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \nSELECT DepNo FROM db_xuanke.departcode WHERE "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DepName")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'计算机学院'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"数据库保护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库保护"}},[t._v("#")]),t._v(" 数据库保护")]),t._v(" "),a("p",[t._v("例子：当每位老师进行登记分数操作时，系统需要自动验证分数值是否位于0-100区间，以此保护数据库中数据的正确性")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个触发器，当分数不满足条件时直接删除")]),t._v("\nCREATE TRIGGER tri_test AFTER INSERT ON db_xuanke.electing FOR EACH ROW\nBEGIN\nIF NEW.Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" OR NEW.Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" THEN\nDELETE FROM db_xuanke.electing WHERE "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Score")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("NEW.Score\nEND IF\nEND\n")])])]),a("h4",{attrs:{id:"事务与并发控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务与并发控制"}},[t._v("#")]),t._v(" 事务与并发控制")]),t._v(" "),a("p",[t._v("例子：金老师需要批量录入教师信息时，为防止其他操作对数据的影响，可以使用事务处理来维护数据库的完整性")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("BEGIN TRANSACTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始事务")]),t._v("\nINSERT INTO db_xuanke.teacher VALUES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10021")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'万明'")]),t._v(",NULL,NULL,NULL,DEFAULT,10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINSERT INTO db_xuanke.teacher VALUES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10022")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'万明2'")]),t._v(",NULL,NULL,NULL,DEFAULT,11"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINSERT INTO db_xuanke.teacher VALUES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10023")]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'万明3'")]),t._v(",NULL,NULL,NULL,DEFAULT,12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCOMMIT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交事务")]),t._v("\n")])])]),a("h4",{attrs:{id:"数据查询与统计报表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据查询与统计报表"}},[t._v("#")]),t._v(" 数据查询与统计报表")]),t._v(" "),a("p",[t._v("例子：为教务管理人员提供统计每个学生选修课程学分的报表")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用视图")]),t._v("\nCREATE VIEW v_score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StuNo,totlescore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AS \nSELECT student.StuNo,SUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("course.Credit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" FORM student \nJOIN electing ON student.StuNo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("electing.StuNo \nJOIN course ON course.CourseNo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("electing.CorseNo\nWHERE electing.Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" GROUP BY student.StuNo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Credit学分")]),t._v("\n")])])]),a("h3",{attrs:{id:"应用软件的业务逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用软件的业务逻辑"}},[t._v("#")]),t._v(" 应用软件的业务逻辑")]),t._v(" "),a("p",[t._v("首先，使用网页设计语言HTML/CSS实现系统登录验证页面")]),t._v(" "),a("p",[t._v("然后，通过使用服务端语言(比如php，java,node等)编写相应的服务端代码，完成登录验证页面与后台数据库的交互操作")]),t._v(" "),a("h2",{attrs:{id:"系统测试与维护-综合应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统测试与维护-综合应用"}},[t._v("#")]),t._v(" 系统测试与维护(综合应用)")]),t._v(" "),a("ul",[a("li",[t._v("登录验证功能测试")]),t._v(" "),a("li",[t._v("管理员后台主要功能测试\n"),a("ul",[a("li",[t._v("学生信息管理系统")]),t._v(" "),a("li",[t._v("课程信息管理系统")])])]),t._v(" "),a("li",[t._v("学生使用模块功能测试")]),t._v(" "),a("li",[t._v("教师使用模块功能测试")])]),t._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),a("p",[t._v("1.在选课期间，除非遇到特殊情况，否则要保证系统正常使用，这体现了选课系统质量要求中的（  ）。单选题，答案：A")]),t._v(" "),a("ul",[a("li",[t._v("A 可靠性")]),t._v(" "),a("li",[t._v("B 正确性")]),t._v(" "),a("li",[t._v("C 兼容性")]),t._v(" "),a("li",[t._v("D 健壮性")])]),t._v(" "),a("p",[t._v("2.以下属于基于教材中网络的在线选课程系统对于客户端软件、硬件环境的要求是（  ）。单选题，答案：B")]),t._v(" "),a("ul",[a("li",[t._v("A 使用Windows作为操作系统")]),t._v(" "),a("li",[t._v("B 能在支持IE的浏览器上运行")]),t._v(" "),a("li",[t._v("C Apache作为Web服务器")]),t._v(" "),a("li",[t._v("D MySQL作为数据库管理系统")])]),t._v(" "),a("p",[t._v("3.以下系统功能实现中，不属于实现数据库行为的是（  ）。单选题，答案 D")]),t._v(" "),a("ul",[a("li",[t._v("A 通过SQL语言完成与本应用功能相关的增、删、查、改等数据库操作")]),t._v(" "),a("li",[t._v("B 创建子查询")]),t._v(" "),a("li",[t._v("C 创建存储过程或存储函数")]),t._v(" "),a("li",[t._v("D 使用php标尺语言写相应的服务端代码")])])])}),[],!1,null,null,null);s.default=e.exports}}]);