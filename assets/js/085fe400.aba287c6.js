"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[28133],{1364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(85893),s=n(11151);const a={},o=void 0,r={id:"MSHFile/MSHFile_test_1",title:"MSHFile_test_1",description:"",source:"@site/docs/docs-api/MSHFile/MSHFile_test_1.md",sourceDirName:"MSHFile",slug:"/MSHFile/MSHFile_test_1",permalink:"/docs-api/MSHFile/MSHFile_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MSHFile/MSHFile_test_1.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/MSHFile/MSHFile_"},next:{title:"MSHFile_test_2",permalink:"/docs-api/MSHFile/MSHFile_test_2"}},l={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(mshFile_) :: afile\n! main\nCALL afile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")\nCALL afile%OPEN()\nCALL afile%READ()\nCALL afile%Deallocate()\nEND PROGRAM main\n'})})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);