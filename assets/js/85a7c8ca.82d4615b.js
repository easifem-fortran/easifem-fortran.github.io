"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19148],{73142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var i=t(85893),o=t(11151);const a={title:"XMLFile example 1"},s="XMLFile example 1",r={id:"XMLFile/XMLFile_test_1",title:"XMLFile example 1",description:"In this example we show how to initiate, open, and cose the xml file.",source:"@site/docs/docs-api/XMLFile/XMLFile_test_1.md",sourceDirName:"XMLFile",slug:"/XMLFile/XMLFile_test_1",permalink:"/docs-api/XMLFile/XMLFile_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/XMLFile/XMLFile_test_1.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"XMLFile example 1"},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/XMLFile/XMLFile_"},next:{title:"Documentation for developers",permalink:"/docs-api/"}},l={},u=[{value:"Usage",id:"usage",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"xmlfile-example-1",children:"XMLFile example 1"}),"\n",(0,i.jsx)(n.p,{children:"In this example we show how to initiate, open, and cose the xml file."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'! This program is a part of EASIFEM library\n! Copyright (C) 2020-2021  Vikas Sharma, Ph.D\n!\n! This program is free software: you can redistribute it and/or modify\n! it under the terms of the GNU General Public License as published by\n! the Free Software Foundation, either version 3 of the License, or\n! (at your option) any later version.\n!\n! This program is distributed in the hope that it will be useful,\n! but WITHOUT ANY WARRANTY; without even the implied warranty of\n! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n! GNU General Public License for more details.\n!\n! You should have received a copy of the GNU General Public License\n! along with this program.  If not, see <https: //www.gnu.org/licenses/>\n!\n\nmodule test_m\nuse easifemBase\nuse easifemClasses\nimplicit none\ncontains\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test0\n  TYPE( XMLTag_ ) :: obj\n  CALL Display( "Testing XML Tag" )\n  CALL obj%setName( String( "VTKFile" ) )\n  CALL obj%setAttribute( name=String( "type" ), value=String("StructuredGrid") )\n  CALL obj%setAttribute( name=String( "version" ), value=String("1.0") )\n  CALL obj%setAttribute( name=String( "byte_order" ), value=String("BigEndian") )\n  CALL Display( obj%isEmpty(), "is Empty :: " )\n  CALL obj%display("VTK TYPE :: ")\n  call obj%Deallocate()\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test4\n  TYPE( XMLFile_ ) :: obj\n  call obj%import( filename="./testXML.xml" )\n  call obj%export( \'./testXMLout.xml\' )\n  call obj%close()\n  call obj%Deallocate()\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test3\n  TYPE( XMLFile_ ) :: obj\n  call obj%initiate( "./testXMLout.xml", "NEW" )\n  call obj%open()\n  call obj%close()\n  call obj%Deallocate()\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test2\n  TYPE( XMLFile_ ) :: obj\n  call obj%import( filename="./testXML.xml" )\n  call obj%display( \'\' )\n  call obj%close()\n  call obj%Deallocate()\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test1\n  INTEGER( I4B ) :: unitNo, ierr\n  CHARACTER( LEN=1 ) :: tmpChar\n\n  OPEN( NEWUNIT=unitNo,FILE=\'testXML.xml\', &\n    & STATUS="OLD", ACCESS="SEQUENTIAL", &\n    & FORM="FORMATTED",ACTION="READ", IOSTAT=ierr )\n  WRITE( *, * ) "UNIT NO : ", unitNo\n  WRITE( *, * ) "IERR : ", IERR\n  READ(unitNo,\'(a1)\',ADVANCE=\'NO\',IOSTAT=ierr) tmpChar\n  WRITE( *, * ) trim( tmpChar )\nend subroutine\n\nend module\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nprogram main\nuse test_m\ncall test0\nend program main\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);