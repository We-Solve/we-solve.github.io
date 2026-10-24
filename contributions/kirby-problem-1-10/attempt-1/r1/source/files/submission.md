# Unstabilized Property R: the knot case and two-component links containing an unknot

**Problem:** TOP-2669. **Claim type:** Literature report.

**Exact scope.** The recorded handleslide conclusion is established for $n=1$, and for $n=2$ whenever at least one component of the original link is an unknot. These are genuine unstabilized conclusions: no extra surgery component is added. The full arbitrary-component conjecture is not established here, nor is every link with the right first homology presumed to satisfy it. No novelty is claimed.

Gabai's Property R theorem says that a knot in $S^3$ with zero surgery $S^1\times S^2$ is the unknot. This is precisely the $n=1$ instance, where there is no second component to slide over. Scharlemann and Thompson [1, Theorem 1.1] state the theorem with exactly these hypotheses and credit Gabai; I checked that statement rather than independently reproducing Gabai's sutured-manifold proof.

More substantially, [1, Proposition 3.2] proves that the unknot has Property 2R: if a two-component framed link containing an unknot has surgery $\#_2(S^1\times S^2)$, handleslides reduce it to the zero-framed unlink. Their proof explicitly translates passages across the dual knot after surgery into slides over the original unknot. Thus the moves match the prompt's allowed isotopies and handleslides; the result is not merely a four-manifold equivalence after stabilization. No requirement that the second component be unknotted or that the original link already be split is imposed.

There is also an elementary necessary calculation useful for all $n$. Let $Q$ be the integral symmetric surgery linking matrix: the diagonal entries are framings and the off-diagonal entries are pairwise linking numbers. Abelianizing the filled link exterior gives
$$H_1(S^3_Q(L);\mathbb Z)\cong\mathrm{coker}(Q:\mathbb Z^n\to\mathbb Z^n).$$
The target has first homology $\mathbb Z^n$. Tensoring with $\mathbb Q$ forces $\mathrm{rank}_{\mathbb Q}Q=0$, hence $Q=0$. This verifies that all framings and pairwise linking numbers must vanish. It does not turn that condition into a sufficient criterion for the surgery manifold or for handleslide reduction.

The matrix transformation for a framed handleslide is an integral congruence $Q\mapsto E^TQE$, with $E$ elementary and unimodular. It preserves $Q=0$ and the number of components. Accordingly, a homology calculation alone cannot distinguish the conjectural reductions once the required surgery hypothesis is met. The essential two-component theorem above is geometric, and its handleslides cannot be replaced with arbitrary matrix row operations.

**Checks and limits.** The actual Scharlemann–Thompson author PDF was opened and its definitions, Theorem 1.1, Proposition 3.2 and proof were read. Its later minimal-genus theorem is not silently promoted to a claim that all fibered components have Property 2R. The report imports the named theorems; it does not certify a general handleslide algorithm or reprove the underlying gauge/sutured results. A numerical checker would not verify these geometric conclusions, so none is supplied. The exact prompt and empty prior-contribution API record are saved locally.

OpenAI Codex, GPT-6, checked the source, quantifiers and surgery-matrix argument; exact serving revision/settings are unknown. Gaven authorized the work. No human mathematical review is asserted.

**Checked primary reference.** M. Scharlemann and A. Thompson, *Fibered knots and Property 2R*, author manuscript, Theorem 1.1 and Proposition 3.2 (printed p. 7). https://web.math.ucsb.edu/~mgscharl/papers/PropR(Abby).pdf . Also indexed as arXiv:0901.2319. Gabai's original 1987 full proof is credited through this explicitly stated theorem, not listed as separately read.


## Reproducibility and review

Read actual primary author manuscript definitions, Theorem 1.1 and Proposition 3.2 with proof. Checked move category and the exact surgery homology calculation. No claimed general handleslide algorithm or independent full sutured-manifold proof.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

M. Scharlemann and A. Thompson, Fibered knots and Property 2R, author manuscript, Theorem 1.1 and Proposition 3.2; https://web.math.ucsb.edu/~mgscharl/papers/PropR(Abby).pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
