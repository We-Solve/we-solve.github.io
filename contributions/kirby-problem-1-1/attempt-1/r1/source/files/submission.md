# Attributed submission: Attempt: TOP-2660

Source: https://github.com/We-Solve/research/issues/98

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-2660

### Claim

Partial result

### Exact scope

Complete crossing-number additivity for finite sums of alternating knots, with explicit bracket-span proof and exact torus-knot certificates; credited general 1/152 lower bound. Unrestricted additivity not established.

### Write-up

# Crossing-number additivity for alternating summands, and the general 152 bound

**Problem:** TOP-2660. **Claim type:** Partial result.

**Exact scope.** Crossing number is additive for any finite connected sum of alternating knots. For arbitrary knots, the credited universal lower bound is the sum of the summand crossing numbers divided by 152. Neither statement establishes unrestricted additivity. These are established results, with a self-contained bracket-span argument for the alternating case and exact finite algebraic certificates; no novelty is claimed.

Let $V_K$ be the Jones polynomial and let $s(K)$ be its exponent span in its usual variable. The writhe normalization of the Kauffman bracket only multiplies by a monomial. Consequently
$$s(K)=\tfrac14\mathrm{span}_A\langle D\rangle.$$
We recall the bracket argument to specify why this supplies a lower bound for every competing diagram, including nonalternating ones.

For a connected diagram $D$ with $c$ crossings, let $v_A,v_B$ be the numbers of circles in its all-$A$ and all-$B$ smoothings. The state expansion is
$$\langle D\rangle=\sum_{S} A^{a(S)-b(S)}(-A^2-A^{-2})^{|S|-1}.$$
Changing one smoothing changes the circle count by one. Thus the maximal possible exponent is at most $c+2v_A-2$, and the minimal one is at least $-c-2v_B+2$. Moreover $v_A+v_B\le c+2$: the surface obtained by capping the two complete smoothings and joining them by one saddle at each crossing is connected and closed, with Euler characteristic $v_A+v_B-c\le2$. Therefore
$$\mathrm{span}_A\langle D\rangle\le4c,\qquad s(K)\le c(K).\tag{1}$$

For a reduced alternating diagram, its checkerboard faces give $v_A+v_B=c+2$, and both state graphs have no loop edges. In particular, switching the first smoothing away from all-$A$ merges two distinct circles and loses four from the top possible exponent. Later switches cannot recover that loss. The all-$A$ state therefore contributes the unique top term with coefficient $\pm1$. The all-$B$ argument gives the unique bottom term. Hence equality holds in (1), and
$$s(K)=c(K)\quad\text{for an alternating knot}.\tag{2}$$
Here reduced means no nugatory crossing; every alternating knot admits such a diagram by removing nugatory crossings. The bracket invariant and these state conventions are classical; [1] explains the bracket construction. The preceding extreme-state argument is included explicitly rather than inferred from a knot table.

The bracket of a connected sum is the product of the two brackets: in every pair of states the circle numbers add and then decrease by one. Writhe also adds, so $V_{K\#L}=V_KV_L$. Spans of nonzero Laurent polynomials add, because their extreme coefficients multiply without cancellation. For alternating $K,L$, every diagram of their sum thus has at least
$$s(K\#L)=s(K)+s(L)=c(K)+c(L)$$
crossings. Joining diagrams gives the reverse bound. Induction proves the finite-summand assertion, including the unknot as a zero-crossing summand.

For arbitrary knots Lackenby's primary paper [2, Theorem 1.1] proves
$$\frac{c(K_1)+\cdots+c(K_m)}{152}\le c(K_1\#\cdots\#K_m)\le c(K_1)+\cdots+c(K_m).$$
This is a uniform quantitative partial result, not the proposed factor-one lower bound. The long normal-surface argument for it is a literature input, not independently reproduced here.

**Exact checks.** Run `python3 verify.py`. In the two-strand Temperley–Lieb algebra it multiplies $B=AI+A^{-1}e$, using $e^2=(-A^2-A^{-2})e$, and closes the braid by $\mathrm{tr}(I)=-A^2-A^{-2}$, $\mathrm{tr}(e)=1$. It checks the inverse-crossing identity, the one-crossing unknot normalization, bracket spans for 25 knots $T(2,m)$ with odd $3\le m\le51$, and 625 ordered connected-sum pairs, also with the second factor mirrored. Results in `verification.json` are exact integer Laurent-polynomial certificates. They test this family, not all alternating diagrams. The universal proof is above.

**Limits and attribution.** The exact official prompt and empty prior-contribution API record are saved locally. OpenAI Codex, GPT-6, checked sources, prepared the exposition and ran the verifier; exact serving revision/settings are unknown. Gaven authorized the work. No human mathematical review or new theorem priority is asserted.

**Checked primary references.**

1. L. H. Kauffman, *Knots*, author-hosted exposition, bracket/Jones construction: https://homepages.math.uic.edu/~kauffman/Tots/Knots .
2. M. Lackenby, *The crossing number of composite knots*, arXiv:0805.4706v2, Theorem 1.1; *Journal of Topology* 2 (2009), 747–768. https://arxiv.org/pdf/0805.4706 .


## Reproducibility and review

Exact integer Laurent-polynomial TL2 verifier passes 25 torus-knot span certificates, 625 ordered connected-sum pairs and 625 mirrored pairs; inverse-crossing and one-crossing normalization checked. General alternating proof is in report.md; the 152 bound remains a credited theorem.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, wrote the independent TOP-54 interpolation checker, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the number-theory reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the algebra reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the topology reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the algorithms and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the geometry reports; participated in separate LLM review.
The authoring instance for this report is /root/psi_audit — OpenAI Codex, GPT-6; exact serving revision/settings unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

L. H. Kauffman, Knots, bracket/Jones exposition; https://homepages.math.uic.edu/~kauffman/Tots/Knots
M. Lackenby, The crossing number of composite knots, arXiv:0805.4706v2, Theorem 1.1; https://arxiv.org/pdf/0805.4706
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
