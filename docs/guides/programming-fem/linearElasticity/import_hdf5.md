---
sidebar_position: 7
---

# Construct by using import

In this section you can learn how construct an instance of `LinearElasticModel_` by reading data from the HDF5File and `Import` command. You can learn more about the [Import here](/docs-api/LinearElasticModel/Import).

We need following data in the `HDF5File`.

**Template of HDF5File**

| Variable name    | Data type |              Value               |                                                         Comment |
| ---------------- | :-------: | :------------------------------: | --------------------------------------------------------------: |
| `name`           |  String   |       `LinearElasticModel`       |            It is constant, which denotes the name of the class. |
| `elasticityType` |  String   | `ISO`, `ANISO`, `ORTHO`, `TRANS` |                           It denotes the linear elasticity type |
| `isPlaneStress`  |  String   |            `T`or `F`             |    If the problem is 2D, and plane stress then set it to .TRUE. |
| `isPlaneStrain`  |  String   |            `T` or `F`            | If the problem is 2D, and plane strain , then set it to .FALSE. |
| `lambda`         |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `ShearModulus`   |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `YoungsModulus`  |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `PoissonRatio`   |   REAL    |                                  |                  This is required when `ISO` option is selected |
| `C`              | REAL(6,6) |                                  |              This is necessary when `ANISO` option is selected. |
| `invC`           | REAL(6,6) |                                  |              This is necessary when `ANISO` option is selected. |

:::caution
Before using these examples, make sure to export the data as shown [here](/guides/programming-fem/LinearElasticity/export_hdf5).

:::

## Example 1

import EXAMPLE13 from "@site/docs/docs-api/LinearElasticModel/examples/_Import_test_1.md";

<EXAMPLE13 />

## Example 2

import EXAMPLE14 from "@site/docs/docs-api/LinearElasticModel/examples/_Import_test_2.md";

<EXAMPLE14 />

## Example 3

import EXAMPLE15 from "@site/docs/docs-api/LinearElasticModel/examples/_Import_test_3.md";

<EXAMPLE15 />
