# Attributed submission: Attempt: TOP-124

Source: https://github.com/We-Solve/research/issues/238

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-124

### Claim

Partial result

### Exact scope

For the closure A of {2,3} under ab-1, |A intersect [N]| >= (N/12)^s for N>=2, where 2^(-s)+6^(-s)=1. Also A contains no integer congruent to 1 modulo 3, and exact membership is decidable by finite dynamic programming. Positive density is not proved.

### Write-up

# A free binary subtree gives a power lower bound for the closure

Problem: TOP-124  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** For the closure A of {2,3} under ab-1, |A intersect [N]| >= (N/12)^s for N>=2, where 2^(-s)+6^(-s)=1. Also A contains no integer congruent to 1 modulo 3, and exact membership is decidable by finite dynamic programming. Positive density is not proved.

Write \(A(N)=|A\cap[1,N]|\). There is a unique \(s>0\) satisfying \(2^{-s}+6^{-s}=1\): the left side decreases continuously from 2 to 0. In particular \(s<1\). We prove a uniform lower bound of order \(N^s\), rather than just constructing one infinite sequence.

Both maps
\[
 f(x)=2x-1,\qquad g(x)=3f(x)-1=6x-4
\]
send A into A. For x>=2 they increase x strictly. Their images have opposite parity: f(x) is odd and g(x) is even. Both are injective, and neither image of an integer x>=2 contains the seed 2. It follows that **all finite words** in f and g, evaluated at 2, have distinct values. To verify this last assertion, compare the final operations of two equal values: parity makes them the same operation, injectivity cancels that operation, and iteration either cancels both words or would put the seed in a nonempty-word image, which is impossible.

Give f weight 2 and g weight 6. A word of weight M has value at most 2M, since f(x)<=2x and g(x)<=6x. Let W(X) count finite words whose product weight is at most X, including the empty word of weight 1. For X>=6,
\[
 W(X)=1+W(X/2)+W(X/6).
\]
For 1<=X<6, W(X)>=1>=(X/6)^s. Applying induction to the finite word tree (or to floor(log_2 X)) now gives
\[
 W(X)\ge6^{-s}X^s \quad(X\ge1),
\]
because the two child bounds sum to \(6^{-s}X^s(2^{-s}+6^{-s})\). Distinct words of weight at most N/2 produce distinct elements of A below N. Thus
\[
 \boxed{A(N)\ge(N/12)^s\quad(N\ge2).}
\]

There is also a simple permanent residue obstruction. The starting residues are 2 and 0 modulo 3, and multiplying any two residues from {0,2} and subtracting one again gives 0 or 2. Hence \(A\cap(1+3\mathbb Z)=\varnothing\), so its upper natural density is at most 2/3. This does not imply that its density exists.

For completeness, membership up to any integer N has an exact finite computation. Process m=2,...,N increasingly, marking 2 and 3 initially and marking m if some divisor a of m+1 has both a and (m+1)/a already marked. The factors in a representation m=ab-1 are at least 2 and strictly smaller than m, except the harmless seed representation 3=2*2-1. Induction on m proves that the resulting marks are exactly A up to N: every mark has a closure derivation, and every nonseed closure element has smaller factors. One may instead propagate all marked factor pairs with ab<=N+1. The harmonic sum over possible a bounds this by O(N log N) pair iterations, with integer operands of O(log N) bits; this arithmetic count is not a unit-cost claim for unbounded integers.

The fresh prompt has no earlier contributions. Green's Problem 63 discusses this same closure, including equal factors. The free subtree and explicit exponent above are a self-contained partial bound; since s<1 they leave the requested positive-density conclusion unresolved.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Executed verify.py: backward factor recursion and independent forward closure agree for every n<=20000 (9853 members); all393 bounded-weight words are distinct and satisfy the exact construction. Finite evidence does not prove density. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.


## Reproducibility and review

Executed verify.py: backward factor recursion and independent forward closure agree for every n<=20000 (9853 members); all393 bounded-weight words are distinct and satisfy the exact construction. Finite evidence does not prove density. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.

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

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected and checked scopes, read final reports, spot-checked sources, freshly ran all attached programs, assembled the prepared submissions.
OpenAI Codex (GPT-6), hundred_algebra instance | version: unknown | reasoning: unknown | role: developed algebra reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_numbers instance | version: unknown | reasoning: unknown | role: developed number-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_graphs instance | version: unknown | reasoning: unknown | role: developed graph-theory reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_algorithms instance | version: unknown | reasoning: unknown | role: developed algorithms/complexity reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_topology instance | version: unknown | reasoning: unknown | role: developed topology reports and performed separate LLM reviews.
OpenAI Codex (GPT-6), hundred_geometry instance | version: unknown | reasoning: unknown | role: developed geometry reports and performed separate LLM reviews.
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the two-hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

Ben Green, 100 Open Problems, Problem 63, https://people.maths.ox.ac.uk/greenbj/papers/open-problems.pdf
Fresh official TOP-124 prompt, equal-factor closure definition
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
