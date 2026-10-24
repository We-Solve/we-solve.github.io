# Wegner’s theorem settles the integral assembly maps for every virtually solvable group

Claim type: Literature report

Exact scope: The two assembly maps in the prompt are isomorphisms in every degree for every virtually solvable group, including arbitrary finite extensions of Z[1/m]^r⋊_M Z.

The substantial theorem imported here is Christian Wegner’s Theorem 1.1 [1]: every virtually solvable group satisfies the K- and L-theoretic Farrell–Jones conjectures with additive-category coefficients, with respect to virtually cyclic subgroups. This is credited literature, not a new proof of that controlled-topology theorem. Its coefficient form specializes to the category of finitely generated free Z-modules with trivial group action, yielding the integral group-ring assembly maps of the literal question. On the L side the convention is ultimate lower decoration ⟨−∞⟩, as in the source’s formulation. All degrees are included. The published theorem and the inspected version impose no finite-generation, torsion-free, polycyclic or linearity hypothesis on the virtually solvable group.

An explicit family illustrates a scope not supplied by finite quotient tests. Let m≥2, r≥1, R=Z[1/m] and let M∈GL_r(R). On R^r×Z define
\[
 (v,k)(w,l)=(v+M^k w,k+l).
\]
Invertibility of M over R ensures that all integer powers act on the same additive group, so this is a group. The normal subgroup R^r×{0} and the quotient Z are abelian. Every commutator lies in that normal abelian subgroup, so the derived series terminates after at most two steps. The group is solvable and therefore satisfies both literal assembly assertions by [1]. Any group containing this one as a finite-index subgroup is virtually solvable and has the same conclusion. The additive subgroup R^r is not finitely generated as an abelian group, so a polycyclic assumption would not have justified this example.

The theorem is a positive result for a structural class, not a reduction of the arbitrary-group conjecture to that class. A general finitely generated group need not be virtually solvable. No computation of all K_n or L_n groups is claimed; the result identifies the assembly maps as isomorphisms. The deep proof in [1] is not reproduced or formally checked here.

Relation to earlier contributions. The earlier full text develops continuity, eventual repair and finite-quotient pitfalls, mentioning hyperbolic/CAT(0) classes as frontier context. The present report instead checks Wegner’s primary theorem for the entire virtually solvable class and proves a concrete non-polycyclic semidirect-product application.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Christian Wegner, The Farrell-Jones Conjecture for virtually solvable groups, arXiv:1308.2432v3, 16 August 2015, Theorem 1.1 and Section 2 (both K and ultimate L, virtually cyclic family, additive-category coefficients). Published Journal of Topology, DOI 10.1112/jtopol/jtv026. https://arxiv.org/pdf/1308.2432
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_cc22f1cbf2b041c68241ecebd29184e8.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Christian Wegner, The Farrell-Jones Conjecture for virtually solvable groups, arXiv:1308.2432v3, 16 August 2015, Theorem 1.1 and Section 2 (both K and ultimate L, virtually cyclic family, additive-category coefficients). Published Journal of Topology, DOI 10.1112/jtopol/jtv026. https://arxiv.org/pdf/1308.2432
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_cc22f1cbf2b041c68241ecebd29184e8.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
