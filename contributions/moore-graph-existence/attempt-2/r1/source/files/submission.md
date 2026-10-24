# A 400-coclique would force a 2-(400,8,1) design and exact block equations

Problem: TOP-1413

Claim type: Partial result.

Exact scope: Necessary spectral and independent-set constraints for a hypothetical (3250,57,0,1) Moore graph; conditional equivalence between a 400-vertex independent set and a design plus a 49-regular graph satisfying explicit equations. No existence or nonexistence conclusion.

## Spectral starting point and the 400 bound

Let A be the adjacency matrix of a putative graph in the prompt and J the all-ones matrix. Counting common neighbors gives A²=56I−A+J and A1=57·1. Since the graph has diameter two it is connected, so the 57-eigenspace is the span of 1. On its perpendicular space the only eigenvalues are 7 and −8. Their multiplicities f,g satisfy f+g=3249 and 57+7f−8g=0, hence f=1729 and g=1520.

Let S be an independent set of size a>0, x its indicator vector, and y=x−(a/3250)1. Then xᵀAx=0 and

\[
y^TAy=-57a^2/3250,\qquad y^Ty=a-a^2/3250.
\]

All eigenvalues on 1⊥ are at least −8. Thus −57a²/3250≥−8(a−a²/3250), which rearranges to a≤400. This is the Hoffman ratio bound here, with every constant derived explicitly.

## Equality forces a design, not just a large set

If a=400, equality in the spectral inequality forces Ay=−8y. Therefore Ax=8·1−8x. Every vertex outside S has exactly eight neighbors in S, and every vertex in S has its usual 57 neighbors outside. Every pair of distinct vertices of S has exactly one common neighbor, all of them outside S. Consequently the 2850 outside vertices define blocks of size eight on the 400 points of S, each point in 57 blocks, each pair in exactly one block: a 2-(400,8,1) design. Blocks cannot repeat since distinct repeated blocks would make one pair occur twice.

Let B be its 400×2850 incidence matrix, and D the adjacency matrix on the outside vertices. That induced graph is 49-regular. The block form of A and the matrix equation give

\[
A=\begin{pmatrix}0&B\\B^T&D\end{pmatrix},\quad
BB^T=56I+J,\quad BD=J-B,\quad
D^2=56I-D+J-B^TB.
\]

The rectangular J in the middle equation has the appropriate 400×2850 dimensions. All matrices in the last equation have order 2850. In particular adjacent outside vertices have disjoint design blocks, since a common point of S would make a triangle. The equation BD=J−B says that for every outside vertex v and every point s not in its block, exactly one neighbor of v has a block containing s; for s in its block, no neighbor does.

## A conditional converse suitable for certificate checking

Conversely, suppose a 2-(400,8,1) design and a simple 49-regular graph D on its 2850 blocks satisfy the last two equations. Each point has replication 399/7=57, so B has row sum 57 and column sum eight, and BBᵀ=56I+J. The displayed block matrix A is then a simple 57-regular adjacency matrix satisfying A²=56I−A+J. Off-diagonal entries show adjacent pairs have zero common neighbors and nonadjacent pairs exactly one. Thus it is a Moore graph of the prescribed parameters, with S independent. This equivalence applies **conditional on an independent set of size 400**. The bound α≤400 does not prove such a set exists; a Moore graph with smaller independence number would not be excluded by a failed design search.

The prior archive already computed the feasible spectrum and a rooted permutation-block formulation. The added content here is the Hoffman equality analysis, the forced design, and the exact converse for that equality regime. These are classical-type spectral deductions, not claimed new constraints in the historical literature.

## Verification and remaining question

The exact program checks the integer multiplicities and rational Hoffman bound, then tests all analogous block equations on the Petersen graph with a maximum independent set of four. There the blocks form the 2-(4,2,1) design and the outside graph is a perfect matching. It also reconstructs the full Petersen adjacency matrix and checks every common-neighbor count. This tests the equations on a genuine equality example without fabricating a degree-57 certificate.

## Attribution and limits

These are credited classical results, elementary deductions, or explicit reports of the stated literature theorem. No historical novelty or resolution outside the exact scope is claimed. The proof and checks below do not independently audit any other general-solution announcement in the archive.

## Checked references

- Official TOP-1413 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1413.txt
- V. Faber and J. Keegan, Existence of a Moore graph of degree 57 is still open, arXiv:2210.09577v6 (27 February 2023): https://arxiv.org/abs/2210.09577
- A survey on the missing Moore graph, Linear Algebra and its Applications (2019), primary publisher record: https://www.sciencedirect.com/science/article/pii/S0024379519300138


## Reproducibility and review

Exact standard-library verifier completed with status PASS; see verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Official TOP-1413 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1413.txt
V. Faber and J. Keegan, Existence of a Moore graph of degree 57 is still open, arXiv:2210.09577v6 (27 February 2023): https://arxiv.org/abs/2210.09577
A survey on the missing Moore graph, Linear Algebra and its Applications (2019), primary publisher record: https://www.sciencedirect.com/science/article/pii/S0024379519300138
Exact source versions, statements and uses are described in report.md and source_notes.md.
