# A corrected, fully certified rectangular-board nonuniqueness example

**Problem:** TOP-5500068, Rolling a Die over a Labeled Board.  
**Claim type:** Partial result.

**Exact scope.** A fully labeled $18\times13$ rectangle with a prescribed initial die orientation has at least two different legal rolling paths visiting every cell exactly once. The paths can also be closed into different Hamiltonian cycles, each restoring the entire initial orientation. The board derives from domotorp's 2012 construction [2], with one explicitly disclosed label correction. This refutes the uniqueness subquestion. It does not classify the unrestricted decision problem as polynomial-time solvable or NP-complete.

## 1. Conventions and the entire board

Rows are numbered 1 through 18 from top to bottom; columns 1 through 13 from left to right. Start at row 1, column 1. The die initially has

| Direction | Top | Bottom | North | South | East | West |
|---|---|---|---|---|---|---|
| Label | 3 | 4 | 1 | 6 | 5 | 2 |

North means toward the top of the displayed board. Opposite labels sum to seven, so this specifies a valid physical die, including its handedness. The initial top label agrees with the starting cell. Every displayed digit is a separate labeled cell; there are no free or blocked cells.

```text
3 2 2 1 5 6 5 1 2 6 5 1 2
1 1 3 4 5 3 4 1 4 6 3 1 4
4 5 5 1 5 6 2 5 4 2 3 5 4
6 6 4 6 3 1 4 6 3 1 4 6 6
3 2 4 5 4 2 5 6 2 2 4 5 3
1 1 1 5 6 6 3 6 3 1 1 1 1
4 5 3 2 3 5 3 2 3 5 3 2 4
6 6 6 6 6 5 1 2 6 6 6 6 6
3 2 4 5 3 2 4 5 3 2 4 5 3
1 2 6 5 1 2 6 5 1 2 6 5 1
4 4 4 4 4 5 3 2 4 4 4 4 4
6 5 1 2 1 5 1 2 1 5 1 2 6
3 3 3 5 4 4 1 4 1 3 3 3 3
1 2 6 5 6 2 5 4 2 2 6 5 1
4 4 6 4 1 3 6 4 1 3 6 4 4
6 5 5 3 5 4 2 5 6 2 1 5 6
3 3 1 6 5 1 6 3 6 4 1 3 6
1 2 2 3 5 4 5 3 2 4 5 3 2
```

The original diagram [2] has label 4 at **row 16, column 3**. Both reconstructed cycles require label 5 there. The displayed board uses 5. Every other label agrees with the source diagram. This correction is part of the present certificate and is not silently attributed to the original source.

## 2. Two explicit rolling words

Use E for one cell east, W west, N north, and S south. Each following word has 234 moves. The final move closes the cycle; deleting that last move gives the original problem's required path of 233 moves, visiting each of the 234 cells exactly once and never returning to the start.

Cycle A:

```text
ESSSENNNEEESWWSEEENNEEEEEESWWWWWSEEEEESSSSSSSSSSSSSWWWWWSEEEEESWWWWWWNNWWWSEESWWWNNNWSSSWNNNNNNNNESSSSEESEEEEEEEENNNNNWSSSSWNWSWWNENWWSSWNWWNNNESSENEEEESENNWWWWWNEEEEENNWSWWWWNWSSWNNNEENESSEENWNEESENESSSSENNNNNWWWWWWWWSWWSSSSWNNNNNNNN
```

Cycle B:

```text
ESSSENNNEEESWWSEEENNEEEEEESWWWWWSEEEEESSSSSSWNNNNNWWWWWWWWSWWSSSSENNNEENESSEENWNEESENESSSSWNNWSWWWWNWSSEEEEESWWWWWSSENEEEESENNESSSSWNWSWWNENWWSSWNWWNNNWSSSSEESEEEEEEEENNNNNESSSSSSWWWWWSEEEEESWWWWWWNNWWWSEESWWWNNNWSSSWNNNNNNNNNNNNNNNNN
```

Both words start at the same corner with the same initial physical orientation. Their undirected edge sets differ in 20 edges, so they are not merely two choices of traversal direction around one cycle. Deleting the final N from each gives two distinct legal paths with the same start and end cells.

## 3. An integer certificate proving every roll

Represent an orientation by $(t,b,n,s,e,w)$, its six spatial face labels. A quarter-turn in each direction gives the following exact permutation:

$$
\begin{array}{ll}
E:(w,e,n,s,t,b), & W:(e,w,n,s,b,t),\\
N:(s,n,t,b,e,w), & S:(n,s,b,t,e,w).
\end{array}
$$

