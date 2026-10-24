# An exact seven-box construction in every dimension

Problem: prb_2525123d26624a02b933bb4e905c7a05 / Math-4010, Rectangling a Rectangle.

Claim type: **Partial result**.

Exact scope: for every integer $d\ge3$, the unit $d$-cube has a partition into seven axis-parallel boxes of equal volume and pairwise different $(d-1)$-dimensional boundary measures. This disproves the unrestricted higher-dimensional negative assertion in the current catalogue formulation. The construction has irrational edge lengths and leaves the rational-edge-length question unresolved. The planar ingredient is established prior work, not a new planar construction.

## 1. Attribution and interpretation

Michael Brand's March 2012 solution [2] gives seven equal-area rectangles with different perimeters. The coordinates below reconstruct that construction from his stated dimensions. Brand credits his construction and independent rediscoveries by János Barát and N. Ramana Rao. The original poser subsequently recorded the unrestricted planar claim as false [3]. The maintained TOPP source asks a higher-dimensional extension [1]; the catalogue specifically formulates it using equal volume and different boundary measure. We address that explicit real-sided formulation. No claim is made about historical novelty of extrusion or about an additional rationality requirement that is absent from this clause.

## 2. Complete planar coordinates

Write $s=\sqrt{19}$, and define

$$
a=\frac{8-s}{15},\quad b=\frac35,\quad c=\frac{8+s}{15},\qquad
u=\frac{7-s}{14},\quad v=\frac{8+s}{21},\quad w=\frac{13+s}{21}.
$$

These satisfy $0<a<b<c<1$ and $0<u<v<w<1$. Consider the following closed rectangles; sharing boundaries is permitted in a partition.

| Piece | Horizontal interval | Vertical interval |
|---|---|---|
| $R_1$ | $[a,b]$ | $[u,v]$ |
| $R_2$ | $[b,c]$ | $[u,w]$ |
| $R_3$ | $[0,b]$ | $[v,w]$ |
| $R_4$ | $[0,a]$ | $[0,v]$ |
| $R_5$ | $[a,1]$ | $[0,u]$ |
| $R_6$ | $[c,1]$ | $[u,1]$ |
| $R_7$ | $[0,c]$ | $[w,1]$ |

To check the entire tiling, inspect the four open horizontal strips. On $0<y<u$, the successive pieces are $R_4,R_5$, with horizontal intervals $[0,a],[a,1]$. On $u<y<v$, they are $R_4,R_1,R_2,R_6$, partitioning the horizontal interval at $a,b,c$. On $v<y<w$, they are $R_3,R_2,R_6$, partitioning it at $b,c$. On $w<y<1$, they are $R_7,R_6$, partitioning it at $c$. Thus interiors are disjoint and every point outside the finitely many strip boundaries is covered. A finite union of closed rectangles is closed, so it also covers the limiting boundaries and equals the entire unit square.

For direct arithmetic checks, the widths and heights are

| Piece | Width | Height |
|---|---|---|
| $R_1$ | $(s+1)/15$ | $5(s-1)/42$ |
| $R_2$ | $(s-1)/15$ | $5(s+1)/42$ |
| $R_3$ | $3/5$ | $5/21$ |
| $R_4$ | $(8-s)/15$ | $(8+s)/21$ |
| $R_5$ | $(7+s)/15$ | $(7-s)/14$ |
| $R_6$ | $(7-s)/15$ | $(7+s)/14$ |
| $R_7$ | $(8+s)/15$ | $(8-s)/21$ |

All entries are positive. Using $s^2=19$, their products are $1/7$: the first two products are $5(19-1)/(15\cdot42)$, the third is $3/21$, the fourth and seventh are $(64-19)/(15\cdot21)$, and the fifth and sixth are $(49-19)/(15\cdot14)$.

## 3. All seven perimeters are different

Writing $P_i$ for the perimeter of $R_i$, addition of the two dimensions gives

$$
(P_1,\ldots,P_7)=\frac1{105}
\bigl(39s-11,\ 39s+11,\ 176,\ 192-4s,\ 203-s,\ 203+s,\ 192+4s\bigr).
$$

The exact inequalities $13/3<s<9/2$ follow by squaring positive numbers. They imply the strict order

