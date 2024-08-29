var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "纪舒",
    sex: "男",
    age: "28",
    work_years:"5年",
    phone: "17771847943",
    email: "940427808@qq.com",
    address: "现居湖北省武汉市",
    qq: "940427808",
    log: "纪舒-测试工程师",
    excpect_work: "测试工程师",
    background:"大专",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "面对未知的未来，我坚信每一步努力都将铺就通往美好的道路。",
        "行动是通往梦想的桥梁，拖延则是成功的绊脚石。",
        "勇于挑战，无惧未知，我的字典里没有‘不可能’。",
        "目标明确，持之以恒，我是那个为长远规划不懈努力的智者。",
        "过去的经历塑造了今天的我，未来的挑战我将一笑而过。",
        "追求真相，打破幻想，用技术为现实赋能。",
        "心向理想，不畏艰难，即使前路曲折也要坚持到底。",
        "在编程的世界里，我如鱼得水，享受每一次代码编织的喜悦。",
        "秋风送爽，正是收获的季节，我期待在职业生涯中迎来丰收的果实。",
        "年龄不过是数字，志向才是永恒。我志在千里，永远年轻，永远热泪盈眶。",
        "岁月悠悠，我心依旧。无论遇到多少困难，我都将坚守初心，勇往直前。",
        "我愿意用我所学，换得职场上的每一次成长与突破。",
        "在技术的海洋中，我如芦苇般坚韧，不畏风雨，只为寻找那片属于我的技术彼岸。",
        "在这个充满机遇与挑战的时代，我愿成为那个引领潮流的当代英雄。"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "你好，我是纪舒，一名拥有5年丰富经验的软件测试工程师。<br>" +
         "在软件质量的征途中，我始终秉持着对技术的热情与对细节的执着。<br>" +
         "毕业后，我深耕于软件测试领域，积累了丰富的实战经验。<br>" +
         "我擅长接口测试、自动化测试、性能测试等，<br>" +
         "能够熟练运用多种测试工具和技术，确保软件产品的稳定与可靠。<br>" +
         "我注重团队合作，擅长与开发人员紧密协作，共同提升产品质量。<br>" +
         "现在，我渴望将我的专业技能和丰富经验带入新的团队，与您一同应对挑战，推动项目成功。<br>" +
         "期待有机会加入您的团队，共同为用户创造更优质的软件体验，用技术守护每一个产品的质量关卡！",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>您好，我是纪舒，非常荣幸能在这里向大家介绍自己。作为一名资深测试工程师，我专注于为软件产品提供全面、高效的质量保障服务。在过去的5年里，我深耕于软件测试领域，不仅积累了丰富的实战经验，还掌握了多种测试技术和工具，致力于确保软件从开发到上线的每一个环节都能达到最优的质量标准</p>" +
        "<p>我具备强烈的责任心和团队合作精神，注重细节，善于发现问题并提出解决方案。面对挑战时，我能够保持冷静和耐心，运用创新思维寻找最佳解决方案。我热爱测试工作，相信通过不懈的努力和持续的学习，能够为公司和团队创造更大的价值。</p>" +
        "<p>非常期待能够加入贵公司，与优秀的团队一起工作，共同推动软件产品的质量和用户体验迈向新的高度。谢谢您的查看！</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["功能测试", 90, "blue"],
        ["接口测试", 90, "#1abc9c"],
        ["自动化测试", 80, "rgba(0,0,0)"],
        ["python", 70, "red"],
        ["性能测试", 60, "#FFA500"],
        ["SQL", 60, "yellow"],
        ["JavaScript", 40, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟悉测试工作全流程，可独立的完成完成各个环节测试工作,输出各类文档,完成软件各个生命周期中测试所需完成得任务。</li>" +
        "     <li>熟悉接口测试，会使用 postman，Jmeter 接口测试工具，以及使用requests库完成接口测试</li>" +
        "     <li>熟悉自动化测试，熟悉 pytest+allure 自动化测试框，生成测试报告。可基于requests完成接口自动化，基于uiautomator2，Appium完成车机，程序自动化，基于Selenium完成web自动化</li>" +
        "     <li>熟悉 MySQL 数据库，了解 sql 语句单、多表查询、增、删、改得语句编写。</li>" +
        "     <li>熟悉基本Linux命令操作，ADB 基本命令操作命令。</li>" +
        "     <li>熟悉使用 F12、fiddler 抓包分析,定位缺陷、做弱网测试，查看日志分析错误</li>" +
        "     <li>了解性能测试，了解性能指标的查看,分析，定位问题</li>" +
        "     <li>了解 Docker 容器化技术、镜像、容器的基本命令，了解简单得shell语言</li>" +
        "     <li>了解 HTML、CSS、JavaScript以及相应前端知识。</li>" +
        "     <li>了解django + vue3 前后端分离web开发框架。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["matrix自动化测试平台（自动化测试、性能测试）",
        "2024.3-至今",
        "<h5>项目介绍:</h5>" +
        "" +
        "" +
        "" +
        "" +
        "" +
        "" +
        "",[]
        ],
        ["IPD(集成产品开发)平台（功能测试、接口测试）",
            "2022.7-2023.12",
            "<h5>涉及平台及工具:</h5>" +
            " DevOps 平台（Azure 转火眼）、OPPO 云平台、魔盒大数据管理平台、哥伦布需 求等管" +
            "理平台、Axure RP 原型图设计、PowerDesigner、K8S、Docker、Postman、Arthas 诊断工具、onetest" +
            "测试管理平台、诺亚缺陷管理平台、Navicat;" +
            "<h5>技术架构:</h5>" +
            " OPPO SDK + SpringBoot + MyBatisPlus + SpringCloudAlibaba 套件 + Redis+" +
            "RocketMQ + ES + Activiti/BPM Plus 流程引擎 + xxl-job + ELK + MySQL" +
            "<h5>项目介绍:</h5>" +
            "集成产品开发平台（IPD）由 OPPO 自主研发，主要是为了减少“OPPO 手机”这一产品 从研发到上市所需的周期、人力、资金的投入，" +
            "降低研发成本，提高产品产出率。IPD 平台也是为了解 决几万研发人员在各自新产品研发时，对于来自不同部门不同团队提供的上万原材料信" +
            "息、图纸设计、 硬件设计等，进行跨部门、跨系统协调沟通，并且将所有研发业务结构化、流程化，" +
            "同时并行达到缩短 研发周期的目的。 IPD 平台主要有 PPM（产品项目管理）、PDM（产品数据" +
            "管理）、PIM（产品部件管理）、PLM（产 品生命周期管理）等几大核心服务，最终沉淀出集团的" +
            "研发数据知识库，并且形成研发生命周期不同时 期的版本数据。PDM 子系统现在已产生 10000+" +
            "个流程实例及流程图，主要业务研发数据产生 500W+， 产出硬件图纸设计 1000+，研发数据风" +
            "险问题控制 500+，PDM 知识库积累 2000+研发文档数据。",
            [
                "制定迭代的计划，输出测试思维导图、组织评审、编写测试用例;",
                "执行测试计划与用例执行板块内的功能测试, 与其他板块有集成时, 先执行接口测试后与相关人;",
                "员协商执行功能测试 上线数据验证, 旧流程回归;",
                "缺陷定位、跟踪与回归;",
                "每日站会分享测试进度，评估风险;",
                "把控模块质量，输出测试报告，归档迭代文档;",
                "总结业务逻辑，分享测试经验;"
            ]],
        ["小鹿系统（功能测试、UI 自动化、接口测试）" ,
        "2020.11-2022.5",
        "<h5>项目描述:</h5>" +
        "小鹿系统是新一代的房地产经纪公司平台管理系统，平台可以统一发布公司公告、房源管理、交易管理、经营管理，后台管理、商户管理等等功能模块，达到优化管理、提升销售业绩，加速新人培养的目的。",
        [
            "进入项目工作台板块，首页展示的是公司公告、任务中心、本月业绩、还有经纪人名片，工作台还包含了房源、新房楼盘、客源、线索、签约、交易管理等子模块这些是我主要负责测试板块;",
            "熟读需求文档，参加评审，编写测试思路（板块、功能点）;",
            "利用黑盒测试方法设计测试用例。如房源管理功能十分复杂要用到功能分解法，录入房源用例设计时使用等价类、边界值。经纪人查找房源用例设计时正交实验法、因果图测试法等等;",
            "利用接口文档，使用 postman 编写接口脚本。",
            "利用 monkey+SoloPi+手机助手工具进行稳定性测试，查看日志是否存在 ANR、CRASH、Exception、Forceclosed 字样、查看 SoloPi 输出的各项指标是否符合需求；",
            "搭建 app 自动化框架 Pycharm+selenium+appium+unittest+htmltrstrunner，编写测试脚本",
            "执行用例和脚本，对发现的 bug 提交到禅道工具上进行 bug 的跟踪，然后进行回归测试；",
            "编写提交测试日报，记录每天工作情况包括遇到的困难、如何解决以及解决的问题等，便于测试经理把控项",
        ]],
        ["小鹿选房 APP（功能测试）",
        "2020.5-2020.11",
        "<h5>项目描述:</h5>" +
        "小鹿选房 APP 是一款房源展示平台里面展示了各种在租在售的房源信息，增加房源爆光度，吸引更客户，达到销售业绩提升的效果。" +
        "小鹿选房是一个前端展示平台，与之搭配的有经纪日记这款管理 app，用户进入小鹿找房 app 可以根据自己的" +
        "需求查找特定小区或板块内、地铁站周边，商圈周边的房源，首页搜索框下方有所有在租房源，在售房源，小区" +
        "信息链接，首页还展示近阶段新上架的房源提供客户查看，房源还可以通过有无上传视频、区域位置、户型、面" +
        "积、售价、亮点、朝向、楼层、房屋属性、房龄、装修状况、是否有电梯划分，让用户快速找到意向房源，本款" +
        "软件还提供了用户收集功能，需用户自行填写需求",[
            "小鹿选房 app 且项目功能相对简单所以该 app 的所有功能模块工作中都有涉及参加需求评审，分析需求用 Visio 画出客户选房流程图，然后用 Xmind8 构思测试思路（模块，功能点）" ,
            "使用黑盒测试方法编写测试用例。如：搜索框测试使用等价类，在租，在售房源中房源的划分使用正交实验法因果图测试法，客户填写需求时等价类，边界值。" ,
            "在执行用例后要验证数据是否正确会在数据库中使用 sql 语句查询。数据如果有问题需要用 fiddler 抓包，后端 linux 查看日志操作判断是前端还是后端问题。" ,
            "使用禅道提交 BUG，跟踪 BUG 直至关闭或者挂起。编写测试日报，测试报告。"
        ]]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        ["2024.3 — 至今", "<br>自动化实施工程师",
            "<p><strong>无锡浅雨科技有限公司</strong></p>" +
            "<p>负责镁佳武汉科技有限公司测试事业部测试工具部门得用户，自动化计划得实施；</p>" +
            "<p>完成广汽埃安AH8系统级压测用例实施</p>"+
            "<p>完成江铃福特756/743压测用例实施，空调、车辆设置、语音模块得功能用例实施</p>"+
            "<p>完成奇瑞实车压测用例实施</p>"+
            "<p>中控0代码平台内部测试</p>"
        ],

        ["2022.7 — 2023.12", "<br>测试工程师",
            "<p><strong>上海思芮信息科技有限公司</strong></p>" +
            "<p>负责 oppo 公司 PDM 系统硬件开发、SUBTR、研发专业领域数字化模块的 web 端,app 端,H5页面测试工作，保障产品质量；</p>" +
            "<p>参与需求评审，从测试的角度完善产品需求，编写测试用例， 进行项目测试，并负责缺陷的跟踪和管理；</p>"+
            "<p>完善产品/项目质量保障机制，推荐过程改进，提升整体的测试效率；</p>"+
            "<p>系统质量评价和反馈，问题复现、线上支持；</p>"
        ],

        [ "2022.6 — 2020.6", "<br>测试工程师",
            "<p><strong>深圳市前海房极客网络科技有限责任公司</strong></p>"+
            "<p>负责公司 app 端项目测试工作，保障产品质量；</p>"+
            "<p>参与需求评审，从测试的角度完善产品需求，编写测试用例，进行项目测试，并负责缺陷的跟踪和管理；</p>"+
            "<p>完善产品/项目质量保障机制，推荐过程改进，提升整体的测试效率；</p>"+
            "<p>能独立负责整个项目并对自己负责的项目和产品质量负责</p>"
        ],
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2018.04-2019.12", "德佑", "房产中介"],
        ["2016.07-2017.1", "丰田4S店", "汽车钣金工"],
        ["2014.09-2017.06", "湖北交通职业技术学院", "汽车整形技术 大专"],
    ],



    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/111.jpg",
        "./images/intro-bg.jpg",
        "./images/4.jpg"
    ]

}
