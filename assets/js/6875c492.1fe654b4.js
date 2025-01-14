"use strict";(self.webpackChunk_enegelai_documentation=self.webpackChunk_enegelai_documentation||[]).push([[4813],{7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var i=n(1312),s=n(9022),a=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(s.A,{permalink:n,title:(0,a.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,a.jsx)(s.A,{permalink:r,title:(0,a.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var i=n(4096),s=n(1240),a=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(i.in,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},1086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(6540);var i=n(4164),s=n(1312),a=n(1213),r=n(7559),l=n(5846),o=n(4848);function c(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function d(e){const t=c();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}var g=n(8774),u=n(8027),h=n(7713),p=n(1463),m=n(3892),x=n(2234),b=n(1107);function j(e){let{tag:t}=e;const n=d(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.be,{title:n,description:t.description}),(0,o.jsx)(p.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:i,listMetadata:a}=e;const r=d(t);return(0,o.jsxs)(u.A,{sidebar:i,children:[t.unlisted&&(0,o.jsx)(x.A,{}),(0,o.jsxs)("header",{className:"margin-bottom--xl",children:[(0,o.jsx)(b.A,{as:"h1",children:r}),t.description&&(0,o.jsx)("p",{children:t.description}),(0,o.jsx)(g.A,{href:t.allTagsPath,children:(0,o.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,o.jsx)(m.A,{items:n}),(0,o.jsx)(h.A,{metadata:a})]})}function A(e){return(0,o.jsxs)(a.e3,{className:(0,i.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,o.jsx)(j,{...e}),(0,o.jsx)(f,{...e})]})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(4164),s=n(4084),a=n(7559),r=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,i.A)(t,a.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var i=n(1312),s=n(5260),a=n(4848);function r(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(s.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);