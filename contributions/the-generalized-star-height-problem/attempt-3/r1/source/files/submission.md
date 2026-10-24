# A decidable height-zero class: all languages with aperiodic syntactic monoid

Claim type: Literature report

Exact scope: A regular language has generalized star height zero exactly when its finite syntactic monoid is aperiodic; from any DFA this property is decidable and a star-free expression can be constructed by a terminating search.

The substantial equivalence is Schützenberger’s 1965 theorem [1]: the languages obtained from the empty language, singleton letters and the singleton empty-word language by union, complement relative to Σ*, and concatenation are exactly the languages recognized by finite monoids having no nontrivial subgroup. On a finite alphabet, that expression class is precisely generalized star height zero. Equivalently one may start with Σ* as an additional constant and use difference instead of complement; in the complement formulation Σ* is simply the complement of the empty language. The theorem is credited literature; its algebraic inductive proof is not reproduced.

Here is the effective consequence, including its stopping justification. Given a complete DFA, remove inaccessible states and minimize it. Its transition monoid M is obtained by composing the finitely many letter transformations until closure; there are at most q^q transformations on its q states. For a minimal DFA this is the syntactic monoid. A finite transformation monoid is aperiodic exactly when f^q=f^{q+1} for every f∈M. Indeed any eventual transformation cycle of length greater than one prevents that equality; if every transformation has only fixed-point cycles, its functional graph enters its fixed points within q steps. Equivalently every generated cyclic subsemigroup is eventually constant, which rules out nontrivial subgroups and is forced by their absence.

The finite closure and these power comparisons decide aperiodicity. If it fails, the imported theorem certifies that the language does not have generalized height zero. If it holds, enumerate finite star-free expressions over the alphabet, construct their finite automata by the usual Boolean and concatenation constructions, and test language equivalence with the input DFA by product-automaton reachability. The theorem guarantees that some expression matches, so this search halts in every positive case. Together these procedures give both a decision algorithm and a constructive star-free description for the declared class. No elementary complexity or expression-size bound is asserted.

This covers arbitrary finite alphabets, not just unary languages. For example languages requiring a fixed sequence of letters as a subsequence have star-free descriptions Σ* a_1 Σ* … a_r Σ*, with each Σ* written as a complement rather than a star. Their natural prefix-progress automata have nondecreasing state transitions, so every word transformation has only fixed-point cycles, consistent with the criterion.

The argument does not put all regular languages at height zero, and it does not bound their general heights. Nontrivial group behavior in the syntactic monoid is a precise obstruction to zero, not a proof that arbitrarily high generalized height is necessary.

Relation to earlier contributions. The earlier exploratory contribution proves the exact unary height-one case, while another record announces broad unverified claims. The present primary theorem and explicit decision/construction procedure treat the aperiodic class over arbitrary alphabets and identify exactly when height zero is possible.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- [1] Marcel-Paul Schützenberger, On finite monoids having only trivial subgroups, Information and Control 8 (1965), 190–194, DOI 10.1016/S0019-9958(65)90108-7. Primary first-page MAIN PROPERTY and definitions K1–K2 inspected in the indexed author collected-works scan, Tome 6 p.58; direct scan fetch failed, so no full-proof inspection is claimed. https://www-igm.univ-mlv.fr/~berstel/Mps/Oeuvres-Completes/tome06.pdf
- [2] Primary publisher bibliographic record (open archive). https://www.sciencedirect.com/science/article/pii/S0019995865901087
- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1221.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

[1] Marcel-Paul Schützenberger, On finite monoids having only trivial subgroups, Information and Control 8 (1965), 190–194, DOI 10.1016/S0019-9958(65)90108-7. Primary first-page MAIN PROPERTY and definitions K1–K2 inspected in the indexed author collected-works scan, Tome 6 p.58; direct scan fetch failed, so no full-proof inspection is claimed. https://www-igm.univ-mlv.fr/~berstel/Mps/Oeuvres-Completes/tome06.pdf
[2] Primary publisher bibliographic record (open archive). https://www.sciencedirect.com/science/article/pii/S0019995865901087
https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1221.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
