
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/splash/index","pages/login/loginPage","pages/login/companyPage","pages/login/registerPage","pages/demo/home","pages/welcome/welcome","pages/user/user","pages/user/exam/index","pages/user/exam/detail","pages/user/duration/index","pages/user/duration/regulation","pages/index/index","pages/course/info/index","pages/course/info/detail","pages/course/info/exercise","pages/exam/online/index","pages/exam/online/profile","pages/exam/online/answerQuestion","pages/scan/scanCode","pages/exam/daily/daily","pages/team/activity/activity","pages/team/activity/launchActivity","pages/team/activity/activityList","pages/team/activity/signActivity","pages/team/activity/opinionSign","pages/team/activity/signRecord","pages/yd/index/index","pages/team/knowledgeLibrary/index","pages/team/knowledgeLibrary/knowledgeLibrary","pages/team/knowledgeLibrary/collect","pages/team/knowledgeLibrary/folderList","pages/team/knowledgeLibrary/search","pages/preview/video","pages/team/statistics/index","pages/exam/daily/dailyTest","pages/exam/result/result","pages/exam/answer/answer","pages/exam/result/dailyResult","pages/banner/detail/detail","pages/error/noFound","pages/web/web","pages/accident/accidentList","pages/team/signPage/signPage","pages/exam/team/readyExam","pages/team/scanReady/scanReady","pages/exam/team/answerQuestion","pages/user/integral/index","pages/user/about/index","pages/user/about/axyProduce","pages/user/about/personInfoGuide","pages/user/about/axyAgreement","pages/user/help/helpCenter","pages/exam/result/teamExamResult","pages/user/profile/index","pages/yd/socketTest","uni_modules/uni-upgrade-center-app/pages/upgrade-popup"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F5F6F8"},"tabBar":{"color":"#7D8290","selectedColor":"#0096D9","borderStyle":"black","fontSize":"12px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/images/tab/icon_home.png","selectedIconPath":"static/images/tab/icon_home_selected.png","text":"首页"},{"pagePath":"pages/yd/index/index","iconPath":"static/images/tab/icon_home.png","selectedIconPath":"static/images/tab/icon_home_selected.png","text":"主页"},{"pagePath":"pages/course/info/index","iconPath":"static/images/tab/icon_course.png","selectedIconPath":"static/images/tab/icon_course_selected.png","text":"课程"},{"pagePath":"pages/team/activity/activity","iconPath":"static/images/tab/icon_team.png","selectedIconPath":"static/images/tab/icon_team_selected.png","text":"班组"},{"pagePath":"pages/exam/daily/daily","text":"答题"},{"pagePath":"pages/team/knowledgeLibrary/index","text":"知库"},{"pagePath":"pages/team/statistics/index","text":"统计"},{"pagePath":"pages/user/user","iconPath":"static/images/tab/icon_tab_user.png","selectedIconPath":"static/images/tab/icon_tab_user_selected.png","text":"我的"},{"pagePath":"pages/splash/index","text":""}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"appname":"axcloud","compilerVersion":"3.4.15","entryPagePath":"pages/splash/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/splash/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/login/loginPage","meta":{},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom"}},{"path":"/pages/login/companyPage","meta":{},"window":{"navigationBarTitleText":"企业选择"}},{"path":"/pages/login/registerPage","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/demo/home","meta":{},"window":{"navigationBarTitleText":"例子","navigationStyle":"custom"}},{"path":"/pages/welcome/welcome","meta":{},"window":{"navigationBarTitleText":"启动入口","enablePullDownRefresh":true}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/pages/user/exam/index","meta":{},"window":{"navigationBarTitleText":"我的考试"}},{"path":"/pages/user/exam/detail","meta":{},"window":{"navigationBarTitleText":"考试详情"}},{"path":"/pages/user/duration/index","meta":{},"window":{"navigationBarTitleText":"我的学时"}},{"path":"/pages/user/duration/regulation","meta":{},"window":{"navigationBarTitleText":"学时规则"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/course/info/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"课程"}},{"path":"/pages/course/info/detail","meta":{},"window":{"navigationBarTitleText":"课程内容"}},{"path":"/pages/course/info/exercise","meta":{},"window":{"navigationBarTitleText":"课后练习"}},{"path":"/pages/exam/online/index","meta":{},"window":{"navigationBarTitleText":"在线考试"}},{"path":"/pages/exam/online/profile","meta":{},"window":{"navigationBarTitleText":"在线考试"}},{"path":"/pages/exam/online/answerQuestion","meta":{},"window":{"navigationBarTitleText":"考试答题"}},{"path":"/pages/scan/scanCode","meta":{},"window":{"navigationBarTitleText":"扫码"}},{"path":"/pages/exam/daily/daily","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/team/activity/activity","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"活动","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"","fontSize":"20px","fontSrc":"/static/iconfont.ttf"}]}}},{"path":"/pages/team/activity/launchActivity","meta":{},"window":{"navigationBarTitleText":"创建活动"}},{"path":"/pages/team/activity/activityList","meta":{},"window":{"navigationBarTitleText":"活动列表"}},{"path":"/pages/team/activity/signActivity","meta":{},"window":{"navigationBarTitleText":"活动签字","enablePullDownRefresh":false}},{"path":"/pages/team/activity/opinionSign","meta":{},"window":{"navigationBarTitleText":"活动签字","enablePullDownRefresh":false}},{"path":"/pages/team/activity/signRecord","meta":{},"window":{"navigationBarTitleText":"签到记录","enablePullDownRefresh":false}},{"path":"/pages/yd/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"","fontSize":"20px","fontSrc":"/static/iconfont.ttf"}]}}},{"path":"/pages/team/knowledgeLibrary/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"知库","enablePullDownRefresh":false}},{"path":"/pages/team/knowledgeLibrary/knowledgeLibrary","meta":{},"window":{"navigationBarTitleText":"知库","enablePullDownRefresh":false}},{"path":"/pages/team/knowledgeLibrary/collect","meta":{},"window":{"navigationBarTitleText":"我的收藏","enablePullDownRefresh":false}},{"path":"/pages/team/knowledgeLibrary/folderList","meta":{},"window":{"navigationBarTitleText":"知库","enablePullDownRefresh":false}},{"path":"/pages/team/knowledgeLibrary/search","meta":{},"window":{"navigationBarTitleText":"搜索列表","enablePullDownRefresh":false}},{"path":"/pages/preview/video","meta":{},"window":{"navigationBarTitleText":"预览","enablePullDownRefresh":false}},{"path":"/pages/team/statistics/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/exam/daily/dailyTest","meta":{},"window":{"navigationBarTitleText":"每日答题","enablePullDownRefresh":false}},{"path":"/pages/exam/result/result","meta":{},"window":{"navigationBarTitleText":"考试结果","enablePullDownRefresh":false}},{"path":"/pages/exam/answer/answer","meta":{},"window":{"navigationBarTitleText":"查看答案","enablePullDownRefresh":false}},{"path":"/pages/exam/result/dailyResult","meta":{},"window":{"navigationBarTitleText":"每日答题","enablePullDownRefresh":false}},{"path":"/pages/banner/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":false}},{"path":"/pages/error/noFound","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom"}},{"path":"/pages/web/web","meta":{},"window":{"navigationBarTitleText":"详情","enablePullDownRefresh":false}},{"path":"/pages/accident/accidentList","meta":{},"window":{"navigationBarTitleText":"事故早知道","enablePullDownRefresh":true,"onReachBottomDistance":100}},{"path":"/pages/team/signPage/signPage","meta":{},"window":{"navigationBarTitleText":"签到","enablePullDownRefresh":false,"bounce":"none"}},{"path":"/pages/exam/team/readyExam","meta":{},"window":{"navigationBarTitleText":"班组考试","enablePullDownRefresh":false}},{"path":"/pages/team/scanReady/scanReady","meta":{},"window":{"navigationBarTitleText":"扫码","enablePullDownRefresh":false}},{"path":"/pages/exam/team/answerQuestion","meta":{},"window":{"navigationBarTitleText":"班组考试","enablePullDownRefresh":false}},{"path":"/pages/user/integral/index","meta":{},"window":{"navigationBarTitleText":"我的积分"}},{"path":"/pages/user/about/index","meta":{},"window":{"navigationBarTitleText":"关于我们"}},{"path":"/pages/user/about/axyProduce","meta":{},"window":{"navigationBarTitleText":"安训云介绍"}},{"path":"/pages/user/about/personInfoGuide","meta":{},"window":{"navigationBarTitleText":"个人信息保护指引"}},{"path":"/pages/user/about/axyAgreement","meta":{},"window":{"navigationBarTitleText":"安训云协议"}},{"path":"/pages/user/help/helpCenter","meta":{},"window":{"navigationBarTitleText":"帮助中心"}},{"path":"/pages/exam/result/teamExamResult","meta":{},"window":{"navigationBarTitleText":"考试结果","enablePullDownRefresh":false}},{"path":"/pages/user/profile/index","meta":{},"window":{"navigationBarTitleText":"个人信息","enablePullDownRefresh":false}},{"path":"/pages/yd/socketTest","meta":{},"window":{"navigationBarTitleText":"聊天室","enablePullDownRefresh":false}},{"path":"/uni_modules/uni-upgrade-center-app/pages/upgrade-popup","meta":{},"window":{"disableScroll":true,"backgroundColorTop":"transparent","background":"transparent","titleNView":false,"scrollIndicator":false,"animationType":"fade-in","animationDuration":200}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
