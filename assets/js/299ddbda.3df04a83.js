"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82219,90187],{58368:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var t=i(85893),n=i(11151),s=i(54841),r=i(52991);const l={sidebar_position:1,date:new Date("2023-08-05T00:00:00.000Z"),update:new Date("2023-08-05T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["SolidMechanics","Models","MaterialModels"],tags:["materials","materialModels","models","solidMechanics","easifemClasses"]},o="SolidMaterial",d={id:"SolidMaterial/index",title:"SolidMaterial",description:"Methods",source:"@site/docs/docs-api/SolidMaterial/index.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/",permalink:"/docs-api/SolidMaterial/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/index.md",tags:[{label:"materials",permalink:"/docs-api/tags/materials"},{label:"materialModels",permalink:"/docs-api/tags/material-models"},{label:"models",permalink:"/docs-api/tags/models"},{label:"solidMechanics",permalink:"/docs-api/tags/solid-mechanics"},{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"}],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-08-05T00:00:00.000Z",update:"2023-08-05T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["SolidMechanics","Models","MaterialModels"],tags:["materials","materialModels","models","solidMechanics","easifemClasses"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/Seepage/Seepage_"},next:{title:"AddSolidMaterial",permalink:"/docs-api/SolidMaterial/AddSolidMaterial"}},c={},m=[{value:"Methods",id:"methods",level:2}];function p(e){const a={h1:"h1",h2:"h2",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"solidmaterial",children:"SolidMaterial"}),"\n","\n",(0,t.jsx)(s.default,{}),"\n",(0,t.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,t.jsx)(r.Z,{})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},54841:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(85893),n=i(11151);const s={sidebar_position:1,date:new Date("2023-08-05T00:00:00.000Z"),update:new Date("2023-08-05T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["SolidMechanics","Models","MaterialModels"],tags:["materials","materialModels","models","solidMechanics","easifemClasses"]},r="Solid material",l={id:"programming-fem/solidMaterial/index",title:"Solid material",description:"SolidMaterial is a subclass of AbstractMaterial class. Its purpose is to handle solid materials, like steel, brass, copper, among others.",source:"@site/docs/guides/programming-fem/solidMaterial/index.mdx",sourceDirName:"programming-fem/solidMaterial",slug:"/programming-fem/solidMaterial/",permalink:"/guides/programming-fem/solidMaterial/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/programming-fem/solidMaterial/index.mdx",tags:[{label:"materials",permalink:"/guides/tags/materials"},{label:"materialModels",permalink:"/guides/tags/material-models"},{label:"models",permalink:"/guides/tags/models"},{label:"solidMechanics",permalink:"/guides/tags/solid-mechanics"},{label:"easifemClasses",permalink:"/guides/tags/easifem-classes"}],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-08-05T00:00:00.000Z",update:"2023-08-05T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["SolidMechanics","Models","MaterialModels"],tags:["materials","materialModels","models","solidMechanics","easifemClasses"]},sidebar:"tutorialSidebar",previous:{title:"Import from toml-file (spatial user function)",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_space"},next:{title:"Import from HDF5 file",permalink:"/guides/programming-fem/solidMaterial/import_hdf_1"}},o={},d=[{value:"How to initiate?",id:"how-to-initiate",level:2},{value:"Step 1: Set parameter",id:"step-1-set-parameter",level:3},{value:"Step 2: Initiate",id:"step-2-initiate",level:3},{value:"Step 3: Add material",id:"step-3-add-material",level:3},{value:"Step 4: Get material pointer",id:"step-4-get-material-pointer",level:3},{value:"Further reading",id:"further-reading",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,n.a)(),...e.components},{Card:i,CardSection:s,Details:r}=a;return i||p("Card",!0),s||p("CardSection",!0),r||p("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"solid-material",children:"Solid material"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/docs-api/SolidMaterial/SolidMaterial_",children:"SolidMaterial_"})," is a subclass of ",(0,t.jsx)(a.a,{href:"/docs-api/AbstractMaterial",children:"AbstractMaterial"})," class. Its purpose is to handle solid materials, like steel, brass, copper, among others."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"SolidMaterial_"})," also encapsulates the abstract model for defining the material constitutive behavior. The structure of ",(0,t.jsx)(a.code,{children:"SolidMaterial_"})," is given below."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractMaterial_) :: SolidMaterial_\n  CLASS(AbstractSolidMechanicsModel_), POINTER :: stressStrainModel => NULL()\n    !! Pointer to stress strain material behavior of solids\nEND TYPE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"how-to-initiate",children:"How to initiate?"}),"\n",(0,t.jsxs)(a.p,{children:["There are three ways to initiate an instance of ",(0,t.jsx)(a.code,{children:"SolidMaterial_"}),". In this section we will cover constructing the instance by using ",(0,t.jsx)(a.a,{href:"/docs-api/SolidMaterial/Initiate",children:"Initiate"}),"."]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["We will consider the following example to learn about the ",(0,t.jsx)(a.code,{children:"SolidMaterial_"}),"."]})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Click here to see example"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\n\nCHARACTER(*), PARAMETER :: myName = "main"\nCHARACTER(*), PARAMETER :: modName = "main"\nTYPE(SolidMaterial_) :: obj\nTYPE(ParameterList_) :: param\nCLASS(UserFunction_), POINTER :: func => NULL()\nINTEGER(I4B) :: ierr\n\nCALL FPL_Init(); CALL param%Initiate()\n\n! Set parameter\nCALL SetSolidMaterialParam(param=param, name="SolidMaterial")\n\n! Initiate an instance of `SolidMaterial_`\nCALL obj%Initiate(param)\n\n! Adding a material property\nCALL obj%AddMaterial("massDensity")\n\nfunc => obj%GetMaterialPointer("massDensity")\n\nIF (.NOT. ASSOCIATED(func)) THEN\n  CALL e%RaiseError(modName//\'::\'//myName//\' - \'// &\n    & \'[error 1]\')\nEND IF\n\nCALL SetUserFunctionParam(param=param, name="massDensity",  &\n  & returnType=Scalar, argType=Constant)\nCALL func%Initiate(param)\nCALL func%Set(scalarValue=1.0_DFP)\n\nCALL obj%Display(msg="SolidMaterial")\n\nCALL FPL_FINALIZE; CALL param%DEALLOCATE()\nEND PROGRAM main\n'})})})]}),"\n",(0,t.jsxs)(a.p,{children:["To initiate an instance of ",(0,t.jsx)(a.code,{children:"SolidMaterial_"})," follow the steps give below."]}),"\n",(0,t.jsx)(a.h3,{id:"step-1-set-parameter",children:"Step 1: Set parameter"}),"\n",(0,t.jsxs)(a.p,{children:["First, we call ",(0,t.jsx)(a.a,{href:"/docs-api/SolidMaterial/SetSolidMaterialParam",children:"SetSolidMaterialParam"})," method."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'CALL SetSolidMaterialParam(param=param, name="SolidMaterial")\n'})}),"\n",(0,t.jsx)(a.h3,{id:"step-2-initiate",children:"Step 2: Initiate"}),"\n",(0,t.jsxs)(a.p,{children:["Then, we will call ",(0,t.jsx)(a.a,{href:"/docs-api/SolidMaterial/Initiate",children:"Initiate"})," method."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL obj%Initiate(param)\n"})}),"\n",(0,t.jsx)(a.h3,{id:"step-3-add-material",children:"Step 3: Add material"}),"\n",(0,t.jsxs)(a.p,{children:["After we have initiated an instance of ",(0,t.jsx)(a.code,{children:"AbstractMaterial_"}),", we will ADD material to it by calling ",(0,t.jsx)(a.a,{href:"/docs-api/AbstractMaterial/AddMaterial",children:"AddMaterial"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'CALL obj%AddMaterial("massDensity")\n'})}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["This routine just register a material name and allocate space for defining materal as a ",(0,t.jsx)(a.code,{children:"UserFunction"}),"."]})}),"\n",(0,t.jsx)(a.h3,{id:"step-4-get-material-pointer",children:"Step 4: Get material pointer"}),"\n",(0,t.jsxs)(a.p,{children:["After registering a material, we can get the pointer of ",(0,t.jsx)(a.a,{href:"/docs-api/UserFunction",children:"UserFunction"})," by calling the method ",(0,t.jsx)(a.a,{href:"/docs-api/AbstractMaterial/GetMaterialPointer",children:"GetMaterialPointer"}),".\nWe should initiate this pointer as described in the documentation of ",(0,t.jsx)(a.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"! Adding a material property\nCALL obj%AddMaterial(\"massDensity\")\n\nfunc => obj%GetMaterialPointer(\"massDensity\")\n\nIF (.NOT. ASSOCIATED(func)) THEN\n  CALL e%RaiseError(modName//'::'//myName//' - '// &\n    & '[error 1]')\nEND IF\n\nCALL SetUserFunctionParam(param=param, name=\"massDensity\",  &\n  & returnType=Scalar, argType=Constant)\nCALL func%Initiate(param)\nCALL func%Set(scalarValue=1.0_DFP)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(a.p,{children:["There is more to ",(0,t.jsx)(a.code,{children:"SolidMaterial_"}),", and you can learn about them from following pages."]}),"\n",(0,t.jsxs)(s,{id:"quadraturePoints",children:[(0,t.jsx)(i,{title:"Construct by HDF5 file",to:"/guides/programming-fem/solidMaterial/import_hdf_1",description:"This example shows how to initiate SolidMaterial by using reading data from HDF5 file."}),(0,t.jsx)(i,{title:"Construct by toml file",to:"/guides/programming-fem/solidMaterial/import_toml_1",description:"This example shows how to initiate SolidMaterial by using toml-file."}),(0,t.jsx)(i,{title:"Toml file constant value",to:"/guides/programming-fem/dirichletBC/dbc_toml_const",description:"This example shows how to initiate DBC by reading a toml-file. Constant boundary condition, $u=\\alpha$"}),(0,t.jsx)(i,{title:"Toml file constant function",to:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const",description:"This example shows how to initiate DBC by reading a toml-file. Constant boundary condition, $u=\\alpha$"}),(0,t.jsx)(i,{title:"Toml file space function",to:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const",description:"This example shows how to initiate DBC by reading a toml-file. Space boundary condition, $u=g(x,y,z)$"})]})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},52991:(e,a,i)=>{i.d(a,{Z:()=>x});i(67294);var t=i(86010),n=i(53438),s=i(39960),r=i(13919),l=i(95999),o=i(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var c=i(85893);function m(e){let{href:a,children:i}=e;return(0,c.jsx)(s.Z,{href:a,className:(0,t.Z)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:a,icon:i,title:n,description:s}=e;return(0,c.jsxs)(m,{href:a,children:[(0,c.jsxs)(o.Z,{as:"h2",className:(0,t.Z)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),s&&(0,c.jsx)("p",{className:(0,t.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:a}=e;const i=(0,n.LM)(a);return i?(0,c.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:a.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function u(e){let{item:a}=e;const i=(0,r.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,n.xz)(a.docId??void 0);return(0,c.jsx)(p,{href:a.href,icon:i,title:a.label,description:a.description??t?.description})}function f(e){let{item:a}=e;switch(a.type){case"link":return(0,c.jsx)(u,{item:a});case"category":return(0,c.jsx)(h,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function g(e){let{className:a}=e;const i=(0,n.jA)();return(0,c.jsx)(x,{items:i.items,className:a})}function x(e){const{items:a,className:i}=e;if(!a)return(0,c.jsx)(g,{...e});const s=(0,n.MN)(a);return(0,c.jsx)("section",{className:(0,t.Z)("row",i),children:s.map(((e,a)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(f,{item:e})},a)))})}},11151:(e,a,i)=>{i.d(a,{Z:()=>l,a:()=>r});var t=i(67294);const n={},s=t.createContext(n);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);