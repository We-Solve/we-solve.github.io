# Attributed submission: Attempt: TOP-20

Source: https://github.com/We-Solve/research/issues/82

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-20

### Claim

Partial result

### Exact scope

Every finite abelian group is realized as Gal(L/Q) by a cyclotomic fixed-field construction, with an elementary auxiliary-prime proof; the arbitrary finite-group problem is not settled.

### Write-up

# Every finite abelian group as an explicit cyclotomic quotient

Problem: TOP-20. Claim type: Partial result.

Every finite abelian group occurs as $\mathrm{Gal}(L/\mathbb Q)$ for a finite Galois extension $L/\mathbb Q$. The proof below constructs $L$ as a fixed field inside one cyclotomic field. This is a classical special case, presented with an elementary auxiliary-prime argument; it is not a solution for arbitrary finite groups.

Write the prescribed group as $A\simeq\prod_{i=1}^r C_{n_i}$, omitting factors of order one. The empty product is realized by $L=\mathbb Q$. We first justify that we can select distinct primes $q_i$ with $n_i\mid q_i-1$, without invoking Dirichlet's theorem.

For any integer $n>1$ and finite set of primes $S$, let $a\ge3$ be divisible by $n\prod_{p\in S}p$. The cyclotomic polynomial $\Phi_n$ has constant term one and $\Phi_n(a)>1$. For instance, its complex-root factorization gives $|\Phi_n(a)|\ge(a-1)^{\varphi(n)}>1$, and its real value is positive. Choose a prime $q\mid\Phi_n(a)$. The constant term shows that $q\nmid a$; hence $q\nmid n$ and $q\notin S$.

The residue $\bar a$ is a root of $\Phi_n$ modulo $q$. Because $q\nmid n$, the polynomial $X^n-1$ is squarefree in $\mathbb F_q[X]$. Its factorization
$$X^n-1=\prod_{d\mid n}\Phi_d(X)$$
therefore has factors with no common root over $\overline{\mathbb F}_q$. If the multiplicative order of $\bar a$ were a proper divisor $e$ of $n$, then $\bar a$ would also be a root of $X^e-1=\prod_{d\mid e}\Phi_d(X)$, a contradiction. Its order is exactly $n$, so $n\mid q-1$. Repeating this argument with the previously chosen primes in $S$ supplies the required distinct $q_i$.

Set $M=\prod_i q_i$ and $E=\mathbb Q(\zeta_M)$. The standard cyclotomic Galois theorem and the Chinese remainder theorem give
$$
\mathrm{Gal}(E/\mathbb Q)
\simeq (\mathbb Z/M\mathbb Z)^\times
\simeq\prod_i\mathbb F_{q_i}^{\times}.
$$
Each multiplicative group $\mathbb F_{q_i}^{\times}$ is cyclic of order $q_i-1$. Choose a generator $g_i$ and map $g_i^e$ to $e\bmod n_i$. Divisibility by $n_i$ makes this a well-defined surjective homomorphism. Taking products gives a surjection
$$\pi:\mathrm{Gal}(E/\mathbb Q)\twoheadrightarrow A.$$
Let $H=\ker\pi$ and $L=E^H$. The fundamental theorem of Galois theory gives
$$L/\mathbb Q\text{ finite Galois},\qquad
\mathrm{Gal}(L/\mathbb Q)\simeq\mathrm{Gal}(E/\mathbb Q)/H\simeq A.$$
Normality holds because $H$ is a kernel. Repeated cyclic factors cause no difficulty because their auxiliary primes were chosen distinct. This also avoids assuming unproved linear disjointness of separately chosen number fields.

For the field-theoretic input, Milne's *Fields and Galois Theory*, version 5.10, proves cyclotomic irreducibility in Theorem 5.10, with the Galois-group identification in Lemma 5.9; the subgroup/fixed-field correspondence is in Chapter 3. The remaining quotient construction and the auxiliary-prime proof above are given in full. No claim of novelty is made.

`verify.py` checks 16 cyclic-factor profiles, including the trivial group, repeated factors and noncyclic groups. It constructs distinct auxiliary primes and primitive roots and exhaustively checks 9,353 pairs in the ambient product groups for the homomorphism law, surjectivity and the kernel-index formula. These finite checks validate the implementation of the quotient construction; the proof supplies all finite abelian groups. The actual output is `verification.json`.

The official archive already contains [TOP-20-A1](https://we-solve.github.io/contributions/inverse-galois-problem-ed2024f3/attempt-1/r1/), a conditional general-group approach using local torsors and a remaining global patching step. That manuscript was read. The present unconditional abelian construction does not fill that general patching gap and does not settle the official arbitrary-group quantifier.

Reference: J. S. Milne, [*Fields and Galois Theory*, v5.10 (September 2022)](https://www.jmilne.org/math/CourseNotes/FT.pdf), Chapter 3, Lemma 5.9 and Theorem 5.10, checked 18 October 2026.

Models and roles: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown), source checking, proof exposition and exact verifier. No human mathematical review was performed.


## Reproducibility and review

Proof plus 16 exact quotient profiles and 9,353 homomorphism-pair checks.
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

https://www.jmilne.org/math/CourseNotes/FT.pdf
https://we-solve.github.io/contributions/inverse-galois-problem-ed2024f3/attempt-1/r1/
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
