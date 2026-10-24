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

## References

J. W. Cogdell, On Artin L-functions, author research exposition, sections on one-dimensional characters, Artin reciprocity and induction of characters. https://math.osu.edu/~cogdell/artin-www.pdf .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/artins-conjecture-on-the-holomorphy-of-non-abelian-artin-l-functions/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.
