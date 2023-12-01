"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21404],{73528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var l=n(85893),i=n(11151);const s={},c="SetBlockNodeFieldParam",r={id:"BlockNodeFieldLis/SetBlockNodeFieldParam",title:"SetBlockNodeFieldParam",description:"Set the essential parameter for constructing an instance of BlockNodeField.",source:"@site/docs/docs-api/BlockNodeFieldLis/SetBlockNodeFieldParam.md",sourceDirName:"BlockNodeFieldLis",slug:"/BlockNodeFieldLis/SetBlockNodeFieldParam",permalink:"/docs-api/BlockNodeFieldLis/SetBlockNodeFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockNodeFieldLis/SetBlockNodeFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/BlockNodeFieldLis/Set"},next:{title:"Size",permalink:"/docs-api/BlockNodeFieldLis/Size"}},o={},d=[{value:"Interface",id:"interface",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"setblocknodefieldparam",children:"SetBlockNodeFieldParam"}),"\n",(0,l.jsx)(t.p,{children:"Set the essential parameter for constructing an instance of BlockNodeField."}),"\n",(0,l.jsx)(t.p,{children:"Calling example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:"CALL setBlockNodeFieldParam(ParameterList_::param, String::name(:), Integer::fieldType(:), Integer::spaceCompo(:), Integer::timeCompo(:))\n"})}),"\n",(0,l.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE SetBlockNodeFieldParam(param, &\n    & name, &\n    & engine, &\n    & physicalVarNames, &\n    & spaceCompo, &\n    & timeCompo, &\n    & fieldType, &\n    & comm, &\n    & local_n, &\n    & global_n)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    !! Options to create [[BlockNodeField_]] will be stored in param\n    CHARACTER(*), INTENT(IN) :: name\n    !! Name of the block node field\n    CHARACTER(*), INTENT(IN) :: engine\n    !! Name of the engine\n    CHARACTER(*), INTENT(IN) :: physicalVarNames(:)\n    !! Names of the physical variables\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)\n    !! Space components in each physical variable\n    INTEGER(I4B), INTENT(IN) :: timeCompo(:)\n    !! Time component in each physical variable\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n    !! fieldType can be following\n    !! FIELD_TYPE_NORMAL <-- DEFAULT\n    !! FIELD_TYPE_CONSTANT\n    !! FIELD_TYPE_CONSTANT_SPACE\n    !! FIELD_TYPE_CONSTANT_TIME\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n\n  END SUBROUTINE SetBlockNodeFieldParam\nEND INTERFACE\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Parameters required for constructing an instance of ",(0,l.jsx)(t.code,{children:"BlockNodeField_"})," class are given below"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"name"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"data type"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"value"}),(0,l.jsx)(t.th,{style:{textAlign:"right"},children:"comment"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"engine"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"NATIVE_SERIAL"})}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"name(:)"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Name of the field"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"fieldType(:)"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"NORMAL"}),", ",(0,l.jsx)(t.code,{children:"CONSTANT"})]}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"spaceCompo(:)"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Number of spatial component"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"timeCompo(:)"})}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"},children:"Number of temporal components"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"right"}})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["This routine sets the essential parameters required for constructing the ",(0,l.jsx)(t.code,{children:"BlockNodeField_"}),"."]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"param"})," contains the parameters"]}),"\n",(0,l.jsxs)(t.li,{children:["the size of ",(0,l.jsx)(t.code,{children:"name"}),", ",(0,l.jsx)(t.code,{children:"spaceCompo"}),", ",(0,l.jsx)(t.code,{children:"timeCompo"})," ",(0,l.jsx)(t.code,{children:"fieldType"})," should be same"]}),"\n",(0,l.jsxs)(t.li,{children:["the size of ",(0,l.jsx)(t.code,{children:"name"})," actually equal to the total number of physical var"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"name"})," name of each physical variable"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"spaceCompo"})," space components of each physical variable, it is optional. Default value is 1 space component per physical variable"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"timeCompo"})," time components of each physical variable. It is optional. Default value is 1."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"fieldType"})," of each physical variable. It is optional. Default value is ",(0,l.jsx)(t.code,{children:"FIELD_TYPE_NORMAL"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var l=n(67294);const i={},s=l.createContext(i);function c(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);