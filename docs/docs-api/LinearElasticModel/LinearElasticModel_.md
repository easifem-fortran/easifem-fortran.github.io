# Structure

`LinearElasticModel_` is the class for modelling material behaviour.

### Constructing by using `Initiate`

```fortran
  type( LinearElasticModel_ ) :: obj
  type( ParameterList_ ) :: param
  call FPL_INIT; call param%initiate()
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStress = .FALSE., &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  call obj%initiate( param )
  call obj%display( msg="ISOTROPIC | PLANE-STRAIN |:" )
  call param%Deallocate(); call FPL_FINALIZE
```

### Constructing by using `Import`

**Template**

| Variable name    | Data type |              Value               |                                                      Comment |
| ---------------- | :-------: | :------------------------------: | -----------------------------------------------------------: |
| `name`           |  String   |       `LinearElasticModel`       |         It is constant, which denotes the name of the class. |
| `elasticityType` |  String   | `ISO`, `ANISO`, `ORTHO`, `TRANS` |                        It denotes the linear elasticity type |
| `isPlaneStress`  |  String   |            `T`or `F`             | If the problem is 2D, and plane stress then set it to .TRUE. |
| `isPlaneStrain`  |  String   |            `T` or `F`            | If the problem is 2D, and plane strain , then set it to .FALSE. |
| `lambda`         |   REAL    |                                  |               This is required when `ISO` option is selected |
| `ShearModulus`   |   REAL    |                                  |               This is required when `ISO` option is selected |
| `YoungsModulus`  |   REAL    |                                  |               This is required when `ISO` option is selected |
| `PoissonRatio`   |   REAL    |                                  |               This is required when `ISO` option is selected |
| `C`              | REAL(6,6) |                                  |           This is necessary when `ANISO` option is selected. |
| `invC`           | REAL(6,6) |                                  |           This is necessary when `ANISO` option is selected. |

Following code demonstrates the construction of linear elastic model using `Import` command.

First we `export` the `hdf5` file using following code.

```fortran
  type( LinearElasticModel_ ) :: obj
  type( ParameterList_ ) :: param
  type( hdf5File_ ) :: hdf5
  call FPL_INIT; call param%initiate()
  call setLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStress = .FALSE., &
    & isPlaneStrain = .FALSE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  call obj%initiate( param )
  call hdf5%initiate( "./TemplateLinearElasticModel1.hdf5", &
    & mode="NEW" )
  call hdf5%open()
  call obj%export( hdf5, "" )
  call hdf5%close
  call hdf5%Deallocate()
  call param%Deallocate(); call FPL_FINALIZE
```

Now we create an instance of `LinearElasticModel_` by importing the `hdf5` file.

```fortran
  type( LinearElasticModel_ ) :: obj
  type( hdf5File_ ) :: hdf5
  type( ParameterList_ ) :: param
  call FPL_INIT; call param%initiate()
  call hdf5%initiate( "./TemplateLinearElasticModel1.hdf5", &
    & mode="READ" ); call hdf5%open()
  call obj%import( hdf5, "" )
  call obj%display(msg="")
  call hdf5%close(); call hdf5%Deallocate()
  call param%Deallocate(); call FPL_FINALIZE
```

## Theory: Isotropic elasticity

\[sin\theta \alpha \beta\]

$$
\left\{ \begin{array}{c}
\sigma_{11}\\
\sigma_{22}\\
\sigma_{33}\\
\sigma_{12}\\
\sigma_{23}\\
\sigma_{13}
\end{array}\right\} =\frac{E}{(1+\nu)(1-2\nu)}\left[\begin{array}{cccccc}
1-\nu & \nu & \nu\\
\nu & 1-\nu & \nu\\
\nu & \nu & 1-\nu\\
 &  &  & \frac{1-2\nu}{2}\\
 &  &  &  & \frac{1-2\nu}{2}\\
 &  &  &  &  & \frac{1-2\nu}{2}
\end{array}\right]\left\{ \begin{array}{c}
\varepsilon_{11}\\
\varepsilon_{22}\\
\varepsilon_{33}\\
2\varepsilon_{12}\\
2\varepsilon_{23}\\
2\varepsilon_{13}
\end{array}\right\}
$$

$$
\left\{ \begin{array}{c}
\varepsilon_{11}\\
\varepsilon_{22}\\
\varepsilon_{33}\\
2\varepsilon_{12}\\
2\varepsilon_{23}\\
2\varepsilon_{13}
\end{array}\right\} =\frac{1}{E}\left[\begin{array}{cccccc}
1 & -\nu & -\nu\\
-\nu & 1 & -\nu\\
-\nu & -\nu & 1\\
 &  &  & 2+2\nu\\
 &  &  &  & 2+2\nu\\
 &  &  &  &  & 2+2\nu
\end{array}\right]\left\{ \begin{array}{c}
\sigma_{11}\\
\sigma_{22}\\
\sigma_{33}\\
\sigma_{12}\\
\sigma_{23}\\
\sigma_{13}
\end{array}\right\}
$$

### Plane stress

$$
\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}=\frac{E}{1-\nu^{2}}\begin{bmatrix}1 & \nu & 0\\
\nu & 1 & 0\\
0 & 0 & \frac{1-\nu}{2}
\end{bmatrix}\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}
$$

$$
\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}=\frac{1}{E}\begin{bmatrix}1 & -\nu & 0\\
-\nu & 1 & 0\\
0 & 0 & 2+2\nu
\end{bmatrix}\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}
$$

### Plane strain

$$
\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}=\frac{E}{(1+\nu)(1-2\nu)}\begin{bmatrix}1-\nu & \nu & 0\\
\nu & 1-\nu & 0\\
0 & 0 & \frac{1-2\nu}{2}
\end{bmatrix}\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}
$$

$$
\begin{bmatrix}\varepsilon_{11}\\
\varepsilon_{22}\\
2\varepsilon_{12}
\end{bmatrix}=\frac{1+\nu}{E}\begin{bmatrix}1-\nu & -\nu & 0\\
-\nu & 1-\nu & 0\\
0 & 0 & 2
\end{bmatrix}\begin{bmatrix}\sigma_{11}\\
\sigma_{22}\\
\sigma_{12}
\end{bmatrix}
$$
