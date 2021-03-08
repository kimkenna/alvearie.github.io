(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),b=a.n(p),d=a("QH2O"),h=a.n(d),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:b()(h.a.pageHeader,(t={},t[h.a.withTabs]=r.length,t[h.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h2",{id:"page-title",className:h.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},A=a("FCXl"),y=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),c=n.replace(l,a);return Object(u.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+c},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(i.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,h=p.tabs,g=p.title,y=p.theme,O=p.description,N=p.keywords,k=Object(w.a)().interiorTheme,S=Object(s.useStaticQuery)("2456312558").site.pathPrefix,x=S?n.pathname.replace(S,""):n.pathname,I=h?x.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",T=y||k;return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:T,pageTitle:g,pageDescription:O,pageKeywords:N,titleType:d},Object(u.b)(m,{title:i?Object(u.b)(i,null):g,label:"label",tabs:h,theme:T}),h&&Object(u.b)(j,{title:g,slug:x,tabs:h,currentTab:I}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:b})),Object(u.b)(A.a,{pageContext:t,location:n,slug:x,tabs:h,currentTab:I}),Object(u.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2EvBK",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--5mCgN",link:"EditLink-module--link--QlquD",row:"EditLink-module--row--104Au"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--3BhKg",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3k3x1",tabsContainer:"PageTabs-module--tabs-container--3ku4u",list:"PageTabs-module--list--Zs80A",listItem:"PageTabs-module--list-item--UVTiB",link:"PageTabs-module--link--TAIyd",selectedItem:"PageTabs-module--selected-item--2Kv-J"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--2SjuB",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3jsoz",pageHeader:"PageHeader-module--page-header--365gs",darkMode:"PageHeader-module--dark-mode--1Y-8D",withTabs:"PageHeader-module--with-tabs--2y_Tu",text:"PageHeader-module--text--3r6mD"}},uhY2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),l={_frontmatter:s},c=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"By Luis A. Garcia "," "," "," | "," "," "," Published February 9, 2021"),Object(r.b)("h3",null,"Introduction"),Object(r.b)("p",null,"The increasing digitization of healthcare records has made it more important to have a set of technologies and infrastructure\nthat enable healthcare organizations to effectively create, store, transform, exchange, and consume these records. This post\ndemonstrates how it is possible to build a reference implementation for processing healthcare records that addresses several\ncommon use cases, using only open source technologies."),Object(r.b)("p",null,"This post introduces the Alvearie Clinical Ingestion Pattern, a reference implementation to ingest, process and store clinical records\nusing existing healthcare record standards. The framework fulfills several design considerations that will be outlined in the\nnext section and that can be extended to implement typical healthcare record use cases. It is built using open source technologies\nand a Helm Chart is provided in order to facilitate its deployment on a Kubernetes cluster, running potentially on any public or\nprivate cloud."),Object(r.b)("h3",null,"Design Considerations"),Object(r.b)("p",null,"As healthcare records have become more digitized, there have been several steps made in the right direction to facilitate\nworking with those records and some fundamental problems have already been solved. For example, the previously disparate\nset of data representation formats used by the various healthcare organizations made it harder to interoperate, however\nmore organizations agree on a standard way to represent and exchange these healthcare records as a result of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.hl7.org"}),"Health\nLevel Seven International (HL7)")," creating the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.hl7.org/implement/standards/product_brief.cfm?product_id=491"}),"Fast Healthcare Interoperability Resources (FHIR)"),"\nspecification. While agreeing on a standard for exchanging data is crucial to creating a healthcare records processing\npipeline, it is only step one. In this section we try to discuss and solve some of additional aspects needed in order\nto process healthcare records effectively."),Object(r.b)("p",null,"There are several non-functional characteristics that need to be considered in order to build a true healthcare records\nprocessing pattern that will be able to meet the challenges of the modern healthcare organization. Those characteristics include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cloud based: It should be a native cloud application with all the benefits that entails. "),Object(r.b)("li",{parentName:"ul"},"Extensible: It should be possible for users to extend it to accomplish additional use cases on top of the basic functionality provided by the pattern. "),Object(r.b)("li",{parentName:"ul"},"Flexible: It should be possible for users to modify comprising elements of the pattern and replace them with elements deemed better suited for the users’ purposes, i.e. a “bring your own” (BYO) service model. "),Object(r.b)("li",{parentName:"ul"},"Open: It should not create vendor lock-in on any given cloud or technology, in other words it should be a multi-cloud application."),Object(r.b)("li",{parentName:"ul"},"Scalable: It should scale as necessary to meet the user’s data performance and throughput needs.")),Object(r.b)("p",null,"From a functional perspective, a healthcare records processing pattern needs to allow its users to input healthcare records of\nmultiple kinds using some of the more commonly used formats, e.g. FHIR v4 and HL7 v3. The mechanism to accept records should\nallow for high throughput and the records should be persisted for traceability purposes. Multiple input modalities may be useful,\nfor instance input via a messaging framework and over HTTP. The records should flow through an ingestion pipeline that would\nnormalize the data, validate it, potentially transform it and ultimately store it. Appropriate logging, resiliency, error\nreporting and metrics should be maintained throughout the process."),Object(r.b)("p",null,"In general, processing healthcare records falls within the realm of what is known as data integration, which is the process of\ncombining data from different sources and providing users a unified view of said data. Data integration use cases may involve\nnon-engineering teams, therefore it is a design consideration of the pattern covered in this post to provide non-engineering\nteams with a simple way to extend and modify the data flows."),Object(r.b)("h3",null,"Clinical Data Ingestion Pattern"),Object(r.b)("p",null,"The entire pattern is built using open source technologies, and if needed it could be expanded in functionality and scope\nusing other components, proprietary or open source. The following open source technologies are used in the framework:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nifi.apache.org/"}),"Apache NiFi")," is a platform for automating and managing the flow of data between disparate systems. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nifi.apache.org/registry.html"}),"Apache NiFi Registry")," is a complementary application that provides a central location for storage and management of shared resources across one or more instances of Apache NiFi. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://kafka.apache.org/"}),"Apache Kafka")," is a distributed streaming platform for publishing, subscribing, storing and processing streams of records."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/IBM/FHIR"}),"IBM FHIR Server")," is a modular Java implementation of version 4 of the HL7 FHIR specification with a focus on performance and configurability."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://prometheus.io/"}),"Prometheus")," is an open source monitoring and alerting tool that is widely adopted across many enterprises, that monitors targets by scraping or pulling metrics from endpoints and stores the metrics in a time series database."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://grafana.com/"}),"Grafana")," is an open source tool for data visualization and monitoring. Data sources such as Prometheus can be added to Grafana for metrics collection. It includes powerful visualization capabilities for graphs, tables, and heatmaps. ")),Object(r.b)("p",null,"The foundation of the pattern is ",Object(r.b)("strong",{parentName:"p"},"Apache NiFi"),". Apache NiFi provides a graphical user interface in the form of a canvas for data\nintegrators to build data processing workflows using what are known as “processors”. NiFi comes out of the box with multiple\nprocessors that allow for data input and output to and from various sources, and for transforming the data into multiple data\nformats. Processors are linked together in such a way that the output of one becomes the input to the other, and it is in this\nmanner that processor groups of increasing complexity can be built."),Object(r.b)("p",null,"Once a sufficiently complex and functional group of processors that achieves a specific purpose is built, it can typically be\nmanaged independently. Think of it as how a class, a method or a function can be abstracted out in code and managed independently\nas a utility. These modular process groups in NiFi are stored and managed in a ",Object(r.b)("strong",{parentName:"p"},"NiFi Registry"),". The NiFi Registry allows for\nversion control and sharing of NiFi process groups, and it is backed by a Github repository where a team can be continuously\ndelivering process group updates or new process groups to be consumed by a NiFi server user. The NiFi Registry is the second\nelement of this pattern, and it is used to deliver the various NiFi processors used by the ingestion pattern. You can think\nof the NiFi canvas and NiFi Registry respectively as a big user-friendly empty LEGO","©"," board and a bag of working LEGO","©"," pieces\nthat you will use to build structures on your board."),Object(r.b)("p",null,"Now, in order to get data flowing in and out of the data pipeline we need a mechanism that allows for processing of the\ndata flowing through the pipeline in a way that is: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Continuous, such that users don’t need to wait for the pipeline to finish processing some previous data before they can submit new data "),Object(r.b)("li",{parentName:"ul"},"Asynchronous, such that users don’t need to wait synchronously for data to be fully processed since processing of data will likely take time"),Object(r.b)("li",{parentName:"ul"},"Reliable, such that users know that once the data has been accepted it will be processed and not lost"),Object(r.b)("li",{parentName:"ul"},"Durable, such that users can keep track of the raw data they have submitted into the pipeline for traceability purposes as long as necessary. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Apache Kafka")," is an open source events stream framework that addresses these characteristics. The ingestion pattern connects to\na Kafka topic, which is just a message queue, listening for clinical data posted there, so that when data appears, it gets\npicked up by the framework and ingested. While posting to a Kafka topic is the main data input method, the Ingestion\nPattern also accepts data via a conventional REST API."),Object(r.b)("p",null,"Clinical data that is posted to the Ingestion Pattern typically needs to be processed in various ways. Processing may include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Data Validation: Ensuring that the clinical data being ingested adheres to some conventions, standards or schemas. For instance, ensure the patient clinical data being ingested adheres to the FHIR US Core Profile."),Object(r.b)("li",{parentName:"ul"},"Data Transformation: Transforming the clinical data into a different format or fixing any validation errors by ensuring the failing fields adhere to the expected schemas. For instance, transforming clinical data in HL7 v3 format to FHIR, or adjusting a field to match some desired FHIR profile."),Object(r.b)("li",{parentName:"ul"},"Data Enrichment: Processing the incoming clinical data with the purpose of enriching it with more data, or metadata, that will be useful for some consumers. For instance, running some natural language processor over patient clinical notes to try to discover new clinical information."),Object(r.b)("li",{parentName:"ul"},"Data De-Identification: A very specific form of data transformation that removes any personally identifiable elements from clinical records.")),Object(r.b)("p",null,"The Ingestion Pattern includes pre-defined spots where one or more of these processing steps can be plugged in. It also includes\na configuration mechanism to specify, on a per record basis, exactly which operations from the available processing steps to\nrun. The pattern includes default implementations for some of these processors, but those can be replaced or complemented with\nothers that can be plugged in to satisfy different user needs."),Object(r.b)("p",null,"After the clinical data has been processed, it may need to be persisted. The standard for persisting clinical data is using a\nFHIR server. The Ingestion Pattern includes the ",Object(r.b)("strong",{parentName:"p"},"IBM FHIR Server")," setup out of the box, which serves as the default target for\ningested data. That FHIR server is exposed outside the pattern where clinical data consumers can access it using the FHIR Server\nREST APIs."),Object(r.b)("p",null,"The Ingestion Pattern includes some default activity monitoring for records that have been put through via ",Object(r.b)("strong",{parentName:"p"},"Prometheus")," monitors\nover its existing components, as well as processor and memory usage of some of its components. It also includes monitors over the\nactual Kubernetes cluster where the pattern is running. All monitoring information can be visualized using the included ",Object(r.b)("strong",{parentName:"p"},"Grafana"),"\ninstance."),Object(r.b)("h3",null,"Installation"),Object(r.b)("p",null,"The instructions here assume that you have a working Kubernetes Cluster 1.10+ with Helm 3.0+."),Object(r.b)("p",null,"The multiple components of the Ingestion Pattern can be deployed in a single step on a ",Object(r.b)("strong",{parentName:"p"},"Kubernetes")," Cluster using the\nAlvearie Ingestion ",Object(r.b)("strong",{parentName:"p"},"Helm")," chart. The chart performs all the steps necessary to deploy the Ingestion Pattern, ensure that\nthere is connectivity between its various elements, set up the NiFi canvas with the corresponding processors, and initialize\nthe necessary components. This greatly simplifies the startup process."),Object(r.b)("p",null,"The following simple steps are necessary in order to run the Alvearie Clinical Ingestion Pattern:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Check out the code",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"li"},"git clone https://github.com/Alvearie/health-patterns.git"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"li"},"cd clinical-ingestion/helm-charts/alvearie-ingestion")),Object(r.b)("li",{parentName:"ol"},"Optionally create a new namespace in your Kubernetes Cluster. ",Object(r.b)("br",null),"\nIt is recommended, though not required, that you create a namespace before installing the chart in order to prevent the various\nartifacts it will install from mixing with the rest of the artifacts in your Kubernetes cluster, in an effort to make management\neasier.",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"li"},"kubectl create namespace alvearie"),Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"li"},"kubectl config set-context --current --namespace=alvearie")),Object(r.b)("li",{parentName:"ol"},"Install the helm chart with a release name ingestion:",Object(r.b)("br",null),Object(r.b)("inlineCode",{parentName:"li"},"helm install ingestion ."))),Object(r.b)("p",null,"After running the commands above, you will see that all the corresponding elements of the Ingestion Pattern will start to be\nlaid out, and eventually all the Kubernetes resources will be up and running:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.65277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABwklEQVQ4y42U6Y7CMAyEC72AHvSgQEsvKO//il5/hiCttFr6w0qJ48nM2MGbxlH6vpe27eR6vcrxeJTdbidxHMvhkMj1cpEwDPX7INvtVjzP+z8ej4fM8yzDMEjXdXI+nyXLMomiSBIFvN1uEgSBJEki/hrA5/Mp8zQZYH/rbYXNZrORNE2NPQz59n3/OyAAbdu+ZbcmEUCSSG7VBhi6S74ClmVpvuUq0xXgX1EUkiapHHNyuXAujmLZ7/eWb06N5HkumTJ33mKLebgsi9zvd6nryhIUYUOpoKfTSfdrqatKC1K7CJDlsUhVVr9sKItSvHmahZgUgKAYxkinOTSqruqPDajAgqEfPszcymXeqGND4B9gHIYh3gHYNI3dzDc5uk8AiGRnATls8egso0FTkEdHOXRuXuNDd1mZTSeNYmpQQt7tc85j4zXEBysK1BMKDEiDfZrDJWEY2co5WP7ZZTfU+Nfpa0GGuwDD8ce9lK8jQ+BbodTRT/ANCAGLnYLDyEZiDSDeEeP7pYzDqP41BhAE/odlpsyDNS+FLsISEBvy/DXESISh66LvB+teijHUjk3jZP82AAEAEID8tu6tkavxA9wfT/Tp+3mCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Screen Shot",title:"Screen Shot",src:"/static/7181375f74c3e525b2c752a4d2464400/3cbba/BlogSS001.png",srcSet:["/static/7181375f74c3e525b2c752a4d2464400/7fc1e/BlogSS001.png 288w","/static/7181375f74c3e525b2c752a4d2464400/a5df1/BlogSS001.png 576w","/static/7181375f74c3e525b2c752a4d2464400/3cbba/BlogSS001.png 1152w","/static/7181375f74c3e525b2c752a4d2464400/08d78/BlogSS001.png 1213w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Architecturally, that helm install has deployed the following:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"678px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACSklEQVQoz1WSB3KjQBBFdf+Lba1tOcpJQpEgMoghw/C2B9a1tVC/ehKP7t+z0pNmYmTQmrezZm1pNhK/Xc3zQfNy1HzaS/z1taztvCXebTUHX/PD0NPIykzMaxb6caTpRP1INyyqu4G2HyjqcVYre8Oo/+5p2mEBTTNDszIgo2bQqG6iMurh5AZsvi12J5uP3QEniGk1814hg3aUcaU4nQ8cjhZX32Mch3/Aop0IFUTlRFxCULR4WYLl2mzti0SH78tZxmfsJCJrJHMtQG/L0dkS5BfJvhbgtACVAA0sKTVJJcCbIr45BNUeK1zz6fzGLl651SH90HD0XPzihJNtxeMH0t6WKktWzM9E2UEsoLReFKmaMHe4YXMpX9hG94R8GnMoypz3ncUl+yQsL2ydV5LhKN4LsFA5pXiRCMBJc5wkxc0Ue/dKT0HGmUP2xC5ac+3f57W8yPDSVNApe2/Dm3WHp3bia8Vqf9zjiD9XOXCJfY6+M3t08EJO/gflFEm2Ul52Ie0c8tbH890FKJ6FN3tWqgLarjUl66Vk6V6oTEOm2cNYNfKxyVI6JIWac2bcTDfqtpIzFU3ToYqSUlUU4nlngD9dNk1J/nqYifyblFt7pK2Dm+/wcgsn/6bopMNVID8uBCAGqAJVKpQSYN8ZoJ7/nlWDlNFxzTr8fMSOU7HBI0gjNl/i09uTxPd57iaunMsEJt4nMamUH8cxTVubkiU/PeCHgSj8T5Zc2vunBx5fn3h8e2b98jjPHyR6vk8YyTfBEl3pQyr39g+RkY3B/l5PWgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Ingestion Architecture",title:"Ingestion Architecture",src:"/static/d37eb6900e8d426bc5f568fec66f14ef/413af/BlogArch.png",srcSet:["/static/d37eb6900e8d426bc5f568fec66f14ef/7fc1e/BlogArch.png 288w","/static/d37eb6900e8d426bc5f568fec66f14ef/a5df1/BlogArch.png 576w","/static/d37eb6900e8d426bc5f568fec66f14ef/413af/BlogArch.png 678w"],sizes:"(max-width: 678px) 100vw, 678px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Using the Ingestion Pattern"),Object(r.b)("p",null,"By default, there are four external services exposed by the Alvearie Clinical Ingestion Pattern:\nNiFi, Kafka, FHIR, and Grafana. Let’s go through them one by one along with their corresponding functionality. "),Object(r.b)("p",null,"To obtain the external IP for each of the exposed services run the following command:"),Object(r.b)("p",null,"   ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl get services | grep LoadBalancer")),Object(r.b)("p",null,"Note the result of this command also includes the corresponding ports where the services are available, but the default\nports are also specified here for simplicity."),Object(r.b)("p",null,"Let’s start with the ",Object(r.b)("em",{parentName:"p"},"ingestion-nifi")," service: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://%7Bnifi-external-ip%7D:8080/nifi"}),"http://{nifi-external-ip}:8080/nifi")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"844px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACTElEQVQ4y5VS227TUBD0/7/wAIKHAg88lUu5RZVKUR8oICTUFrVp4sSOHSeOHdu5x/cm6TB7kkih4iIsjc56z+6c2TlH0y0HequNS92A0enBcn00bAd13UTNtFSsE1fcl5qrhoGq0WKdh24/RMcPdhBCe/r+GAcnXyHr/VcV7L09wt67IzyuHOPhwSEevKzg3v4blXtSWdc8en2IZ4cnePHxM/Y/fMLz41MFibVW1+OJNpV0YFKhqKxRcavjodX1UecE1XoTumkr9U3HhdF2YXHPZK9udSAcUiscmhcNMBqNkaY58qJEmuUKk1mMNC+QMSf5m8WCWCoU5Q3KmzUk3kJqNdvvw+kHaAcBxvOYRQu1GacZEhJLHI0n+HJ2idPvF/h2UcV5zcBZrUkYOK+bCj8aFntyaHM2XvDHDQcoqUIIRYUQSoEQDiczXDctXHPsBi/GtNowbVuNbvf6aHsUxFV6tMVyheVqBdzeYveTcYUwJ+EsTuD2PGR5jtDzMOA0RbmxgQLEEqmRHq1gQr4VCRVWa2IZd0s4pRVCOJ3NEfg+3LaDmLliY0+SFRiMp8p7TRpTuQyyJxtIPItTRbo+PYVPS1y+NZdvzyOCwRDhcKwQjSYqp0buhRE8Fs4pOUnzjXeZ8m17y1le/hJnm0PvQt1y33XhOF1EwxGWvIySyQVHUUXZLskdFL8B81qX3vT4bPwg5INuwXQciGplRf4Xwj9Ai6ZTRJOpeoMuffGodETz4yT7f0IZeZ6k6splTcQ/ruLhfEu48ezfhOuan78GFyO1BBPyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Nifi Screen Shot",title:"Nifi Screen Shot",src:"/static/8e8fafa837bf4ce8e4acd3402ec5ae69/fc8f6/NifiSS001.png",srcSet:["/static/8e8fafa837bf4ce8e4acd3402ec5ae69/7fc1e/NifiSS001.png 288w","/static/8e8fafa837bf4ce8e4acd3402ec5ae69/a5df1/NifiSS001.png 576w","/static/8e8fafa837bf4ce8e4acd3402ec5ae69/fc8f6/NifiSS001.png 844w"],sizes:"(max-width: 844px) 100vw, 844px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"The NiFi canvas will show a pre-configured main process group called “Clinical Ingestion,” which is the entry point to the\nIngestion Pattern’s NiFi components. From here you can add, remove or modify ingestion processing elements, add new inputs\nor outputs, change the URLs to some of the other services, etc."),Object(r.b)("p",null,"The Ingestion Pattern exposes a Kafka broker that can be used to feed clinical data into the pattern, but before pushing the\ndata in, let’s create some synthetic clinical data to push. Synthetic patient data can be generated using the\n",Object(r.b)("strong",{parentName:"p"},"Synthea Patient Generator"),". Download Synthea and run the following command (for more information on Synthea visit their\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/synthetichealth/synthea"}),"Github page"),"):"),Object(r.b)("p",null,"   ",Object(r.b)("inlineCode",{parentName:"p"},"java -jar synthea-with-dependencies.jar -p 10")),Object(r.b)("p",null,"The previous command will have created FHIR bundles for 10 patients with their clinical history and their corresponding medical providers."),Object(r.b)("p",null,"Now that we have some test clinical data, let’s ingest it. It’s not necessary for you to install Kafka; if you have\n",Object(r.b)("strong",{parentName:"p"},"Docker")," installed you can run a container that has a Kafka producer as follows. From the list of services grab the\nexternal IP for the service called ingestion-kafka-0-external. This will be the address of your Kafka broker. With that,\nrun the following commands:"),Object(r.b)("p",null,"  ",Object(r.b)("inlineCode",{parentName:"p"},"docker run -it --rm bitnami/kafka:latest kafka-console-producer.bat --broker-list {kafka-external-ip}:9094 --topic ingestion")),Object(r.b)("p",null,"After running the previous command (the first time you run it, it may take a minute to download the corresponding Docker\nimage), you will get the prompt for the Alvearie Clinical Ingestion Pattern Kafka topic:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"800px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAgElEQVQI162NSw6DMBBDnQqJBf0RQlJCmKQpEr3/Bd2B9ghdvLFlS2O03ZXvzVOWnku6s1bLtTo+i2UpverA0TUcLBg86JxqAB8/vGZHp/5yBtF2N64v4TyHA5FJnyQdmJRISV7zhjGCWcCUwJLV56+KZnu3+1HHAHPSg79gDPgBUeVFmcargrsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Kafka Screen Shot",title:"Kafka Screen Shot",src:"/static/f01335680dd76aed5db7bd551701a8e6/acfc1/KafkaSS001.png",srcSet:["/static/f01335680dd76aed5db7bd551701a8e6/7fc1e/KafkaSS001.png 288w","/static/f01335680dd76aed5db7bd551701a8e6/a5df1/KafkaSS001.png 576w","/static/f01335680dd76aed5db7bd551701a8e6/acfc1/KafkaSS001.png 800w"],sizes:"(max-width: 800px) 100vw, 800px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"The prompt accepts a patient per line, so on a different terminal, remove all new lines from one of your synthetic\npatients using the command below and paste the patient on the Kafka prompt:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"tr -d '\\r?\\n' < patient.json > patient-single-line.json ")),Object(r.b)("p",null,"If you don’t have Docker installed, you can also post the patient using the pattern’s REST API by running the following command:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"curl -X POST -d @patient.json http://{nifi-external-ip}:7001/fhirResource")),Object(r.b)("p",null,"After posting the patient either through Kafka or via HTTP, the patient will eventually be persisted in the FHIR server.\nFrom the list of services, grab the external IP for the service called ingestion-fhir. This will be the address of your\nFHIR server. "),Object(r.b)("p",null,"You can then query the list of FHIR resources using your browser or an HTTP client. For instance, for querying patients\nyou would do: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://%7Bfhir-external-ip%7D:80/fhir-server/api/v4/Patient?_format=json"}),"http://{fhir-external-ip}:80/fhir-server/api/v4/Patient?_format=json")," ",Object(r.b)("em",{parentName:"p"},"(default credentials: fhiruser/integrati0n)")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"920px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.1388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABp0lEQVQ4y41TAZKCMAzk/7+80/FAVBBKKW3TvU0roM6Nczo7TdN0m01C9VV3ONUNamIYDa7dgOOpxddPi1Pb4VBfMo7NdcM3z47NLdttb9BPCzrjMqrzzaBuLmialjhjHAysneEWDx8CvH/CYx9CLPb7OVH1NqC3ETEKEv9+cPAHAxk9Ev0ycHUR//1Vt4lksjuikMSTQEifiHXl2Tuw2iltqALZRicIUkKS58EihUgRPyBIJnnJ0LiAadlTTF4gd1+kmrDZGbofH/ZIu1v4eFGDWFDZJeA8RlhmprSRr0ZejDNLwdpFre/8BN1PIceEcV8z+HilUq+T4GYFC23HC7aeMfNwZlBG7+HuAcbSF0rcEh+QV1RaVpXcz5Sq9dBuaw2ZXe5u3OWUeqXPXdYAw6ac7pwtak6UFX7mUidKy4XfmrA2RPamPIP+SlmHOWTS3BQGZiLNkJmKziL36/riM2+gLxMunHyVrc3Sl3LwWAKEGWvW22pK1h8kAyFG6IAbnUHtbOuy7HhxhXiFloHZbcP+BzJhEsmE02Oo9fJWI/+G9QNIfzfnFzLIS2ReIbOTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"FHIR Screen Shot",title:"FHIR Screen Shot",src:"/static/a4aa5d1cd193ec78b5a2bf1ab9b30076/7132d/FhirSS001.png",srcSet:["/static/a4aa5d1cd193ec78b5a2bf1ab9b30076/7fc1e/FhirSS001.png 288w","/static/a4aa5d1cd193ec78b5a2bf1ab9b30076/a5df1/FhirSS001.png 576w","/static/a4aa5d1cd193ec78b5a2bf1ab9b30076/7132d/FhirSS001.png 920w"],sizes:"(max-width: 920px) 100vw, 920px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Finally, from the list of services grab the external IP for the service called ingestion-grafana.\nThis will be the address of your Grafana server. With it, navigate\nto ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://%7Bgrafana-external-ip%7D"}),"http://{grafana-external-ip}")," ",Object(r.b)("em",{parentName:"p"},"(default credentials admin/admin)"),"."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"841px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.7638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAADAUlEQVQ4y1VUTWsUQRCdk4jJ7s53z1fPdE/Pxya7GI1howRBFPyIGEEU8SAET4JnwZM38S948wd48w8+q2ozqx6K3u6uefXq1ev11q1CkSnoxsHYlsJB1w3iJMMiiBBQVFUle4k0Q6oK5GWNgiJOcwmV5chUCi9NY/j0UUTJQZRIchDG2J/72JstMKM1ihMkdB7FCnM/lEI+5fhhJL8XfiQYfhDCU0WNkBKDKJWojaPoUGpDrFupzmCuX0LTXZgoKq6QJCVUqhFGiiKVMyblqawUZlmh5cOqprbbAY3tZE3pPoozYpNIYQaYz2KMJyvcuziDOxoRqUzOubhX1laQK1oZkA95P0WSFSgNaapyhCHpbWq8/v4Sn35/wOXPd9g8vIs7D06gByP3HrNgoVlkZsOgsqYkvK5hxhZu1RHwttD7H28l7M0OqixJ8xLDcIjNo1PkVsMrqkY04FXllQBKEGDTU/vLFu1hB3+R4PTNBh9/XQrw7AY5gBgFIWlPUtxaH+HscA2PNePpsYYTQ267ahsBawYr62Ie49W3F3j+5Qn2rgWoeiNtalqZkG57nK+P4fFEGZCBmGFZG2k1I+81rZO2TN8jmKe4+HqOZ58fY/96CHc84OD+CsNmSdptAZ+ub5MPiZUfxMSONLuaNOvJ4MyaqzPjICBZnEZutLSZiJkrIcPT570mLI+9x4B8wBfsvX65Rj+uYNywk4DveACsLf+urvK4aCQviHLYh6EYOhFW0zMS49JU2TK8Fy/SmQyOAKY8JhMn+c784kMG5GfELU4XqqhoKEb8JzZSW0Bms8sjpkWtoZ1Fmpcompq01xNg8h8gJzCgdmZ39i+gtEjMSjJ5t+5R9xZ26ZBTAS+Ktwy5remVMENLVuGoOyPBEuTl1qvsAM6vbCPGZ2uxV/ncW9D0FsEWkIHqdnthBgfbd9SKRncwElApGuZVjZZeDgPYA4dmtALKxQVw6Oj50F9YeuXBv+95KzY/etaL7TH5tTIGdhiQ6QrtOJJ25NnO0eQt/gBXP8V/YgqoKAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Grafana Screen Shot",title:"Grafana Screen Shot",src:"/static/9c5040f4cbfb0f108d994568e084a142/860fa/GrafanaSS001.png",srcSet:["/static/9c5040f4cbfb0f108d994568e084a142/7fc1e/GrafanaSS001.png 288w","/static/9c5040f4cbfb0f108d994568e084a142/a5df1/GrafanaSS001.png 576w","/static/9c5040f4cbfb0f108d994568e084a142/860fa/GrafanaSS001.png 841w"],sizes:"(max-width: 841px) 100vw, 841px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h3",null,"Conclusion"),Object(r.b)("p",null,"The Alvearie Clinical Ingestion Pattern is not currently meant to be ready for production use out of the box, it is more of an\nimplementation of a Reference Design, that can evolve into a reference implementation for production use. Still, an effective\npattern for efficient clinical data ingestion enables advanced analytics and opens the door to a number of important\nhealthcare use cases, including:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Evaluating and improving the quality of care in patient populations"),Object(r.b)("li",{parentName:"ul"},"Analyzing quality measures against federal regulations and guidelines"),Object(r.b)("li",{parentName:"ul"},"Accelerating time-to-insight from data that supports clinical decision-making, pharmaceutical research, and more")),Object(r.b)("p",null,"The Alvearie Clinical Ingestion Pattern is fully open source and it’s built using open source technology, including the\ncorresponding Helm charts needed to put it together and deploy it. Each of the subcomponents that comprise the pattern\ncan be modified using the corresponding Helm deployment properties in order to meet the persistence, availability, scalability\nand security requirements of a production grade deployment. "),Object(r.b)("p",null),Object(r.b)("p",null),Object(r.b)("p",null))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-clinical-records-ingestion-pattern-index-mdx-4dd55ef2329705c4d528.js.map