# Minimal characteristic-zero fields have no nontrivial solvable finite Galois extensions

Claim type: Partial result

Exact scope: Every infinite minimal characteristic-zero field contains every root of unity and has no nontrivial finite solvable Galois extension; every polynomial with solvable Galois group splits over the field.

Let K be minimal in exactly the one-field sense of the prompt. For each n≥1 the definable subgroup (K*)^n is infinite because the map x↦x^n has finite fibers. It is cofinite by minimality. A proper subgroup cannot be cofinite in an infinite group: any other coset is infinite and disjoint from it. Therefore K* is divisible. This background conclusion was already obtained in the earlier report; the point here is its further Galois consequence.

We prove by induction on primes p that K contains all p-th roots of unity and has no cyclic extension of degree p. For p=2 the roots ±1 already belong to K, and every quadratic polynomial splits by completing the square and using square surjectivity.

Suppose the assertions are known for smaller primes. The cyclotomic extension K(ζ_p)/K is Galois and its Galois group embeds into (Z/pZ)*, a cyclic group of order p−1. If this group were nontrivial it would have a quotient of some prime order q<p; the corresponding intermediate field would be a cyclic degree-q extension of K, contradicting induction. Thus ζ_p∈K.

Now let L/K be cyclic of degree p, with generator σ of its Galois group. As a K-linear operator on the p-dimensional vector space L, σ satisfies X^p−1, whose roots all lie in K and are distinct. It is diagonalizable and not the identity, so it has an eigenvector u≠0 with eigenvalue ζ_p^i≠1. Then u^p∈K. Divisibility supplies v∈K with v^p=u^p. Hence (u/v)^p=1, and all roots of X^p−1 lie in K, so u∈K. This contradicts σ(u)≠u. No Kummer classification theorem is needed: this eigenvector argument proves the required cyclic obstruction directly.

This induction treats every prime. Every root of unity of composite order also lies in K. Indeed K(ζ_m)/K is finite Galois with abelian group, and a nontrivial finite abelian group has a prime-order quotient, which would give an excluded cyclic extension.

Finally, if L/K were a nontrivial finite solvable Galois extension, its solvable group G would have nontrivial abelianization: if G=G', its derived series could never reach the trivial group. A prime-order quotient of that abelianization again yields a cyclic prime-degree intermediate extension, impossible. Thus G is trivial. The splitting field of a polynomial in characteristic zero is finite Galois; if its group is solvable, it consequently equals K.

This is stronger than merely excluding degree two. It still does not prove algebraic closure. A hypothetical irreducible polynomial can have a nonsolvable Galois closure, whose group has no nontrivial abelian quotient; the present obstruction leaves that case untouched. It is also not asserted that every finite extension has solvable Galois closure, or that a finite extension of K is automatically minimal. Neither assertion was used. Minimality in all elementary extensions was never assumed.

Relation to earlier contributions. The earlier text proves power surjectivity, no quadratic extensions and cofinite polynomial images, stopping before arbitrary higher-degree irreducibles. Here the power-surjectivity lemma is background for a new full induction through all cyclotomic and cyclic prime extensions, excluding every finite solvable Galois group.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_e176d5379efa45aa86245afb0f2fa85a.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_e176d5379efa45aa86245afb0f2fa85a.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
