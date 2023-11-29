"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96212],{77334:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=a(85893),t=a(11151);const n={author:"Vikas Sharma, Ph.D.",date:"15 Aug 2022",tags:["EasyPlplot"]},o="EasyPlplot example 2",i={id:"EasyPlplot/EasyPlplot_test_2",title:"EasyPlplot example 2",description:"Modules and classes",source:"@site/docs/docs-api/EasyPlplot/EasyPlplot_test_2.md",sourceDirName:"EasyPlplot",slug:"/EasyPlplot/EasyPlplot_test_2",permalink:"/docs-api/EasyPlplot/EasyPlplot_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/EasyPlplot/EasyPlplot_test_2.md",tags:[{label:"EasyPlplot",permalink:"/docs-api/tags/easy-plplot"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"15 Aug 2022",tags:["EasyPlplot"]},sidebar:"tutorialSidebar",previous:{title:"Easyplplot example 1",permalink:"/docs-api/EasyPlplot/EasyPlplot_test_1"},next:{title:"EigenUtility",permalink:"/docs-api/EigenUtility/"}},c={},d=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function r(e){const l={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h1,{id:"easyplplot-example-2",children:"EasyPlplot example 2"}),"\n",(0,s.jsx)(l.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"[[EasyPlplot]]"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-fortran",children:"PROGRAM main\n  use globalData\n  use EasyPlplot_Utilities\n  use EasyPlplot\n  implicit none\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-fortran",children:"  call setup(device='svg', fileName='media/logo-%n.svg', &\n    & figSize=[600, 500])\n  call makeLogo\n  call show()\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-fortran",children:"  contains\n  subroutine makeLogo\n    real(dfp), dimension(:), allocatable :: x, y1, y2, y3\n\n    x = linspace(0.0_dfp, 1.0_dfp, 100)\n    y1 = x**2 - 1.0_dfp\n    y2 = 2.0_dfp*x - 1.0_dfp\n    y3 = x\n    y3 = cos(2.0_dfp*PI*x)\n\n    call figure()\n    call subplot(1, 1, 1)\n    call xylim(mixval(x), mixval([y1, y2, y3])*1.1_dfp)\n\n    call plot(x, y1, lineColor='b', lineWidth=1.2_dfp)\n    call plot(x, y2, lineColor='r', lineWidth=1.2_dfp)\n    call plot(x, y3, lineColor='c', lineWidth=1.2_dfp)\n\n    call ticks(lineWidth=1.2_dfp)\n    call labels('', '', '')\n  end subroutine makeLogo\n"})}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function p(e={}){const{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},11151:(e,l,a)=>{a.d(l,{Z:()=>i,a:()=>o});var s=a(67294);const t={},n=s.createContext(t);function o(e){const l=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(n.Provider,{value:l},e.children)}}}]);