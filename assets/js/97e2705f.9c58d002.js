"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50364],{45718:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var n=i(85893),s=i(11151);const l={sidebar_position:3,repo:"https://github.com/vickysharma0812/LAPACK95",licenses:["lgpl-3"],tags:["easifemBase","extpkgs"]},r="LAPACK95",a={id:"install/extpkgs/LAPACK95",title:"LAPACK95",description:"LAPACK95 is a Fortran-95 (modern-fortran) interface to LAPACK. The repository is located here, which is a fork of  scivision's Lapack95 library.",source:"@site/docs/guides/install/extpkgs/LAPACK95.md",sourceDirName:"install/extpkgs",slug:"/install/extpkgs/LAPACK95",permalink:"/guides/install/extpkgs/LAPACK95",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/install/extpkgs/LAPACK95.md",tags:[{label:"easifemBase",permalink:"/guides/tags/easifem-base"},{label:"extpkgs",permalink:"/guides/tags/extpkgs"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,repo:"https://github.com/vickysharma0812/LAPACK95",licenses:["lgpl-3"],tags:["easifemBase","extpkgs"]},sidebar:"tutorialSidebar",previous:{title:"OpenBlas",permalink:"/guides/install/extpkgs/OpenBlas"},next:{title:"Sparsekit",permalink:"/guides/install/extpkgs/Sparsekit"}},d={},o=[{value:"Build",id:"build",level:2},{value:"CMake",id:"cmake",level:3},{value:"Python",id:"python",level:3},{value:"Examples",id:"examples",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lapack95",children:"LAPACK95"}),"\n",(0,n.jsxs)(t.p,{children:["LAPACK95 is a Fortran-95 (modern-fortran) interface to LAPACK. The repository is located ",(0,n.jsx)(t.a,{href:"https://github.com/vickysharma0812/LAPACK95",children:"here"}),", which is a fork of  ",(0,n.jsx)(t.a,{href:"https://github.com/scivision/LAPACK95",children:"scivision's Lapack95 library"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The reason of this forked version is to facilitate the building of LAPACK95 by using CMake (and Meson) build system.\nThis repository is forked mainly for easing the integration of Lapack95 with EASIFEM. If you are not using EASIFEM, then I would recommend you to use the scivision's library."})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The HTML version of the LAPACK95 Users' Guide is now available, ",(0,n.jsx)(t.a,{href:"http://www.netlib.org/lapack95/lug95/",children:"here"})," \ud83d\udd17 \ud83d\udca1"]}),"\n",(0,n.jsxs)(t.li,{children:["Index of LAPACK95 routines is ",(0,n.jsx)(t.a,{href:"http://www.netlib.org/lapack95/L90index/L90index.html",children:"here"})," \ud83d\udd17 \ud83d\udca1"]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"build",children:"Build"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The build process produces library called ",(0,n.jsx)(t.code,{children:"liblapack95"})," and modules. The archive library can be shared or static."]}),"\n",(0,n.jsx)(t.li,{children:"The library is build for single and double precision."}),"\n",(0,n.jsx)(t.li,{children:"Complex data type is not included."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"cmake",children:"CMake"}),"\n",(0,n.jsx)(t.p,{children:"Following options are defined:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"-DUSE_OPENMP="})}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"ON"})," and ",(0,n.jsx)(t.code,{children:"OFF"})," to enable and disable openmp"]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"ON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"-DCMAKE_BUILD_TYPE="})}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"Release"})," or ",(0,n.jsx)(t.code,{children:"Debug"})," for release or debug build-type"]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"Release"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"BUILD_SHARED_LIBS="})}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"ON"})," or ",(0,n.jsx)(t.code,{children:"OFF"})," to build shared or static library"]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"ON"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"-DCMAKE_INSTALL_PREFIX="})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"The location of the installation directory"}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:(0,n.jsx)(t.code,{children:"${EASIFEM_EXTPKGS}"})})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/vickysharma0812/LAPACK95.git\ncd LAPACK95\ncmake -DUSE_OPENMP=ON -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON -DCMAKE_INSTALL_PREFIX=${EASIFEM_EXTPKGS} -S ./ -B ./build\ncmake --build ./build --target install\n"})}),"\n",(0,n.jsx)(t.h3,{id:"python",children:"Python"}),"\n",(0,n.jsx)(t.p,{children:"You can install LAPACK95 by using Python. It is simple, interactive, and straight-forward."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/vickysharma0812/LAPACK95.git\ncd LAPACK95\npython3 install.py\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"! Double precision\nuse la_precision, only: wp => dp\nuse f95_lapack, only: la_gesv\n\nreal(wp) :: A(3,3), b(3)\n\ncall random_number(A)\nb(:) = 3*A(:,1) + 2*A(:,2) - A(:,3)\n\n! Solve Ax=b, overwrite b with solution\ncall la_gesv(A,b)\n\nprint *, b\nend program\n\n! Output (exact: 3 2 -1):\n! 2.9999999999999978        2.0000000000000018       -1.0000000000000004\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(67294);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);