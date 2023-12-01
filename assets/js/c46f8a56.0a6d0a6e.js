"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33726],{55631:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=n(85893),s=n(11151);const i={title:"Lapack95 example 1",date:new Date("2022-12-18T00:00:00.000Z"),update:new Date("2022-12-18T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix"]},r=void 0,c={id:"Lapack95/Lapack95_test_1",title:"Lapack95 example 1",description:"This example shows the use of SYTRF and SYCONV method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_1.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_1",permalink:"/docs-api/Lapack95/Lapack95_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_1.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 1",date:"2022-12-18T00:00:00.000Z",update:"2022-12-18T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95",permalink:"/docs-api/Lapack95/"},next:{title:"Lapack95 example 10",permalink:"/docs-api/Lapack95/Lapack95_test_10"}},l={},o=[];function p(e){const a={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the use of ",(0,t.jsx)(a.code,{children:"SYTRF"})," and ",(0,t.jsx)(a.code,{children:"SYCONV"})," method defined in Lapack95."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="declare variables"',children:"real(dfp), allocatable :: mat(:, :), mat0(:,:), D(:)\ninteger(i4b), allocatable :: ipiv(:)\ninteger(i4b) :: info, n\ncharacter(len=1) :: uplo\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="make matrix"',children:'allocate(mat(3,3), mat0(3,3), ipiv(3))\nmat0(1, :) = [2, -1, 3]\nmat0(2, :) = [0, 2, 0]\nmat0(3, :) = [0, 0, 1]\nCALL Display(mat0, "mat0 = ")\n'})}),"\n",(0,t.jsx)(a.p,{children:"Test with minimum arguments."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="test-1"',children:'uplo = "U"\nmat = mat0\nCALL SYTRF(A=mat, UPLO=uplo)\nCALL Display(mat, "lu from sytrf = ")\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"            mat =\n----------------------------\n-5.00000   1.00000   1.50000\n 0.00000   1.50000  -0.50000\n 0.00000   0.00000   2.00000\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Test with extra arguments ",(0,t.jsx)(a.code,{children:"ipiv"})," and ",(0,t.jsx)(a.code,{children:"info"})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="test-2"',children:'mat = mat0\nCALL SYTRF(A=mat, UPLO=uplo, IPIV=ipiv, info=info)\nCALL Display( mat, "mat = " )\nCALL Display( ipiv, "ipiv = " )\nCALL Display( info, "info = " )\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"mat =\n----------------------------\n-5.00000   1.00000   1.50000\n 0.00000   1.50000  -0.50000\n 0.00000   0.00000   2.00000\nipiv =\n-------\n   1\n   2\n   1\ninfo = 0\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Using  ",(0,t.jsx)(a.code,{children:"ipiv"})," in ",(0,t.jsx)(a.code,{children:"SYCONV"})," to get ",(0,t.jsx)(a.code,{children:"LDL"})," factorization"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="conversion to ldl"',children:'n = SIZE(mat, 1)\nCALL Reallocate(D, n)\n\nCALL LA_SYCONV( &\n  & UPLO=uplo, WAY="C", N=n, A=mat, &\n  & LDA=n, IPIV=ipiv, E=D, INFO=info )\n\nCALL Display( mat, "U = " )\nCALL Display( D, "D = " )\nCALL Display( info, "info = " )\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"mat =\n----------------------------\n-5.00000   1.00000   1.50000\n 0.00000   1.50000  -0.50000\n 0.00000   0.00000   2.00000\n\nipiv =\n-------\n   1\n   2\n   1\n\ninfo = 0\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);