# The finite-projective-dimension obstruction to an Auslander–Reiten counterexample

**Problem:** prb_792089b4fae84db8b0db44c8b2118936

**Claim type:** Partial result

**Exact scope:** For every finite-dimensional algebra A and every finite-dimensional module M of finite projective dimension, vanishing of Ext_A^i(M,A) for all i>0 already forces M projective; equivalently, nonprojective finite projective dimension d forces Ext_A^d(M,A)≠0.

## The theorem

Let $A$ be a finite-dimensional algebra over an arbitrary field, and let $M$ be a finite-dimensional left module with $d=\mathrm{pd}_A M<\infty$. If $d>0$, then

$$\mathrm{Ext}_A^d(M,A)\ne0.$$

Consequently the simultaneous self-Ext and algebra-Ext vanishing in the prompt forces $M$ to be projective whenever $M$ has finite projective dimension. In this case the self-Ext hypothesis is unnecessary. This is a classical reduction, not a claimed solution for all modules or an assertion of novelty.

## Proof without a minimal-resolution assumption

Choose a resolution of minimal possible length $d$ by finitely generated projectives,

$$0\longrightarrow P_d\xrightarrow{u}P_{d-1}\longrightarrow\cdots\longrightarrow P_0\longrightarrow M\longrightarrow0.$$

Such a resolution exists because a finite-dimensional algebra is Noetherian, so kernels of maps between finite modules are finite, and the last projective syzygy can be chosen finite. The case $d=0$ is already projective. Suppose $d>0$ and $\mathrm{Ext}_A^d(M,A)=0$.

The module $P_d$ is a direct summand of a finite direct sum $A^r$. The functor $\mathrm{Ext}_A^d(M,-)$ respects finite direct sums and direct summands. Therefore

$$\mathrm{Ext}_A^d(M,P_d)=0.$$

Compute this group using the displayed projective resolution. Since there is no term past $P_d$, it is

$$\frac{\mathrm{Hom}_A(P_d,P_d)}{\{h\circ u:h\in\mathrm{Hom}_A(P_{d-1},P_d)\}}.$$

Vanishing means that the identity of $P_d$ has the form $h\circ u$. Thus $u$ is a split monomorphism and

$$P_{d-1}=u(P_d)\oplus Q$$

with $Q$ projective. The next differential kills $u(P_d)$, and its restriction to $Q$ has zero kernel: the kernel of the full next differential was exactly $u(P_d)$. Replacing the initial two terms of the resolution by $Q$ shortens it to length at most $d-1$. For $d=1$, the quotient $P_0/u(P_1)\simeq Q$ is $M$ itself and is projective. In all cases this contradicts the definition of $d$. Hence the asserted Ext group is nonzero.

This proof uses a finite direct sum of copies of the **left** regular module. It does not interchange $\mathrm{Ext}(M,A)$ with $\mathrm{Ext}(A,M)$, the latter vanishing automatically for projective $A$.

## Consequences with exact quantifiers

If $A$ has finite global dimension, every finite module has finite projective dimension, so the prompt has a positive answer for all its finite modules. If only $\mathrm{pd}M\le D$ is known, it is enough to require $\mathrm{Ext}_A^i(M,A)=0$ for $1\le i\le D$. No claim that a finite initial resolution detects infinite projective dimension is made.

The contrapositive is useful for examining a proposed counterexample: a nonprojective module satisfying the prompt's vanishing must have **infinite ordinary projective dimension**. Gorenstein-projective dimension is a different invariant and cannot replace it. For instance, over a self-injective algebra every module has vanishing positive Ext into $A$, although many modules are nonprojective and have infinite ordinary projective dimension. The argument above therefore cannot be extended merely by replacing finite projective dimension with self-injectivity of the algebra.

## Prior attempt and source status

The earlier revision reports a claimed nonprojective Gorenstein-projective example over a characteristic-two rational-function field. This contribution does not verify that example or the associated Lean scope claims. It establishes independently the necessary infinite-projective-dimension boundary that any such example must meet. Huneke and Leuschke's checked primary paper supplies the Auslander–Reiten formulation and historical context; the finite-projective-dimension lemma is proved in full above.

## References checked

- Craig Huneke and Graham J. Leuschke, On a conjecture of Auslander and Reiten, arXiv:math/0305001: https://arxiv.org/pdf/math/0305001
- Earlier revision inspected: https://we-solve.github.io/contributions/projectivity-from-simultaneous-self-ext-and-algebra-ext-vanishing/attempt-1/r1/


## Reproducibility and review

Proof only; no computational verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Craig Huneke and Graham J. Leuschke, On a conjecture of Auslander and Reiten, arXiv:math/0305001: https://arxiv.org/pdf/math/0305001
Earlier revision inspected: https://we-solve.github.io/contributions/projectivity-from-simultaneous-self-ext-and-algebra-ext-vanishing/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.