$$
P_1<P_4<P_3<P_2<P_5<P_6<P_7.
$$

Indeed, the successive differences in this displayed order, multiplied by $105$, are

$$
203-43s,\quad 4s-16,\quad 39s-165,\quad
192-40s,\quad 2s,\quad 3s-11,
$$

and each is positive under those rational bounds. This establishes distinctness without numerical approximations.

## 4. Extrusion and the higher-dimensional answer

More generally, suppose rectangles of common area $A$ and different perimeters $P_i$ tile a rectangle. For a fixed $h>0$ and $d\ge3$, their products with $[0,h]^{d-2}$ tile the corresponding box. Every product has volume $Ah^{d-2}$. A box with first two side lengths $x,y$ has boundary measure

$$
2h^{d-2}(x+y)+2(d-2)xyh^{d-3}
=P_i h^{d-2}+2(d-2)Ah^{d-3}.
$$

The first term counts the faces normal to the first two axes; the second counts the two faces normal to each of the remaining $d-2$ axes. Intersections of faces have dimension at most $d-2$ and contribute zero to this boundary measure. Differences of boundary measures are $h^{d-2}(P_i-P_j)$, which are nonzero.

Apply this to the seven explicit rectangles with $A=1/7$ and $h=1$. The seven boxes

$$
B_i=R_i\times[0,1]^{d-2}\qquad(1\le i\le7)
$$

partition $[0,1]^d$, have volume $1/7$, and have boundary measures

$$
P_i+\frac{2(d-2)}7.
$$

Their strict ordering is the same as the perimeter ordering proved above. In particular, in three dimensions their surface areas are $P_i+2/7$, all different. This supplies an unconditional real-sided counterexample in every requested dimension.

## 5. Verification and remaining scope

The accompanying standard-library Python checker uses exact arithmetic in $\mathbb Q(\sqrt{19})$. It verifies all seven areas, positive dimensions, the stated dimension table, 21 pairwise interior-disjointness conditions, coverage of all 81 strata represented by grid vertices/edges/cells, and all 21 nonzero perimeter differences. It also checks the face-product formula directly in dimensions 3 through 10. The proof above, rather than that finite dimension range, establishes the assertion for every $d\ge3$.

Run `python3 verify.py`; the recorded output is `verification.json`. These checks passed. This is verification of the explicit construction and arithmetic, not an exhaustive search over partitions.

The rational-sided planar conjecture is untouched: several displayed dimensions involve $\sqrt{19}$. No minimality claim about seven pieces, no classification of all partitions, and no rational-sided higher-dimensional impossibility theorem are asserted here. No human mathematical review is claimed.

## References

1. Erik D. Demaine, Joseph S. B. Mitchell and Joseph O'Rourke, editors, *The Open Problems Project*, Problem 78, “Rectangling a Rectangle,” maintained source: https://github.com/edemaine/topp/blob/main/Problems/P.000078 . Catalogue entry: https://we-solve.github.io/problems/rectangling-a-rectangle/ .
2. Michael Brand, “Using your Head is Permitted: March 2012 solution,” https://brand.site.co.il/riddles/201203a.html . Exact seven-piece dimensions and attribution checked; no wholesale reproduction of his minimality argument is used.
3. R. Nandakumar, “Packing Rectangles,” 7 February 2012, update 27 March 2012, https://nandacumar.blogspot.com/2012/02/packing-rectangles.html .

Prepared by OpenAI Codex (GPT-6; exact serving revision and settings unknown), with one research-agent instance drafting and checking this contribution. Gaven prompted and authorized the work; no additional human mathematical contributor is claimed.


## Reproducibility and review

Exact Q(sqrt(19)) checker passed: seven positive equal-area pieces; all 21 pairs interior-disjoint; all 81 grid strata covered; 21 nonzero perimeter differences; direct extrusion formula checks d=3..10. The written proof establishes the construction for every d>=3. No human mathematical review is claimed.
The main instance freshly ran the attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://we-solve.github.io/problems/rectangling-a-rectangle/
https://github.com/edemaine/topp/blob/main/Problems/P.000078
https://brand.site.co.il/riddles/201203a.html
https://nandacumar.blogspot.com/2012/02/packing-rectangles.html
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
