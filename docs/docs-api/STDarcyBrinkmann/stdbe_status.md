---
title: STDarcyBrinkmann Status
author: Vikas Sharma, Ph.D.
date: 15 Nov 2021
update: 15 Nov 2021
---

# STDarcyBrinkmann Status

### Constructor

- [x] AddSurrogate()
- [x] SetSTDarcyBrinkmannParam()
- [x] CheckEssentialParam()
- [x] Deallocate()

### IOMethods

- [x] Display
- [ ] Import
- [ ] Export

### SetMethods

- [x] AddPorousMaterial
- [x] AddFluidMaterial
- [x] AddPressureBC
- [x] AddVelocityBC
- [x] Set

### GetMethods

- [ ] GetPressureBCPointer
- [ ] GetVelocityBCPointer

### NativeSerial

- [x] InitiateFields()

check the validity of `setPrecondition(param)` for [[BlockMatrixField_]].

``` fortran
PreconditionOption = obj%linsol%getPreconditionOption()
IF (PreconditionOption .NE. NO_PRECONDITION) THEN
  ierr = param%set("BlockMatrixField/preconditionName", PRECOND_ILUD)
  ierr = param%set("BlockMatrixField/droptol", 0.0005_DFP)
  ierr = param%set("BlockMatrixField/alpha", 1.0_DFP)
  CALL obj%tanmat%setPrecondition(param)
END IF
```

- [ ] AssembleTanmat()
- [ ] AssembleRHS()
- [ ] Assemble()
- [ ] Solve()
- [ ] Update()
