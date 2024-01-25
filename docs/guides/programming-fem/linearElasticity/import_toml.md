---
sidebar_position: 8
---

# Import from toml

In this section you can learn how construct an instance of `LinearElasticModel_` by reading data from the toml-file, and ``ImportFromToml command. You can learn more about the [ImportFromToml here](/docs-api/LinearElasticModel/ImportFromToml).

## Details of toml-config

<details>
<summary>Click here to see the toml-config</summary>
<div>

```toml
[linearElasticModel]
name = "linearElasticModel"
# name of the model

isPlaneStress = true
# set it to true for plane-stress formulation
# the default is false

isPlaneStrain = true
# set it to true for plane-strain formulation
# the default is false

elasticityType = "ISO"
# elasticity type, default is "ISO".
# following options are possible:
#
# - ISO: Isotropic elasticity
# - ANISO: Anisotropic elasticity
# - ORTHO: Orthotropic elasticity
# - TRANS: Transverse isotropic elasticity

poissonRatio = 0.1
# Poisson's Ratio, it is necessary when elasticityType is ISO

youngsModulus = 1.0
# Young's Modulus, it is necessary when elasticityType is ISO

stiffnessPower = 1.0
# It is only needed in case of moving mesh algorithms

c = [
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
]
# C elasticity tensor
# It should be 6 by 6
# For plane-stress and plane-strain case, it can be 3 by 3

invC = [
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
]
```

</div>
</details>

## Example 1 (Isotropic 3D)

import EXAMPLE1 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_1.md";

<EXAMPLE1 />

## Example 2 (Isotropic and plane-stress)

import EXAMPLE2 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_2.md";

<EXAMPLE2 />

## Example 3 (Isotropic and plane-strain)

import EXAMPLE3 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_3.md";

<EXAMPLE3 />

## Example 4 (Anisotropic and 3D)

import EXAMPLE4 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_4.md";

<EXAMPLE4 />

## Example 5 (Anisotropic and plane-stress)

import EXAMPLE5 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_5.md";

<EXAMPLE5 />

## Example 6 (Anisotropic and plane-strain)

import EXAMPLE6 from "@site/docs/docs-api/LinearElasticModel/examples/_ImportFromToml_test_6.md";

<EXAMPLE6 />
