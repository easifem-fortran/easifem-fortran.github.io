---
title: Static Diffusion Theory
date: 14 Nov 2021
update: 15 Nov 2021
author: Vikas Sharma, Ph.D.
---

# Static Diffusion Problem Theory

## Governing equation

$$
-\nabla\cdot\nu\left(\nabla u\right)=f
$$

where, 

- $\nu:=\nu(\mathbf{x})$ is the diffusivity coefficient
- $f=f(\mathbf{x})$ is the source term.

## Boundary condition

### Dirichlet boundary condition

$$
u = g(x), \text{ on } \Gamma_{g}
$$

### Neumann boundary condition

$$
\nu \nabla u\cdot\boldsymbol{n}=h, \text{ on } \Gamma_{h}
$$

where, $h=h(\mathbf{x})$ is the incoming flux.

### Mixed boundary condition

$$
au+\nu\nabla u\cdot\boldsymbol{n}=c, \text{ on } \Gamma_{mix}
$$

### Weak Dirichlet boundary condition

- [ ] TODO add description of weak boundary condition.


## Galerkin FEM

### Variation form 

$$
\int_{\Omega}\nabla w\cdot\nu\nabla u {d\Omega}-\int_{\Gamma_{mix}}{awu}dS=\int_{\Gamma_{h}}whdS+\int_{\Gamma_{mix}}wcdS+\int_{\Omega}wfd\Omega
$$

where, $w$ is vanishes at the Dirichlet boundary.

### Discretized form
