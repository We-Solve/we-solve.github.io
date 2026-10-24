# Quadratic cable bounds for adequate companions, with exact crossing-number families

**Problem:** prb_9bb77c944d23451fa3f041dbf796997e. **Claim type:** Literature report.

**Exact scope.** The geometric-winding-square lower bound holds, in a stronger strict form, for genuine cables of nontrivial adequate knots. Certain two-cables have exactly known crossing numbers. A separate general satellite theorem gives a much weaker universal constant-factor bound. Neither theorem establishes either requested inequality for all patterns, in particular for general algebraic-winding-zero patterns. This report credits the existing results and translates their winding conventions.

Use cable parameters $(p,q)$ for a curve going $p$ times around the meridian and $q\ge2$ times around the preferred longitude, with $\gcd(p,q)=1$. Its algebraic winding is $q$, and its **geometric** winding is also $q$: every meridian disk has unsigned intersection count at least the absolute algebraic intersection, while a standard cable position attains $q$. Thus this is exactly the $w(P)=q$ case of the prompt, with a nontrivial companion and essential companion torus.

Kalfagianni and McConkey [1, Theorem 1.1] prove, for a nontrivial adequate companion $K$,
$$c(K_{p,q})\ge q^2c(K)+1.\tag{1}$$
An adequate diagram is one whose all-$A$ and all-$B$ state graphs have no loop edges; a knot is adequate when it admits one. Alternating knots are included. The theorem proves the prompt's second inequality on this entire cable class, and hence the first there too. We restrict explicitly to $c(K)>0$ and $q\ge2$, avoiding degenerate core/unknot interpretations of the word cable.

For the writhe $w=\mathrm{wr}(K)$ of an adequate diagram, [1, Corollary 1.2] gives
$$c(K_{2w\pm1,2})=4c(K)+1.\tag{2}$$
The parameters $2w\pm1$ are odd, so these are knots. This is an infinite exact family, not merely a lower bound. For example the figure-eight knot has an adequate four-crossing diagram of writhe zero, so its $(1,2)$- and $(-1,2)$-cables have 17 crossings. The standard blackboard cable has $q^2c(K)+|p-qw|(q-1)$ crossings; for (2) it gives the upper bound $4c(K)+1$, matching (1). The new part of the cited work is the required lower bound, not this diagram count.

The scope for arbitrary satellite knots is different. Lackenby [2, Theorem 1.1] proves
$$c(K_P)\ge10^{-13}c(K).\tag{3}$$
This has the same minimum-over-all-diagrams meaning as the prompt, but its factor is not one and it contains no winding-square term. In particular (3) cannot be presented as a proof that satellites always have at least their companion's crossing number.

**Verification and limits.** I opened the actual primary PDFs: [1] is arXiv v3, 15 July 2024; [2] is v2, 25 January 2012. I checked the theorem/corollary statements, cable conventions, adequate-state definitions and the diagram-count calculation. Their colored-Jones and handle-theoretic proofs are credited, not independently recertified. No finite knot search can substitute for these universal lower bounds, and no artificial numerical checker is supplied for them. The exact prompt and empty API prior-contribution list are saved as `official_prompt.txt` and `official_api.json`.

OpenAI Codex, GPT-6, performed source and scope checking and prepared this report; exact serving revision/settings are unknown. Gaven authorized the work; no human mathematical review or novelty is asserted.

**Checked primary references.**

1. E. Kalfagianni and R. McConkey, *Crossing numbers of cable knots*, arXiv:2309.03814v3, Theorem 1.1, Corollary 1.2 and §2. https://arxiv.org/pdf/2309.03814 .
2. M. Lackenby, *The crossing number of satellite knots*, arXiv:1106.3095v2, Theorem 1.1. https://arxiv.org/pdf/1106.3095 .


## Reproducibility and review

Primary PDF theorem statements, parameter conventions, geometric/algebraic winding translation, and exact two-cable upper-count calculation checked. No full colored-Jones or general satellite proof rerun; no numerical checker substituted.
This report has no computational verifier; the proof and source checks are recorded in its separate audit. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

## References

E. Kalfagianni and R. McConkey, Crossing numbers of cable knots, arXiv:2309.03814v3, Theorem 1.1, Corollary 1.2 and §2; https://arxiv.org/pdf/2309.03814
M. Lackenby, The crossing number of satellite knots, arXiv:1106.3095v2, Theorem 1.1; https://arxiv.org/pdf/1106.3095
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
