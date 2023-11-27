---
author: Vikas Sharma, Ph.D.
date: 15 Aug 2022
tags:
    - EasyPlplot
---

# EasyPlplot example 2

## Modules and classes

- [[EasyPlplot]]

## Usage

```fortran
PROGRAM main
  use globalData
  use EasyPlplot_Utilities
  use EasyPlplot
  implicit none
```

```fortran
  call setup(device='svg', fileName='media/logo-%n.svg', &
    & figSize=[600, 500])
  call makeLogo
  call show()
```

```fortran
  contains
  subroutine makeLogo
    real(dfp), dimension(:), allocatable :: x, y1, y2, y3

    x = linspace(0.0_dfp, 1.0_dfp, 100)
    y1 = x**2 - 1.0_dfp
    y2 = 2.0_dfp*x - 1.0_dfp
    y3 = x
    y3 = cos(2.0_dfp*PI*x)

    call figure()
    call subplot(1, 1, 1)
    call xylim(mixval(x), mixval([y1, y2, y3])*1.1_dfp)

    call plot(x, y1, lineColor='b', lineWidth=1.2_dfp)
    call plot(x, y2, lineColor='r', lineWidth=1.2_dfp)
    call plot(x, y3, lineColor='c', lineWidth=1.2_dfp)

    call ticks(lineWidth=1.2_dfp)
    call labels('', '', '')
  end subroutine makeLogo
```

```fortran
END PROGRAM main
```