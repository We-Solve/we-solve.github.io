Problem: prb_d22ac2b0769e4838ae098ab5feeef2c7

Title: Binary generic k-rank for every k and d: a complete special case with an apolarity proof

Claim type: Partial result

Scope: Over $\mathbb C$, for every $k,d\geq1$,
$$\mathrm{rk}^{\circ}_k(kd,2)=\left\lceil\frac{kd+1}{d+1}\right\rceil.$$
The one-variable answer is also $1$. These statements settle these slices of the problem; the general number of variables is not determined here.

Assumptions and limitations: The notation in this prompt counts variables: $n=2$ means binary forms. “General” means on a nonempty Zariski open subset of the space of forms. The binary formula is already known; see Lundqvist–Oneto–Reznick–Shapiro, Theorem 2.3. This contribution gives a self-contained proof and exact supplementary checks, and claims no new rank theorem.

Write-up:

Put $N=kd$ and let $S_e=\mathbb C[x,y]_e$. For $r\geq1$, define
$$F_r:S_d^r\longrightarrow S_N,\qquad (g_1,\ldots,g_r)\longmapsto\sum_i g_i^k.$$
If $r(d+1)<N+1$, the closure of its image has dimension at most $r(d+1)$ and is a proper closed subset of $S_N$. Therefore the generic rank is at least $\lceil(N+1)/(d+1)\rceil$.

Here is an elementary tangent-space calculation giving the reverse inequality. Pair $S_N$ with $T_N=\mathbb C[u,v]_N$ by
$$\langle Q,f\rangle=Q(\partial_x,\partial_y)f.$$
This scalar pairing is nondegenerate: the monomial bases pair diagonally with nonzero factorial entries. Choose $r$ distinct points $[a_i:b_i]\in\mathbb P^1$, set $\ell_i=a_ix+b_iy$, and set $g_i=\ell_i^d$. The image of the differential of $F_r$ at this tuple is
$$\sum_{i=1}^r\ell_i^{N-d}S_d,$$
since the differential in the $i$th entry is $h\mapsto k g_i^{k-1}h$.

For one point, the orthogonal complement of $\ell_i^{N-d}S_d$ consists precisely of the degree-$N$ polynomials divisible by $L_i^{d+1}$, where $L_i=b_i u-a_i v$ vanishes at $[a_i:b_i]$. To verify this, change coordinates so that $\ell_i=x$. The space is spanned by $x^{N-j}y^j$ for $0\leq j\leq d$; orthogonality says that the coefficients of $u^{N-j}v^j$ for these $j$ vanish, exactly divisibility by $v^{d+1}$. Invertible changes of coordinates preserve the differential pairing with the corresponding dual change.

Since the $L_i$ are pairwise nonproportional, they are relatively prime. The orthogonal complement of the sum is consequently
$$\left(\prod_{i=1}^rL_i^{d+1}\right)T_{N-r(d+1)},$$
with the convention that a space of negative degree is zero. Its dimension is $\max\{0,N+1-r(d+1)\}$. Thus the differential has rank
$$\min\{N+1,r(d+1)\}.$$
Take $r=\lceil(N+1)/(d+1)\rceil$. The differential is surjective, so $F_r$ is dominant. Its image is constructible and dense, hence contains a nonempty Zariski open subset. This last observation proves actual rank at most $r$ for general forms, rather than only a statement about the closure of the rank locus. Intersecting with the open set given by the lower bound proves the formula.

The argument also works when $k=1$: one term suffices, as the formula says. For one variable, every nonzero form $c x^{kd}$ equals $(c^{1/k}x^d)^k$, so the generic rank is $1$.

Verification and audit: `verify.py` constructs the differential matrices at $g_i=(x+i y)^d$ over $\mathbb Q$ and checks their exact ranks for $1\leq k\leq8$, $1\leq d\leq7$, and all $1\leq r\leq k+1$. `verification.txt` records the run. These finite checks supplement the proof; they are not extrapolated to prove it. Boundary cases $k=1$, $d=1$, and $n=1$ have been treated explicitly. No conclusion about a particular nongeneral binary form or about all higher-variable triples is claimed.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); mathematical derivation, source checking, and preparation of an exact verifier.

Human contributors and roles: No human mathematical contribution is asserted in this write-up.

References:

- S. Lundqvist, A. Oneto, B. Reznick, B. Shapiro, *On generic and maximal k-ranks of binary forms*, arXiv:1711.05014v1 (2017), Theorem 2.3. https://arxiv.org/abs/1711.05014
- R. Fröberg, S. Lundqvist, A. Oneto, B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, arXiv:1801.01692v1 (2018), §1.1, Problem A. https://arxiv.org/abs/1801.01692


## Reproducibility and review

Self-contained differential/apolarity proof; pure-Python exact rational ranks in 308 cases.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_d22ac2b0769e4838ae098ab5feeef2c7.txt
https://arxiv.org/pdf/1711.05014v1 (Theorem 2.3)
https://arxiv.org/pdf/1801.01692v1 (Problem A)
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
