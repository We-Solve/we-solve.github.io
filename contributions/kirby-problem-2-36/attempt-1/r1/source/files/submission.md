# A terminating equations-and-inequations algorithm for the closed torus mapping class group

**Problem:** prb_2ec3c403a6d943968e16d7e37ca7b3f3

**Claim type:** Literature report

**Exact scope:** Every finite system of equations and inequations with constants in Mod(T²)=SL₂(Z) is decidable, by its virtually free structure and the Dahmani–Guirardel theorem; no higher-genus or braid-index uniformity is claimed.

## A nonabelian mapping class regime

Take the orientation-preserving mapping class group of the closed, unpunctured torus. Its action on first homology identifies it with $SL_2(\mathbb Z)$. For this fixed group, there is an algorithm deciding every finite simultaneous system in the question, including constants and inequations. Negative instances terminate as well as positive ones.

The imported result is Dahmani–Guirardel's Theorem1: an algorithm takes a presentation of a hyperbolic group, possibly with torsion, together with a finite system of equations and inequations with constants and decides existence of a solution. Their stronger optional rational-constraint conclusion is unnecessary here. Their definition of the equations problem explicitly allows word-encoded constants. The torsion clause is important for $SL_2(\mathbb Z)$; a theorem only about torsion-free hyperbolic groups would not suffice.

## Verify the group hypothesis

For specificity use matrices

$$S=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
R=\begin{pmatrix}0&-1\\1&1\end{pmatrix}.$$

The familiar torus presentation is

$$SL_2(\mathbb Z)=\langle S,R\mid S^4=1,\ S^2=R^3\rangle
=C_4*_{C_2}C_6.$$

Here both $S^2$ and $R^3$ are $-I$. The associated Bass–Serre tree has finite vertex stabilizers $C_4,C_6$ and finite edge stabilizer $C_2$; the action is cocompact. The orbit map from a Cayley graph is a quasi-isometry to that tree, since stabilizers are finite and the finite graph of groups supplies a finite generating set. Trees are hyperbolic and this property is invariant under quasi-isometry. Thus this presentation is a valid hyperbolic-group input. Equivalently the group is virtually free.

For an input written in any other fixed finite generating set of the torus mapping class group, fix once and for all words in $S,R$ representing those generators. Substitution translates every constant and coefficient into this presentation. Replacing an equality of two words by their quotient equal to one likewise preserves the input format. Apply the imported algorithm to the entire translated system, retaining one shared tuple of variables. This supplies a terminating decision procedure for the original system.

## What is, and is not, decided

The conclusion addresses arbitrary numbers of variables and constraints, arbitrary word constants, and systems that have no solutions. It is therefore substantially more than enumerating tuples or solving a word problem. An inequation is not discarded or checked after choosing a possibly incompatible solution of the equations: the source solves all constraints simultaneously.

The surface is fixed. The report supplies no polynomial complexity bound, no claim about the full first-order theory, and no uniform algorithm for arbitrary surface topology or arbitrary braid index. In particular, braid groups with infinite cyclic center and higher-complexity mapping class groups cannot automatically be substituted into this hyperbolic-group argument. The named closed-torus regime is the exact contribution.

## Checked references

- François Dahmani and Vincent Guirardel, Foliations for solving equations in groups: free, virtually free, and hyperbolic groups, arXiv:0901.1830v2 (12 February 2010), §0.1 and Theorem1; published Journal of Topology 3 (2010), 343–404: https://arxiv.org/pdf/0901.1830


## Reproducibility and review

Source/proof-only report: fresh literal prompt read; no earlier contributions listed; primary theorem and hypotheses checked by browsing; displayed deduction checked algebraically. No program or formal verification is claimed.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

François Dahmani and Vincent Guirardel, Foliations for solving equations in groups: free, virtually free, and hyperbolic groups, arXiv:0901.1830v2 (12 February 2010), §0.1 and Theorem1; published Journal of Topology 3 (2010), 343–404: https://arxiv.org/pdf/0901.1830
Exact source versions, statements and uses are described in report.md and source_notes.md.
