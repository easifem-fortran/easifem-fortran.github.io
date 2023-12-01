"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12812],{19051:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(85893),t=n(11151);const o={sidebar_position:4},s="Recordings",d={id:"recording",title:"Recordings",description:"The CLI lets you start, stop, view and configure meeting recordings.",source:"@site/docs/cli/recording.mdx",sourceDirName:".",slug:"/recording",permalink:"/cli/recording",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/cli/recording.mdx",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Meetings",permalink:"/cli/meetings"},next:{title:"Plugins",permalink:"/cli/plugins"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Controlling recordings",id:"controlling-recordings",level:2},{value:"Starting",id:"starting",level:3},{value:"Stopping",id:"stopping",level:3},{value:"Viewing recordings",id:"viewing-recordings",level:2},{value:"Listing",id:"listing",level:3},{value:"Getting a particular recording",id:"getting-a-particular-recording",level:3}];function a(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"recordings",children:"Recordings"}),"\n",(0,r.jsx)(i.p,{children:"The CLI lets you start, stop, view and configure meeting recordings."}),"\n",(0,r.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(i.p,{children:"Set up your recording configuration by running:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"dyte recordings config\n"})}),"\n",(0,r.jsx)(i.p,{children:"You will be asked a series of questions about the configuration you'd like for\nyour recordings."}),"\n",(0,r.jsxs)(i.admonition,{title:"If you don't know the answers to these questions, it's fine to skip this",type:"tip",children:[(0,r.jsx)(i.p,{children:"step. Our defaults are robust! :::"}),(0,r.jsx)(i.h2,{id:"controlling-recordings",children:"Controlling recordings"}),(0,r.jsx)(i.h3,{id:"starting",children:"Starting"}),(0,r.jsx)(i.p,{children:"You can start recording a meeting by running:"}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"dyte recordings start <meeting id>\n"})}),(0,r.jsx)(i.h3,{id:"stopping",children:"Stopping"}),(0,r.jsx)(i.p,{children:"You can end a recording by running:"}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"dyte recordings stop <meeting id>\n"})}),(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.mdxAdmonitionTitle,{children:["The meeting ID can be a UUID, eg: ",(0,r.jsx)(i.code,{children:"f68a59ca-5e43-4267-8982-bfcabcab88a3"})]}),(0,r.jsxs)(i.p,{children:["or it can be the simple ID used by our meetings in the browser, eg:\n",(0,r.jsx)(i.code,{children:"aoiler-tlmbwi"})," :::"]}),(0,r.jsx)(i.h2,{id:"viewing-recordings",children:"Viewing recordings"}),(0,r.jsx)(i.h3,{id:"listing",children:"Listing"}),(0,r.jsx)(i.p,{children:"You can view a list of all recordings for a meeting by running:"}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"dyte recordings list\n"})}),(0,r.jsx)(i.h3,{id:"getting-a-particular-recording",children:"Getting a particular recording"}),(0,r.jsx)(i.p,{children:"You can view the details for a particular recording by running"}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"dyte recordings get <meeting id> <recording id>\n"})}),(0,r.jsxs)(i.admonition,{type:"tip",children:[(0,r.jsxs)(i.mdxAdmonitionTitle,{children:["The ",(0,r.jsx)(i.code,{children:"dyte recordings stop"})," command will helpfully output the complete"]}),(0,r.jsx)(i.p,{children:"command you need to retrieve that particular recording! :::"})]})]})]})]})}function g(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var r=n(67294);const t={},o=r.createContext(t);function s(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);