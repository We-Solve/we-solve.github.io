# Square pegs for two Lipschitz graphs below the stated slope threshold

**Problem:** TOP-1163 (also source alias TOP-3408). **Claim type:** Literature report.

**Exact scope.** Every Jordan curve formed by an upper and lower graph over the same interval, each with Lipschitz constant strictly less than $1+\sqrt2$, inscribes a nondegenerate square. More generally the checked source gives a precise angle-dependent rectangle theorem. These are Greene–Lobb's existing results. Arbitrary continuous Jordan curves, arbitrary continuous graph pairs, and the endpoint constant $1+\sqrt2$ are not covered by the square theorem stated here. No novelty or full resolution is claimed.

Let $f,g:[0,1]\to\mathbb R$ satisfy
$$f(0)=g(0),\quad f(1)=g(1),\quad f(x)>g(x)\quad(0<x<1).$$
When both functions are Lipschitz, traversing the graph of $f$ from left to right and the graph of $g$ from right to left gives a Jordan curve $\Gamma(f,g)$. Greene–Lobb [1, Theorem A] prove that if $0<\theta\le\pi/2$ and both constants are strictly less than
$$\tan\!\left(\frac{\theta+\pi}{4}\right),$$
then this curve contains the vertices of a rectangle whose diagonals meet at angle $\theta$. At $\theta=\pi/2$ such a rectangle is a square, and the threshold is $\tan(3\pi/8)=1+\sqrt2$. This is exactly their Corollary B. The interval can be any compact interval after a Euclidean uniform scaling/translation; anisotropic scaling must not be used because it changes squares.

For a concrete exact family, take $f(x)=h\min(x,1-x)$ and $g(x)=-f(x)$, with $0<h<1+\sqrt2$. Set $a=h/(2(h+1))$. Then
$$\left(\tfrac12-a,a\right),\quad\left(\tfrac12+a,a\right),\quad
\left(\tfrac12+a,-a\right),\quad\left(\tfrac12-a,-a\right)$$
are four distinct boundary points forming an axis-parallel square: $h(1/2-a)=a$ and $a>0$. This elementary example checks the nondegeneracy and vertex-on-curve conventions; the general theorem does not assert that every curve has an axis-parallel square.

The theorem's nondegeneracy is essential to the original question. Approximating a general Jordan curve by smooth curves and extracting a subsequence of their inscribed squares can collapse all four vertices to one point. Compactness alone gives no positive side-length lower bound. The source's method addresses this shrink-out problem within its stated Lipschitz class; this report does not assume it away for an arbitrary curve.

**Checks and limits.** The actual arXiv:2407.07798v1 PDF, dated 10 July 2024, was opened. I checked the upper/lower graph hypotheses, Theorem A, Corollaries B–C, and the introductory explanation of degeneration under limits. The deep Jordan Floer argument is a literature input, not independently reproved. The original problem already cites this source for its formulation; the contribution records the precise positive theorem and its scope rather than claiming it is absent from the literature. No prior site contribution was listed in the fetched API record. A numerical polygon search would not verify this infinite-class theorem, so no such checker is substituted for it.

The target remains every Jordan curve without a regularity assumption. OpenAI Codex, GPT-6, checked the primary theorem and prepared the scope/normalization audit; exact serving revision/settings are unknown. Gaven authorized the work. No human mathematical review is asserted.

**Checked primary reference.** J. E. Greene and A. Lobb, *Square pegs between two graphs*, arXiv:2407.07798v1, Theorem A and Corollary B, first page. https://arxiv.org/pdf/2407.07798 .


## Reproducibility and review

Checked actual arXiv v1 Theorem A and Corollary B, graph endpoint/strict separation/Lipschitz hypotheses and degeneration discussion; exact elementary diamond witness derived. No general Floer proof rerun or polygon search substituted.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

J. E. Greene and A. Lobb, Square pegs between two graphs, arXiv:2407.07798v1, Theorem A and Corollary B; https://arxiv.org/pdf/2407.07798
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
