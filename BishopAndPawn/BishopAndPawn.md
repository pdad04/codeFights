Given the positions of a white `bishop` and a black `pawn` on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

![Chess Board](bishop.jpg)

**Example**

- For `bishop = "a1" and pawn = "c3"`, the output should be
`bishopAndPawn(bishop, pawn) = true`.

![Example](ex1.jpg)

- For `bishop = "h1" `and `pawn = "h3"`, the output should be
`bishopAndPawn(bishop, pawn) = false`.

![Example](ex2.jpg)

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] string bishop**

    Coordinates of the white bishop in the chess notation.

- **[input] string pawn**

    Coordinates of the black pawn in the same notation.

- **[output] boolean**

    - `true` if the bishop can capture the pawn, `false` otherwise.