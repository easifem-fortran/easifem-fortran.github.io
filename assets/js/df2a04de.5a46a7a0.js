"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5424],{33487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=r(85893),n=r(11151);const s={},a="Export",i={id:"SteadyStokes111/Export",title:"Export",description:"This routine exports the kernel to HDF5file",source:"@site/docs/docs-api/SteadyStokes111/Export.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/Export",permalink:"/docs-api/SteadyStokes111/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes111/Export.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/SteadyStokes111/Display"},next:{title:"GetPressureDirichletBCPointer",permalink:"/docs-api/SteadyStokes111/GetPressureDirichletBCPointer"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"export",children:"Export"}),"\n",(0,o.jsx)(t.p,{children:"This routine exports the kernel to HDF5file"}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Export(obj, hdf5, group)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var o=r(67294);const n={},s=o.createContext(n);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);