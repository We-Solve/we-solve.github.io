# Jones slopes of adequate knots with orientable essential witnesses

**Problem:** TOP-2685

**Claim type:** Literature report

**Exact scope:** For every knot admitting an adequate diagram D, the prompt’s two Jones limits are −2c_−(D) and 2c_+(D), and each is realized by an orientable essential surface in its exterior.

## The theorem in the normalization of the question

A diagram is A-adequate when no edge of its all-A state graph is a loop, and B-adequate is defined with the all-B state. Adequate means both. Write $c_+,c_-$ for its numbers of positive and negative crossings. Futer, Kalfagianni and Purcell prove that

$$\lim_{n\to\infty}\frac{4d_-(n)}{n^2}=-2c_-,\qquad
\lim_{n\to\infty}\frac{4d_+(n)}{n^2}=2c_+.$$

Both limits are boundary slopes. Thus for a nontrivial adequate knot the cluster-point set in the prompt is exactly the two distinct integers $\{-2c_-,2c_+\}$. Distinctness follows from $c_++c_->0$. Adequate knots include all knots with reduced alternating diagrams, so this is an infinite diagrammatically recognizable class with arbitrary crossing number.

The source explicitly uses the reduced normalization $J_n^{\mathrm{red}}(U;q)=1$, whereas the prompt is unreduced. They are related by

$$J_n^{\mathrm{unred}}(K;q)=[n]_qJ_n^{\mathrm{red}}(K;q),\qquad [n]_q=\frac{q^{n/2}-q^{-n/2}}{q^{1/2}-q^{-1/2}}.$$

The quantum dimension has highest degree $(n-1)/2$ and lowest degree $-(n-1)/2$. Its two extremal coefficients are nonzero, so multiplication gives the exact shifts $d_+^{\mathrm{unred}}=d_+^{\mathrm{red}}+(n-1)/2$ and $d_-^{\mathrm{unred}}=d_-^{\mathrm{red}}-(n-1)/2$. Dividing those linear shifts by $n^2$ makes them vanish. Hence the source’s two quadratic limits are exactly those in the unreduced prompt. A framing change can add a quadratic term and is not harmless: zero framing is retained.

## State surfaces and the orientability requirement

The all-A surface is obtained by filling each state circle with a disk and attaching the crossing bands. Its boundary, pushed to the exterior boundary torus, has slope $-2c_-$. The all-B construction has slope $2c_+$. The essentiality statement is Theorem 3 of the source, credited there to Ozawa, together with Lemma 5 for the slopes and Lemma 6 for the quadratic degree terms. These are substantial imported results, not consequences of the loop-free graph condition alone proved here.

A state surface may be nonorientable, while the literal question demands an orientable witness. Ozawa’s original theorem supplies the precise version needed. In §2 of arXiv:math/0609166v6, he defines the interpolating surface $\widetilde F=F\widetilde\times\partial I$, the horizontal frontier of a regular interval-bundle neighborhood, and notes that it is orientable. He explicitly states that a state surface is $\pi_1$-essential if and only if its interpolating surface is essential; his essentiality includes incompressibility, boundary incompressibility and exclusion of boundary parallelism. Theorem 2.8 proves $\pi_1$-essentiality for a state that is both adequate and homogeneous. The all-A and all-B states have constant state signs, so the homogeneity condition holds automatically, and adequacy is our diagram hypothesis.

Use this orientable interpolating surface for a nonorientable state surface. Each of its boundary components is a parallel copy of the core surface’s boundary, so its primitive slope is unchanged. For an orientable state surface the interpolating surface is two parallel copies; either component supplies the witness. This deduction invokes Ozawa’s explicit two-sided essentiality statement, rather than assuming that a disk for the frontier simply projects to an embedded disk for a one-sided core.

Consequently the essential witnesses satisfy the orientable convention of the prompt. Changing from one boundary component to two does not change the slope $p/q$, which describes each primitive essential boundary curve, not the total homology sum of all boundary components.

## What has and has not been deduced

The coefficient sequences have actual limits here. It is therefore unnecessary to guess which subsequences produce cluster points or to infer convergence from finitely many colors. The conclusion follows from the degree formulas for every color and the essential-surface theorem. No computational extrapolation is used.

For a diagram adequate on just one side, the corresponding one-sided conclusion still holds, but the other degree limit need not be given by these crossing counts. For knots with no adequate diagram, this report makes no general Jones-slope assertion. It also does not prove that every boundary slope must appear as a Jones slope, a converse not requested by the question.

## Checked references

- David Futer, Efstratia Kalfagianni and Jessica S. Purcell, Slopes and colored Jones polynomials of adequate knots, arXiv:1002.0256v2, Theorems1/3 and Lemmas5/6; published Proc.AMS139(5) (2011): https://arxiv.org/pdf/1002.0256

- Makoto Ozawa, Essential state surfaces for knots and links, arXiv:math/0609166v6 (17 November2010), §2 interpolating surfaces and Theorem2.8: https://arxiv.org/pdf/math/0609166


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no prior attempts listed; reduced-to-unreduced degree shifts verified exactly; Ozawa v6 interpolating-surface equivalence and Theorem2.8 checked directly. No program or formal verification claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

David Futer, Efstratia Kalfagianni and Jessica S. Purcell, Slopes and colored Jones polynomials of adequate knots, arXiv:1002.0256v2, Theorems1/3 and Lemmas5/6; published Proc.AMS139(5) (2011): https://arxiv.org/pdf/1002.0256
Makoto Ozawa, Essential state surfaces for knots and links, arXiv:math/0609166v6 (17 November2010), §2 interpolating surfaces and Theorem2.8: https://arxiv.org/pdf/math/0609166
Exact source versions, statements and uses are described in report.md and source_notes.md.
