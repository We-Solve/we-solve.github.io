Problem: prb_aa767da3d6614d31931cefaf98fe2d83 — Counting Polyominoes

Title: A common growth constant for all three conventions, with a checked 2026 upper-bound certificate

Claim type: Partial result

Scope: A self-contained proof that fixed, one-sided and free polyominoes have the same finite exponential growth constant; exact small-order enumeration with symmetry handled correctly; and a literature update with an exact arithmetic replay of the certificate in Bui's May 2026 preprint. These are established methods and credited results, with no novelty claim. The exact growth constant and sharp subexponential asymptotics are not determined.

Assumptions and limitations: Polyominoes are edge-connected sets of lattice cells and may have holes. Numerical certificate verification does not independently prove the geometric neighborhood inequalities in Bui's paper. The latter remain an explicitly cited input. The 2026 result is identified as a preprint, without a claim of peer review or an exhaustive search for subsequent improvements.

Write-up:

Let $t_n,c_n,f_n$ denote the fixed, one-sided and free counts in the prompt. For every $n\ge1$,
$$
\frac{t_n}{4}\le c_n\le t_n,\qquad
\frac{t_n}{8}\le f_n\le t_n.
$$
The factors bound the sizes of rotation and dihedral orbits; they are not exact divisors in general. We prove
$$
\lim_{n\to\infty}t_n^{1/n}
=\lim_{n\to\infty}c_n^{1/n}
=\lim_{n\to\infty}f_n^{1/n}
=\lambda,
\qquad 2\le\lambda\le16.
$$
The elementary bounds here establish existence. Much sharper numerical bounds are discussed below.

First, $t_{m+n}\ge t_mt_n$. Given representatives $P,Q$ of orders $m,n$, put $P$ to the left of $Q$, in consecutive disjoint blocks of columns. Align the lowest cell of $P$'s rightmost column with the highest cell of $Q$'s leftmost column. The two distinguished cells then share an edge. They are the only pair of cells sharing an edge across the dividing line: the former column has no occupied position below the aligned row, and the latter has none above it. Thus the union is a polyomino of order $m+n$.

This construction is injective on ordered pairs of translation classes. A connected polyomino occupies every column between its leftmost and rightmost columns. Consequently, column-prefix cell counts strictly increase. Given the union and $m$, there is at most one vertical cut with exactly $m$ cells to its left. Our construction has that cut, so it recovers the two input translation classes. Holes do not affect this argument.

For an exponential upper bound, root each polyomino at its lexicographically least cell and run deterministic depth-first search of its edge graph, using a fixed order of the four compass directions. The spanning-tree traversal is a word of length $2(n-1)$ in four directions. Its visited lattice positions reconstruct the polyomino up to translation. Hence
$$t_n\le4^{2(n-1)}=16^{n-1}.$$
Conversely, every word of length $n-1$ in north and east gives a distinct monotone path of $n$ cells. The cell at rank $j$ is the unique cell with coordinate sum $j$ after placing the initial cell at $(0,0)$, so the word is recoverable. Thus $t_n\ge2^{n-1}$.

Set $a_n=\log t_n$. The concatenation inequality makes $a_n$ superadditive, while $0\le a_n\le(n-1)\log16$. For completeness, fix $m$, write $n=qm+r$ with $0\le r<m$, and iterate superadditivity. If $r=0$ then $a_n\ge qa_m$; otherwise $a_n\ge qa_m+a_r\ge qa_m$. Therefore $\liminf a_n/n\ge a_m/m$ for every $m$. Since $a_n/n$ is always at most its supremum, the limit exists and equals $\sup_m a_m/m$. Exponentiation proves existence and
$$\lambda=\sup_{m\ge1}t_m^{1/m}.$$
The orbit-size inequalities and the squeeze theorem prove the same root limit for $c_n$ and $f_n$. In particular, $\log t_n/n\to\log\lambda$ describes exponential growth; it does not imply $t_n\sim n^\lambda$, convergence of consecutive ratios, or a specific power-law correction. This is the classical supermultiplicativity/Fekete approach, attributed to Klarner in the cited literature.

