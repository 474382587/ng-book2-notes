(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4vyk":function(e,a,t){"use strict";t.r(a);t("Yvd2");var n=t("3I+P"),l=t("q1tI"),r=t.n(l),c=t("b+jL"),i=t("7vrA"),m=t("3Z9Z"),s=t("JI6e"),o=t("6xyR"),d=t("cWnB"),E=t("wx14"),u=t("zLVn"),p=t("TSYQ"),h=t.n(p),g=(t("2W6z"),t("JCAc")),f=t("vUet"),v=t("rQNl"),b=t("VWqr"),y=t("ILyh"),w={variant:void 0,active:!1,disabled:!1},k=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,c=e.disabled,i=e.className,m=e.variant,s=e.action,o=e.as,d=e.eventKey,p=e.onClick,g=Object(u.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(f.a)(t,"list-group-item");var v=Object(l.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();p&&p(e)}),[c,p]);return r.a.createElement(b.a,Object(E.a)({ref:a},g,{eventKey:Object(y.b)(d||null,g.href),as:o||(s?g.href?"a":"button":"div"),onClick:v,className:h()(i,t,n&&"active",c&&"disabled",m&&t+"-"+m,s&&t+"-action")}))}));k.defaultProps=w,k.displayName="ListGroupItem";var N=k,T={variant:void 0,horizontal:void 0},x=r.a.forwardRef((function(e,a){var t,n=Object(g.a)(e,{activeKey:"onSelect"}),l=n.className,c=n.bsPrefix,i=n.variant,m=n.horizontal,s=n.as,o=void 0===s?"div":s,d=Object(u.a)(n,["className","bsPrefix","variant","horizontal","as"]),p=Object(f.a)(c,"list-group");return t=m?!0===m?"horizontal":"horizontal-"+m:null,r.a.createElement(v.a,Object(E.a)({ref:a},d,{as:o,className:h()(l,p,i&&p+"-"+i,t&&p+"-"+t)}))}));x.defaultProps=T,x.displayName="ListGroup",x.Item=N;var I=x,j=t("Bl7J"),z=(t("UbSA"),t("VjyN"));a.default=function(e){var a,E=4;if("undefined"!=typeof window){var u=window.innerWidth;console.log(u),u<768&&(E=1)}var p=Object(l.useState)([]),h=p[0],g=p[1],f=z.createClient({space:"1u2l88u90bu7",accessToken:"Hoh3zn4V3KzIt9pD8qf7bHA1mqqVr6Tzq036L9UsdL0"});return Object(l.useEffect)((function(){f.getEntries({content_type:"homePageBanners"}).then((function(e){if(e.items.length>0){var a=e.items.map((function(e){return e.fields}));g(a),console.log("hahahaha"),console.log(a)}}))}),[]),console.log(123),r.a.createElement(j.a,{pageInfo:{pageName:"index"}},r.a.createElement("div",{className:"home-page"},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(c.a,{interval:3e3},h.length>0?h.map((function(e,a){return r.a.createElement(c.a.Item,{key:a},r.a.createElement("img",{className:"d-block w-100",src:e.image.fields.file.url,alt:e.image.fields.title}),r.a.createElement(c.a.Caption,null,r.a.createElement("p",{style:{textAlign:"right"}},r.a.createElement("a",{href:e.url,target:"_blank"},"了解更多"))))})):"")),r.a.createElement(i.a,{className:"margin-top80"},r.a.createElement(m.a,null,r.a.createElement(s.a,{sm:"12",md:"4"},r.a.createElement(o.a,{style:{width:"100%"}},r.a.createElement(o.a.Img,{variant:"top",src:t("zjil")}),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"贷款按揭"),r.a.createElement(o.a.Text,null,"温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。"),r.a.createElement(d.a,{variant:"primary"},"了解更多")))),r.a.createElement(s.a,{sm:"12",md:"4"},r.a.createElement(o.a,{style:{width:"100%"}},r.a.createElement(o.a.Img,{variant:"top",src:t("CStY")}),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"财税规划"),r.a.createElement(o.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(d.a,{variant:"primary"},"了解更多")))),r.a.createElement(s.a,{sm:"12",md:"4"},r.a.createElement(o.a,{style:{width:"100%"}},r.a.createElement(o.a.Img,{variant:"top",src:t("UfJH")}),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"财产保险"),r.a.createElement(o.a.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),r.a.createElement(d.a,{variant:"primary"},"了解更多"))))),r.a.createElement(m.a,{className:"margin-top80"},r.a.createElement(s.a,{md:"6",sm:"12"},r.a.createElement("h2",{className:"big-title"},"选择温顶")),r.a.createElement(s.a,{md:"6",sm:"12"},r.a.createElement("p",{className:"paragraph"},"温顶贷款和财税咨询规划公司为贷款人和投资人提供专业、快捷和真诚的金融服务，为客户的购房安居带来希望，为客户的资产保驾护航。"))),r.a.createElement("h3",{style:{marginTop:50,fontSize:"3rem",textAlign:"center"}},"温顶荣誉"),r.a.createElement("p",{style:{color:"#777",textAlign:"center"},className:"paragraph"},"温顶集团旗下的贷款按揭与财税规划团队，屡获殊荣。温顶贷款连续多年（自2018年）荣登全加拿大华人贷款经纪第一名，而理财规划也是收获颇丰，联合创始人柯健莹连续 9 年进入全球寿险精英百万圆桌会议（MDRT），也是大温最年轻的 MDRT-TOT 获得者。"),r.a.createElement("div",{className:"ant-carousel"},r.a.createElement(n.a,((a={autoplay:!0,slidesToShow:E,autoplaySpeed:3e3,arrows:!0,dots:!1}).arrows=!0,a),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("XyA/")})),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("dUnT")})),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("78Yz")})),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("XyA/")})),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("dUnT")})),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{width:"100%",src:t("78Yz")}))))),r.a.createElement(i.a,{className:"margin-top80"},r.a.createElement(m.a,null,r.a.createElement(s.a,{md:"6",sm:"12"},r.a.createElement(o.a,{style:{width:"100%"}},r.a.createElement(o.a.Img,{variant:"top",src:t("zjil")}),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"贷款按揭"),r.a.createElement(o.a.Text,null,"温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。")))),r.a.createElement(s.a,{md:"6",sm:"12"},r.a.createElement(o.a,{style:{width:"100%"}},r.a.createElement(o.a.Img,{variant:"top",src:t("zjil")}),r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"贷款按揭"),r.a.createElement(o.a.Text,null,"温顶贷款拥有加拿大华人第一贷款团队，为客户提供各大银行最优利率、专业团队一站式服务。"))))),r.a.createElement(m.a,{style:{marginTop:30}},r.a.createElement(s.a,{md:"6",sm:"6",xs:"6",style:{fontSize:32}},"关于温顶"),r.a.createElement(s.a,{md:"6",sm:"6",xs:"6",style:{textAlign:"right",fontSize:32}},"新闻资讯"))),r.a.createElement(i.a,{className:"margin-top80 text-center"},r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"This is a Gatsby Starter that I frequently use to get jump started on quick website builds. It includes the following packages:"))),r.a.createElement(m.a,{className:"justify-content-center my-3"},r.a.createElement(s.a,{md:"6"},r.a.createElement(I,null,r.a.createElement(I.Item,{action:!0,href:"https://getbootstrap.com",target:"_blank"},"Bootstrap"),r.a.createElement(I.Item,{action:!0,href:"https://react-bootstrap.github.io/",target:"_blank"},"react-bootstrap"),r.a.createElement(I.Item,{action:!0,href:"https://react-icons.netlify.com",target:"_blank"},"react-icons"),r.a.createElement(I.Item,{action:!0,href:"https://www.gatsbyjs.org/packages/gatsby-plugin-sass/",target:"_blank"},"gatsby-plugin-sass")))),r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement("p",null,"This starter also includes a navbar that sticks to the top of the screen when the user scrolls past it, and a footer that stays at the bottom of the screen."),r.a.createElement("p",null,"For more documentation on these packages and how they work, please refer to the pages linked in the list above."))))))}},UbSA:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-en-index-js-e2ebecceb2e7aec1a2ce.js.map