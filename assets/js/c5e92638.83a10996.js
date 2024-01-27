"use strict";(self.webpackChunk_enegelai_documentation=self.webpackChunk_enegelai_documentation||[]).push([[612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,k=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},o="Slack Integration",i={unversionedId:"documentation/integrations/slack-integration",id:"documentation/integrations/slack-integration",title:"Slack Integration",description:"Enegel.ai provides Slack integration fully supporting OAuth 2.0 flow.",source:"@site/docs/documentation/integrations/slack-integration.md",sourceDirName:"documentation/integrations",slug:"/documentation/integrations/slack-integration",permalink:"/docs/documentation/integrations/slack-integration",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Integrations",permalink:"/docs/category/integrations"},next:{title:"Automatic Quality Assurance",permalink:"/docs/category/automatic-quality-assurance"}},s={},c=[{value:"Log in to your account at enegel.ai",id:"log-in-to-your-account-at-enegelai",level:2},{value:"Enable Slack integration",id:"enable-slack-integration",level:2},{value:"Invite Enegel.ai to desired Channels in your Slack Workspace",id:"invite-enegelai-to-desired-channels-in-your-slack-workspace",level:2},{value:"Tell your Bot which Slack Channel to send messages to",id:"tell-your-bot-which-slack-channel-to-send-messages-to",level:2},{value:"Slack App approval",id:"slack-app-approval",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"slack-integration"},"Slack Integration"),(0,l.kt)("p",null,"Enegel.ai provides Slack integration fully supporting ",(0,l.kt)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth 2.0")," flow."),(0,l.kt)("p",null,"Enegel.ai Slack Application can be installed in your Slack workspace to enable exchanging messages with your Bots users."),(0,l.kt)("p",null,"Follow this guide to enable Slack integration."),(0,l.kt)("h2",{id:"log-in-to-your-account-at-enegelai"},"Log in to your account at enegel.ai"),(0,l.kt)("p",null,"Log in to ",(0,l.kt)("a",{parentName:"p",href:"https://app.enegel.ai"},"app.enegel.ai")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You must have ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," role to enable Slack integration.")),(0,l.kt)("h2",{id:"enable-slack-integration"},"Enable Slack integration"),(0,l.kt)("p",null,"Navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Integrations")," and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Enable Slack")," "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Slack Integration Start",src:n(6718).Z,width:"2629",height:"1613"})),(0,l.kt)("p",null,"You will be directed to the Slack page to allow Enegel.ai app installation:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Slack Integration Allow",src:n(6792).Z,width:"2629",height:"1738"})),(0,l.kt)("p",null,"Enegel.ai Slack application requests the following OAuth scopes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OAuth Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channels:history"),(0,l.kt)("td",{parentName:"tr",align:null},"View messages and other content in public channels that Enegel.ai has been added to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channels:read"),(0,l.kt)("td",{parentName:"tr",align:null},"View basic information about public channels in a workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chat:write"),(0,l.kt)("td",{parentName:"tr",align:null},"Send messages as @Enegel.ai")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chat:write.customize"),(0,l.kt)("td",{parentName:"tr",align:null},"Send messages as @Enegel.ai with a customized username and avatar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"groups:read"),(0,l.kt)("td",{parentName:"tr",align:null},"View basic information about private channels that Enegel.ai has been added to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usergroups:read"),(0,l.kt)("td",{parentName:"tr",align:null},"View user groups in a workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"users.profile:read"),(0,l.kt)("td",{parentName:"tr",align:null},"View profile details about people in a workspace")))),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Allow")," to approve, and you will be redirected back to Enegel.ai where you will see Slack integration as enabled. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Slack Integration Allow",src:n(5119).Z,width:"2629",height:"1738"})),(0,l.kt)("h2",{id:"invite-enegelai-to-desired-channels-in-your-slack-workspace"},"Invite Enegel.ai to desired Channels in your Slack Workspace"),(0,l.kt)("p",null,"To exchange messages with your Bots, Enegel.ai needs to be added to Channels in your Slack workspace where you want to process Bot messages.\nInvite Enegel.ai app to the Channels of your choice as usual. "),(0,l.kt)("h2",{id:"tell-your-bot-which-slack-channel-to-send-messages-to"},"Tell your Bot which Slack Channel to send messages to"),(0,l.kt)("p",null,"Now you can configure your Bot to exchange messages with Slack.\nIn Bot Settings, select Slack Channel you would like Bot to send messages to. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Slack Bot Settings",src:n(1290).Z,width:"1416",height:"360"})),(0,l.kt)("h2",{id:"slack-app-approval"},"Slack App approval"),(0,l.kt)("p",null,"It is safe to use Enegel Slack App. We follow all the recommendations and guidelines provided by Slack. At the moment,the Slack Worspace notes that Enegel application is not yet approved by Slack. The approval process takes time and we have been working on it."))}d.isMDXComponent=!0},6718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/s1-b165e297494fcdd6e0678ac851e9b8b5.png"},6792:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/s2-2fc0d858fd3fa767e5e7988411c98c81.png"},5119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/s3-24ce6a01a5b500b7e821e56003c02102.png"},1290:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/s4-73c94719eef44574af68d9c8094db0cc.png"}}]);