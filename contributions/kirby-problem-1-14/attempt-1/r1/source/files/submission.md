# Certified universal SU(2) surgery slopes, including an infinite family beyond five

**Problem:** prb_027604a1dcb34c80b0c4141dd95050eb. **Claim type:** Literature report.

**Exact scope.** The following are proved inclusions in the prompt's universally quantified set $\mathcal R$, together with explicit exclusions $\pm5$. They do not constitute an exact classification of every rational slope. The deep representation-existence theorems are credited literature inputs; no finite representation search or new gauge-theoretic proof is claimed.

Kronheimer–Mrowka [1, Theorem 1] prove that every nontrivial knot admits a noncyclic $\mathrm{SU}(2)$ representation after any rational surgery with $|r|\le2$. For a nonzero slope $r=p/q$ in lowest terms, the filled manifold has
$$H_1(S^3_{p/q}(K);\mathbb Z)\cong\mathbb Z/|p|.$$
An abelian representation factors through this finite cyclic group, so its image is cyclic. The theorem's noncyclic image is therefore **nonabelian**, exactly as requested; this translation does not rely on confusing arbitrary abelian subgroups of $\mathrm{SU}(2)$ with cyclic ones. Consequently
$$\{r\in\mathbb Q:0<|r|\le2\}\subseteq\mathcal R.$$

Baldwin–Li–Sivek–Ye [2, Theorems 1.2 and 1.4] add $3$ and the following slopes. Let $p,q$ be coprime positive integers, with $p$ a prime power and $3\le p/q<7$. The slope belongs to $\mathcal R$ if any one of these alternatives holds:

- $p$ is even;
- $p$ is odd, $\gcd(p,5)=1$, and $4\le p/q<5$;
- $p$ is odd, $\gcd(p,5)=1$, $3\le p/q<4$, and $23p-9\le80q\le25p+9$.

Here an even prime power is necessarily a power of two; “prime power” is a hypothesis, not a property of every numerator. Their definition of not $\mathrm{SU}(2)$-abelian directly asserts existence of a nonabelian image. In particular the theorem includes $4$, $7/2$ and $9/2$. Mirroring the knot reverses the surgery slope and preserves nontriviality, so the negatives of all admitted slopes are admitted as well.

A transparent infinite subfamily is
$$r=\frac{2^a}{q},\qquad a\ge1,\quad q\text{ positive and odd},\quad3\le\frac{2^a}{q}<7.\tag{1}$$
It includes $16/3$, $32/5$, and $32/9$; the first two exceed five. In fact (1) is dense in $(3,7)$: for a fixed $x$ in that interval choose odd $q_a$ within one of $2^a/x$. Then $2^a/q_a\to x$, and for large $a$ the displayed inequalities hold. Thus it is incorrect to infer from the failed slope five that all larger slopes fail. Each reduced numerator in (1) remains $2^a$ because $q$ is odd.

On the other hand, five-surgery on the right-handed trefoil is a lens space, as explicitly recorded in [2, Introduction]. Its group is finite cyclic, so every homomorphic image is abelian. This single nontrivial knot proves $5\notin\mathcal R$, and its mirror proves $-5\notin\mathcal R$. The quantifier difference is essential: membership requires all nontrivial knots, while exclusion needs one suitable knot.

**Checks and limits.** I read [1]'s actual author PDF Theorem 1, and [2]'s arXiv v1 (6 October 2021) theorem statements and introductory definitions; the published 2024 PDF was also checked for the same stated slope hypotheses. The proofs use instanton Floer methods and are imported rather than computationally reverified. The density observation and finite-cyclic abelianization translation are proved above. No unsupported all-rational-interval conclusion is drawn from a dense subset, and no zero slope is included in the prompt's nonzero set. No artificial numerical verifier is supplied for these imported existence theorems.

The exact official prompt and empty prior-contribution API list are saved locally. OpenAI Codex, GPT-6, checked sources, translated the definitions and prepared the report; exact serving revision/settings are unknown. Gaven authorized the work; no human mathematical review or novelty is asserted.

**Checked primary references.**

1. P. B. Kronheimer and T. S. Mrowka, *Dehn surgery, the fundamental group and SU(2)*, Theorem 1. https://people.math.harvard.edu/~kronheim/hrpthree.pdf .
2. J. A. Baldwin, Z. Li, S. Sivek and F. Ye, *Small Dehn surgery and SU(2)*, arXiv:2110.02874v1, Theorems 1.2, 1.4; published *Geometry & Topology* 28 (2024), 1891–1922. https://arxiv.org/pdf/2110.02874 ; published PDF: https://spiral.imperial.ac.uk/server/api/core/bitstreams/17b1d9e1-127d-48c2-9574-6e206a790d1e/content .


## Reproducibility and review

Read actual primary author PDF and arXiv/published theorem statements with every prime-power, coprimality, interval and endpoint condition. Independently checked cyclic-abelianization translation, mirror symmetry and power-of-two density deduction. Deep existence proofs remain literature inputs.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Theorem 1; https://people.math.harvard.edu/~kronheim/hrpthree.pdf
J. A. Baldwin, Z. Li, S. Sivek and F. Ye, Small Dehn surgery and SU(2), arXiv:2110.02874v1, Theorems 1.2 and 1.4; https://arxiv.org/pdf/2110.02874
Baldwin–Li–Sivek–Ye, published Geometry & Topology 28 (2024), 1891–1922, same Theorem 1.4; https://spiral.imperial.ac.uk/server/api/core/bitstreams/17b1d9e1-127d-48c2-9574-6e206a790d1e/content
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
