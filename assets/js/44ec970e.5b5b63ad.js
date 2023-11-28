"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38580],{16783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(85893),s=n(11151);const r={title:"IntVector example 6",tags:["IntVector/Initiate","IntVector/Display","IntVector/Get"]},a="Intvector example 6",i={id:"IntVector/IntVector_test_6",title:"IntVector example 6",description:'!!! note ""',source:"@site/docs/docs-api/IntVector/IntVector_test_6.md",sourceDirName:"IntVector",slug:"/IntVector/IntVector_test_6",permalink:"/docs-api/IntVector/IntVector_test_6",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/IntVector/IntVector_test_6.md",tags:[{label:"IntVector/Initiate",permalink:"/docs-api/tags/int-vector-initiate"},{label:"IntVector/Display",permalink:"/docs-api/tags/int-vector-display"},{label:"IntVector/Get",permalink:"/docs-api/tags/int-vector-get"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"IntVector example 6",tags:["IntVector/Initiate","IntVector/Display","IntVector/Get"]},sidebar:"tutorialSidebar",previous:{title:"IntVector example 5",permalink:"/docs-api/IntVector/IntVector_test_5"},next:{title:"IntVector example 7",permalink:"/docs-api/IntVector/IntVector_test_7"}},c={},l=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"intvector-example-6",children:"Intvector example 6"}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nThis examples shows how to USE ',(0,o.jsx)(t.code,{children:"Get"})," method to access the entries inside the [[IntVector_]]. The output results can be in various formats including the native fortran INTEGER vectors."]}),"\n",(0,o.jsx)(t.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"[[IntVector_]]"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    TYPE(IntVector_) :: obj1, obj2\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! note ""\nInitiate an instance of [[IntVector_]]'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj1 = arange(1,10,1)\n    CALL Display(obj1, \"obj1: \", orient='row')\n"})}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nLets get entries of obj1 and in obj2. For this purpose, we need to specify the DATA TYPE of RETURN variable. Here, RETURN ',(0,o.jsx)(t.code,{children:"datatype"})," is  [[IntVector_]]"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2=Get(obj=obj1, dataType=TypeIntVector)\n    CALL Display(obj2, \"obj2:\", orient='row')\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Here, TypeIntVector is a PARAMETER defined in the easifemBase library."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:['!!! note ""\nNow let us get the selected values specified by the indices in ',(0,o.jsx)(t.code,{children:"indx"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2=Get(obj=obj1, indx=[1,3,5], datatype=TypeIntVector)\n    CALL Display(obj2, \"obj2:\", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! note ""\nTriplets are also supported. istart is necessary. iend, and istride are optional.'}),"\n",(0,o.jsx)(t.p,{children:"Let us get all the values."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2 = Get(obj=obj1, istart=1 , datatype=TypeIntVector)\n    call Display(obj2, \"obj2: all values = \", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let us get values at odd index position"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2 = Get(obj=obj1, istart=1, stride=2, datatype=TypeIntVector)\n    call Display(obj2, \"obj2: odd index = \", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let us get values at even index positions"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    obj2 = Get(obj=obj1, istart=2, stride=2, iend=size(obj1), &\n        & datatype=TypeIntVector )\n    call Display(obj2, \"obj2: even index = \", orient='row')\n"})}),"\n",(0,o.jsx)(t.p,{children:'!!! settings ""\nCleanup'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"    CALL DEALLOCATE(obj1)\n    CALL DEALLOCATE(obj2)\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);