# Attributed submission: Attempt: TOP-30006914

Source: https://github.com/We-Solve/research/issues/219

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006914

### Claim

Partial result

### Exact scope

For Boolean functions equal to -1 on an affine binary subspace of codimension r and +1 elsewhere, the squared Fourier spectrum and total influence are computed exactly and Ent(f)<=4 I(f) is proved, allowing overlapping parity constraints and inactive coordinates.

### Write-up

# TOP-30006914: Fourier Entropy-Influence Conjecture

Claim type: **Partial result**.

Exact scope: For Boolean functions equal to -1 on an affine binary subspace of codimension r and +1 elsewhere, the squared Fourier spectrum and total influence are computed exactly and Ent(f)<=4 I(f) is proved, allowing overlapping parity constraints and inactive coordinates.

Identify the uniform cube with F_2^n and characters chi_s(x)=(-1)^(s dot x). Let A be an r-by-n binary matrix of row rank r, let b be in F_2^r, and set f(x)=1-2[Ax=b]. Thus f=-1 on a nonempty affine subspace and +1 elsewhere. Put m equal to the number of nonzero columns of A. Rank zero gives the constant -1 and is handled separately. For r>0, m>=r.

Orthogonality on F_2^r gives
\[
 [Ax=b]=2^{-r}\sum_{y\in\mathbb F_2^r}(-1)^{y\cdot b}\chi_{A^T y}(x).
\]
Because A has full row rank, A^T is injective. Therefore the constant Fourier coefficient of f is 1-2^(1-r), each of the 2^r-1 other coefficients indexed by nonzero vectors in the row space has magnitude 2^(1-r), and all remaining coefficients vanish. The signs depend on b but the squared spectrum does not. Let a=(1-2^(1-r))^2 and q=1-a. Then, in the prompt's base-two convention,
\[
 \mathrm{Ent}(f)=-a\log_2 a+q(2r-2).
\]
The convention 0 log 0=0 handles r=1.

Flipping coordinate i adds column A_i to Ax. If that column is zero, f never changes. If it is nonzero, exactly the two distinct fibers Ax=b and Ax=b+A_i cause a change. Full rank makes each fiber have uniform probability 2^-r, so
\[
 I(f)=m\,2^{1-r}.
\]
This directly checks influence without assuming that a linear change of variables preserves coordinate influences (it generally does not).

For 0<=a<=1, -a ln a<=1-a, by ln u<=u-1 with u=1/a and endpoint continuity. Also log_2 e<2. For r>=1 this gives
\[
 \mathrm{Ent}(f)\le 2q+(2r-2)q=2rq.
\]
Since q=2^(2-r)(1-2^-r)<=2^(2-r), we get
\[
 \mathrm{Ent}(f)\le 4r\,2^{1-r}\le4m\,2^{1-r}=4I(f).
\]
For r=0 both sides are zero. Thus the same dimension-free constant works for arbitrary affine systems, including heavily overlapping parity equations, translations and dummy coordinates. For r=1 the function is a signed parity character and entropy is exactly zero even when m is large.

The exact spectrum contains exponentially many terms in r, but the formula itself is evaluated from r and m; this is a structural theorem rather than an efficient full-Fourier-output claim. If the constraint system has redundant rows, Gaussian elimination reduces it to rank r, detecting inconsistent equations (then f is constant +1). The support columns can equivalently be counted from the linear map after reduction, since invertible row operations preserve zero/nonzero columns. All algebraic checks use exact binary operations.

The checker computes independent integer Walsh transforms and coordinate flip counts for small full-rank affine systems, checking the spectrum magnitudes, signs and influence exactly. It reports entropy numerically only as a diagnostic; the all-dimension inequality is the symbolic proof above. General Boolean functions need not be affine-subspace indicators, so the full Fourier entropy-influence conjecture is left open by this contribution. No novelty claim is made for this elementary subclass calculation.

Comparison with the earlier attempt: The earlier attempt treats an AND-type single exceptional point, products on disjoint blocks, and degree one. This report treats every affine-subspace indicator under arbitrary binary linear maps; constraints may overlap and have nontrivial Fourier supports.

References checked:

- Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006914.txt
- Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fourier-entropy-influence-conjecture/attempt-1/r1/


## Reproducibility and review

Written proof completed; standard-library independent finite checker and execution record supplied separately. These checks are finite and no formal verification or human mathematical review is asserted.

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
The authoring instance for this report is /root/hundred_algorithms. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Exact official research prompt, fetched 18 October 2026: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006914.txt
Earlier unverified contribution inspected through the repository HTML: https://we-solve.github.io/contributions/fourier-entropy-influence-conjecture/attempt-1/r1/
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
