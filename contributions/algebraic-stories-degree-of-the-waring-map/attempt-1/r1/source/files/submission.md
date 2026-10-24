Problem: prb_5820e761c4a945b98f4dddd07e7a331c

Title: The phase factor in the permutation-only Waring degree, and the complete d=1 family

Claim type: Partial result

Scope: For the literal permutation quotient in the official prompt, every perfect pair satisfies
$$\deg(\widetilde W_{k,d})=k^s C_{k,d},\qquad s=\frac{kd+1}{d+1},\quad C_{k,d}\in\mathbb N.$$
Here $C_{k,d}$ counts unordered decompositions into the actual polynomial summands $g_i^k$, identifying independent changes $g_i\mapsto\zeta_i g_i$ with $\zeta_i^k=1$. For $d=1$, all perfect pairs are $k=2s-1\geq3$, and
$$\boxed{\deg(\widetilde W_{k,1})=k^{(k+1)/2}.}$$
The corresponding degree after additionally identifying these phase changes is $C_{k,1}=1$. No formula for all $C_{k,d}$ with $d\geq2$ is claimed.

Assumptions and limitations: The base field is $\mathbb C$. Tuples are counted up to permutation only, exactly as specified in the prompt. The classical uniqueness theorem concerns summand powers and their coefficients; recovering the base forms introduces roots of unity. The source's degree-one discussion is consistent with that conventional identification of phases. This report keeps the two counting conventions separate and claims no new classical uniqueness theorem.

Write-up:

First, perfectness is equivalent to $(d+1)\mid(k-1)$, since $kd+1=k(d+1)-(k-1)$. Thus every perfect pair can be written uniquely as
$$k=j(d+1)+1,\qquad s=jd+1,\qquad j\geq1.$$
In particular, $d=1$ forces $k$ odd.

For completeness, the map is dominant and generically finite for these pairs. At a tuple $g_i=\ell_i^d$ with distinct binary linear forms $\ell_i$, its differential has image $\sum_i\ell_i^{kd-d}S_d$. Under the nondegenerate degree-$kd$ differential pairing with $\mathbb C[u,v]_{kd}$, its orthogonal complement consists of forms divisible by the product of the distinct dual linear factors, each to power $d+1$. This follows by taking $\ell_i=x$, where orthogonality to $x^{kd-d}S_d$ is exactly divisibility by $v^{d+1}$, and changing coordinates. The product has degree $s(d+1)=kd+1$, so the orthogonal complement is zero. Surjectivity of the differential proves dominance. Source and target have equal dimension $kd+1$, so the map is generically finite. In characteristic zero the generic fibres are reduced after restricting to an appropriate nonempty open subset.

A general form cannot be a sum of $s-1$ such powers: that locus has closure of dimension at most $(s-1)(d+1)<kd+1$. Consequently every minimal $s$-term decomposition in a general fibre has nonzero, pairwise nonproportional base forms. If two bases were proportional, their powers could be combined into one power (or cancel), reducing the length.

Fix one unordered decomposition into its polynomial summands $\{h_1,\ldots,h_s\}$, with $h_i=g_i^k$. Each equation $g_i^k=h_i$ has exactly $k$ solutions in $S_d$: after choosing one, the others differ by $k$th roots of unity, since the polynomial ring is an integral domain. The $h_i$ are distinct, so their $k^s$ choices give distinct unordered tuples of base forms. There are finitely many such unordered power decompositions in a general fibre, and their number is the positive integer $C_{k,d}$. This proves the stated factor. The ordered map correspondingly has degree $s!k^s C_{k,d}$.

