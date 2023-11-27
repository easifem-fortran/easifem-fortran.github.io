---
sidebar_position: 1
date: 2023-06-29 
update: 2023-06-29 
status: stable
docs: done
extpkgs: none
category: 
  - Polynomial
tags: 
  - polynomial
  - easifemBase
  - orthogonal
---

# Ultraspherical

Jacobi polynomial with $\alpha=\beta>-1$, are called the ultraspherical polynomials or Gegenbauer polynomial. We will denote ultraspherical polynomial by $P_{n}^{\lambda}(x)$ where, $\alpha=\lambda-\frac{1}{2}$. Note that $\lambda>-\frac{1}{2}$.

$$
P_{n}^{\lambda}(x)=\frac{\Gamma\left(\lambda+\frac{1}{2}\right)}{\Gamma\left(2\lambda\right)}\frac{\Gamma\left(n+2\lambda\right)}{\Gamma\left(n+\lambda+\frac{1}{2}\right)}P_{n}^{\alpha,\alpha}(x),\quad\alpha=\lambda-\frac{1}{2}
$$

we can also write

$$
P_{n}^{\lambda}(x)=\frac{\Gamma\left(\alpha+1\right)}{\Gamma\left(2\alpha+1\right)}\frac{\Gamma\left(n+2\alpha+1\right)}{\Gamma\left(n+\alpha+1\right)}P_{n}^{\alpha,\alpha}(x),\quad\alpha=\lambda-\frac{1}{2}
$$

- Note that for $\alpha=-1/2$, or $\lambda=0$, $\Gamma\left(2\alpha+1\right)$is not defined, and this case should be handled carefully.

- The $P_{n}^{\lambda}$ are orthogonal with respect to the following weight function.

$$
w(x)=(1-x^{2})^{\alpha}=(1-x^{2})^{\lambda-0.5}
$$

- The support of ultraspherical polynomial is $[-1,1].$

## Methods

import DocCardList from '@theme/DocCardList';

<DocCardList />
