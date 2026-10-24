# Attributed submission: Attempt: TOP-1107

Source: https://github.com/We-Solve/research/issues/90

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1107

### Claim

Literature report

### Exact scope

Known Casas-Alvero conclusion for every characteristic-zero field in degrees p^k and 2p^k, plus degrees1,2; explicit distinction from positive-characteristic Hasse counterexamples.

### Write-up

# Known Casas–Alvero degrees over arbitrary characteristic-zero fields

Problem: TOP-1107. Claim type: Literature report.

The official conclusion holds for every characteristic-zero field $K$ when the degree is $d=p^k$ or $d=2p^k$, with $p$ prime and $k\ge1$; degrees one and two are included separately. This is the theorem of Graf von Bothmer, Labs, Schicho and van de Woestijne, not a new result. Their checked arXiv:math/0605090v2 states the theorem on printed pp. 2 and 4–5.

The source uses Hasse derivatives $D^{[j]}$, with
$$D^{[j]}(X^i)=\binom ijX^{i-j}.$$
In characteristic zero, $f^{(j)}=j!D^{[j]}f$, so its common-factor condition equals the official ordinary-derivative condition. Its Propositions 2.2, 2.5 and 2.6 establish the theorem via empty characteristic-$p$ fibers of a proper weighted-projective resultant scheme. In particular, the lifting step is geometric; it is not an assumption that arbitrary characteristic-zero coefficients can simply be reduced modulo $p$.

To check the last phrase of the official conclusion, apply the theorem over an algebraic closure to $f/c$. If it is $(X-a)^d$, comparison of the $X^{d-1}$ coefficient gives
$$a=-\frac{[X^{d-1}]f}{dc}\in K.$$
Thus the root lies in the original field, even when $K$ is not algebraically closed. For $d=1$ the condition is empty and every linear polynomial already has the required form. Conversely, for any $d$, the polynomial $c(X-a)^d$ has a common nonconstant factor with every derivative of order less than $d$ in characteristic zero.

The characteristic restriction cannot be dropped, even after using Hasse derivatives. For any prime $p$, set
$$g=X^{p+1}-X^p=X^p(X-1)\in\mathbb F_p[X].$$
It has two distinct roots. For $1\le j<p$, $D^{[j]}g$ is divisible by $X$ or is zero; for $j=p$, it is $X-1$. Hence every required gcd has positive degree, but $g$ is not a power of a single linear polynomial. This is also the source's Proposition 3.1. Zero derivatives are allowed: $\gcd(g,0)=g$.

`verify.py` checks the displayed Hasse counterexamples for all eleven primes up to 31 by exact polynomial gcds, giving 160 derivative checks. It also checks 6,044 binomial congruences for prime powers up to 2,000 in the selected ranges. These checks support the finite algebraic identities; they do not replace the properness argument or prove additional degrees. Output is `verification.json`.

No claim is made here to classify all remaining degrees or to resolve the full conjecture. The official API lists no earlier contribution for this canonical problem or its checked aliases.

Reference: Hans-Christian Graf von Bothmer, Oliver Labs, Josef Schicho and Christiaan van de Woestijne, [*The Casas-Alvero conjecture for infinitely many degrees*, arXiv:math/0605090v2, 25 June 2007](https://arxiv.org/pdf/math/0605090v2), theorem and Propositions 2.2, 2.5, 2.6 and 3.1. The full seven-page primary paper was read.

Models and roles: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown), source audit, field-descent check and exact verifier. No human mathematical review was performed.


## Reproducibility and review

Full seven-page primary paper read; field descent checked. Exact verifier passes 6,044 binomial congruences and 160 Hasse common-factor checks for eleven primes<=31; geometric lifting is cited, not computationally verified.
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
The authoring instance for this report is /root/twoquad_audit — OpenAI Codex, GPT-6; exact serving revision and reasoning configuration unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the fifty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://arxiv.org/pdf/math/0605090v2
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