We now prove $C_{k,1}=1$ without assuming a uniqueness theorem. Write $N=k=2s-1$, set $S_e=\mathbb C[x,y]_e$, $T_e=\mathbb C[u,v]_e$, and define the catalecticant
$$\mathcal C_f:T_s\longrightarrow S_{s-1},\qquad Q\longmapsto Q(\partial_x,\partial_y)f.$$
For a nonzero linear form $L=ax+by$,
$$Q(\partial)L^N=\frac{N!}{(N-s)!}\,Q(a,b)L^{s-1}.\tag{1}$$
Choose $s$ distinct projective points $[a_i:b_i]$, linear forms $L_i=a_ix+b_iy$, and nonzero coefficients $c_i$. For $f_0=\sum_i c_iL_i^N$, formula (1) factors $\mathcal C_{f_0}$ through evaluation of $Q$ at these points. Evaluation $T_s\to\mathbb C^s$ is surjective by interpolation, and the $s$ powers $L_i^{s-1}$ are independent by the Vandermonde determinant (choose coordinates making all points finite). Hence $\mathcal C_{f_0}$ has rank $s$, and its one-dimensional kernel is spanned by
$$Q_0=\prod_i(b_i u-a_i v),$$
which is squarefree. Rank $s$ and a squarefree kernel generator are nonempty Zariski open conditions, so both hold for general $f$.

Let such a general $f$ have kernel generator $Q$, and let $[a_i:b_i]$ be its $s$ distinct roots. We justify that these roots give a decomposition. The differential map
$$Q(\partial):S_N\longrightarrow S_{N-s}$$
is surjective: its dual under the differential pairings is multiplication by $Q$, which is injective. Therefore its kernel has dimension $s$. By (1), it contains the $s$ independent powers $L_i^N$, and hence is their span. Since $\mathcal C_f(Q)=0$, the form $f$ belongs to this span, so
$$f=\sum_i c_iL_i^N.$$
The coefficients are unique. None is zero, because otherwise the rank of $\mathcal C_f$ would be at most $s-1$ by (1).

Finally, in any other $s$-term decomposition, the product of the $s$ dual factors annihilates $f$. It must span the one-dimensional kernel of $\mathcal C_f$, so its roots are exactly the same $s$ points. The coefficients are then the same by linear independence. This proves unique unordered summand powers, $C_{k,1}=1$, and the claimed literal degree $k^s$.

For example, $(k,d)=(3,1)$ has $s=2$: its generic degree is $9$ for the permutation-only quotient, $18$ for the ordered map, and $1$ after quotienting both permutations and independent cube-root phases.

Verification and audit: `verify.py` checks exact catalecticant ranks and kernel polynomials for $s=2,\ldots,8$ using rational distinct points and weights, and enumerates the phase choices for $k=3,5,7$ as distinct tuples attached to distinct supports. It also checks the perfect-pair parameterization in finite ranges. `verification.txt` records the output. These are illustrative exact checks; the proof gives the infinite family and the phase factor. Zero terms, proportional terms, coefficients, generic finiteness, and both quotient conventions have been addressed. The remaining uncomputed quantities are $C_{k,d}$ for $d\geq2$.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); proof derivation, source and normalization checks, and exact verification.

Human contributors and roles: No human mathematical contribution is asserted in this write-up.

References:

- Official prompt, explicitly specifying the permutation quotient: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_5820e761c4a945b98f4dddd07e7a331c.txt
- R. Fröberg, S. Lundqvist, A. Oneto, B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, arXiv:1801.01692v1 (2018), §1.4, Definition 1.11, Lemma 1.12 and Problem E. https://arxiv.org/abs/1801.01692
- S. Lundqvist, A. Oneto, B. Reznick, B. Shapiro, *On generic and maximal k-ranks of binary forms*, arXiv:1711.05014v1 (2017), Theorem 2.3, for background on binary generic ranks. https://arxiv.org/abs/1711.05014


## Reproducibility and review

Self-contained finite-fibre phase count and squarefree-catalecticant uniqueness proof; exact rank/kernel certificates for s=2 through 8, formal phase enumeration, and 3160 perfect-pair checks.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_5820e761c4a945b98f4dddd07e7a331c.txt
https://arxiv.org/pdf/1801.01692v1 (Definition 1.11, Lemma 1.12, Problem E)
https://arxiv.org/pdf/1711.05014v1 (Theorem 2.3)
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
