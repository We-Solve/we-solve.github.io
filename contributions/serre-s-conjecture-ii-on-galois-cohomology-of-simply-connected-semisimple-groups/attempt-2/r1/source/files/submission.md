# Serre II for arbitrary outer type-A groups in characteristic zero

Claim type: Literature report

Exact scope: Over every characteristic-zero field K with cd(K)≤2, every simply connected absolutely simple group of outer type ^2A_n has trivial H^1; finite products and finite-separable Weil restrictions of these groups do also.

The imported theorem is the main theorem of Berhuy–Frings–Tignol [1], stated on its second page and proved by its characteristic-independent classification arguments: the strong form of Serre II holds for types ^2A_n, B_n, C_n and D_n, apart from possible trialitarian D_4. We use only its ^2A_n assertion here. In that strong form the hypothesis is sd_p(K)≤2 for every torsion prime of the root system. In characteristic zero, the paper defines sd_p(K)=cd_p(K) for every p. The literal assumption cd(K)≤2 therefore implies every required inequality. Its conclusion is H^1(K,G)={1}. Characteristic-zero fields are perfect, so this is within the prompt’s exact field scope. There is no assumption that G is split or quasi-split.

Outer type A encompasses special unitary forms associated with a quadratic extension and a central simple algebra with unitary involution; the theorem is not merely the elementary split-SL determinant argument. We do not replace its unitary group by a general linear group or omit the simply connected condition. Its deep form/involution classification is credited to the authors and not reproduced.

Here is the extension to semisimple combinations. For a finite product G=product G_i, a torsor is a tuple of factor torsors (this follows directly by projecting its cocycle), so its pointed H^1 is the product of the factor pointed sets. For a finite separable field extension L/K, Shapiro descent gives
\[
 H^1(K,R_{L/K}G_L)=H^1(L,G_L).
\]
Finite extensions in characteristic zero remain perfect and have cohomological dimension at most that of K, by restriction to the open subgroup of the absolute Galois group. Applying the primary theorem over L makes the right side trivial. Products of these Weil restrictions consequently satisfy exactly the same torsor conclusion. These are still semisimple simply connected K-groups.

No statement for all exceptional types or arbitrary positive characteristic is inferred from this specialization. In particular an argument about norms in a split group would not by itself prove the unitary assertion. The full arbitrary-group conjecture and the recent archive status are not certified here.

Relation to earlier contributions. The earlier attempt explicitly proves split SL/Sp and a quaternion norm-one subcase, while discussing exceptional invariant-kernel obstacles and transfer in the background. Here a different primary theorem is matched to nonsplit outer type-A groups of arbitrary rank, and the product/Weil-restriction deduction is written out. The prior quaternion proof is not reused as the claimed scope.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Gregory Berhuy, Christoph Frings and Jean-Pierre Tignol, Serre’s conjecture II for classical groups over imperfect fields, author manuscript dated 15 September 2006, Introduction pp.1–2: definition of sd_p and main Theorem, with cases in Corollaries 2.6, 3.12, 4.5 and 5.5. Only the ^2A_n part, specialized to characteristic zero, is invoked. https://www.math.uni-bielefeld.de/lag/man/228.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_9b3372b90dec4c1893e48d1e3830c15d.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Gregory Berhuy, Christoph Frings and Jean-Pierre Tignol, Serre’s conjecture II for classical groups over imperfect fields, author manuscript dated 15 September 2006, Introduction pp.1–2: definition of sd_p and main Theorem, with cases in Corollaries 2.6, 3.12, 4.5 and 5.5. Only the ^2A_n part, specialized to characteristic zero, is invoked. https://www.math.uni-bielefeld.de/lag/man/228.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_9b3372b90dec4c1893e48d1e3830c15d.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
