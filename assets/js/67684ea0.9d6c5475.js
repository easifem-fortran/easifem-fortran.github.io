"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94890],{87830:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>T,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>N,toc:()=>I});var t=r(85893),o=r(11151);const a={},i="GetParam",N={id:"AbstractLinSolver/GetParam",title:"GetParam",description:"Get the field parameters of linear solver.",source:"@site/docs/docs-api/AbstractLinSolver/GetParam.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/GetParam",permalink:"/docs-api/AbstractLinSolver/GetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractLinSolver/GetParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetAbstractLinSolverParam",permalink:"/docs-api/AbstractLinSolver/GetAbstractLinSolverParam"},next:{title:"GetPreconditionOption",permalink:"/docs-api/AbstractLinSolver/GetPreconditionOption"}},T={},I=[{value:"Interface",id:"interface",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getparam",children:"GetParam"}),"\n",(0,t.jsx)(n.p,{children:"Get the field parameters of linear solver."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetParam(obj, isInitiated, engine, solverName, &\n      & ierr, preconditionOption, iter, maxIter, atol, rtol, tol, normRes, &\n      & error0, error, convergenceIn, convergenceType, relativeToRHS, &\n      & KrylovSubspaceSize, globalNumRow, globalNumColumn, &\n      & localNumRow, localNumColumn, dbcIndx, RES, Amat)\n    CLASS(AbstractLinSolver_), INTENT(IN) :: obj\n    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isInitiated\n    !! is object initiated?\n    CHARACTER(*), OPTIONAL, INTENT(INOUT) :: engine\n    !! Name of the engine\n    !! NATIVE-SERIAL\n    !! NATIVE-OMP\n    !! NATIVE-ACC\n    !! NATIVE-MPI\n    !! PETSC\n    !! LIS-OMP\n    !! LIS-MPI\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: solverName\n    !! Solver name\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: ierr\n    !! Error code returned by the solver\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: preconditionOption\n    !! Name of preconditioner;\n    !! NO_PRECONDITION\n    !! LEFT_PRECONDITION\n    !! RIGHT_PRECONDITION\n    !! LEFT_RIGHT_PRECONDITON\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: iter\n    !! Current iteration number\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: maxIter\n    !! Maximum iteration number\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: atol\n    !! absolute tolerance\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: rtol\n    !! relative tolerance\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: tol\n    !! Tolerance for testing convergence\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: normRes\n    !! norm Residual\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error0\n    !! initial error res or sol\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error\n    !! final error in res of sol\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceIn\n    !! convergence in residual or solution\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceType\n    !! relative/ absolute convergence\n    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: relativeToRHS\n    !! In case of relative convergence\n    !! is convergence\n    !! is relative to\n    !! right hand side\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: KrylovSubspaceSize\n    !! Useful for GMRES type algorithm\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: globalNumRow, globalNumColumn\n    !! Size of the global problem;\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: localNumRow, localNumColumn\n    !! Size of the problem on a single process\n    INTEGER(I4B), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: dbcIndx(:)\n    !! Indices where Dirichlet boundary conditions is prescribed\n    REAL(DFP), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: RES(:)\n    !! Residual in each iteration\n    CLASS(AbstractMatrixField_), OPTIONAL, POINTER, INTENT(INOUT) :: Amat\n    !! Pointer to child of [[AbstractMatrixField_]]\n  END SUBROUTINE GetParam\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>N,a:()=>i});var t=r(67294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function N(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);