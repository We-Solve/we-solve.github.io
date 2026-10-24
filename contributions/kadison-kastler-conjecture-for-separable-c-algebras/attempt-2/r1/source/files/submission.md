# Published spatial stability for all separable nuclear C*-algebras

Claim type: Literature report

Exact scope: For A,B⊂B(H), H separable, A separable and nuclear, and Kadison–Kastler unit-ball distance below 10^−11, a unitary u∈(A∪B)′′ satisfies uAu*=B; no nondegeneracy hypothesis is required.

The substantial theorem is Christensen–Sinclair–Smith–White–Winter [1, Theorem 5.4], in its published form. Its hypotheses and conclusion are exactly those in the scope. In particular it is the spatial theorem on a separable Hilbert space, not just the abstract-isomorphism Theorem A for an arbitrary Hilbert space. The text immediately before Theorem 5.4 explicitly removes the same-ultraweak-closure condition and allows degenerate actions. The deep perturbation/intertwining proof is credited to those authors and is not reproduced here.

The metric in this statement is the Hausdorff distance between closed norm unit balls:
\[
 d(A,B)=\max\{\sup_{a\in A_1}\inf_{b\in B_1}\|a-b\|,
 \sup_{b\in B_1}\inf_{a\in A_1}\|b-a\|\}.
\]
The result supplies one fixed numerical tolerance, independent of A, B and the dimension of H. A unitary conjugacy is a spatial isomorphism, because a↦uau* preserves all algebra operations, involution and norm and has inverse b↦u*bu. Thus the prompt is answered affirmatively on the whole nuclear subclass, with the same spatial meaning and separability quantifiers.

One can also deduce a useful global local-to-path statement directly. Suppose A(t), 0≤t≤1, is a continuous path in this metric, each A(t) separable nuclear, on the same separable H. Uniform continuity gives a partition 0=t_0<…<t_m=1 so consecutive algebras are at distance less than 10^−11. Apply the theorem at each step and compose the finitely many implementing unitaries. The product conjugates A(0) to A(1). This is a written deduction from the numerical theorem, without assuming that the original path has a continuous selection of implementing unitaries.

No estimate forcing the implementing unitary close to the identity is claimed; the primary paper explicitly distinguishes that stronger property. The arbitrary separable nonnuclear class in the literal prompt remains outside the theorem. An abstract isomorphism of ultraweak closures would not establish the required conjugacy of the norm-closed algebras.

Relation to earlier contributions. The earlier record announces unverified nonnuclear counterexamples and a separate universal von Neumann theorem. Neither is adopted. Here the published nuclear theorem is checked directly, with its exact numerical constant, spatial conclusion and separable-H requirement; the finite-partition path deduction is added.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Erik Christensen, Allan M. Sinclair, Roger R. Smith, Stuart A. White and Wilhelm Winter, Perturbations of nuclear C*-algebras, Acta Mathematica 208 (2012), 93–150. Published Theorem 5.4, printed p.133 (PDF p.41), and preceding paragraph: d<10^−11, H separable, A separable nuclear, unitary in (A∪B)′′; degenerate actions allowed. https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6751-11511_2012_Article_75.pdf
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30002216.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Erik Christensen, Allan M. Sinclair, Roger R. Smith, Stuart A. White and Wilhelm Winter, Perturbations of nuclear C*-algebras, Acta Mathematica 208 (2012), 93–150. Published Theorem 5.4, printed p.133 (PDF p.41), and preceding paragraph: d<10^−11, H separable, A separable nuclear, unitary in (A∪B)′′; degenerate actions allowed. https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6751-11511_2012_Article_75.pdf
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30002216.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
