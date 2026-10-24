Problem: TOP-3385

Title: An infinite obstruction to the proposed general-abelian extension, and the 2025 large-subsquare theorem

Claim type: Partial result

Scope: The prompt's extension to arbitrary finite abelian groups, allowing only cosets of even cyclic subgroups as obstructions, is false. For every $r\ge3$ there is an explicit counterexample in $(\mathbb Z/2\mathbb Z)^r$. In addition, a checked 2025 theorem establishes the cyclic even-order assertion for all sufficiently large subsquare sizes. These statements do not claim to settle that cyclic assertion for every size. The odd-order assertion is already recorded as proved in the prompt.

Assumptions and limitations: A transversal must select distinct rows, columns and group sums. The counterexamples below concern the general-abelian extension, not the odd-order assertion or the cyclic even-order assertion. The obstruction is prior mathematics: the 2025 primary source credits a construction of Akbari and Alireza. No novelty is claimed.

Write-up:

Let $G=(\mathbb Z/2\mathbb Z)^r$ with $r\ge3$, choose $h\ne0$, and put
$$A=B=G\setminus\{0,h\},\qquad k=|A|=2^r-2.$$
There is no transversal in $A\times B$.

Here is a complete elementary proof. The sum of all elements of $G$ is zero: in each coordinate exactly $2^{r-1}$ elements have value one, and this number is even. For any bijection $\pi:A\to B$, the sum of its selected symbols is
$$\sum_{a\in A}(a+\pi(a))=\sum A+\sum B=0,$$
since $A=B$ and twice every element is zero. If these $k$ symbols were distinct, they would form a subset $C\subset G$ missing exactly two distinct elements $u,v$. But then
$$0=\sum C=\sum G-u-v=u+v,$$
which in an elementary abelian 2-group implies $u=v$, a contradiction.

These are not among the obstructions permitted by the proposed extension. Every nontrivial cyclic subgroup of $G$ has order two, whereas $|A|=2^r-2\ge6$. Thus $A$ and $B$ cannot be cosets of an even cyclic subgroup. They are not even cosets of any subgroup, because $2^r-2$ is not a power of two for $r\ge3$.

For the smallest member, identify $G$ with the three-bit integers and use bitwise exclusive-or as addition:
$$G=\{0,1,2,3,4,5,6,7\},\qquad A=B=\{2,3,4,5,6,7\}.$$
The attached checker examines all $6!=720$ pairings. None has six distinct sums. It also checks every pair of two-element deletions with equal deletion-sum in this group, so it does not rely on just one chosen pairing or one numerical heuristic.

A more general version of the same proof uses
$$A=G\setminus\{a_1,a_2\},\quad B=G\setminus\{b_1,b_2\},\quad a_1+a_2+b_1+b_2=0.$$
Every pairing then has total symbol sum zero, giving the identical contradiction. Translation of either row or column set preserves existence of a transversal, so translated versions are also obstructed.

There is also substantial positive progress on the separate cyclic clause. Müyesser and Pokrovskiy, *A random Hall-Paige conjecture*, Inventiones mathematicae 240 (2025), Theorem 1.4, prove the following precise asymptotic classification. There is an absolute $k_0$ such that an abelian-group subsquare of size $k\ge k_0$ has a transversal unless, up to translating its row and column sets, it is either the whole table of a subgroup with nontrivial cyclic Sylow 2-subgroup, or a table of an elementary abelian 2-subgroup with two rows and two columns removed whose four labels sum to zero.

For an ambient cyclic group, the first family is exactly the even-subgroup coset obstruction in the prompt. An elementary abelian subgroup of a cyclic group has size at most two, so deleting two elements cannot produce a positive large subsquare. Therefore the prompt's cyclic even-order assertion follows for every $k\ge k_0$, independently of the size of the ambient cyclic group. The cited theorem does not specify a useful numerical value of $k_0$ here; no cutoff is invented, and no all-small-size conclusion is inferred.

Verification and audit: `verify.py` uses exact exclusive-or arithmetic and exhaustive permutations for the order-eight case, verifies the broader deletion-pair family there, and checks the symbolic sum obstruction for ranks three through ten. `verification.json` records the exact counts. The infinite counterexample family follows from the proof, not extrapolation. The asymptotic positive assertion is a credited literature theorem, not independently reproved by the checker.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source checking, proof reconstruction, scope audit, and exact verifier preparation.

Human contributors and roles: No human review or new human mathematical contribution is asserted.

References:

- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3385.txt
- A. Müyesser and A. Pokrovskiy, *A random Hall-Paige conjecture*, Inventiones mathematicae 240 (2025), 779–867, Theorem 1.4 and §1.1.1. Published 5 March 2025. https://doi.org/10.1007/s00222-025-01328-x


## Reproducibility and review

Self-contained sum obstruction for ranks >= 3; 720 pairings of the smallest example and 80640 pairings over 112 deletion families checked; ranks 3 through 10 sum certificates.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3385.txt
https://link.springer.com/article/10.1007/s00222-025-01328-x (Theorem 1.4, section 1.1.1)
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
