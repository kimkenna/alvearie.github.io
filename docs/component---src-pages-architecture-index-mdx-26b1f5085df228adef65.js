(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),h=a.n(p),m=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=r.length,t[h.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h2",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,s=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),A=a("dI71"),j=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,s=new RegExp(n+"/?(#.*)?$"),l=i.replace(s,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(m.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},r))))))},t}(n.a.Component),w=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,h=b.tabs,g=b.title,A=b.theme,j=b.description,y=b.keywords,x=Object(N.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=I?i.pathname.replace(I,""):i.pathname,T=h?k.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",H=A||x;return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:H,pageTitle:g,pageDescription:j,pageKeywords:y,titleType:p},Object(m.b)(u,{title:n?Object(m.b)(n,null):g,label:"label",tabs:h,theme:H}),h&&Object(m.b)(v,{title:g,slug:k,tabs:h,currentTab:T}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d})),Object(m.b)(O.a,{pageContext:t,location:i,slug:k,tabs:h,currentTab:T}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},XZFa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=o.a;function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(l,Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"Conceptual Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB90lEQVQozz1STU/bQBD1//8XvfWC1FvVQw+gopSKIlAKJHEpISGOHXvX3p39tIteZ5ekh6c44/H7mJnidr5Arwhd22D7a4mmrkGkMage5WKD3bZBJzpYa/Dn6QXb5xZ1vYdzLv++3q8gO37vLNcsio+XHhcPDpgs/FUJ2RwQQ8A0OVSrCa9PA4RsEWOAEhGbB49BS/4/sYhFuLiH3FawhhBZpPhyQ7j5Tfg7GWj+KDUZMtzAzaOB8waGn4kI3jsYS/k9UaobxNkSVLfQangn/PTD4qp0oG4PfV1CsEMpBBMRdlyv1gPHlxzHQ2vF0BlJQPNoPA0IwWWxwCjOZhazpUMkJil36HkeQ99zg0FXBbR7BaVZPUR2xykSERNadrPfVygfd2iaNrtNcy0+/9S4XmngzaMnd4xncvS0iOTkFNlxTcsBdHSZBNa3I9p6gFIK3oW0FIfLheWlBKzvIrpOsJsR4+Sxe5xQPSuQGeDHCb7q4L4v0PUC4Si4mY+cKs3Xc/SI4usdYb62eOMtS6HzXJL91KyGBJ3VU5zAcErn80jz8sHzgnwmO6H4cO7xbcEnoBusNy+QUuDQHvjGagjRQrKbvpf5zhJBRiZjgeAzTvU4skPFc/NxZFc6H7Ax79tLiGPg6Cl+xMjN8Yj07Gz4f0oxz5ide4t/c1/3AHFMxfAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Conceptual Architecture",title:"Alvearie Conceptual Architecture",src:"/static/634d2c615f09bfe34aa6043c26841e2a/3cbba/alvearieConceptualArchitecture.png",srcSet:["/static/634d2c615f09bfe34aa6043c26841e2a/7fc1e/alvearieConceptualArchitecture.png 288w","/static/634d2c615f09bfe34aa6043c26841e2a/a5df1/alvearieConceptualArchitecture.png 576w","/static/634d2c615f09bfe34aa6043c26841e2a/3cbba/alvearieConceptualArchitecture.png 1152w","/static/634d2c615f09bfe34aa6043c26841e2a/26482/alvearieConceptualArchitecture.png 1428w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Project Alvearie is a collection of components that can be combined to build custom data pipelines and other solutions\nthat can help organizations improve the flow of health data. These components will move the data through five key stages."),Object(r.b)("p",null,"These stages include data integration, data ingestion, data persistence, data access and data analytics. There will also be\ntwo layers that are used across all of the stages: cloud infrastructure and common services."),Object(r.b)("p",null,"Let’s explore the specific technologies that will be used in each stage."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cloud Infrastructure")),Object(r.b)("p",null,"Our ultimate goal is for Alvearie to be cloud agnostic. To achieve that, we’ll be building all the components of Alvearie on an OpenShift infrastructure. OpenShift provides the flexibility needed for Alvearie to work on any cloud platform, so developers and healthcare organizations can work with services they trust and know deeply."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Common Services")),Object(r.b)("p",null,"This layer will include important features that most organizations need for managing health data. These services will include auditing, logging, security management and other services shared across each stage of Alvearie. "),Object(r.b)("h3",null,"Data Integration and Ingestion Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACKklEQVQozyWSWW/TQBSF/f9/Ae9ICAkJEBIvAQlS0TZNk7ZZmoSSqqnTbN7H23hLPq4nlq7G1njOfOfca10MV2w8TZop3g57fM9nOp3S7V7QvfjF4mGD/XzACxySSHNYaZRSBEFAGIbkuTaVZTlFWWB9uoy5XsSkkYP7uiUKQkb3D3Q6HT58fM9d9431MiRULm8rl0VPiWAsghFxHFNVNXVdy1pRFCLYedD8vt/wNLqjHK0IowA4UZUlQegT+BEqSgzBbDZnMdzj7RVZXHE6Yv5t68SRummwvvZzbpcZVRKQzNf4rkssVnbbLZ7vUYqN1lpL05IEu5LDJhL7JWnQELgxicrI0wJfYrC+DzU/hxumgx7l3MZ1DrKZMHt8ZDKdiGBpMtvKBbZt46wqk2noxSinYW8LbdjgbCP6/T7Wt5uI+aZu2dk7miRNjb0sy0zIqXwnScJyuWQ8HuHZDat/e9xDKLEYz2K3Ods+nbA+35R86S7pdbvsxhmh43AsSnxfIhDSospRcUSapIY2CWtpXEYSZ+i0Ic/k0iSTvUq6nWNdznOuRmueZmMKL0JLA455ycvLC73+Fd66Zmv7Ihoa8jPN+cnVCW+To2WNvJzBYID17ofmz98zeiDjoOJzBULohy675wJ76ZvutzSxSkwE50qFTtO7vmUyfjTxWKlgasmqbto50qarbXZlVdAcG3nPzdxpXZg5U7GSg5nYTk0UWkS2q1d2hx1NU/Mfg4/ug+VO9AAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Architecture",title:"Alvearie Architecture",src:"/static/44b855dc242570689b44d2bc29f4943b/3cbba/alvearieArchitecturePart1.png",srcSet:["/static/44b855dc242570689b44d2bc29f4943b/7fc1e/alvearieArchitecturePart1.png 288w","/static/44b855dc242570689b44d2bc29f4943b/a5df1/alvearieArchitecturePart1.png 576w","/static/44b855dc242570689b44d2bc29f4943b/3cbba/alvearieArchitecturePart1.png 1152w","/static/44b855dc242570689b44d2bc29f4943b/c86d5/alvearieArchitecturePart1.png 1326w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Data integration"),Object(r.b)("p",null,"The data integration stage will be the starting point for any data coming into Alvearie that isn’t already in a standard\nformat like FHIR or DICOM. This stage will provide a single front door for incoming data and will transform raw data into standard\nformats that can be used by Alvearie. Key components include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Linux for Health:")," ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://linuxforhealth.github.io/docs/"}),"Linux for Health")," is an operating system that can be run where the data is stored, either on-premises or in the cloud, and used to export the data into Alvearie.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Intelligent Data as a Service:")," This ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://connectedhealth-idaas.io/"}),"open source framework")," for integrating health data from Red Hat will complement Alvearie by making it easier for health care systems to integrate with the Alvearie environment.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Client gateway"),": The client gateway will provide a path for data to be standardized and combined in a batch before sending to Alvearie. This component will be based on an open source integration engine called ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/nextgenhealthcare/connect"}),"Mirth"),"."))),Object(r.b)("h3",null,"Data ingestion"),Object(r.b)("p",null,"The next stage that data will travel through is the data ingestion stage. Here, the records will be ingested by\nAlvearie and pass through several orchestration steps that provide some additional data transformation and standardization\nbefore the data is stored in a database. For this stage, we’ll be using ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://nifi.apache.org/"}),"Apache NiFi"),", an open source technology that can efficiently\nprocess and distribute large quantities of data. The components for this stage include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alvearie.github.io/HRI/"}),"Health record ingestion"),": All incoming data in FHIR and HL7 v2 formats will be sent to HRI where it will be audited, logged, and routed to Nifi for orchestration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Imaging ingestion"),": Imaging data in the form of DICOM will be received by this component.  The images will be persisted in a configured DICOM storage component, and metadata about the images will be passed into Nifi for orchestration.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Alvearie/hri-pipeline-adapters"}),"FHIR ingestion"),": Some additional transformation of FHIR records will be conducted so that all FHIR records conform to Alvearie’s common data model. When the records are in this common format, they can either be stored in a database or transformed further with additional data orchestration components like de-identification or patient and provider matching.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Alvearie FHIR Implementation Guide:")," This FHIR Implementation Guide extends the FHIR v4 guide and provides additional profiles to enable analytics, person matching and other features.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Patient and provider matching:")," This component will identify unique patient and provider records so that duplicate records can be merged or linked.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Alvearie/de-identification"}),"De-identification"),": Data that is de-identified is very valuable for conducting research or tracking performance with analytics. With this component, records can be de-identified then stored in a database for other tools to access it."))),Object(r.b)("h3",null,"Data Persistence, Access and Analytics Architecture"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB3ElEQVQoz1WSW3PTMBCF/f9/Ew88lE4ohWlooDQDKS2NHclXybrYjp3DWSV0hoe117Lm27NnNwNOmLGgfHxCud5CVRrRe1hrUxhjEIeIrq5RX2+giwLeO/jAO65/u7ecZpIWZPI4Mg3bF5ibb1BNiSkS0HUp2raFEwDB7or/93uCLEJRwaoKfd/DMf4DzkQa7aF2LQEVhhDfKkuImkCo/V2gq2q0toO/2yE+FRjnKQlYlgtwOo6Yloj2cMTu3kApjdBPBFNd1yaFokgUxtUjXp+f4dlqCCG13F+Kzv+An25vsPm+JnBCvhVlvGQimuYMa5omtVVTufEtcwsnIL5TMJfvcRpS25kkwxRg6oiq8PDxXN15m0BSfRwH5HmB7Z3C6599Ovdss6cNyUPnqPAIGXAGnOfsbEBTWmitkzqdG2hVpsGEyIKmR/5zRJEfEsgpKq8Y7gL1FBI9ss9fbvGw3cDqE14eHHRdsGJA/mNGqRsOxCFSTeTl3jToWKziUMz7rzD3v3jWYaBNq48rfLi+QiZU2TMJa03yLa2MadMOSu5kyobevVujUSopGSoO61Ah1OzAntcmeQicmxafxDtpLwjgEmK8oYo4BIyO3yzq03QDWp5L7qha/h+5Qn8B6837BH66wFQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alvearie Architecture",title:"Alvearie Architecture",src:"/static/10eedb2072004897fa0b21575731ff30/3cbba/alvearieArchitecturePart2.png",srcSet:["/static/10eedb2072004897fa0b21575731ff30/7fc1e/alvearieArchitecturePart2.png 288w","/static/10eedb2072004897fa0b21575731ff30/a5df1/alvearieArchitecturePart2.png 576w","/static/10eedb2072004897fa0b21575731ff30/3cbba/alvearieArchitecturePart2.png 1152w","/static/10eedb2072004897fa0b21575731ff30/562de/alvearieArchitecturePart2.png 1447w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Data persistence"),Object(r.b)("p",null,"Once the data is fully integrated and transformed into FHIR format, it will need to be stored. Because different organizations\nhave different requirements and goals, this stage will be configurable and provide a few different options for storing data.\nHere are some of the options that will be included:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://ibm.github.io/FHIR/"}),"IBM FHIR server"),":  This open source server provides a data store for FHIR resources in either IBM DB2 or Postgres and HTTP APIs for storage and retrieval.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.dcm4che.org/"}),"Dcm4che DICOM storage"),": Imaging data will be stored in a database using an open source clinical image archive called Dcm4che.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Relational data warehouse"),": Organizations will have the option to use a relational data warehouse if they want a more traditional way to store their data and connect it to business applications.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Parquet data store"),": The Parquet storage format can be used by organizations that need that structure for running analytics applications."))),Object(r.b)("h3",null,"Data access"),Object(r.b)("p",null,"Alvearie will be able to serve the data to APIs and other applications during this stage. This stage will ultimately be when most\nexternal applications connect with Alvearie to retrieve the standardized data. The connections we’re planning to build include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.dcm4che.org/"}),"Dcm4che Image Viewer"),": Imaging data can be accessed and viewed using an open source viewer from Dcm4che.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.3scale.net/"}),"3scale"),": APIs can connect through this component to deliver data to external applications. 3scale is an open source API gateway supported by Red Hat.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"SMART on FHIR and CDS Hooks"),": ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://smarthealthit.org/"}),"SMART on FHIR")," is a free, open standards API that provides access to FHIR data and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://cds-hooks.org/"}),"CDS Hooks")," is an open API for clinical decision support. These APIs can be used for data requests from a variety of applications, ranging from smartphone apps to enterprise analytics."))),Object(r.b)("h3",null,"Data analytics"),Object(r.b)("p",null,"Often, additional steps need to be taken to prepare data for analytics and research. This stage in Alvearie will offer services and components that can make the standardized data usable for artificial intelligence (AI) applications, creating patient cohorts and other healthcare-specific use cases. The analytics components include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://alvearie.github.io/quality-measure-and-cohort-service/"}),"Measure and cohort evaluation service"),": This service will provide the ability for patient cohorts to be defined and retrieved using Clinical Quality Language. This service will be valuable for researchers and healthcare leaders who want to learn more about specific patient populations.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.kubeflow.org/"}),"Kubeflow"),": This open source project provides a portable way to deploy machine learning workflows on kubernetes. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Dashboards"),": Analytics dashboards from various vendors can be connected to data storage through this component to provide organizations with their most recent data. "))),Object(r.b)("p",null),Object(r.b)("p",null))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-architecture-index-mdx-26b1f5085df228adef65.js.map