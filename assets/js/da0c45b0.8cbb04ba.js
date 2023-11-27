"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[28491],{3423:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=i(85893),a=i(11151);const s={},o=void 0,l={id:"MSHFile/MSHFile_test_5",title:"MSHFile_test_5",description:"",source:"@site/docs/docs-api/MSHFile/MSHFile_test_5.md",sourceDirName:"MSHFile",slug:"/MSHFile/MSHFile_test_5",permalink:"/docs-api/MSHFile/MSHFile_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MSHFile/MSHFile_test_5.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MSHFile_test_4",permalink:"/docs-api/MSHFile/MSHFile_test_4"},next:{title:"MappingUtility",permalink:"/docs-api/MappingUtility/"}},r={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(mshFile_) :: afile\nTYPE(txtFile_) :: bfile\n! main\nCALL afile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")\nCALL afile%OPEN()\nCALL afile%Read()\nCALL bfile%Initiate(filename="./mesh2D_copy.msh", status="REPLACE", action="WRITE")\nCALL bfile%Open()\nCALL afile%Export(afile=bfile)\nCALL afile%Deallocate()\nCALL bfile%Deallocate()\nEND PROGRAM main\n'})})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var n=i(67294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);