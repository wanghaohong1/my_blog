(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{456:function(t,v,_){"use strict";_.r(v);var r=_(4),e=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"后端项目经典分层架构介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后端项目经典分层架构介绍"}},[t._v("#")]),t._v(" 后端项目经典分层架构介绍")]),t._v(" "),v("blockquote",[v("p",[t._v("本文作者："),v("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/Abldw5WkjidySxkKxU2cQdAtnah",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员鱼皮"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("本站地址："),v("a",{attrs:{href:"https://codefather.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://codefather.cn"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("大家好，我是鱼皮。开发后端项目时，我们最常见的一种架构模式就是 "),v("code",[t._v("分层架构")]),t._v(" 。")]),t._v(" "),v("p",[t._v("所谓的分层架构，就是把系统自上而下分为多个不同的层，每一层都有特定的功能和职责，且只和自己的直接上层与直接下层 “打交道”。")]),t._v(" "),v("p",[t._v("分层架构的优点是：每一层都有明确定义的职责，易于理解和维护；而且各层可以独立扩展，以适应不同的需求。")]),t._v(" "),v("p",[t._v("所以分层架构也是最适合新手入门学习、并且实际开发中应用最多的架构。")]),t._v(" "),v("h2",{attrs:{id:"分层架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分层架构"}},[t._v("#")]),t._v(" 分层架构")]),t._v(" "),v("p",[t._v("下面给大家一种 Java 企业级后端项目开发时常用的分层架构，一般从前端界面（表示层）发送的请求出发，需要经历接入层、控制层、业务逻辑层、通用业务层、数据访问层、系统资源层等。")]),t._v(" "),v("p",[v("strong",[t._v("表示层")]),t._v(" 通常是指让用户交互和查看信息的前端界面，比如用户点击按钮后能够发送一个请求，也可以叫用户层、界面层等。")]),t._v(" "),v("p",[t._v("发送请求后，会经过 "),v("strong",[t._v("接入层")]),t._v(" ，比如 Nginx 网关、或者其他中间件，对请求做一个预处理或转发，比如实现负载均衡。这一层不是必须存在的，通常更适用于中大型项目，前端也可以直接请求后端。")]),t._v(" "),v("p",[t._v("接入层会将请求转发到 "),v("strong",[t._v("控制层")]),t._v("（Controller），负责接受请求、调用业务逻辑层（Service）的代码实现功能、然后响应结果。控制层一般不建议写复杂的业务逻辑，尽量保持精简。")]),t._v(" "),v("p",[t._v("接下来是 "),v("strong",[t._v("业务逻辑层")]),t._v("（Service），负责处理复杂的业务逻辑，比如对请求数据进行校验、处理、调用数据访问层以将结果存到数据库中等，也是我们做系统时主要开发编码的部分。")]),t._v(" "),v("p",[v("strong",[t._v("通用业务层")]),t._v("（Manager、Module）是一种特殊的业务逻辑层，主要的作用是抽取了一些需要被多个业务调用的公共代码，比如上传文件到对象存储、鉴权等，从而实现复用。")]),t._v(" "),v("p",[v("strong",[t._v("数据访问层")]),t._v("（Dao / Mapper）负责操作底层的数据源，比如对数据库、文件、缓存等进行增删改查。")]),t._v(" "),v("p",[t._v("最后是 "),v("strong",[t._v("系统资源层")]),t._v(" ，也可以叫基础设施层，包括各种基础服务、系统环境等，比如数据库、消息队列、Redis、文件存储、Linux 系统、Docker 等。复杂的基础设施可能还包括 K8S 容器资源编排、资源调度平台等。")]),t._v(" "),v("hr"),t._v(" "),v("p",[t._v("需要注意的是，并不是所有的分层架构都需要这么划分，不同业务和团队可能有自己的分层选择与规范。")]),t._v(" "),v("p",[t._v("比如我带大家开发的 "),v("a",{attrs:{href:"https://yuyuanweb.feishu.cn/wiki/LhjxwgFjwiovTVk9w2vcJoj4nid",target:"_blank",rel:"noopener noreferrer"}},[t._v("OJ 在线判题系统"),v("OutboundLink")],1),t._v(" ，分层架构如下：")]),t._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1697022742320-afe5d60d-b0ba-4b02-91a9-d5870021af16.png",loading:"lazy"}})]),t._v(" "),v("h2",{attrs:{id:"示例项目结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例项目结构"}},[t._v("#")]),t._v(" 示例项目结构")]),t._v(" "),v("p",[t._v("基于分层架构，我们可以将项目按照特定的目录名（包名）来组织代码，比如：")]),t._v(" "),v("ul",[v("li",[t._v("controller：控制层")]),t._v(" "),v("li",[t._v("service：业务逻辑层")]),t._v(" "),v("li",[t._v("mapper：数据访问层")]),t._v(" "),v("li",[t._v("model：数据模型")])]),t._v(" "),v("p",[t._v("还可以按照业务或文件的类型来划分目录，比如：")]),t._v(" "),v("ul",[v("li",[t._v("constant：常量")]),t._v(" "),v("li",[t._v("annotation：注解类")]),t._v(" "),v("li",[t._v("common：公共类")]),t._v(" "),v("li",[t._v("config：配置类")]),t._v(" "),v("li",[t._v("job：任务")]),t._v(" "),v("li",[t._v("exception：异常处理相关")]),t._v(" "),v("li",[t._v("utils：工具类")])]),t._v(" "),v("p",[t._v("以之前带大家做过的 "),v("a",{attrs:{href:"https://wx.zsxq.com/dweb2/index/topic_detail/415521148215518",target:"_blank",rel:"noopener noreferrer"}},[t._v("寻爱网项目"),v("OutboundLink")],1),t._v(" 为例，项目的目录结构如图：")]),t._v(" "),v("p",[v("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://pic.yupi.icu/1/1697023472138-1db5caf0-dfcf-4835-ad6c-c7ccc80584fd.png",loading:"lazy"}})]),t._v(" "),v("h2",{attrs:{id:"其他知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他知识"}},[t._v("#")]),t._v(" 其他知识")]),t._v(" "),v("p",[t._v("1）计算机网络也是采用了经典的分层架构，OSI 七层参考模型中，把计算机网络自底向上分为了物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。每个层只处理特定的功能，比如数据传输、数据的路由；层与层之间通过接口（或者叫协议）进行通信。")]),t._v(" "),v("p",[t._v("2）需要注意的是，我们常用的后端开发框架 Spring MVC 是基于 MVC（Model-View-Controller）设计模式构建的，而不能算是传统的分层架构。而且一般现在的项目中只使用 Spring MVC 作为整个项目的控制层，不过大多数用了 Spring MVC 框架的项目基本都使用了分层架构。")]),t._v(" "),v("h2",{attrs:{id:"实践"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),v("p",[t._v("想了解更多常见的后端架构设计，推荐阅读这篇文章："),v("a",{attrs:{href:"https://mp.weixin.qq.com/s/iE3iOhLwxwMYhilOyyf90Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("架构设计，让网站支棱起来！"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("编程导航星球的所有后端项目基本都使用了经典分层架构，随便实践一个项目都能学会这种架构方式。")]),t._v(" "),v("p",[t._v("👉🏻 编程导航原创项目教程系列：https://yuyuanweb.feishu.cn/wiki/SePYwTc9tipQiCktw7Uc7kujnCd")])])}),[],!1,null,null,null);v.default=e.exports}}]);