(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),p=a.n(u),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h2",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,b=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,b=new RegExp(o+"/?(#.*)?$"),c=n.replace(b,a);return Object(m.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(m.b)(i.Link,{className:h.link,to:""+c},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:h.list},r))))))},t}(o.a.Component),y=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,p=s.tabs,j=s.title,x=s.theme,h=s.description,w=s.keywords,k=Object(T.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,L=p?C.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",M=x||k;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:M,pageTitle:j,pageDescription:h,pageKeywords:w,titleType:u},Object(m.b)(g,{title:o?Object(m.b)(o,null):j,label:"label",tabs:p,theme:M}),p&&Object(m.b)(v,{title:j,slug:C,tabs:p,currentTab:L}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:L}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},pfKO:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return g}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=(a("013z"),a("QH4P")),i=a("664G"),b=a("R55w"),c=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=s("Row"),u=s("Column"),p={_frontmatter:c},m=l.a;function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(u,{colMd:2,colLg:3,noGutterMdLeft:!0,mdxType:"Column"},"Project Alvearie"),Object(r.b)(u,{colMd:6,colLg:9,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("h2",null,"Project Alvearie is an open-source project designed to bring together contributors from across the health and life sciences ecosystem for collaboration around common and pervasive challenges to health data ingestion and flow."),Object(r.b)("p",null,"Together, we're working toward building a set of extensible, modular and scalable multi-cloud data and analytics components that can help organizations improve care delivery and operate more efficiently in a highly regulated environment."),Object(r.b)("p",null,Object(r.b)("span",{style:{"font-weight":"bold"}},"Alvearie:")," ",Object(r.b)("span",{style:{"font-style":"italic"}},"(al-vee-air-ee)"),'  - from Latin alvearium, "beehive"',Object(r.b)("br",null),Object(r.b)("span",{style:{"font-style":"italic"}},"Represents a group of people collaborating to build something that any one of us couldn't do on our own. In the sense of a repository - especially of knowledge or information: originally the name of a dictionary encompassing several languages")))),Object(r.b)(i.a,{mdxType:"ObjectivesSection"}),Object(r.b)(d,{mdxType:"Row"},Object(r.b)(u,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(b.a,{mdxType:"GetInvolvedSection"})),Object(r.b)(u,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)("div",{style:{"border-left":"1px solid #aaaaaa","padding-left":"20px"}},Object(r.b)("h2",{style:{"padding-bottom":"20px"}},"Open Source Community Projects"),Object(r.b)("p",null,"Alvearie combines a number of open source projects:"),Object(r.b)("p",{style:{"padding-left":"20px","line-height":"40px","padding-top":"20px"}},"OpenShift hybrid cloud platform",Object(r.b)("br",null),"Apache Spark cluster computing framework",Object(r.b)("br",null),"Apache Nifi data distribution and processing",Object(r.b)("br",null),"Apache Kafka stream-processing platform",Object(r.b)("br",null),"Apache Camel integration framework",Object(r.b)("br",null),"Apache Flink batch-processing framework",Object(r.b)("br",null),"Kubeflow for machine learning workflows on kubernetes",Object(r.b)("br",null),"NATS distributed messaging queue",Object(r.b)("br",null),"dcm4che applications and utilites",Object(r.b)("br",null),"Mirth HL7 interface engine",Object(r.b)("br",null),"HAPI utilities for HL7 v2 messaging",Object(r.b)("br",null),"CQL Evaluation Engine",Object(r.b)("br",null))))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-b1b8f16673019bb64f17.js.map