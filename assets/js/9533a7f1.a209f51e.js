"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[7794],{61605:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=s(85893),c=s(11151);const i={author:"Vikas Sharma, Ph.D.",date:"18 Oct 2022",tags:["JacobiSpace1D","JacobiSpace1D_Pointer","JacobiSpace1D/GetParam"]},t="JacobiSpace1D example 1",l={id:"JacobiSpace1D/JacobiSpace1D_test_1",title:"JacobiSpace1D example 1",description:"- This example shows how to construct an instance of [[JacobiSpace1D_]].",source:"@site/docs/docs-api/JacobiSpace1D/JacobiSpace1D_test_1.md",sourceDirName:"JacobiSpace1D",slug:"/JacobiSpace1D/JacobiSpace1D_test_1",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/JacobiSpace1D/JacobiSpace1D_test_1.md",tags:[{label:"JacobiSpace1D",permalink:"/docs-api/tags/jacobi-space-1-d"},{label:"JacobiSpace1D_Pointer",permalink:"/docs-api/tags/jacobi-space-1-d-pointer"},{label:"JacobiSpace1D/GetParam",permalink:"/docs-api/tags/jacobi-space-1-d-get-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"18 Oct 2022",tags:["JacobiSpace1D","JacobiSpace1D_Pointer","JacobiSpace1D/GetParam"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_"},next:{title:"JacobiSpace1D example 2",permalink:"/docs-api/JacobiSpace1D/JacobiSpace1D_test_2"}},r={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"!!! example &quot;result&quot;\ndomain=",id:"-example-resultdomain",level:2},{value:"!!! example &quot;result&quot;\ndomain=",id:"-example-resultdomain-1",level:2}];function p(e){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"jacobispace1d-example-1",children:"JacobiSpace1D example 1"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"This example shows how to construct an instance of [[JacobiSpace1D_]]."}),"\n",(0,n.jsx)(a.li,{children:"Following methods are tested."}),"\n",(0,n.jsx)(a.li,{children:"[[JacobiSpace1D_#JacobiSpace1D function]]"}),"\n",(0,n.jsx)(a.li,{children:"[[JacobiSpace1D_#JacobiSpace1D_Pointer]]"}),"\n",(0,n.jsx)(a.li,{children:"[[JacobiSpace1D_#GetParam]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[JacobiSpace1D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifembase\nuse easifemclasses\nimplicit none\ntype(JacobiSpace1D_) :: obj\nclass(AbstractOrthopolSpace1D_), pointer :: aptr\n"})}),"\n",(0,n.jsxs)(a.p,{children:['!!! note "Constructor"\nConstruct an instance of ',(0,n.jsx)(a.code,{children:"JacobiSpace1D_"})," by specifying ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"\u03b1"}),(0,n.jsx)(a.mo,{children:">"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1.0"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha>-1.0"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:">"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord",children:"1.0"})]})]})]})," and ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"\u03b2"}),(0,n.jsx)(a.mo,{children:">"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"1.0"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\beta>-1.0"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:">"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mord",children:"1.0"})]})]})]}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  obj = JacobiSpace1D(alpha=0.0_DFP, beta=0.0_DFP)\n"})}),"\n",(0,n.jsxs)(a.p,{children:['!!! note "Display"\nDisplay the contents of ',(0,n.jsx)(a.code,{children:"obj"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  CALL obj%display("obj = ")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"-example-resultdomain",children:'!!! example "result"\ndomain='}),"\n",(0,n.jsx)(a.p,{children:"-1.00000\n1.00000\nalpha=0.00000\nbeta=0.00000"}),"\n",(0,n.jsx)(a.p,{children:'!!! note "JacobiSpace1D_Pointer"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  aptr => JacobiSpace1D_Pointer(alpha=0.0_DFP, beta=0.0_DFP)\n  call aptr%Display("aptr= ")\n'})}),"\n",(0,n.jsx)(a.h2,{id:"-example-resultdomain-1",children:'!!! example "result"\ndomain='}),"\n",(0,n.jsx)(a.p,{children:"-1.00000\n1.00000\nalpha=0.00000\nbeta=0.00000"}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetParam"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  CALL Display(obj%GetParam(), "alpha, beta = ")\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Deallocate"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL aptr%Deallocate()\n  Deallocate(aptr)\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>t});var n=s(67294);const c={},i=n.createContext(c);function t(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);