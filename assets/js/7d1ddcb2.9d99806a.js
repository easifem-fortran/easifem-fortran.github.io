"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[68437],{55798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(85893),i=n(11151);const l={authors:"Vikas Sharma, Ph. D.",date:new Date("2022-07-20T00:00:00.000Z"),update:new Date("2022-07-20T00:00:00.000Z"),title:"TxtFile Example 1",tags:["TxtFile/Initiate","TxtFile/Open"]},s="TxtFile example 1",r={id:"TxtFile/TxtFile_test_1",title:"TxtFile Example 1",description:"In this example we create an instance of [[TxtFile_]], then we open it and write some data to it.",source:"@site/docs/docs-api/TxtFile/TxtFile_test_1.md",sourceDirName:"TxtFile",slug:"/TxtFile/TxtFile_test_1",permalink:"/docs-api/TxtFile/TxtFile_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TxtFile/TxtFile_test_1.md",tags:[{label:"TxtFile/Initiate",permalink:"/docs-api/tags/txt-file-initiate"},{label:"TxtFile/Open",permalink:"/docs-api/tags/txt-file-open"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"2022-07-20T00:00:00.000Z",update:"2022-07-20T00:00:00.000Z",title:"TxtFile Example 1",tags:["TxtFile/Initiate","TxtFile/Open"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/TxtFile/TxtFile_"},next:{title:"TxtFile Example 10",permalink:"/docs-api/TxtFile/TxtFile_test_10"}},o={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"txtfile-example-1",children:"TxtFile example 1"}),"\n",(0,a.jsx)(t.p,{children:"In this example we create an instance of [[TxtFile_]], then we open it and write some data to it."}),"\n",(0,a.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"[[TxtFile_]]"}),"\n",(0,a.jsx)(t.li,{children:"[[String]]"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.p,{children:"Importing modules and defining variables"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\n  use easifemBase\n  use easifemClasses\n  TYPE(TxtFile_) :: obj\n  TYPE(String) :: aline\n  INTEGER(I4B) :: ii\n  character(len=*), parameter :: filename="./example.txt"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Initiate an instance of [[TxtFile_]], and then Open the [[TxtFile_]] file"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%Initiate(filename=filename, status='NEW', &\n    & action='WRITE')\n  CALL obj%Open()\n"})}),"\n",(0,a.jsx)(t.p,{children:"Write a long line to the file"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  aline = aline%repeat("hello world! ", 1000 )\n  WRITE(obj%getUnitNo(), "(A)" ) aline%chars()\n'})}),"\n",(0,a.jsx)(t.p,{children:"Lets close the file."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%Deallocate\n"})}),"\n",(0,a.jsx)(t.p,{children:"Lets open it again with read access."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  CALL obj%Initiate(filename=filename, status='OLD', &\n    & action='READ')\n  CALL obj%Open()\n"})}),"\n",(0,a.jsx)(t.p,{children:"Lets read the long line"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'  aline=""\n  CALL obj%readLine( aline )\n  CALL Display( aline, "aline read = ")\n'})}),"\n",(0,a.jsx)(t.p,{children:"Cleaning up."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const i={},l=a.createContext(i);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);