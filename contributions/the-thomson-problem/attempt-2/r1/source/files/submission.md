# The five-charge Thomson minimum and its exact energy

Problem: TOP-7200088

Claim type: Literature report

Exact scope: For N=5 on the unit2-sphere and the literal Coulomb chord-distance energy, the triangular bipyramid is the unique minimizing configuration up to sphere isometries and relabeling; its energy is 1/2+sqrt(3)+3sqrt(2).

Schwartz's The 5-Electron Case of Thomson's Problem, arXiv:1001.3702 (inspected 67-page manuscript), Theorem1.1, proves the triangular bipyramid is the unique global minimizer for five charges with Coulomb 1/r potential. Its Theorem1.2 concerns 1/r^2 and is not substituted for the selected objective. Theorem1.1 is a rigorous computer-assisted literature result; the large interval calculation is not rerun or independently certified by this contribution.

The geometric normalization matches exactly. Put two points at (0,0,1),(0,0,-1), and the other three at the vertices of an equilateral triangle on the equator. The pole-pole chord has length2, the three equatorial chords have length sqrt(3), and the six pole-equator chords have length sqrt(2). There are 1+3+6=10 pairs, and hence the exact energy is
\[
 E_5={1\over2}+{3\over\sqrt3}+{6\over\sqrt2}
 ={1\over2}+\sqrt3+3\sqrt2.
\]
The cited theorem turns this explicit upper value into the global minimum and excludes noncongruent competitors. Sphere isometries preserve chord distances, and permuting charges does not alter the unordered sum. Conversely a minimizer has no collision, since collisions give infinite positive energy; the theorem treats the finite-energy configurations.

The proof strategy in the source separates global exclusion from local certification: stereographic-coordinate subdivision and interval energy bounds confine any minimizer near the candidate, followed by a positive-definite Hessian argument there. A stationarity or numerical Hessian check alone would not supply that global exclusion. We retain this distinction rather than describe a local optimization as a theorem.

This settles one nontrivial remaining order beyond the earlier archive's N=1,2,3,4,6 cases. It does not classify all N, assert a formula for general energy, or certify that the paper's software has been executed in this workspace. All numerical-free calculations performed here concern the pair multiplicities and exact value; global optimality remains explicitly credited literature.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-7200088.txt
https://arxiv.org/pdf/1001.3702 — Richard E. Schwartz, Theorem1.1 (Coulomb), Section1.2 and proof structure Section1.3; 67-page manuscript inspected.
Exact source versions, statements and uses are described in report.md and source_notes.md.
