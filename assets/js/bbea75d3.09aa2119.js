"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46442],{67868:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>s,metadata:()=>t,toc:()=>h});var a=n(85893),r=n(11151),i=n(74866),o=n(85162);const s={},c="SetRow",t={id:"BlockMatrixField/SetRow",title:"SetRow",description:"Set the row of matrix field.",source:"@site/docs/docs-api/BlockMatrixField/SetRow.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/SetRow",permalink:"/docs-api/BlockMatrixField/SetRow",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/SetRow.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetRectangleMatrixFieldParam",permalink:"/docs-api/BlockMatrixField/SetRectangleMatrixFieldParam"},next:{title:"Shape",permalink:"/docs-api/BlockMatrixField/Shape"}},d={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2},{value:"Interface 5",id:"interface-5",level:2},{value:"Interface 6",id:"interface-6",level:2}];function u(e){const l={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.h1,{id:"setrow",children:"SetRow"}),"\n",(0,a.jsx)(l.p,{children:"Set the row of matrix field."}),"\n",(0,a.jsx)(l.p,{children:"Calling example"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode, ivar, idof, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode, ivar, spacecompo, timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode, ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode, ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode(:), ivar, spacecompo, timecompo(:), scalarval, vecval(:), nodefieldval)"})}),"\n",(0,a.jsx)(l.li,{children:(0,a.jsx)(l.code,{children:"SetRow(obj, globalnode(:), ivar, spacecompo(:), timecompo, scalarval, vecval(:), nodefieldval)"})}),"\n"]}),"\n","\n","\n",(0,a.jsx)(l.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, idof, scalarVal, vecVal, &\n    & nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: idof\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"idof"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"idof"})," is the degree of freedom number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-5",children:"Interface 5"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo\n    INTEGER(I4B), INTENT(IN) :: timecompo(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]}),"\n",(0,a.jsx)(l.h2,{id:"interface-6",children:"Interface 6"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\u0700 See Interface",default:!0,children:[(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setRow(obj, globalNode, ivar, spacecompo, timecompo, &\n    & scalarVal, vecVal, nodeFieldVal)\n    CLASS(BlockMatrixField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: globalNode(:)\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B), INTENT(IN) :: spacecompo(:)\n    INTEGER(I4B), INTENT(IN) :: timecompo\n    REAL(DFP), OPTIONAL, INTENT(IN) :: scalarVal\n    REAL(DFP), OPTIONAL, INTENT(IN) :: vecVal(:)\n    CLASS(AbstractNodeField_), OPTIONAL, INTENT(IN) :: nodeFieldVal\n  END SUBROUTINE setRow\nEND INTERFACE\n"})}),(0,a.jsxs)(l.p,{children:["This routine sets the row of a sparse matrix. The row index is calculated by using the ",(0,a.jsx)(l.code,{children:"globalNode"}),", ",(0,a.jsx)(l.code,{children:"ivar"})," and ",(0,a.jsx)(l.code,{children:"spacecompo"}),", ",(0,a.jsx)(l.code,{children:"timecompo"}),"."]}),(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"globalNode"})," is global node number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"ivar"})," is the physical variable number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"spacecompo"})," is the space component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"timecompo"})," is the time component number."]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"scalarVal"})," is the scalar value, if present then the row will be Set to\nthis scalar value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"vectorVal"})," is the vector value, if present then the row will be Set to\nthis vector value"]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.code,{children:"nodeFieldVal"})," is the field of nodal values."]}),"\n"]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2",default:!0})]})]})}function N(e={}){const{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,l,n)=>{n.d(l,{Z:()=>o});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:l,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:l})}},74866:(e,l,n)=>{n.d(l,{Z:()=>f});var a=n(67294),r=n(86010),i=n(12466),o=n(16550),s=n(20469),c=n(91980),t=n(67392),d=n(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:l,children:n}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return h(e).map((e=>{let{props:{value:l,label:n,attributes:a,default:r}}=e;return{value:l,label:n,attributes:a,default:r}}))}(n);return function(e){const l=(0,t.l)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,n])}function N(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function x(e){let{queryString:l=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:l,groupId:n});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const l=new URLSearchParams(r.location.search);l.set(i,e),r.replace({...r.location,search:l.toString()})}),[i,r])]}function I(e){const{defaultValue:l,queryString:n=!1,groupId:r}=e,i=u(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!N({value:l,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:i}))),[t,h]=x({queryString:n,groupId:r}),[I,p]=function(e){let{groupId:l}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(l),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),j=(()=>{const e=t??I;return N({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!N({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=n(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(85893);function v(e){let{className:l,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:t}=(0,i.o5)(),d=e=>{const l=e.currentTarget,n=c.indexOf(l),r=s[n].value;r!==a&&(t(l),o(r))},h=e=>{let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;l=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;l=c[n]??c[c.length-1];break}}l?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},l),children:s.map((e=>{let{value:l,label:n,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":a===l}),children:n??l},l)}))})}function T(e){let{lazy:l,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function b(e){const l=I(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(v,{...e,...l}),(0,m.jsx)(T,{...e,...l})]})}function f(e){const l=(0,p.Z)();return(0,m.jsx)(b,{...e,children:h(e.children)},String(l))}},11151:(e,l,n)=>{n.d(l,{Z:()=>s,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const l=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:l},e.children)}}}]);