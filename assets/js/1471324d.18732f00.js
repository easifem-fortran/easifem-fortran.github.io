"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[66932],{23156:(e,n,a)=>{a.d(n,{ZP:()=>t});var s=a(85893),r=a(11151);function i(e){const n={a:"a",annotation:"annotation",code:"code",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In this example we initiate an instance of ",(0,s.jsx)(n.a,{href:"/docs-api/DirichletBC",children:"DirichletBC"})," by using the\n",(0,s.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),".\nThe user function will be configured to give space-dependent value.\nIn other words, we implement following boundary condition."]}),"\n",(0,s.jsx)(n.span,{className:"katex-display",children:(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mi,{children:"u"}),(0,s.jsx)(n.mo,{children:"="}),(0,s.jsx)(n.mi,{children:"g"}),(0,s.jsx)(n.mo,{stretchy:"false",children:"("}),(0,s.jsx)(n.mi,{children:"x"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mi,{children:"y"}),(0,s.jsx)(n.mo,{separator:"true",children:","}),(0,s.jsx)(n.mi,{children:"z"}),(0,s.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"u = g(x, y, z)"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(n.span,{className:"mrel",children:"="}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,s.jsx)(n.span,{className:"mopen",children:"("}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,s.jsx)(n.span,{className:"mpunct",children:","}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,s.jsx)(n.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,s.jsxs)(n.p,{children:["We will define a pointer to ",(0,s.jsx)(n.code,{children:"UserFunction_"})," and then call ",(0,s.jsx)(n.a,{href:"/docs-api/AbstractBC/Set",children:"Set"})," method.\nThen, the ",(0,s.jsx)(n.code,{children:"Set"})," method will point to the user supplied ",(0,s.jsx)(n.code,{children:"UserFunction"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nCHARACTER(*), PARAMETER :: myName = "main"\nCHARACTER(*), PARAMETER :: modName = "main"\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCLASS(UserFunction_), POINTER :: func\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\nPROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction => NULL()\n'})}),"\n",(0,s.jsx)(n.p,{children:"Initiate domain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'CALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nnsd = dom%GetNSD()\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We call Set ",(0,s.jsx)(n.a,{href:"/docs-api/AbstractBC/SetAbstractBCParam",children:"SetAbstractBCParam"})," to set the parameter for boundary condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Space, isUserFunction=.TRUE.)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We call ",(0,s.jsx)(n.a,{href:"/docs-api/MeshSelection/SetMeshSelectionParam",children:"SetMeshSelectionParam"})," to set the parameter for boundary condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We call ",(0,s.jsx)(n.a,{href:"/docs-api/UserFunction/SetUserFunctionParam",children:"SetUserFunctionParam"})," to set the parameter for boundary condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &\n  & argType=Space)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"docs-api/MeshSelection/Initiate",children:"Initiate"})," boundary condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL boundary%Initiate(param)\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"docs-api/DirichletBC/Initiate",children:"Initiate"})," Dirichlet boundary condition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"docs-api/UserFunction/Initiate",children:"Initiate"})," user function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"ALLOCATE (func)\nCALL func%Initiate(param) \nscalarFunction => func1\nCALL func%Set(scalarFunction=scalarFunction)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Set(userFunction=func)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"CALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\n\n\ncontains \npure function func1(x) result(ans)\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: x(:)\n  REAL( DFP ) :: ans\n  ans = x(1) + x(2) + x(3)\nend function func1\nEND PROGRAM main\n"})})]})}function t(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},52571:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var s=a(85893),r=a(11151),i=a(23156);const t={sidebar_position:3},c="Space user function",o={id:"programming-fem/dirichletBC/dbc_userfunc_space",title:"Space user function",description:"",source:"@site/docs/guides/programming-fem/dirichletBC/dbc_userfunc_space.md",sourceDirName:"programming-fem/dirichletBC",slug:"/programming-fem/dirichletBC/dbc_userfunc_space",permalink:"/guides/programming-fem/dirichletBC/dbc_userfunc_space",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/guides/programming-fem/dirichletBC/dbc_userfunc_space.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Constant user function",permalink:"/guides/programming-fem/dirichletBC/dbc_userfunc_const"},next:{title:"Import from toml-file",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_const"}},l={},m=[];function d(e){const n={h1:"h1",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"space-user-function",children:"Space user function"}),"\n","\n","\n",(0,s.jsx)(i.ZP,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var s=a(67294);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);