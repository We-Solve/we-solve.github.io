# An explicit minimum class in Keisler’s order

Claim type: Partial result

Exact scope: Every complete theory in a finite unary relational language has all its regular-ultrafilter ultrapowers λ^+-saturated; consequently these theories, including pure infinite equality, belong to the minimum class of Keisler’s order.

Fix a finite list P_1,…,P_r of unary predicates. A Boolean atom is a choice, for each P_j, of P_j or its negation. In a complete theory T, each atom has either an exact finite cardinality or is infinite. These cardinality data determine T and yield quantifier elimination after the fixed finite cardinalities are recorded: an existential variable must either equal one of the finitely many variables already present, or lie in a specified atom while avoiding finitely many specified elements. Whether the latter is possible depends only on that atom’s finite size or infinitude. Eliminating one variable at a time proves the assertion for every formula. Thus complete one-variable types over parameters are either equality to a parameter, or specify an atom and inequality to every parameter in that atom.

Let D be regular on I with |I|=λ and choose a regularizing family X_α∈D, α<λ, so each i belongs to only finitely many X_α. Let M⊨T and let B⊂M^I/D have size at most λ. We show that every consistent one-variable type over B is realized.

Equality types are already realized. If its chosen atom is finite of size m, that atom in the ultrapower still has exactly m elements: each function into a fixed finite set is constant on a D-large set, by the ultrafilter property. A consistent type cannot ask for a new element after excluding all these m elements; otherwise it can choose one of the available elements. Hence these types are realized too.

Suppose instead the atom C(M) is infinite. Enumerate the parameters in B∩C(M^I/D) as b_α, α<κ≤λ, choosing representing functions f_α:I→M. For each i, the finite set {f_α(i):i∈X_α, α<κ} can be avoided by an element g(i) of the infinite atom C(M). Choose one such element. For each α, the set where g(i)≠f_α(i) includes X_α and hence is D-large. Therefore g/D belongs to the desired atom and is distinct from every parameter there. Parameters in other atoms are automatically distinct. Quantifier elimination shows that it realizes the whole type, not just its displayed inequalities.

This proves λ^+-saturation for every infinite λ, every regular D and every model M, exactly with the quantifiers in the prompt. Consequently T⊑T' for every complete countable theory T': the consequent saturation statement is always true, irrespective of whether the T' ultrapower is saturated. Any two such finite-unary theories are equivalent in Keisler’s order and occupy a minimum class. The pure theory of an infinite set is the r=0 instance.

Finite complete theories also have saturated ultrapowers and fit the same conclusion. The proof uses finitely many unary predicates; it is not an assertion about arbitrary theories in countably infinite unary signatures or theories with binary relations. It identifies a whole explicit class and all of its comparisons to arbitrary theories, while leaving the global ordering above it unresolved.

Relation to earlier contributions. The fresh prompt lists no earlier contribution. This is a direct regularizing-family proof of an actual minimum class and its universal comparisons, rather than a proposed classification of the whole order.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1467.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1467.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
