# Attributed submission: Attempt: TOP-1219

Source: https://github.com/We-Solve/research/issues/146

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1219

### Claim

Partial result

### Exact scope

Proves the bound for every centrally symmetric body satisfying the prompt, with the stronger volume bound 2^n, and constructs the standard simplex family attaining (n+1)^n/n! in every dimension. Does not prove the nonsymmetric general inequality or equality classification.

### Write-up

# Ehrhart’s inequality for symmetric bodies and a sharp lattice-simplex family

**Problem:** TOP-1219

**Claim type:** Partial result

**Exact scope:** Proves the bound for every centrally symmetric body satisfying the prompt, with the stronger volume bound 2^n, and constructs the standard simplex family attaining (n+1)^n/n! in every dimension. Does not prove the nonsymmetric general inequality or equality classification.

Translate the unique interior lattice point to zero. Suppose K is centrally symmetric about that point. We first prove the stronger bound $|K|\le2^n$.

We need only the following elementary lattice pigeonhole principle. If a measurable bounded set E has volume greater than one, two distinct points of E differ by a nonzero integer vector. Indeed, on the fundamental cube $[0,1)^n$, integrate the integer-valued function $N(t)=\sum_{z\in\mathbb Z^n}1_E(t+z)$. Its integral is $|E|>1$. Thus N(t)≥2 for some t, providing the two distinct translates. Boundary choices have no effect on the integral.

If $|K|>2^n$, choose $0<\alpha<1$ with $|\alpha K|>2^n$ and put $E=\frac12\alpha K$. Its volume exceeds one. The principle supplies x,y∈E with $x-y$ a nonzero integer vector. Symmetry and convexity imply $E-E=\alpha K$: if $x=\alpha a/2$ and $y=\alpha b/2$, then $(a-b)/2\in K$; the converse follows by choosing $a=-b$. Since 0 is interior, $\alpha K\subset\mathrm{int}K$ for $\alpha<1$. We have found a nonzero interior lattice point, contrary to the hypothesis. This proves the stronger volume bound without requiring lattice vertices or a polytope.

The arithmetic-geometric mean inequality applied to $1,\ldots,n$ gives $n!\le((n+1)/2)^n$, so
\[
 2^n\le\frac{(n+1)^n}{n!}.
\]
For n≥2 the inequality is strict. Thus the proposed Ehrhart constant holds throughout the symmetric subclass and cannot be sharp there in those dimensions. The barycenter condition is automatic from central symmetry about zero.

To verify sharpness of the conjectured constant over the full class, let $\Delta_n=\{x_i\ge0,\ \sum_i x_i\le1\}$ and
\[
 K_n=(n+1)\Delta_n-\boldsymbol1.
\]
Its vertices are $-\boldsymbol1$ and $(n+1)e_i-\boldsymbol1$, i=1,…,n. Their sum is zero, so their average—and therefore the barycenter of the simplex—is zero. An interior integer point x must have every $x_i>-1$, hence every $x_i\ge0$, and must satisfy $\sum_i x_i<1$, hence $\sum_i x_i=0$. It follows that x=0, which is indeed interior. Finally $|K_n|=(n+1)^n/n!$ by the determinant formula for a simplex. Therefore every dimension has an explicit admissible equality example.

Integer translations and unimodular linear maps preserve the lattice, volume and uniqueness condition; barycenters transform affinely. This gives the corresponding translated and unimodularly transformed equality examples. Arbitrary real invertible maps are not asserted to preserve the standard lattice.

**Verification and unresolved part.** The exact checker evaluates the vertex determinants, barycenters and inequality constants through dimension eight and enumerates all possible interior lattice points in the bounded box for dimensions up to five. The symbolic arguments prove both subclasses in every dimension. These equality examples do not establish a classification of all equality bodies, and the symmetric pigeonhole argument does not apply when K is nonsymmetric.


## Reproducibility and review

Exact simplex determinants and barycenters through n=8; bounded-box interior lattice enumeration through n=5; all-dimensional proofs explicit.

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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1219.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
