---
sidebar_position: 1
date: 2023-06-29 
update: 2023-06-29 
status: stable
docs: done
extpkgs: none
category: 
  - Polynomial
  - Orthogonal
tags: 
  - polynomial
  - orthogonal
  - easifemBase
---

# Jacobi

Jacobi polynomial of order $n$ is denoted by $P_{n}^{\alpha,\beta}\left(x\right)$. Here $\alpha$ and $\beta$ are parameters of Jacobi polynomial. Note that

$$
1+\alpha>0,\quad1+\beta>0
$$

The weight for Jacobi polynomial is given by

$$
w(x)=(1-x)^{\alpha}(1+x)^{\beta}
$$

> The support of Jacobi polynomial is $[-1,1].$

The leading coefficient of $P_{n}^{\alpha,\beta}$ is denoted by $k_{n}$ and it is given by

$$
k_{n}=\frac{1}{2^{n}}\left(\begin{array}{c}
2n+\alpha+\beta\\
n
\end{array}\right)
$$

The norm of $P_{n}^{\alpha,\beta}$ is given below:

$$
\Vert P_{n}^{\alpha,\beta}\Vert^{2}=:h_{n}=\frac{2^{\alpha+\beta+1}}{2n+\alpha+\beta+1}\frac{\Gamma(n+\alpha+1)\Gamma(n+\beta+1)}{n!\Gamma(n+\alpha+\beta+1)}
$$

The value of $P_{n}^{\alpha,\beta}$ at $x=1$ is given by

$$
P_{n}^{\alpha,\beta}(1)=\frac{\Gamma(n+\alpha+1)}{n!\Gamma(1+\alpha)}
$$

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
