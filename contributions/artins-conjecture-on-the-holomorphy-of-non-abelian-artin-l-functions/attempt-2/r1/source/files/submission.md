# Attributed submission: Attempt: TOP-30006705

Source: https://github.com/We-Solve/research/issues/202

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-30006705

### Claim

Literature report

### Exact scope

For any number field K, every nontrivial irreducible finite-image Artin representation induced from a one-dimensional character over a finite extension has an entire L-function. In particular all nontrivial irreducible representations with finite dihedral image satisfy the literal conjecture. The analytic inputs are Artin induction compatibility and Hecke holomorphy; no nonmonomial case is proved.

### Write-up

# TOP-30006705: Artin holomorphy for all monomial irreducibles, including every dihedral group

Claim type: Literature report

Exact scope: For any number field K, every nontrivial irreducible finite-image Artin representation induced from a one-dimensional character over a finite extension has an entire L-function. In particular all nontrivial irreducible representations with finite dihedral image satisfy the literal conjecture. The analytic inputs are Artin induction compatibility and Hecke holomorphy; no nonmonomial case is proved.

The Artin conjecture has a complete affirmative answer on the monomial irreducible subclass. The proof depends on the classical Artin–Hecke identification and analytic continuation of nontrivial finite-order Hecke L-functions. These are explicitly imported analytic theorems [1]; this report does not replace them by a formal character identity or claim to settle arbitrary nonabelian image groups.

Let L/K be a finite Galois extension through which ρ factors, G=Gal(L/K), H≤G, F=L^H, and suppose
\[
 \rho\simeq\mathrm{Ind}_H^G\chi
\]
for a one-dimensional character χ of H. The induction identity for Artin L-functions, including ramified local factors formed on inertia invariants, is
\[
 L_K(s,\rho;L/K)=L_F(s,\chi;L/F).\tag{1}
\]
Since χ is one dimensional it factors through the abelianization of H, so Artin reciprocity identifies the right side with the L-function of the corresponding finite-order Hecke character of F. A nontrivial such character has an entire L-function. This is why ramified factors and the identity as complete finite-place L-functions matter: merely deleting finitely many factors and asserting “up to bad primes” would require extra care concerning poles at those primes.

**Why the inducing character is nontrivial.** Suppose χ=1. Frobenius reciprocity gives
\[
 \langle\mathrm{Ind}_H^G1,1_G\rangle_G
 =\langle1,1\rangle_H=1.
\]
An irreducible induced representation containing the trivial representation must itself be trivial. Thus if ρ is irreducible and nontrivial, χ≠1. This checks exactly the hypothesis that excludes the Dedekind zeta pole in the Hecke theorem. A reducible permutation representation Ind_H^G1 generally does contain that pole; irreducibility cannot be omitted in this argument.

**Every dihedral group.** Let
\[
 G=D_{2m}=\langle r,s:r^m=s^2=1,\ srs=r^{-1}\rangle,
 \quad m\ge3,
\]
and C=〈r〉. Put χ_j(r)=exp(2πij/m). For j not congruent to 0 or m/2 modulo m, χ_j≠χ_{−j}, and Ind_C^Gχ_j is irreducible of dimension two: its restriction to C is χ_j⊕χ_{−j}, and its endomorphism inner product is one by Frobenius reciprocity. The two indices j and −j yield the same representation. For odd m this gives (m−1)/2 distinct two-dimensional representations, alongside two linear characters. Their squared dimensions sum to 2+4(m−1)/2=2m. For even m there are (m−2)/2 such representations and four linear characters, giving 4+4(m−2)/2=2m. The sum-of-squares theorem shows the list is complete.

All the nontrivial linear characters satisfy the one-dimensional Artin–Hecke theorem. Every two-dimensional character on this list is monomial and meets the argument above. Therefore every nontrivial irreducible Artin representation factoring through a dihedral Galois group has an entire L-function. For m=3 this includes the standard two-dimensional S₃ representation; on the identity, reflections and nonidentity rotations its character is (2,0,−1), so the construction is visibly nonabelian.

**Scope audit.** The earlier report exhibited a virtual character of A₅ that blocks a general positivity inference from proper subgroup restrictions. The present result does not reuse that false inference: a genuine single induction from χ is enough, and no quotient of entire functions is introduced. Brauer induction for arbitrary representations involves integer coefficients of both signs; denominators can then occur and this proof no longer removes their zeros. The infinite dihedral family illustrates exactly a setting where the obstruction is absent. All group-theoretic steps are supplied; the deep analytic identification and Hecke holomorphy remain the credited external inputs. No general A₅ or nonmonomial case, no automorphic density assertion, and no new proof of Hecke continuation is claimed.

## Checked references

[1] J. W. Cogdell, On Artin L-functions, author research exposition, sections on one-dimensional characters, Artin reciprocity and induction of characters. https://math.osu.edu/~cogdell/artin-www.pdf .

[2] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/artins-conjecture-on-the-holomorphy-of-non-abelian-artin-l-functions/attempt-1/r1/ .


## Reproducibility and review

Proof and source audit; no numerical computation is needed for this claim.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.


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
The authoring instance for this report is /root/hundred_numbers. Its independent_audit.md names the separate reviewer and records actual checks. Exact serving revisions and reasoning settings are unknown. No human mathematical review or editorial acceptance is claimed.

User-specified model attribution (19 October 2026):
Model: GPT-6.1 Sol
Reasoning level: Ultra
Source: the submitting user's explicit instruction on 2026-10-19. Runtime model and reasoning settings were not independently verified.
This supplements the original disclosure. The recorded author/reviewer roles and historical provenance above remain unchanged; this label does not retrospectively verify the configurations used for the earlier work.

### People and roles

Gaven (@gavenren): prompted the hundred-problem batch. No human mathematical contribution or human verification is claimed.

### References

J. W. Cogdell, On Artin L-functions, author research exposition, sections on one-dimensional characters, Artin reciprocity and induction of characters. https://math.osu.edu/~cogdell/artin-www.pdf .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/artins-conjecture-on-the-holomorphy-of-non-abelian-artin-l-functions/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
