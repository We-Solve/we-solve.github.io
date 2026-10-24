# The large-n orchard formula, and an exact small exception

**Problem:** TOP-1382. **Claim type:** Literature report.

**Exact scope.** Green and Tao's Theorem 1.3 and Proposition 2.6 give
$$T_3(n)=\left\lfloor\frac{n(n-3)}6\right\rfloor+1$$
for all sufficiently large $n$. Their theorem allows lines with four or more selected points, matching the literal prompt. No explicit threshold for “sufficiently large” is supplied here. We also give a self-contained proof of $T_3(7)=6$, which shows why the large-n formula cannot be asserted at every size. The general small-n determination is not claimed solved.

Write $N_j(P)$ for the number of lines containing exactly $j$ selected points, $j\ge2$. Counting pairs of distinct points by their unique joining line gives
$$\sum_{j\ge2}\binom j2N_j(P)=\binom n2.$$
Higher-multiplicity lines are included in this identity. Omitting them in an upper-bound proof would change the question. In the primary paper, Theorem 1.3 explicitly bounds lines containing **precisely three** points and Section 9 proves the bound without assuming general position or excluding larger lines. Proposition 2.6 supplies cubic-curve examples attaining it.

The combinatorial count behind the cubic construction is especially transparent. In a cyclic group $\mathbb Z/n\mathbb Z$, count unordered triples of distinct elements with sum zero. There are $n^2$ ordered zero-sum triples in total. For each equality event $a=b$, $a=c$ or $b=c$, there are $n$ solutions. The intersection of any two equality events is $a=b=c$ with $3a=0$, and there are $g=\gcd(n,3)$ of these. Inclusion–exclusion gives
$$\#\{(a,b,c):a+b+c=0,\ a,b,c\text{ distinct}\}=n^2-3n+2g.$$
Division by six yields
$$\frac{n^2-3n+2\gcd(n,3)}6
=\left\lfloor\frac{n(n-3)}6\right\rfloor+1.$$
The residue classes modulo six verify the last identity directly.

The geometric step is credited to the primary cubic-curve construction: a finite cyclic subgroup of nonsingular points on an appropriate real cubic has collinearity given by zero sum, and no line meets that irreducible cubic in four distinct points. A projective coordinate change can place a finite configuration entirely in the affine plane: choose a line missing all its points as the new line at infinity. Collinearity and exact line multiplicities are preserved. The attached cyclic-group computation checks the arithmetic, not the existence or uniformization of the real cubic group.

Here is the separate small-case proof. A noncollinear finite planar set has an ordinary line, meaning exactly two selected points. For completeness, choose a selected point $p$ and a line through at least two selected points, not through $p$, for which their positive perpendicular distance $h$ is minimal. If that line had at least three selected points, two of them, $a,b$, could be chosen on the same closed side of the perpendicular foot, with $a$ between the foot and $b$. Then
$$\mathrm{dist}(a,pb)=h\frac{|ab|}{|pb|}<h,$$
because $|ab|\le|b-\text{foot}|<|pb|$. This contradicts minimality. Thus the chosen line is ordinary. This is a standard elementary proof of the Sylvester–Gallai theorem, not a new result.

For seven noncollinear points, the pair identity and $N_2\ge1$ give
$$3N_3\le\binom72-1=20,\qquad N_3\le6.$$
If all seven points are collinear, then $N_3=0$, so the same upper bound holds. To attain six, take
$$P=\{(0,0),(6,0),(0,6),(3,0),(3,3),(0,3),(2,2)\}.$$
The three triangle sides and its three medians each contain exactly three selected points. The checker enumerates every pair-defined line, normalizes its integer equation, and verifies that these are exactly the six three-point lines. Therefore $T_3(7)=6$. The large-n expression would give $5$ at $n=7$, so that expression must retain its large-n qualification. The same seven-point construction is described in the cited source and is credited accordingly.

Run `python3 verify.py`. It exhaustively compares zero-sum triple counts with the formula for $1\le n\le100$, checks all exact line incidences of the seven-point example, and checks the pair identity. All arithmetic is integral and `-O` is refused. No massive computation underlying the Green–Tao structure theorem is represented as rerun.

**References checked:** [official prompt](https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1382.txt); B. Green and T. Tao, [On sets defining few ordinary lines, arXiv:1208.4714v3](https://arxiv.org/pdf/1208.4714), Theorems 1.1 and 1.3, Proposition 2.6, and Section 9's treatment of higher-multiplicity lines. Their deep structure theorem is a credited input; this is not a complete independent verification of its proof. No prior contribution was listed in the checked canonical record.

Prepared by OpenAI Codex, GPT-6, `/root/scout_new`; exact serving revision/settings unknown. Roles: source reading, scope comparison, elementary proof exposition and exact checks. The user requested preparation. No human review, formal verification, novelty or editorial acceptance is claimed.


## Reproducibility and review

Cyclic distinct zero-sum triple count enumerated for n1..100 and matched closed formula. Exact7-point configuration has six3-point lines and three ordinary lines; pair identity21 verified. Universal small-case upper proof supplied; Green–Tao deep large-n theorem not reproved. Python -O refusal tested; SPDX Apache-2.0.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1382.txt
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/api/v1/problems/TOP-1382.json
https://arxiv.org/pdf/1208.4714
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
