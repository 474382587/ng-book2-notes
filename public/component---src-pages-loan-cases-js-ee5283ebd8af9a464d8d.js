(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"3Sbt":function(e,t,a){},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),i=a.n(c),s=a("q1tI"),l=a.n(s),o=a("vUet"),d=a("YdCC"),m=a("U1MP"),b=a("Wzyw"),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),u=Object(o.a)(a,"card-img");return l.a.createElement(m,Object(r.a)({ref:t,className:i()(s?u+"-"+s:u,c)},b))}));u.displayName="CardImg",u.defaultProps={variant:null};var f=u,p=Object(m.a)("h5"),y=Object(m.a)("h6"),v=Object(d.a)("card-body"),g=Object(d.a)("card-title",{Component:p}),E=Object(d.a)("card-subtitle",{Component:y}),w=Object(d.a)("card-link",{Component:"a"}),x=Object(d.a)("card-text",{Component:"p"}),j=Object(d.a)("card-header"),O=Object(d.a)("card-footer"),h=Object(d.a)("card-img-overlay"),N=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,d=e.bg,m=e.text,u=e.border,f=e.body,p=e.children,y=e.as,g=void 0===y?"div":y,E=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),w=Object(o.a)(a,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:w+"-header"}}),[w]);return l.a.createElement(b.a.Provider,{value:x},l.a.createElement(g,Object(r.a)({ref:t},E,{className:i()(c,w,d&&"bg-"+d,m&&"text-"+m,u&&"border-"+u)}),f?l.a.createElement(v,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=f,N.Title=g,N.Subtitle=E,N.Body=v,N.Link=w,N.Text=x,N.Header=j,N.Footer=O,N.ImgOverlay=h;t.a=N},NRAi:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),c=a("Bl7J"),i=a("7vrA"),s=a("3Z9Z"),l=a("JI6e"),o=a("6xyR"),d=(a("3Sbt"),a("Wbzz")),m=a("VjyN");t.default=function(){var e=Object(r.useState)([]),t=e[0],a=e[1],b=m.createClient({space:"xxnh1wfwedpb",accessToken:"2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E"});return Object(r.useEffect)((function(){b.getEntries({content_type:"postChinese"}).then((function(e){console.dir(e);var t=[];e.items.length>0&&(t=e.items.filter((function(e){return e.fields.tags.includes("cases")})).map((function(e){return Object.assign({},e.fields,{image:e.fields.image.fields.file.url,date:new Date(e.sys.createdAt).toDateString(),id:e.sys.id})})),a(t)),e.items.forEach((function(e){e.fields.productName&&console.log(e.fields.productName)}))}))}),[]),n.a.createElement(c.a,null,n.a.createElement(i.a,{className:"cases-services"},n.a.createElement("section",null,n.a.createElement("h1",{className:"mt-5",style:{textAlign:"center"}},"成功案例"),n.a.createElement("h3",null,"文案 helps you cut down development time by providing you with a flexible website editor with a drag and drop interface. Mobirise Website Builder creates responsive, retina and mobile friendly websites in a few clicks."),n.a.createElement(s.a,{className:"mt-5"},t.map((function(e){return n.a.createElement(l.a,{md:"4",sm:"12",key:e.id},n.a.createElement(o.a,{style:{width:"100%"}},n.a.createElement(o.a.Img,{variant:"top",src:e.image}),n.a.createElement(o.a.Body,null,n.a.createElement(o.a.Title,null,e.title),n.a.createElement(o.a.Text,null,e.excerpt),n.a.createElement(d.Link,{className:"btn btn-primary",to:"/post?id="+e.id},"了解更多"))))})))),n.a.createElement(s.a,{style:{marginTop:30}},n.a.createElement(l.a,{md:"6",sm:"6",xs:"6",style:{fontSize:32}},n.a.createElement("a",{href:"http://sv.mikecrm.com/JcYy9jm",target:"_blank"},"◀  申请贷款")),n.a.createElement(l.a,{md:"6",sm:"6",xs:"6",style:{textAlign:"right",fontSize:32}},n.a.createElement(d.Link,{to:"/loan/services"},"住房贷款 ▶")))))}}}]);
//# sourceMappingURL=component---src-pages-loan-cases-js-ee5283ebd8af9a464d8d.js.map