The attached verifier generates every fixed polyomino up to order 9 by adding a neighboring cell and normalizing translations. Completeness follows because every connected graph on at least two vertices has a spanning tree with a leaf; deleting that leaf cell leaves a connected smaller polyomino. It then independently forms rotation and dihedral orbits and checks Burnside's sums.

| $n$ | $t_n$ | $c_n$ | $f_n$ |
|---:|---:|---:|---:|
| 1 | 1 | 1 | 1 |
| 2 | 2 | 1 | 1 |
| 3 | 6 | 2 | 2 |
| 4 | 19 | 7 | 5 |
| 5 | 63 | 18 | 12 |
| 6 | 216 | 60 | 35 |
| 7 | 760 | 196 | 108 |
| 8 | 2725 | 704 | 369 |
| 9 | 9910 | 2500 | 1285 |

These finite counts check conventions and implementation; they do not determine $\lambda$.

The maintained TOPP entry still displays the older upper bound $4.5685$. Barequet and Shalah's published work improves this to $4.5252$. Bui's **arXiv:2511.00461v2, dated 6 May 2026**, states the further upper bound $\lambda\le4.5238$ in Theorem 2. Its Section 4 supplies a positive rational supersolution for 17 generating-function inequalities at $\zeta=1/4.5238$. The attached verifier uses exact fractions to recompute every residual of those displayed inequalities and confirms all 17 are nonnegative. This checks the numerical certificate exactly, rather than relying on floating-point rounding. The deduction from neighborhood counts to the inequalities is credited to Bui; it has not been independently rederived here.

For the lower side, Barequet, Rote and Shalah's 2016 paper explains a certified bound $4.00253176$ after accounting for floating-point error in their large transfer-matrix computation (page 95, “Validity and Certification”). In particular, their published result gives the safely rounded strict lower bound $\lambda>4.0025$. That large computation is not rerun here. Combining their result with Bui's stated preprint theorem yields the literature interval
$$4.0025<\lambda\le4.5238,$$
with the preprint status of the upper endpoint retained. Neither endpoint is asserted to be the exact answer.

Models used: OpenAI Codex, GPT-6; exact serving revision and settings unknown. Roles: proof exposition, source reading, exact Python checker, and self-audit. No Lean proof or formal verification is claimed.

Human contributors and roles: The user requested the work. No human mathematical review is claimed. The named researchers receive credit for the literature results.

References:

1. [Official We-Solve prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_aa767da3d6614d31931cefaf98fe2d83.txt), and [TOPP Problem 37](https://topp.openproblem.net/p37), checked 18 October 2026.
2. Vuong Bui, [A convolutional approach to bounding the number of polyominoes](https://arxiv.org/html/2511.00461v2), arXiv:2511.00461v2, 6 May 2026. Introduction, Section 4, Theorem 2 and its explicit rational certificate checked. Preprint status retained.
3. Gill Barequet and Mira Shalah, [Improved Upper Bounds on Growth Constants of Polyominoes and Polycubes](https://arxiv.org/pdf/1906.11447), published in Algorithmica 84 (2022), 3559–3586. The stated planar bound is $4.5252$.
4. Gill Barequet, Günter Rote and Mira Shalah, [λ > 4: An Improved Lower Bound on the Growth Constant of Polyominoes](https://geometry.stanford.edu/lgl_2024/papers/brs-lg4iubgcp-16/brs-lg4iubgcp-16.pdf), Communications of the ACM 59(7) (2016), 88–95, DOI 10.1145/2851485. Certified lower-bound discussion on page 95 checked. [Author's primary publication page](https://page.mi.fu-berlin.de/rote/Papers/abstract/Lambda-4).


## Reproducibility and review

Complete n<=9 enumeration, 18 Burnside checks, 784 concatenation input pairs and 17 exact Fraction residuals. Neighborhood inequalities remain a cited Bui input; source's large lower-bound computation not rerun.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_aa767da3d6614d31931cefaf98fe2d83.txt
https://topp.openproblem.net/p37
https://arxiv.org/html/2511.00461v2
https://arxiv.org/pdf/1906.11447
https://geometry.stanford.edu/lgl_2024/papers/brs-lg4iubgcp-16/brs-lg4iubgcp-16.pdf
https://page.mi.fu-berlin.de/rote/Papers/abstract/Lambda-4
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
