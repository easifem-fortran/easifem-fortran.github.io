"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13511],{18900:(e,n,s)=>{s.d(n,{ZP:()=>o});var l=s(85893),t=s(11151),i=s(74866),r=s(85162);function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["To install ",(0,l.jsx)(n.code,{children:"EASIFEM"})," you need to define following environment variables in your shell."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_INSTALL_DIR"})}),": The location of file system where EASIFEM will be installed. For example, ",(0,l.jsx)(n.code,{children:"/opt"}),", ",(0,l.jsx)(n.code,{children:"${HOME}"}),", ",(0,l.jsx)(n.code,{children:"/usr/local/"}),". Default location is ",(0,l.jsx)(n.code,{children:"$HOME/.easifem/install/"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_SOURCE_DIR"})}),": The location of file system where the source code of EASIFEM will be downloaded. For example, ",(0,l.jsx)(n.code,{children:"~/.easifem/src/"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_BUILD_DIR"})}),": The location of file system where build files will be stored. These files are necessary for installation, and after installation you can remove them if you want. Always keep your build directory separated from your source and install directory. For example, ",(0,l.jsx)(n.code,{children:"~/.easifem/build/"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The above-mentioned environment variables are the fundamental environment variables, which are used for defining other variables as shown in the following table."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Env-var name"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"description"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"example"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_INSTALL_DIR"})})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Location of file system where EASIFEM library will install its components and external packages."}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"~/.easifem/install/"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_SOURCE_DIR"})})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Location of file system where the source code will be downloaded."}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"~/.easifem/src/"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_BUILD_DIR"})})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Location of file system where the build files will be stored."}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"~/.easifem/build/"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_EXTPKGS"})})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Location of file system where external packages will be installed."}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"$EASIFEM_INSTALL_DIR/easifem/extpkgs"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_BASE"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Location where ",(0,l.jsx)(n.code,{children:"easifemBase"})," library will be installed."]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"EASIFEM_BASE=EASIFEM_INSTALL_DIR/easifem/base"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_CLASSES"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Location where ",(0,l.jsx)(n.code,{children:"easifemClasses"})," library will be installed."]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"EASIFEM_INSTALL_DIR/easifem/classes"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_MATERIALS"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Location where ",(0,l.jsx)(n.code,{children:"easifemMaterials"})," library will be installed."]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"EASIFEM_INSTALL_DIR/easifem/materials"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"EASIFEM_KERNELS"})})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["Location where ",(0,l.jsx)(n.code,{children:"easifemKernels"})," library will be installed."]}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"EASIFEM_INSTALL_DIR/easifem/kernels"})})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"automatic-setup-of-environment-variables",children:"Automatic setup of environment variables"}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["First, make sure you have successfully installed the ",(0,l.jsx)(n.code,{children:"easifem"})," CLI as mentioned in ",(0,l.jsx)(n.a,{href:"install-easifem-cli",children:"Step-1"}),"."]})}),"\n",(0,l.jsxs)(n.p,{children:["You can set up the environment variables by using the ",(0,l.jsx)(n.code,{children:"easifem"})," CLI application."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"easifem setenv --install /home/easifem/install --build /home/easifem/build --source /home/easifem/src\n"})}),"\n",(0,l.jsxs)(n.p,{children:["You can also use short flags for ",(0,l.jsx)(n.code,{children:"--install (-i)"}),", ",(0,l.jsx)(n.code,{children:"--build (-b)"}),", and ",(0,l.jsx)(n.code,{children:"--source (-s)"})," as shown below."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"easifem setenv -i ~/.easifem/install -b ~/.easifem/build -s ~/.easifem/src\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This command will create config files for ",(0,l.jsx)(n.code,{children:"bash"}),", ",(0,l.jsx)(n.code,{children:"zsh"}),", and ",(0,l.jsx)(n.code,{children:"fish"})," shell in ",(0,l.jsx)(n.code,{children:"~/.config/easifem"})," directory."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["For ",(0,l.jsx)(n.code,{children:"bash"})," and ",(0,l.jsx)(n.code,{children:"zsh"})," shell, the name of the file is ",(0,l.jsx)(n.code,{children:"easifemvar.sh"})]}),"\n",(0,l.jsxs)(n.li,{children:["For ",(0,l.jsx)(n.code,{children:"fish"})," shell, the name of the file is ",(0,l.jsx)(n.code,{children:"easifemvar.fish"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Then, you can run following command to bring the changes in your current shell session."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="For bash and zsh SHELL \ud83c\udf49"',children:"source ${HOME}/.config/easifem/easifemvar.sh\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",metastring:'title="For fish SHELL \ud83c\udf4e"',children:"source $HOME/.config/easifem/easifemvar.fish\n"})}),"\n",(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"Click here to see how to check your SHELL"}),(0,l.jsxs)("div",{children:[(0,l.jsx)(n.p,{children:"The following command will provide the information of the current shell."}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $SHELL\n"})})]})]}),"\n","\n","\n",(0,l.jsx)(n.admonition,{title:"Modify the SHELL",type:"info",children:(0,l.jsxs)(n.p,{children:["Now you need to a line to your default shell, the process is described below for ",(0,l.jsx)(n.code,{children:"Bash"}),", ",(0,l.jsx)(n.code,{children:"Zsh"}),", and ",(0,l.jsx)(n.code,{children:"Fish"})," shell."]})}),"\n",(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(r.Z,{value:"1",label:"Bash Shell",children:[(0,l.jsxs)(n.p,{children:["If you are using ",(0,l.jsx)(n.code,{children:"Bash"})," shell, then you can place ",(0,l.jsx)(n.code,{children:"easifemvar.sh"})," in your shell. Open ",(0,l.jsx)(n.code,{children:"~/.bashrc"})," in the editor, and add the following line at the end of the file."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.config/easifem/easifemvar.sh\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,l.jsx)(n.li,{children:"Restart your terminal, and try following command."}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $EASIFEM_INSTALL_DIR\n"})})]}),(0,l.jsxs)(r.Z,{value:"2",label:"Zsh Shell",children:[(0,l.jsxs)(n.p,{children:["If you are using the ",(0,l.jsx)(n.code,{children:"Zsh"})," shell, then you can place ",(0,l.jsx)(n.code,{children:"easifemvar.sh"})," in your shell. Open ",(0,l.jsx)(n.code,{children:"~/.zshrc"})," file in the editor, and add the following line at the end of the file:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"source ${HOME}/.config/easifem/easifemvar.sh\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,l.jsx)(n.li,{children:"Restart your terminal, and try following command."}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $EASIFEM_INSTALL_DIR\n"})})]}),(0,l.jsxs)(r.Z,{value:"3",label:"Fish Shell",children:[(0,l.jsxs)(n.p,{children:["If you are using ",(0,l.jsx)(n.code,{children:"Fish"})," shell, then you can place ",(0,l.jsx)(n.code,{children:"easifemvar.fish"})," in your shell. For fish shell, open ",(0,l.jsx)(n.code,{children:"~/.config/fish/config.fish"})," in the editor and add the following line at the end of the file:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"source $HOME/.config/easifem/easifemvar.fish\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Save the file and exit."}),"\n",(0,l.jsx)(n.li,{children:"Restart your terminal, and try following command."}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"echo $EASIFEM_INSTALL_DIR\n"})})]}),(0,l.jsx)(r.Z,{value:"close",label:"\u21a2"})]}),"\n",(0,l.jsx)(n.h2,{id:"manual-set-up-of-environment-variable",children:"Manual set up of environment variable"}),"\n",(0,l.jsx)(n.p,{children:"If you want to set up the environment variable by yourself, then you can follow the following instructions."}),"\n",(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(r.Z,{value:"1",label:"Bash",children:[(0,l.jsxs)(n.p,{children:["Add following environment to ",(0,l.jsx)(n.code,{children:"~/.bashrc"})]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'    export EASIFEM_INSTALL_DIR=$HOME/.easifem/install\n    export EASIFEM_BUILD_DIR=$HOME/.easifem/build/\n    export EASIFEM_SOURCE_DIR=$HOME/.easifem/src/\n\n    export EASIFEM_BASE=$EASIFEM_INSTALL_DIR/easifem/base\n    export EASIFEM_CLASSES=$EASIFEM_INSTALL_DIR/easifem/classes\n    export EASIFEM_EXTPKGS=$EASIFEM_INSTALL_DIR/easifem/extpkgs\n    export EASIFEM_APP=$EASIFEM_INSTALL_DIR/easifem/app\n    export EASIFEM_MATERIALS=$EASIFEM_INSTALL_DIR/easifem/materials\n    export EASIFEM_KERNELS=$EASIFEM_INSTALL_DIR/easifem/kernels\n\n    export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"\n\n    export PATH="${PATH}:${EASIFEM_EXTPKGS}/bin"\n    export PATH="${PATH}:${EASIFEM_APP}/bin"\n\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_BASE}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_CLASSES}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_EXTPKGS}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_APP}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_MATERIALS}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_KERNELS}/lib"\n'})})]}),(0,l.jsxs)(r.Z,{value:"2",label:"Zsh",children:[(0,l.jsxs)(n.p,{children:["Add following environment to ",(0,l.jsx)(n.code,{children:"~/.zshrc"})]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'    export EASIFEM_INSTALL_DIR=$HOME/.easifem/install\n    export EASIFEM_BUILD_DIR=$HOME/.easifem/build/\n    export EASIFEM_SOURCE_DIR=$HOME/.easifem/src/\n\n    export EASIFEM_BASE=$EASIFEM_INSTALL_DIR/easifem/base\n    export EASIFEM_CLASSES=$EASIFEM_INSTALL_DIR/easifem/classes\n    export EASIFEM_EXTPKGS=$EASIFEM_INSTALL_DIR/easifem/extpkgs\n    export EASIFEM_APP=$EASIFEM_INSTALL_DIR/easifem/app\n    export EASIFEM_MATERIALS=$EASIFEM_INSTALL_DIR/easifem/materials\n    export EASIFEM_KERNELS=$EASIFEM_INSTALL_DIR/easifem/kernels\n\n    export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:${EASIFEM_EXTPKGS}/lib/pkgconfig"\n\n    export PATH="${PATH}:${EASIFEM_EXTPKGS}/bin"\n    export PATH="${PATH}:${EASIFEM_APP}/bin"\n\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_BASE}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_CLASSES}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_EXTPKGS}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_APP}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_MATERIALS}/lib"\n    export LD_LIBRARY_PATH="${LD_LIBRARY_PATH}:${EASIFEM_KERNELS}/lib"\n'})})]}),(0,l.jsxs)(r.Z,{value:"3",label:"Fish shell",children:[(0,l.jsxs)(n.p,{children:["Add following environment variables to ",(0,l.jsx)(n.code,{children:"~/.config/fish/config.fish"}),"."]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"set -gx EASIFEM_INSTALL_DIR $HOME/.easifem/install\nset -gx EASIFEM_BUILD_DIR $HOME/.easifem/build/\nset -gx EASIFEM_SOURCE_DIR $HOME/.easifem/src\nset -gx EASIFEM_BASE $EASIFEM_INSTALL_DIR/easifem/base\nset -gx EASIFEM_CLASSES $EASIFEM_INSTALL_DIR/easifem/classes\nset -gx EASIFEM_EXTPKGS $EASIFEM_INSTALL_DIR/easifem/extpkgs\nset -gx EASIFEM_APP $EASIFEM_INSTALL_DIR/easifem/app\nset -gx EASIFEM_MATERIALS $EASIFEM_INSTALL_DIR/easifem/materials\nset -gx EASIFEM_KERNELS $EASIFEM_INSTALL_DIR/easifem/kernels\n\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_BASE/lib\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_CLASSES/lib\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_EXTPKGS/lib\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_APP/lib\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_MATERIALS/lib\nset -gx LD_LIBRARY_PATH $LD_LIBRARY_PATH $EASIFEM_KERNELS/lib\n\nset -gx PKG_CONFIG_PATH $PKG_CONFIG_PATH $EASIFEM_EXTPKGS/lib/pkgconfig\nset -gx PATH $PATH $EASIFEM_EXTPKGS/bin\nset -gx PATH $PATH $EASIFEM_APP/bin\n"})})]}),(0,l.jsx)(r.Z,{value:"close",label:"\u21a2"})]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},52506:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var l=s(85893),t=s(11151),i=s(18900);const r={title:"Environment variables",sidebar_position:3},a=void 0,o={id:"install/redhat/setup-environment",title:"Environment variables",description:"",source:"@site/docs/guides/install/redhat/setup-environment.md",sourceDirName:"install/redhat",slug:"/install/redhat/setup-environment",permalink:"/guides/install/redhat/setup-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/install/redhat/setup-environment.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:3,frontMatter:{title:"Environment variables",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EASIFEM CLI",permalink:"/guides/install/redhat/install-easifem-cli"},next:{title:"System requirements",permalink:"/guides/install/redhat/install-system-requirements"}},c={},d=[];function h(e){return(0,l.jsx)(i.ZP,{})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h()}},85162:(e,n,s)=>{s.d(n,{Z:()=>r});s(67294);var l=s(86010);const t={tabItem:"tabItem_Ymn6"};var i=s(85893);function r(e){let{children:n,hidden:s,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.Z)(t.tabItem,r),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>p});var l=s(67294),t=s(86010),i=s(12466),r=s(16550),a=s(20469),o=s(91980),c=s(67392),d=s(50012);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:t}}=e;return{value:n,label:s,attributes:l,default:t}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function A(e){let{queryString:n=!1,groupId:s}=e;const t=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,l.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function E(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=u(e),[r,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[c,h]=A({queryString:s,groupId:t}),[E,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(s);return[t,(0,l.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),I=(()=>{const e=c??E;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{I&&o(I)}),[I]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=s(72389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(85893);function _(e){let{className:n,block:s,selectedValue:l,selectValue:r,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=a[s].value;t!==l&&(c(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,t.Z)("tabs__item",I.tabItem,i?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function S(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=E(e);return(0,m.jsxs)("div",{className:(0,t.Z)("tabs-container",I.tabList),children:[(0,m.jsx)(_,{...e,...n}),(0,m.jsx)(S,{...e,...n})]})}function p(e){const n=(0,f.Z)();return(0,m.jsx)(j,{...e,children:h(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var l=s(67294);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);