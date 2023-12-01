"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[72846],{7182:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=n(85893),s=n(11151);const i={title:"Lapack95 example 11",date:new Date("2022-12-20T00:00:00.000Z"),update:new Date("2022-12-20T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},o=void 0,c={id:"Lapack95/Lapack95_test_11",title:"Lapack95 example 11",description:"This example shows the use of SymGetLU  and SymLUSolve method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_11.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_11",permalink:"/docs-api/Lapack95/Lapack95_test_11",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_11.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetLU",permalink:"/docs-api/tags/sym-get-lu"},{label:"SymLUSolve",permalink:"/docs-api/tags/sym-lu-solve"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 11",date:"2022-12-20T00:00:00.000Z",update:"2022-12-20T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 10",permalink:"/docs-api/Lapack95/Lapack95_test_10"},next:{title:"Lapack95 example 12",permalink:"/docs-api/Lapack95/Lapack95_test_12"}},l={},p=[];function r(e){const a={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the use of ",(0,t.jsx)(a.code,{children:"SymGetLU"}),"  and ",(0,t.jsx)(a.code,{children:"SymLUSolve"})," method defined in Lapack95."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"We get LU decomposition of A in A itself."}),"\n",(0,t.jsx)(a.li,{children:"In this example there is only one rhs"}),"\n",(0,t.jsx)(a.li,{children:"The result is obtained in x, not in rhs"}),"\n",(0,t.jsx)(a.li,{children:'uplo = "U"'}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nreal(dfp), allocatable :: A(:,:), RHS(:), X(:), xexact( : )\nreal(dfp) :: error\ninteger(i4b) :: info\ninteger(i4b), allocatable :: ipiv(:)\ncharacter(len=1) :: uplo\n\nallocate(A(3,3),  RHS(3), X(3), xexact(3), ipiv(3))\nA(1, :) = [6, 15, 55]\nA(2, :) = [15, 55, 225]\nA(3, :) = [55, 225, 979]\nCALL RANDOM_NUMBER(xexact)\nxexact = xexact * 10.0\nRHS = MATMUL( A, xexact )\n\nCALL Display( A, "A = " )\nCALL Display( xexact, "xexact = " )\nCALL Display( RHS, "RHS = " )\n\nuplo = "U"\n\nCALL SymGetLU(A=A, UPLO=uplo, IPIV=ipiv, INFO=info)\nCALL Display( info, "info from GETLU= " )\n\nCALL SymLUSolve(A=A, X=X, B=RHS, IPIV=ipiv, UPLO=uplo, INFO=info)\n\nCALL Display( X, " X = " )\nCALL Display( info, "info from LUSOLVE = " )\nCALL Display(MAXVAL(ABS(X - xexact ) ), "Error = ")\n\nend program main\n'})}),"\n",(0,t.jsx)(a.p,{children:"Results"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",children:"           A =\n-------------------------\n  6.000   15.000   55.000\n 15.000   55.000  225.000\n 55.000  225.000  979.000\n\nxexact =\n---------\n 4.36801\n 2.67817\n 0.09787\n\n RHS =\n-------\n 71.764\n234.841\n938.646\n\ninfo from GETLU= 0\n\n  X =\n-------\n4.36801\n2.67817\n0.09787\n\ninfo from LUSOLVE = 0\n\nError = 9.32587E-15\n"})})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>o});var t=n(67294);const s={},i=t.createContext(s);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);