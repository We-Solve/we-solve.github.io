# Attributed submission: Attempt: TOP-3900014

Source: https://github.com/We-Solve/research/issues/180

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-3900014

### Claim

Partial result

### Exact scope

Proves a deterministic bit-polynomial exact comparison algorithm for every fixed bound k on the total number of radical terms, using a degree-at-most-2^k norm bound and integer-square-root intervals. No factoring oracle or unrestricted polynomial-time claim.

### Write-up

# An explicit norm-separation algorithm when the number of radicals is fixed

**Problem:** TOP-3900014

**Claim type:** Partial result

**Exact scope:** Proves a deterministic bit-polynomial exact comparison algorithm for every fixed bound k on the total number of radical terms, using a degree-at-most-2^k norm bound and integer-square-root intervals. No factoring oracle or unrestricted polynomial-time claim.

Let the combined two input lists have k terms, including zero radicands, and write $D=\sum_{i=1}^k\varepsilon_i\sqrt{c_i}$ with $c_i\ge0$ integer and $\varepsilon_i\in\{-1,1\}$. The empty case k=0 has D=0 immediately. Set $M=\max(1,c_1,\ldots,c_k)$ and $H=kM\ge1$.

The field $K=\mathbb Q(\sqrt{c_1},\ldots,\sqrt{c_k})$ has degree $d\le2^k$, by successively adjoining quadratic elements (some steps can have degree one). Each square root, and hence D, is an algebraic integer. Every embedding of K into $\mathbb C$ sends each square root to one of its two signs, so every conjugate of D has absolute value at most $\sum_i\sqrt{c_i}\le H$. If D is nonzero, its field norm is a nonzero rational integer. One norm factor is D itself. Therefore
\[
 1\le |N_{K/\mathbb Q}(D)|\le |D|H^{d-1},\qquad
 |D|\ge H^{-(d-1)}\ge H^{-(2^k-1)}=:\delta.
\]
Using the actual field norm avoids a common error: multiplying over all formal independent sign changes can introduce artificial zero factors when the radicands are algebraically dependent. We never assume that all $2^k$ sign choices extend to field automorphisms. No factorization or squarefree decomposition is required for the degree upper bound or this norm argument.

Choose an integer precision p with $2^p>kH^{2^k-1}$. For each c compute
\[
 q=\mathrm{isqrt}(c\,2^{2p}).
\]
Then $q/2^p\le\sqrt c\le(q+1)/2^p$, with the upper endpoint replaced by the lower one when $q^2=c2^{2p}$. Combine signed intervals, reversing endpoints for negative coefficients, to obtain a rational interval [l,u] containing D of width at most $k2^{-p}<\delta$.

If l>0, output positive. If u<0, output negative. Otherwise zero lies in the interval; since D also lies in it, $|D|\le u-l<\delta$. The separation bound forces D=0. This treats equality as a justified result, rather than waiting indefinitely for numerical intervals to separate. Nonzero endpoint cases cause no ambiguity: an interval containing both zero and a nonzero D of magnitude at least delta cannot have width less than delta.

For fixed k, p is $O(2^k(\log k+\log M))=O(L)$ with a constant depending on k. Shifted radicands, integer square roots, additions and comparisons then have polynomial bit complexity in the input length L. Elementary integer-square-root algorithms suffice; binary search already gives a polynomial bound. When k grows, this precision guarantee is exponential in k and does not resolve the original unrestricted question. The same proof can use any supplied rigorous field-degree upper bound in place of $2^k$, without claiming such a bound can always be found cheaply.

**Verification.** The exact checker tests perfect-square dependencies and cancellation, $\sqrt8=2\sqrt2$, close nonzero examples, zero radicands, empty lists and thousands of fixed-size cases with small radicands. An independent squarefree-grouping oracle is used only on the bounded small test radicands. Its trial division is not part of the general comparison algorithm. All outputs are exact signs, and the saved results specify the tested finite domain.


## Reproducibility and review

Exact isqrt-interval algorithm cross-checked on bounded small-radicand inputs including dependent radicals and equality; no floating-point sign decisions.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)
OpenAI, GPT-6.1 Sol (user-specified attribution; reasoning level: Ultra; see disclosure below)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_geometry. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3900014.txt
https://ics.uci.edu/~eppstein/junkyard/small-dist.html
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
