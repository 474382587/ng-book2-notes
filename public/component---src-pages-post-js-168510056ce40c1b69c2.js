(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"7ea6":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("Bl7J"),l=a("zM5D"),o=a("cWnB"),s=a("7vrA"),m=a("3Z9Z"),i=a("JI6e"),h=a("/Yn+"),w=(a("Vqar"),a("VjyN"));t.default=function(e){var t=e.location;console.log(t);var u=t.search.split("=")[1],d=Object(n.useState)({}),E=d[0],g=d[1];Object(n.useEffect)((function(){w.createClient({space:"xxnh1wfwedpb",accessToken:"2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E"}).getEntry(u).then((function(e){console.log(e),g(Object.assign({},e.fields,{date:new Date(e.sys.createdAt).toDateString()}));var t=Object(h.documentToHtmlString)(e.fields.content);"undefined"!=typeof document&&(console.log(123),document.querySelector(".html-content").innerHTML=t),console.log(t)}))}),[]);var p=Object(n.useState)(!1),v=p[0],f=p[1],b=function(){f(!1)};return r.a.createElement(c.a,null,r.a.createElement(l.a,{show:v,onHide:b,centered:!0,size:"xs"},r.a.createElement(l.a.Header,{closeButton:!0},r.a.createElement(l.a.Title,null,"微信二维码")),r.a.createElement(l.a.Body,{className:"center-align"},r.a.createElement("img",{width:"200",src:a("NzFm")})),r.a.createElement(l.a.Footer,null,r.a.createElement(o.a,{variant:"secondary",onClick:b},"Close"))),r.a.createElement(s.a,{className:"post-item"},r.a.createElement(m.a,null,r.a.createElement(i.a,{md:"3",sm:"12"},r.a.createElement("div",{className:"subscribe-box"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"http://sv.mikecrm.com/LJVlNbV",target:"_blank"},"Subscribe now")),r.a.createElement("p",null,"Get personal finance info with our monthly round-up.")),r.a.createElement("div",{class:"social-media"},r.a.createElement("a",{href:"https://www.linkedin.com/company/guaranti-mortgages/?viewAsMember=true",target:"_blank"},r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 448 512",height:"22px",width:"22px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),r.a.createElement("a",{href:"https://www.facebook.com/GuarantiGroup/?eid=ARBWHHonkTPnUxYBTqLi-qA3C2Kl8mVj1OmohJf4IH-K6OWqyokoJeGuwIdrZbesUShVbKjgEQel7Kvd",target:"_blank"},r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 320 512",height:"22px",width:"22px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}))),r.a.createElement("a",{href:"#",target:"_blank",onClick:function(e){e.preventDefault(),f(!0)}},r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 1024 1024",height:"22px",width:"22px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z"}))),r.a.createElement("a",{href:"https://www.instagram.com/guarantigroup/",target:"_blank"},r.a.createElement("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 1024 1024",height:"22px",width:"22px",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"})))))),r.a.createElement(i.a,{md:"9",sm:"12"},E.title?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title-section"},r.a.createElement("h1",null,E.title),r.a.createElement("p",null,r.a.createElement("b",null,E.author)," - ",E.date)),r.a.createElement("div",{className:"html-content"})):r.a.createElement("div",null)))))}},Vqar:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-post-js-168510056ce40c1b69c2.js.map