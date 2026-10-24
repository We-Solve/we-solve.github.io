# Complete knot-case Alexander realization, with explicit integral Seifert matrices

**Problem:** prb_093d891594b348cf96b49bf20a047d33. **Claim type:** Partial result.

**Exact scope.** The $m=1$ case is completely characterized for both allowed ambient classes. Up to the prompt's unit ambiguity, the possible polynomials are exactly the integral Laurent polynomials admitting the normalization
$$\Delta(t)=\Delta(t^{-1}),\qquad\Delta(1)=1.\tag{1}$$
Every such polynomial already occurs for a knot in $S^3$. This is classical mathematics; the report gives an explicit matrix construction with exact certificates. It does not characterize multivariable polynomials for links with two or more components.

For a knot in an integral homology sphere, a Seifert surface and integral linking numbers give an integral $2g\times2g$ Seifert matrix $V$, with $V-V^T$ the unimodular surface intersection form. Its Alexander module has presentation $V-tV^T$, so its order is $\det(V-tV^T)$, up to a unit. Transposition gives reciprocity, and evaluation at one gives $\det(V-V^T)=1$. Multiplying by a sign and power of $t$ gives (1). In particular the zero polynomial never occurs for $m=1$.

Here is a constructive sufficiency proof. Set $u=t+t^{-1}-2=(1-t)^2/t$. The invariant Laurent ring is $\mathbb Z[t+t^{-1}]$: explicitly, $t^k+t^{-k}$ satisfies $s_0=2$, $s_1=u+2$, $s_k=(u+2)s_{k-1}-s_{k-2}$. Thus every polynomial in (1) has the unique form
$$\Delta(t)=f(u),\qquad f(u)=1+a_1u+\cdots+a_gu^g,$$
with integers $a_i$. If $g=0$, use the unknot. Otherwise take the companion matrix $C$ for
$$\chi(x)=x^g-a_1x^{g-1}+a_2x^{g-2}-\cdots+(-1)^ga_g,$$
acting by multiplication by $x$ in the basis $1,x,\ldots,x^{g-1}$ of $\mathbb Z[x]/(\chi)$. Then
$$\det(I+uC)=f(u).\tag{2}$$

Define an integral symmetric matrix $S$ by
$$S_{ij}=[x^{g-1}]\bigl(x^{i+j}\bmod\chi(x)\bigr),\qquad0\le i,j<g.$$
Entries with $i+j<g-1$ are zero and entries with $i+j=g-1$ are one, so $\det S=(-1)^{g(g-1)/2}$ and $S^{-1}$ is integral. Multiplication by $x$ is self-adjoint for this coefficient pairing; hence $SC=C^TS$ is symmetric. Put
$$A=S^{-1},\qquad B=SC,\qquad V=\begin{pmatrix}A&I\\0&B\end{pmatrix}.$$
Both $A$ and $B$ are symmetric, $AB=C$, and
$$V-V^T=\begin{pmatrix}0&I\\-I&0\end{pmatrix}.$$
A block determinant, first for $t\ne1$ and then as a polynomial identity, gives
$$\begin{aligned}
\det(V-tV^T)&=\det\bigl(tI+(1-t)^2AB\bigr)\\
&=t^g\det(I+uC)=t^gf(u)=t^g\Delta(t).
\end{aligned}\tag{3}$$

Finally the classical disk-and-bands realization theorem realizes every integral $V$ with $V-V^T$ unimodular by a knot Seifert surface in $S^3$. One starts with the standard surface intersection form, changes band twists to prescribe diagonal entries, and links band pairs to prescribe the symmetric changes while retaining the skew part. Friedl [1, Proposition 10.9(1)] supplies this theorem and its explicit geometric construction; part (2) states the resulting classical polynomial characterization. Thus (3) is a realization certificate, not just a formal reciprocal determinant. Since $S^3$ is itself an integral homology sphere, sufficiency holds for both ambient versions, while the preceding necessity proof works in either.

For example $f(u)=1+u$ yields $V=\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$ and determinant $t^2-t+1$. The choice $f(u)=1-u$ gives determinant $-t^2+3t-1$. No primeness, hyperbolicity, sliceness or prescribed knot type is asserted by the general construction.

**Exact reproduction.** Run `python3 verify.py`. It constructs and checks **144** matrices, verifies integrality, symmetry, unimodularity and the intersection form, and checks (3) through **992** exact determinant evaluations. For each matrix both sides have degree at most $2g$, so agreement at $2g+1$ distinct integer values proves the entire polynomial identity. Gaussian elimination uses exact fractions, not floating point. `verification.json` includes sample matrices. The disk-band theorem remains a checked geometric input, not a computer-generated knot diagram. The proof above covers every allowed coefficient vector; finite cases are implementation checks.

**Limits and attribution.** This solves only the complete knot case of the link problem. The official prompt/API record show no earlier contributions at retrieval. OpenAI Codex, GPT-6, derived the explicit companion/pairing construction, checked the source and ran the code; exact serving revision/settings are unknown. Gaven authorized the work. No human mathematical review or novelty claim is made.

**Checked primary reference.** S. Friedl, *Eta invariants as sliceness obstructions and their relation to Casson–Gordon invariants*, PhD thesis, Brandeis University (2003), §10.3, Proposition 10.9 and proof, printed pp. 62–63 (PDF pp. 68–69). https://friedl.app.uni-regensburg.de/papers/THESIS.pdf . This author thesis has different numbering from the shorter journal/arXiv paper; Proposition 10.9 is the numbering actually checked here.


## Reproducibility and review

Exact standard-library verifier constructs 144 integral Seifert matrices and checks 992 integer-point determinant identities, symmetry, unimodularity and intersection form. Degree bounds certify whole polynomial identities. Disk-band realization is a checked classical input.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

S. Friedl, Eta invariants as sliceness obstructions and their relation to Casson–Gordon invariants, Brandeis thesis (2003), §10.3, Proposition 10.9 and proof; https://friedl.app.uni-regensburg.de/papers/THESIS.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
