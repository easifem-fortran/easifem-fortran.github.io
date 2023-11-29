"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82328],{71391:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>m,toc:()=>d});var r=a(85893),i=a(11151);const t={authors:"Vikas Sharma, Ph.",date:new Date("2021-11-08T00:00:00.000Z"),update:new Date("2021-11-08T00:00:00.000Z"),title:"CommandLineInterface example-3"},o="CommandLineInterface: example-3",m={id:"CommandLine/CommandLine_test_3",title:"CommandLineInterface example-3",description:"Modules and Classes",source:"@site/docs/docs-api/CommandLine/CommandLine_test_3.md",sourceDirName:"CommandLine",slug:"/CommandLine/CommandLine_test_3",permalink:"/docs-api/CommandLine/CommandLine_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CommandLine/CommandLine_test_3.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph.",date:"2021-11-08T00:00:00.000Z",update:"2021-11-08T00:00:00.000Z",title:"CommandLineInterface example-3"},sidebar:"tutorialSidebar",previous:{title:"CommandLineInterface example-2",permalink:"/docs-api/CommandLine/CommandLine_test_2"},next:{title:"ContractionUtility",permalink:"/docs-api/ContractionUtility/"}},s={},d=[{value:"Modules and Classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"commandlineinterface-example-3",children:"CommandLineInterface: example-3"}),"\n",(0,r.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and Classes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"[[CommandLineInterface_]]"}),"\n",(0,r.jsx)(n.li,{children:"[[TxtFile_]]"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nImporting necessary modules and declaring variables'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(TxtFile_) :: srcfile, mdfile\nCHARACTER(LEN=99) :: mdfilename\nCHARACTER(LEN=99) :: srcfilename\nCHARACTER(LEN=*), PARAMETER :: modname = "markdownToSource"\nCHARACTER(LEN=*), PARAMETER :: myname = "main"\nTYPE(CommandLineInterface_) :: cli\nTYPE(ExceptionHandler_) :: e\nINTEGER(I4B) :: error\n'})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Initiate"}),"\n",(0,r.jsx)(n.p,{children:'!!! example ""\nInitiating an instance of [[CommandLineInterface_]]'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL cli%initiate( &\n     & progname='markdownToSource', &\n     & version='v21.11.0', &\n     & authors='Vikas Sharma, Ph.D.', &\n     & license='MIT', &\n     & description='Extract code from the markdown file and create a source file.',&\n     & examples=[ &\n     & 'markdownToSource                                           ', &\n     & 'markdownToSource -h                                        ', &\n     & 'markdownToSource --input inputFile.md --output outFile.F90 ', &\n     & 'markdownToSource -i inputFile.md -o outFile.F90            ', &\n     & 'markdownToSource --version                                 ', &\n     & 'markdownToSource -v                                        '])\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Add"}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nAdding command line arguments'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL cli%add(switch='--input',switch_ab='-i',help='name of input markdown file',&\n     & required=.TRUE., act='store', error=error)\nIF (error .NE. 0) &\n     & CALL e%raiseError(modName//\"::\"//myName//\" - \"// &\n     & 'cannot add value of --input from CLI')\n!> handling output\nCALL cli%add(switch='--output',switch_ab='-o',help='name of output source file',&\n     & required=.FALSE., act='store', def='default', error=error)\nIF (error .NE. 0) &\n     & CALL e%raiseError(modName//\"::\"//myName//\" - \"// &\n     & 'cannot add value of --output from CLI')\n"})}),"\n",(0,r.jsx)(n.p,{children:"#CommandLineInterface/Get"}),"\n",(0,r.jsx)(n.p,{children:'!!! message ""\nGetting commmand line agruments'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL cli%get(switch=\'-i\', val=mdfilename, error=error)\nIF (error .NE. 0) &\n     & CALL e%raiseError(modName//"::"//myName//" - "// &\n     & \'cannot get value of --input from CLI\')\nCALL e%raiseInformation(modName//"::"//myName//" - "// &\n     & \'Parsing markdown file : \'//TRIM(mdfilename))\nCALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")\nCALL mdfile%OPEN()\nCALL cli%get(switch=\'-o\', val=srcfilename, error=error)\nIF (error .NE. 0) &\n     & CALL e%raiseError(modName//"::"//myName//" - "// &\n     & \'cannot get value of --output from CLI\')\nIF (TRIM(srcfilename) .EQ. \'default\') THEN\n  srcfilename = TRIM(mdfile%getFilePath())//TRIM(mdfile%getFileName())//".F90"\nEND IF\nCALL e%raiseInformation(modName//"::"//myName//" - "// &\n& \'Results will be written to file : \'//TRIM(srcfilename))\n'})}),"\n",(0,r.jsx)(n.p,{children:"#TxtFile/Initiate\n#TxtFile/Open\n#TxtFile/ConvertMarkdownToSource"}),"\n",(0,r.jsx)(n.p,{children:'!!! note ""\nInitiating an instance of [[TxtFile_]]'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'CALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &\n    & ACTION="WRITE")\nCALL srcfile%OPEN()\nCALL mdfile%ConvertMarkdownToSource(outfile=srcfile)\nCALL mdfile%Deallocate()\nCALL srcfile%Deallocate()\nEND PROGRAM main\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>m,a:()=>o});var r=a(67294);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);