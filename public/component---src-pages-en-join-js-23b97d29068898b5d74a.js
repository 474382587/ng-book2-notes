(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{TgUI:function(e,t,a){},dgTd:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Bl7J"),s=a("7vrA"),r=a("3Z9Z"),c=a("JI6e"),o=a("Wbzz"),d=(a("TgUI"),a("VjyN"));t.default=function(){var e=d.createClient({space:"xxnh1wfwedpb",accessToken:"2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E"}),t=Object(n.useState)([]),m=t[0],p=t[1];return Object(n.useEffect)((function(){e.getEntries({content_type:"jobs"}).then((function(e){console.dir(e);var t=[];e.items.length>0&&(t=e.items.map((function(e){return Object.assign({},e.fields,{pdf:e.fields.pdf.fields.file.url,date:new Date(e.sys.createdAt).toDateString(),id:e.sys.id})})),console.log(t),p(t))}))}),[]),i.a.createElement(l.a,null,i.a.createElement(s.a,{className:"join-services"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"加入温顶")),i.a.createElement("div",null,i.a.createElement("img",{width:"100%",src:a("kTdq")})),i.a.createElement(r.a,null,m.map((function(e){return i.a.createElement(c.a,{md:"6",sm:"12",className:"job-card"},i.a.createElement("div",{className:"left"},i.a.createElement("h4",null,e.title),i.a.createElement("p",null,e.intro?e.intro:"")),i.a.createElement("div",{className:"right"},i.a.createElement("a",{target:"_blank",download:!0,href:e.pdf},"Apply")))}))),i.a.createElement("div",{className:"more"},i.a.createElement("p",null,"更多职位! Mobirise helps you cut down development time by providing you with a flexible website editor with a drag and drop interface. Mobirise Website Builder creates responsive, retina and mobile friendly websites in a few clicks. Mobirise is one of the easiest website development tools available today. It also gives you the freedom to develop as many websites as you like given the fact that it is a desktop app.")),i.a.createElement(r.a,{style:{marginTop:30}},i.a.createElement(c.a,{md:"6",sm:"6",xs:"6",style:{fontSize:32}},i.a.createElement(o.Link,{to:"/about"}," ◀公司介绍 ")),i.a.createElement(c.a,{md:"6",sm:"6",xs:"6",style:{textAlign:"right",fontSize:32}},i.a.createElement(o.Link,{to:"/team"}," 团队成员 ▶")))))}},kTdq:function(e,t,a){e.exports=a.p+"static/1-90596399779dca53377e46a314148649.jpg"}}]);
//# sourceMappingURL=component---src-pages-en-join-js-23b97d29068898b5d74a.js.map