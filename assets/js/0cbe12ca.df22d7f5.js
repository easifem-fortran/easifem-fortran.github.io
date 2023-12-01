"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65261],{90771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>F});var n=a(85893),r=a(11151);const i={authors:"Vikas Sharma, Ph. D.",date:new Date("2022-07-19T00:00:00.000Z"),update:new Date("2021-07-19T00:00:00.000Z"),title:"FortranFile example 2",tags:["FortranFile/Initiate","FortranFile/Open","FortranFile/Close","FortranFile/GetFileName","FortranFile/GetFileExt","FortranFile/GetFilePath"]},l="FortranFile example 2",s={id:"FortranFile/FortranFile_test_2",title:"FortranFile example 2",description:"In this example we initiate a [[FortranFile_]], open and close it.",source:"@site/docs/docs-api/FortranFile/FortranFile_test_2.md",sourceDirName:"FortranFile",slug:"/FortranFile/FortranFile_test_2",permalink:"/docs-api/FortranFile/FortranFile_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FortranFile/FortranFile_test_2.md",tags:[{label:"FortranFile/Initiate",permalink:"/docs-api/tags/fortran-file-initiate"},{label:"FortranFile/Open",permalink:"/docs-api/tags/fortran-file-open"},{label:"FortranFile/Close",permalink:"/docs-api/tags/fortran-file-close"},{label:"FortranFile/GetFileName",permalink:"/docs-api/tags/fortran-file-get-file-name"},{label:"FortranFile/GetFileExt",permalink:"/docs-api/tags/fortran-file-get-file-ext"},{label:"FortranFile/GetFilePath",permalink:"/docs-api/tags/fortran-file-get-file-path"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2022-07-19T00:00:00.000Z",update:"2021-07-19T00:00:00.000Z",title:"FortranFile example 2",tags:["FortranFile/Initiate","FortranFile/Open","FortranFile/Close","FortranFile/GetFileName","FortranFile/GetFileExt","FortranFile/GetFilePath"]},sidebar:"tutorialSidebar",previous:{title:"FortranFile example 1",permalink:"/docs-api/FortranFile/FortranFile_test_1"},next:{title:"FortranFile example 3",permalink:"/docs-api/FortranFile/FortranFile_test_3"}},o={},F=[{value:"Modules and Classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fortranfile-example-2",children:"FortranFile example 2"}),"\n",(0,n.jsx)(t.p,{children:"In this example we initiate a [[FortranFile_]], open and close it."}),"\n",(0,n.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and Classes"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"[[FortranFile_]]"}),"\n",(0,n.jsx)(t.li,{children:"[[String]]"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"Using modules and declaring variables"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifemBase\n  use easifemClasses\n  implicit none\n  type(FortranFile_) :: obj\n  type(String) :: astr\n"})}),"\n",(0,n.jsx)(t.p,{children:'!!! note "Initiate"\nCreate an instance of fortran file.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  call obj%initiate( &\n    & filename=\"./example.txt\", &\n    & status='REPLACE', &\n    & action='WRITE')\n"})}),"\n",(0,n.jsx)(t.p,{children:'!!! note "GetMethods"\nLet\'s get the filename, extension, and path.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  astr = obj%getFilePath()\n  call astr%Display( "filePath = " )\n  astr = obj%getfileExt()\n  call astr%Display( "fileExt = " )\n  astr = obj%getfileName()\n  call astr%Display( "fileName = " )\n'})}),"\n",(0,n.jsx)(t.p,{children:'!!! note ""\nOpen and close the file'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"call obj%open()\ncall obj%close()\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var n=a(67294);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);