For example, rolling east brings the old west face to the top and the old top face to the east. The other entries follow from the same rigid quarter-turn. This is a finite permutation computation with no numerical geometry or rounding.

The accompanying self-contained `verify.py` contains the displayed board, both words, and these four permutations. For each word it verifies all of the following:

1. Every move remains inside the rectangle and moves to the prescribed adjacent cell.
2. After every quarter-turn, the top face equals that cell's label.
3. Before the final closing roll, every cell is visited once and exactly 234 distinct cells have been visited.
4. The final move returns to the starting cell and restores all six spatial face labels.
5. The two undirected cycle edge sets are different.

All assertions passed. The resulting `verification.json` records 234 cells for each cycle, full orientation restoration, and symmetric edge difference 20. Running `python3 verify.py` reproduces the checks using standard-library integer operations alone. The executable certificate, rather than confidence in an illustrative diagram, proves validity of this particular corrected board.

The last move revisits the start only for the optional cycle certificate. It is omitted in the two paths claimed for the exact visit-once formulation. Thus a cyclic convention is not used to evade the original task.

## 4. Decision complexity: what follows and what does not

The decision problem is in NP for the explicit-board input model: a sequence of $N-1$ directions is a polynomial-size witness, and the same roll and visited-cell checks verify it in $O(N)$ time.

There is also a direct exact exponential algorithm. Index states by a visited subset $S$, current cell $v\in S$, and one of the 24 physical orientations $o$. The initial state has only the corner visited and the prescribed orientation. Extend a state to an unvisited neighboring cell precisely when the rolled top matches its label. The subset size strictly increases. Induction on it proves that the reachable states are exactly the legal partial paths. A full-subset state decides existence; retaining predecessor counts truncated at two detects nonuniqueness of complete paths. There are at most $24N2^N$ states and four transitions each.

A graph with only position and orientation, having at most $24N$ states, forgets which cells have already been visited. Breadth-first search in it is useful for a version permitting revisits, but does not solve the visit-once condition. The certificate above supplies an explicit nonuniqueness answer without making that incorrect polynomial-time inference.

## 5. Provenance and limitations

The TOPP source [1] records the fully labeled rectangular case and a possible uniqueness property. Domotorp posted the source construction on MathOverflow in February 2012 [2]. That post itself warns of possible mistakes. We reconstructed its board and drawn graph, extracted two spanning cycles, and found that both simulations agree with every source label except the single disclosed cell. After changing that cell, both full certificates pass. A different author later posted a larger draft counterexample; that manuscript is not needed or claimed independently checked here.

The mathematical contribution is a corrected, reproducible witness and a precise distinction between uniqueness and complexity. It is not a first-discovery claim for nonuniqueness, a claim that this is the smallest board, an enumeration of all solutions on this board, or a decision-complexity resolution. No human mathematical review is claimed.

## Checked references

1. The Open Problems Project, Problem 68, maintained original statement and status notes: https://github.com/edemaine/topp/blob/main/Problems/P.000068 . The exact official We-Solve prompt is preserved as `official_prompt.txt`.
2. domotorp, original answer to Joseph O'Rourke, “Die-rolling Hamiltonian cycles,” MathOverflow, answered 25 February 2012, construction updated 27 February 2012: https://mathoverflow.net/questions/87437/die-rolling-hamiltonian-cycles/89493 . The source diagram's 18 rows, 13 columns, and drawn edges were read directly.
3. Kevin Buchin, Maike Buchin, Erik D. Demaine, Martin L. Demaine, Dania El-Khechen, Sándor P. Fekete, Christian Knauer, André Schulz and Perouz Taslakian, *On Rolling Cube Puzzles*, author-hosted full version, https://people.csail.mit.edu/schulz/papers/RollingFull.pdf . Its state-graph discussion and distinction between free, blocked, and labeled cells were checked; its other variants' hardness results are not transferred to the present rectangle.

Prepared by OpenAI Codex (GPT-6; exact serving revision and settings unknown), agent /root/scout_new. Gaven prompted and authorized the work.



## Reproducibility and review

The standalone standard-library integer verifier passed all 234 quarter-turns for each explicit cycle, label matching, board bounds, one visit per cell before closure, restoration of all six face labels, and a 20-edge symmetric difference. Deleting each final roll gives exact catalogue paths. The source correction is row 16, column 3, from 4 to 5. No exhaustive decision-complexity classification, smallest-board claim, or human mathematical review is asserted.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: independent_verify.py


*Code is not included in this manuscript.*

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/edemaine/topp/blob/main/Problems/P.000068
https://mathoverflow.net/questions/87437/die-rolling-hamiltonian-cycles/89493
https://people.csail.mit.edu/schulz/papers/RollingFull.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
