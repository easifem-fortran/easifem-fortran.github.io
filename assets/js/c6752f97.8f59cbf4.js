"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2166],{5160:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(85893),t=a(11151);const i={},l="Structure",r={id:"DOF/DOF_",title:"Structure",description:"DOF_ data type contains the information of degrees of freedom in finite element method. It mainly includes the information regarding the storage pattern of degrees of freedom.",source:"@site/docs/docs-api/DOF/DOF_.md",sourceDirName:"DOF",slug:"/DOF/DOF_",permalink:"/docs-api/DOF/DOF_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DOF/DOF_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DOFStartIndex",permalink:"/docs-api/DOF/DOFStartIndex"},next:{title:"Deallocate",permalink:"/docs-api/DOF/Deallocate"}},c={},h=[{value:"Structure",id:"structure-1",level:2}];function m(s){const e={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"structure",children:"Structure"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"DOF_"})," data type contains the information of degrees of freedom in finite element method. It mainly includes the information regarding the storage pattern of degrees of freedom."]}),"\n",(0,n.jsx)(e.p,{children:"Degrees of freedom are space-time components of physical variable. There can be several physical variables such as pressure, velocity, temperature. Now pressure has single degrees of freedom, because it is a scalar whereas velocity can have three degrees of freedom."}),"\n",(0,n.jsxs)(e.p,{children:["In order to understand the storage pattern, and the working-principal of ",(0,n.jsx)(e.code,{children:"DOF_"})," datatype, let us consider a vector ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mtext,{mathvariant:"bold",children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\textbf{v}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4444em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord textbf",children:"v"})})]})})]})," in three dimension space. There are three degrees of freedom at each spatial nodes of the mesh, which corresponds to ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"z"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v_x, v_y, v_z"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),". Now, there arises two ways to store the nodal values of the physical variable (here, ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mtext,{mathvariant:"bold",children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\textbf{v}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4444em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord textbf",children:"v"})})]})})]}),")."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"FMT_DOF"})," : In this case each component (DOF) of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," will be treated as an independent nodal vector. So there are actually three nodal vectors corresponding to the spatial components ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mi,{children:"z"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v_x, v_y, v_z"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7167em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),". We will use uppercase letter to denote the spatial nodal values. In this way, each of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{children:"x"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"V"}),(0,n.jsx)(e.mi,{children:"z"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"V_x, V_y, V_z"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.2222em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.2222em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.2222em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," are nodal values of spatial component of a physical variable (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]}),"). One can appreciate the fact that ",(0,n.jsx)(e.code,{children:"FMT_DOF"})," format is flexible, because, each nodal vector can have different length."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"FMT_Nodes"}),": In this case all the components of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," are grouped together and values are defined at each node of the mesh. At each node, DOFs (spatial components) form a small vector. So the nodal values of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," are defined as a nodal vector of these small vectors."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"DOF1",src:a(70549).Z+"",width:"1057",height:"591"})}),"\n",(0,n.jsx)(e.p,{children:"Further, to understand how storage pattern works in the case of multi-variables, let us consider an example in which we have pressure and velocity as the physical variables. Note that velocity is a vector and pressure is scalar physical variable. These storage patterns are given in following figure."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"DOF2",src:a(17773).Z+"",width:"1079",height:"628"})}),"\n",(0,n.jsxs)(e.p,{children:["Following code can be used to define an instance of ",(0,n.jsx)(e.code,{children:"DOF_"}),". Note that each physical variable contains two components in the time domain."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, 1], &\n  & Timecompo = [2, 2], StorageFMT = FMT_DOF )\n"})}),"\n",(0,n.jsx)(e.p,{children:"In this case velocity has 20 nodes and pressure has 10 nodes. There are 3 space components and 2 time components in the velocity."}),"\n",(0,n.jsxs)(e.p,{children:["In the case of\xa0",(0,n.jsx)(e.code,{children:"FMT_DOF"}),", the degrees of freedom will be represented as shown in above figure. Each\xa0term in ",(0,n.jsx)(e.code,{children:"{}"}),"\xa0denotes a nodal vector of DOF (i.e., v11, v12, p1, p2, etc.). Note that, in this representation both V and P can have different order of interpolation. For example, velocity can be quadratic and pressure can be linear. Needless to state, this yields a block-structured tangent matrix."]}),"\n",(0,n.jsxs)(e.p,{children:["Now consider the following case to understand\xa0",(0,n.jsx)(e.code,{children:"FMT_Nodes"})," :"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"obj = dof( tNodes = [10], Names = ['V'], SpaceCompo = [3], &\n  & Timecompo = [2], StorageFMT = FMT_NODES )\n"})}),"\n",(0,n.jsx)(e.p,{children:"In this case degrees of freedom are stored as shown in above figure."}),"\n",(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsxs)(e.mdxAdmonitionTitle,{children:[(0,n.jsx)(e.code,{children:"FMT_Nodes"})," vs ",(0,n.jsx)(e.code,{children:"FMT_DOF"})]}),(0,n.jsxs)(e.p,{children:["In the case of\xa0",(0,n.jsx)(e.code,{children:"FMT_Nodes"})," all physical variables should have same order of interpolation in space and time domain. However, in the case of\xa0",(0,n.jsx)(e.code,{children:"FMT_DOF"}),", they can have different order of interpolation."]})]}),"\n",(0,n.jsx)(e.h2,{id:"structure-1",children:"Structure"}),"\n",(0,n.jsxs)(e.p,{children:["The structure of ",(0,n.jsx)(e.code,{children:"DOF_"})," is given below."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"TYPE :: DOF_\n  INTEGER( I4B ), ALLOCATABLE :: map( :, : )\n    !! Encapsulation of information of DOF\n  INTEGER( I4B ), ALLOCATABLE :: valMap( : )\n    !! Val map\n  INTEGER( I4B ) :: storageFMT = FMT_NODES\n    !! Storage format\nEND TYPE DOF_\n"})}),"\n",(0,n.jsxs)(e.p,{children:["To understand the structure of\xa0",(0,n.jsx)(e.code,{children:"Map"}),"\xa0let us generate a\xa0",(0,n.jsx)(e.code,{children:"DOF_"}),"\xa0object using following code."]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"obj = dof( tNodes = [20, 10], Names = ['V', 'P'], SpaceCompo = [3, -1], &\n  & Timecompo = [2, 2], StorageFMT = DOF_FMT )\n"})}),"\n",(0,n.jsxs)(e.p,{children:["In this case\xa0",(0,n.jsx)(e.code,{children:"MAP"}),"\xa0is given by following table:"]}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"ICHAR"}),(0,n.jsx)(e.th,{children:"SpaceCompo"}),(0,n.jsx)(e.th,{children:"TimeCompo"}),(0,n.jsx)(e.th,{children:"tDOF"}),(0,n.jsx)(e.th,{children:"Indx"}),(0,n.jsx)(e.th,{children:"total Nodes"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"86"}),(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"6"}),(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"20"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"80"}),(0,n.jsx)(e.td,{children:"-1"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"7"}),(0,n.jsx)(e.td,{children:"10"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"8"}),(0,n.jsx)(e.td,{children:"9"}),(0,n.jsx)(e.td,{children:"140"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{}),(0,n.jsx)(e.td,{})]})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Column 1 of\xa0",(0,n.jsx)(e.code,{children:"MAP"}),"\xa0denotes the name of physical variable; only unit length characters are allowed in physical names as we save the names in ASCII format"]}),"\n",(0,n.jsxs)(e.li,{children:["Column 2 of\xa0",(0,n.jsx)(e.code,{children:"MAP"}),"\xa0denotes space component in the physical variable"]}),"\n",(0,n.jsx)(e.li,{children:"Column 3 denotes time components in the physical variable"}),"\n",(0,n.jsx)(e.li,{children:"Column 4 denotes total number of degrees of freedom in each physical variable, it is equal to the spaceCompo x timeCompo"}),"\n",(0,n.jsxs)(e.li,{children:["Column 5 denotes the starting position of physical name; in this way, components of a physical name,\xa0",(0,n.jsx)(e.code,{children:"V"}),"\xa0are stored from 1 to 6"]}),"\n",(0,n.jsx)(e.li,{children:"Column 6 denotes the total number of spatial nodes in the components of a physical name"}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},70549:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DOF1-71523ce347e5fd987b1898e03adeaa7f.svg"},17773:(s,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/DOF2-50d88e605803deb8e6065d1a75f07020.svg"},11151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var n=a(67294);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);