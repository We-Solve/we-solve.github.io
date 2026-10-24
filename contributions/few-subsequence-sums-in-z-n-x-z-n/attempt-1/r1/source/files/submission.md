Problem: TOP-3377

Title: Complete fibers prove the extremal bound at maximal multiplicity, with n<=4 certified

Claim type: Partial result

Scope: For every n>=2 and 0<=t<=n−1, the official lower bound holds whenever some term occurs n−1 times. Independently exhaust all zero-sum-free sequences for n=2,3,4 and every specified length, proving the full conjecture for these three moduli. Arbitrary larger-modulus sequences are not covered.

Write-up:

Let $G=(\mathbb Z/n\mathbb Z)^2$ and let a zero-sum-free sequence $S$ have length $n-1+t$. Suppose an element $g$ occurs $n-1$ times, and remove those copies to leave a sequence $T$ of length $t$. The case $t=0$ is included.

The order of $g$ must be exactly $n$: its order divides $n$, and any smaller order would give a nonempty zero-sum subsequence among the $n-1$ copies. Let $H=\langle g\rangle$, which has $n$ elements and index $n$ in $G$.

The projected sequence $\bar T$ in $G/H$ is zero-sum-free. Otherwise a nonempty selection from $T$ would sum to some $kg\in H$, and adding the appropriate number between zero and $n-1$ of the available copies of $g$ would make a nonempty zero sum in $S$.

Every zero-sum-free sequence of length $t$ in any abelian group has at least $t+1$ distinct subset sums when the empty sum is included: fix an ordering and use its empty sum and $t$ initial partial sums. Equality of any two would give a nonempty consecutive zero sum. Consequently $\bar T$ has at least $t$ distinct nonzero subset sums.

For each nonzero coset represented by one of these selections from $T$, adjoining zero through $n-1$ copies of $g$ gives every element of that coset as a nonempty subsequence sum of $S$. These cosets are disjoint. The copies of $g$ alone additionally give all $n-1$ nonzero elements of $H$. Thus
$$|\Sigma(S)|\ge nt+(n-1)=n(t+1)-1.$$
This proves the conjectured bound on the whole maximal-multiplicity slice. It does not assume that $T$ is supported on one generator, that $n$ is prime, or that the sequence has a special coordinate basis. The example in the prompt attains the bound, so it is sharp within this slice.

There is also a complete finite proof for $n\in\{2,3,4\}$. Since order is irrelevant for additive subsequence sums, enumerate multisets of nonzero elements of $G$, in a fixed increasing order, up to length $2n-2$. Maintain *all* subset sums including zero. Appending $g$ creates a nonempty zero sum exactly when $-g$ was already in the old set of subset sums. Such branches can be discarded permanently, since additional terms cannot remove a zero sum. Each remaining branch is one zero-sum-free multiset, and every such multiset appears once.

For every requested length $n-1+t$, the checker records the smallest value of $|\Sigma(S)|$ over all surviving multisets and an attaining example. Every minimum equals $n(t+1)-1$. It also checks, for every ordered basis modulo $n$ with $2\le n\le8$, the full sharp family $g^{[n-1]}h^{[t]}$ for every allowed $t$. Exact modular addition and finite sets are used; there is no numerical relaxation.

The original Open Problem Garden page supplies the conjecture and extremal example. The proof and attached small-modulus classification make no priority claim. The missing general case consists of larger moduli with all multiplicities below $n-1$; this report makes no claim that those sequences have the required repeated element.

Verification: run `python3 verify.py`. Exhaustive verification for three moduli is explicitly separate from the proof valid for all moduli in the stated slice.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- Open Problem Garden, Few subsequence sums in Z_n x Z_n, original problem and discussion: https://openproblemgarden.org/op/limiting_subsequence_sums_in_z_n_x_z_n


## Reproducibility and review

Complete multiset enumeration for n=2,3,4 and all target lengths, with attained minima and no sampling; every ordered basis modulo n through 8 checks the sharp family. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3377.txt
Open Problem Garden, Few subsequence sums in Z_n x Z_n, original problem and discussion: https://openproblemgarden.org/op/limiting_subsequence_sums_in_z_n_x_z_n
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
