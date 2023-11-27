# SetDisplayProfile

This routine sets the display settings.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
SUBROUTINE setDisplayProfile(DispProfile, advance, digmax, &
  & matsep, orient, sep, style, unit, zeroas)
  TYPE(DISP_SETTINGS), INTENT(IN) :: DispProfile
  CHARACTER(*), OPTIONAL, INTENT(IN) :: advance
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: digmax
  CHARACTER(*), OPTIONAL, INTENT(IN) :: matsep
  CHARACTER(*), OPTIONAL, INTENT(IN) :: orient
  CHARACTER(*), OPTIONAL, INTENT(IN) :: sep
  CHARACTER(*), OPTIONAL, INTENT(IN) :: style
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: unit
  CHARACTER(*), OPTIONAL, INTENT(IN) :: zeroas
END SUBROUTINE setDisplayProfile
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_SetDisplayProfile_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

#### DispProfile

DispProfile is an instance of DISP_SETTINGS. You can pass following predefined global variables for `DispProfile`:

1. DisplayProfileTerminal
2. DisplayProfilePrint

:::note DisplayProfileTerminal

- advance="YES"
- matsep=","
- orient="COL"
- style="UNDERLINE"
- trim="FALSE"
- ZEROAS="."
:::

:::note DisplayProfilePrint

- advance="YES"
- matsep=","
- orient="COL"
- style="UNDERLINE"
- trim="FALSE"
- ZEROAS=""
:::

#### advance

It can take following values:

1. "YES",  go to the next line.
2. "NO", stay on the same line.

#### digmax

Number of significant digits to show.

#### matsep

Character used for separating the elements of matrix.

#### orient

1. "ROW", display a vector as row.
2. "COL", display a vector as column.

#### sep

String used to separate matrix columns.

#### style

1. "LEFT", title is immediately to the left of the first line of the displayed item.
2. "ABOVE", title is centred immediately above the item
3. "PAD", title is centred above the item, padded with hyphens (-).
4. "UNDERLINE", title is centred above the item, underlined with hyphens.
5. "NUMBER", each matrix or vector row and / or column is numbered.

:::note
Any of the four title position styles can also be combined with the number style by specifying for
example STYLE = 'PAD & NUMBER'.
:::

:::info
Any character except space may be used instead of hyphen
by prefixing it to the style. STYLE = '*underline' will thus underline the title with asterisks.
:::

#### unit

Unit number of external file.

#### zeroas

String to display instead of zeros.
