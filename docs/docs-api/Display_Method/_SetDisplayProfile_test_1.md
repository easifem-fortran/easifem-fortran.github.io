This example shows the use of [SetDisplayProfile](./SetDisplayProfile.md) method.

```fortran
program main
use easifemBase
implicit none

REAL( DFP ) :: Amat(4,4)

CALL RANDOM_NUMBER(Amat)

CALL Display(Amat, "Default display, Amat=")

CALL SetDisplayProfile(DisplayProfileTerminal)
CALL Display(Amat, "DisplayProfileTerminal, Amat=")


CALL BlankLines(nol=2)
CALL SetDisplayProfile( &
& DispProfile=DisplayProfileTerminal, &
& style="LEFT")
CALL Display(Amat, "style=LEFT, Amat=")


CALL BlankLines(nol=2)
CALL SetDisplayProfile( &
& DispProfile=DisplayProfileTerminal, &
& style="ABOVE")
CALL Display(Amat, "style=Above, Amat=")


CALL BlankLines(nol=2)
CALL SetDisplayProfile( &
& DispProfile=DisplayProfileTerminal, &
& style="PAD")
CALL Display(Amat, "style=PAD, Amat=")


CALL BlankLines(nol=2)
CALL SetDisplayProfile( &
& DispProfile=DisplayProfileTerminal, &
& style="UNDERLINE")
CALL Display(Amat, "style=UNDERLINE, Amat=")


end program main
```

## results

```txt
        Default display, Amat=        
--------------------------------------
0.473240  0.794931  0.302510  0.015565
0.616153  0.537996  0.672348  0.040016
0.814727  0.157292  0.483702  0.836481
0.405293  0.527994  0.218889  0.681952

     DisplayProfileTerminal, Amat=    
--------------------------------------
0.473240  0.794931  0.302510  0.015565
0.616153  0.537996  0.672348  0.040016
0.814727  0.157292  0.483702  0.836481
0.405293  0.527994  0.218889  0.681952
 
 
style=LEFT, Amat=0.473240  0.794931  0.302510  0.015565
                 0.616153  0.537996  0.672348  0.040016
                 0.814727  0.157292  0.483702  0.836481
                 0.405293  0.527994  0.218889  0.681952
 
 
          style=Above, Amat=          
0.473240  0.794931  0.302510  0.015565
0.616153  0.537996  0.672348  0.040016
0.814727  0.157292  0.483702  0.836481
0.405293  0.527994  0.218889  0.681952
 
 
-----------style=PAD, Amat=-----------
0.473240  0.794931  0.302510  0.015565
0.616153  0.537996  0.672348  0.040016
0.814727  0.157292  0.483702  0.836481
0.405293  0.527994  0.218889  0.681952
 
 
        style=UNDERLINE, Amat=        
--------------------------------------
0.473240  0.794931  0.302510  0.015565
0.616153  0.537996  0.672348  0.040016
0.814727  0.157292  0.483702  0.836481
0.405293  0.527994  0.218889  0.681952
```
