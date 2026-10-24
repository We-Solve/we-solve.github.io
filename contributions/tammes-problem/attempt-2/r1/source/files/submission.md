# Exact optimal latitude in every regular two-ring antiprism family

Problem: prb_bc40eb10d37a4c1c9ac64d02f5005457

Claim type: Partial result

Exact scope: For every m>=8 (N=2m>14), determine the maximum minimum chordal distance within the equal-latitude regular m-antiprism family; gives an explicit infinite-family lower bound for Tammes.

For m>=8 let the upper ring consist of
\[
 (\sqrt{1-h^2}\cos(2\pi j/m),\sqrt{1-h^2}\sin(2\pi j/m),h),
\]
and the lower ring use angles (2j+1)pi/m and height -h, for 0<=j<m and 0<=h<1. These are 2m distinct unit-sphere points, including h=0 where the interleaved rings form a regular 2m-gon. Reflection exchanges h and -h, so nonnegative h loses nothing in this named family.

Put s=sin^2(pi/m) and t=sin^2(pi/(2m)). Among pairs on one ring the smallest angular difference is 2pi/m, so the smallest squared distance is A=4(1-h^2)s. Between rings the smallest angle difference modulo 2pi is pi/m; their vertical separation is 2h, giving B=4h^2+4(1-h^2)t. All other pairs have no smaller chord distance, since their horizontal angle has no smaller folded value in [0,pi]. Thus the minimum squared distance of the whole configuration is exactly min(A,B).

Writing z=h^2, A is strictly decreasing in z and B is strictly increasing. Since s>t and B(1)>A(1), they have a unique intersection in (0,1):
\[
 z_*={s-t\over1+s-t},\qquad
 \delta_*^2={4s\over1+s-t}.
\]
For z<z_* the smaller branch B increases, and for z>z_* the smaller branch A decreases. This proves the unique optimal absolute latitude in this family, and yields
\[
 d_{2m}\ge 2\sqrt{{s\over1+s-t}}.
\]
It handles the literal unresolved range N>14; N=24 is harmless even though excluded from the source's requested unknown cases. The proof optimizes only a two-ring symmetry class. It does not assert global Tammes optimality, a new record distance, or that a two-ring family is competitive asymptotically: indeed this bound is O(1/m), whereas general spherical constructions have scale m^(-1/2). The value of the result is a complete explicit optimization and exact contact-balance formula valid for every member of an infinite family, rather than a numerical local minimum with untested competing pairs.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_bc40eb10d37a4c1c9ac64d02f5005457.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
