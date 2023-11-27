# Structure

`FEMatrix_Method` module contains a lot of routine for constructing finite element matrices. You can think it like a snippets for element matrices.

- [ ] TODO add structure of FEMatrix_Method module in documentation.

## Constructor methods

## Mass matrix

$$
\int_{\Omega } N^{I}\rho N^{J}d\Omega
$$

## STMass matrix

$$
\int_{\Omega } N^{I}T_{a}\rho N^{J}T_{b}d\Omega
$$


$$
\iint \frac{\partial N^{I}T_{a}}{\partial t} \rho N^{J}T_{b}d\Omega dt
$$

$$
\iint \frac{\partial N^{I}T_{a}}{\partial t} \rho \frac{\partial N^{J}T_{b}}{\partial t} d\Omega dt
$$

$$
\iint N^{I}T_{a}\rho \frac{\partial N^{J}T_{b}}{\partial t} d\Omega dt
$$

## Diffusion matrix

## Stiffness matrix

## Convection matrix

## Nitsche matrix
