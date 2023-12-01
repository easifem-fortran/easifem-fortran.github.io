"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[64031,10066],{74329:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(85893),i=a(11151),r=a(2143);const s={},o="Initiate",c={id:"AbstractBC/Initiate",title:"Initiate",description:"Initiate the AbstractBC",source:"@site/docs/docs-api/AbstractBC/Initiate.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Initiate",permalink:"/docs-api/AbstractBC/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImportFromToml",permalink:"/docs-api/AbstractBC/ImportFromToml"},next:{title:"IsUseFunction",permalink:"/docs-api/AbstractBC/IsUseFunction"}},l={},d=[{value:"Interface",id:"interface",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{TabItem:a,Tabs:s}=n;return a||p("TabItem",!0),s||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,t.jsxs)(n.p,{children:["Initiate the ",(0,t.jsx)(n.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC"})]}),"\n",(0,t.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(a,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Initiate(obj, param, boundary, dom)\n    IMPORT :: AbstractBC_, ParameterList_, MeshSelection_, Domain_\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,t.jsx)(a,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(r.ZP,{})}),(0,t.jsx)(a,{value:"close",label:"\u21a2 "})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2143:(e,n,a)=>{a.d(n,{ZP:()=>s});var t=a(85893),i=a(11151);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Initiate an instance of ",(0,t.jsx)(n.code,{children:"DirichletBC"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'!> author: Vikas Sharma, Ph. D.\n! date:  2023-11-27\n! summary:  Initiate an instance of DirichletBC\n!\n!# Introduction\n!\n! Initiate an instance of DirichletBC  for\n! Constant boundary condition\n\nPROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\n\nnsd = dom%GetNSD()\n\n! We call Set SetAbstractBCParam to set the parameter for boundary condition\nCALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n\n! We call SetMeshSelectionParam to set the parameter for boundary condition\nCALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n\nCALL boundary%Initiate(param)\n\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n\nCALL boundary%Display("boundary")\n\nCALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n\nCALL obj%Set(constantNodalValue=0.0_DFP)\n\nCALL obj%Display("dbc"//CHAR_LF)\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n'})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},3920:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>m,default:()=>A,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var t=a(85893),i=a(11151),r=a(74329);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\n\nnsd = dom%GetNSD()\n\n! We call Set SetAbstractBCParam to set the parameter for boundary condition\nCALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n\n! We call SetMeshSelectionParam to set the parameter for boundary condition\nCALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n\nCALL boundary%Initiate(param)\n\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n\nCALL boundary%Display("boundary")\n\nCALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n\nCALL obj%Set(constantNodalValue=0.0_DFP)\n\nCALL obj%Display("dbc"//CHAR_LF)\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n'})})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}var c=a(31615),l=a(23156);const d={sidebar_position:3},m="Initiate",h={id:"DirichletBC/Initiate",title:"Initiate",description:"",source:"@site/docs/docs-api/DirichletBC/Initiate.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/Initiate",permalink:"/docs-api/DirichletBC/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DirichletBC/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/DirichletBC/DirichletBC_"},next:{title:"ImportFromToml",permalink:"/docs-api/DirichletBC/ImportFromToml"}},p={},u=[];function L(e){const n={h1:"h1",...(0,i.a)(),...e.components},{TabItem:a,Tabs:s}=n;return a||x("TabItem",!0),s||x("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n","\n","\n",(0,t.jsx)(r.default,{}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(a,{value:"example",label:"Example 1",children:(0,t.jsx)(o,{})}),(0,t.jsx)(a,{value:"ex2",label:"Example 2",children:(0,t.jsx)(c.ZP,{})}),(0,t.jsx)(a,{value:"ex3",label:"Example 3",children:(0,t.jsx)(l.ZP,{})}),(0,t.jsx)(a,{value:"close",label:"\u21a2 Close",default:!0})]})]})}function A(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},31615:(e,n,a)=>{a.d(n,{ZP:()=>s});var t=a(85893),i=a(11151);function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this example we initiate an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DirichletBC",children:"DirichletBC"})," by using the ",(0,t.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),". The user function will be configured to give constant value."]}),"\n",(0,t.jsxs)(n.p,{children:["We will define a pointer to ",(0,t.jsx)(n.code,{children:"UserFunction_"})," and then call ",(0,t.jsx)(n.a,{href:"/docs-api/AbstractBC/Set",children:"Set"})," method. Then, the ",(0,t.jsx)(n.code,{children:"Set"})," method will point to the user supplied ",(0,t.jsx)(n.code,{children:"UserFunction"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nCHARACTER(*), PARAMETER :: myName = "main"\nCHARACTER(*), PARAMETER :: modName = "main"\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCLASS(UserFunction_), POINTER :: func\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Initiate ",(0,t.jsx)(n.a,{href:"/docs-api/Domain",children:"Domain"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nnsd = dom%GetNSD()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We call Set ",(0,t.jsx)(n.code,{children:"SetAbstractBCParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant, isUserFunction=.TRUE.)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We call ",(0,t.jsx)(n.code,{children:"SetMeshSelectionParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We call ",(0,t.jsx)(n.code,{children:"SetUserFunctionParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &\n  & argType=Constant)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Initiate boundary."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL boundary%Initiate(param)\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs-api/DirichletBC/Initiate",children:"Initiate"})," ",(0,t.jsx)(n.code,{children:"DirichletBC_"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Initiate user function."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"ALLOCATE (func)\nCALL func%Initiate(param)\nCALL func%Set(scalarValue=1.0_DFP)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Set the user function to ",(0,t.jsx)(n.code,{children:"DirichletBC"})," by calling ",(0,t.jsx)(n.a,{href:"/docs-api/DirichletBC/Set",children:"Set"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Set(userFunction=func)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Get the value from ",(0,t.jsx)(n.code,{children:"DirichletBC"})," by calling ",(0,t.jsx)(n.a,{href:"/docs-api/DirichletBC/Get",children:"Get"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},23156:(e,n,a)=>{a.d(n,{ZP:()=>s});var t=a(85893),i=a(11151);function r(e){const n={a:"a",annotation:"annotation",code:"code",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In this example we initiate an instance of ",(0,t.jsx)(n.a,{href:"/docs-api/DirichletBC",children:"DirichletBC"})," by using the\n",(0,t.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),".\nThe user function will be configured to give space-dependent value.\nIn other words, we implement following boundary condition."]}),"\n",(0,t.jsx)(n.span,{className:"katex-display",children:(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"u"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mi,{children:"g"}),(0,t.jsx)(n.mo,{stretchy:"false",children:"("}),(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"y"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"z"}),(0,t.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"u = g(x, y, z)"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"u"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(n.span,{className:"mopen",children:"("}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,t.jsx)(n.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,t.jsxs)(n.p,{children:["We will define a pointer to ",(0,t.jsx)(n.code,{children:"UserFunction_"})," and then call ",(0,t.jsx)(n.a,{href:"/docs-api/AbstractBC/Set",children:"Set"})," method.\nThen, the ",(0,t.jsx)(n.code,{children:"Set"})," method will point to the user supplied ",(0,t.jsx)(n.code,{children:"UserFunction"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nCHARACTER(*), PARAMETER :: myName = "main"\nCHARACTER(*), PARAMETER :: modName = "main"\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCLASS(UserFunction_), POINTER :: func\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\nPROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction => NULL()\n'})}),"\n",(0,t.jsx)(n.p,{children:"Initiate domain."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nnsd = dom%GetNSD()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We call Set ",(0,t.jsx)(n.a,{href:"/docs-api/AbstractBC/SetAbstractBCParam",children:"SetAbstractBCParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Space, isUserFunction=.TRUE.)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["We call ",(0,t.jsx)(n.a,{href:"/docs-api/MeshSelection/SetMeshSelectionParam",children:"SetMeshSelectionParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We call ",(0,t.jsx)(n.a,{href:"/docs-api/UserFunction/SetUserFunctionParam",children:"SetUserFunctionParam"})," to set the parameter for boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &\n  & argType=Space)\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"docs-api/MeshSelection/Initiate",children:"Initiate"})," boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL boundary%Initiate(param)\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"docs-api/DirichletBC/Initiate",children:"Initiate"})," Dirichlet boundary condition."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"docs-api/UserFunction/Initiate",children:"Initiate"})," user function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"ALLOCATE (func)\nCALL func%Initiate(param) \nscalarFunction => func1\nCALL func%Set(scalarFunction=scalarFunction)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Set(userFunction=func)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"CALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\n\n\ncontains \npure function func1(x) result(ans)\n  REAL( DFP ), OPTIONAL, INTENT( IN ) :: x(:)\n  REAL( DFP ) :: ans\n  ans = x(1) + x(2) + x(3)\nend function func1\nEND PROGRAM main\n"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);