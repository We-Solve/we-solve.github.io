Problem: TOP-3384

Title: The homocyclic Davenport formula for every prime-power modulus, with a group-algebra proof

Claim type: Partial result

Scope: For every prime $p$, exponent $a\ge1$ and dimension $d\ge1$,
$$D((\mathbb Z/p^a\mathbb Z)^d)=d(p^a-1)+1.$$
The formula also holds for $d=1$ and every integer modulus $n\ge2$. The full range of non-prime-power moduli in arbitrary dimension is not determined here. This is Olson's classical positive case, not a new theorem.

Assumptions and limitations: Sequences can repeat elements; selected positions need not be consecutive. The auxiliary group algebra has characteristic $p$, but the stated combinatorial theorem is about the finite group itself. A subset-only assertion would be different.

Write-up:

Put $n=p^a$, $G=(\mathbb Z/n\mathbb Z)^d$ and $L=d(n-1)+1$. Let $\mathbb F_p[G]$ have basis symbols $X^g$ for $g\in G$, with multiplication $X^gX^h=X^{g+h}$. If $e_i$ are the coordinate generators, write $X_i=X^{e_i}$ and $T_i=X_i-1$. In characteristic $p$, repeated Frobenius gives
$$T_i^n=(X_i-1)^{p^a}=X_i^{p^a}-1=0.$$
Indeed the group algebra is isomorphic to
$$R=\mathbb F_p[T_1,\ldots,T_d]/(T_1^n,\ldots,T_d^n):$$
the map $T_i\mapsto X_i-1$ is surjective because it recovers all $X_i$, and both sides have dimension $n^d$ over $\mathbb F_p$.

The augmentation ideal $J=(T_1,\ldots,T_d)$ satisfies $J^L=0$. Every monomial of total degree at least $L$ has some exponent at least $n$, by the pigeonhole principle, so vanishes in $R$. For any $g\in G$, the element $1-X^g$ belongs to $J$: evaluating every $T_i$ at zero sends every group-basis monomial $X^g$ to one.

Take any sequence $g_1,\ldots,g_L$ in $G$. It follows that
$$\prod_{j=1}^L(1-X^{g_j})=0\quad\hbox{in }\mathbb F_p[G].$$
If this sequence had no nonempty zero-sum selection, expansion of the product would give coefficient one on $X^0$: the empty selection contributes one, and no nonempty selection contributes to that basis element. This contradicts the vanishing product. Hence every length-$L$ sequence contains a nonempty zero sum, proving $D(G)\le L$.

For the matching lower bound, use $n-1$ copies of each $e_i$. A selection has coordinate counts between zero and $n-1$, so can sum to zero modulo $n$ only when every count is zero. The sequence of length $d(n-1)$ is zero-sum-free. Therefore $D(G)=L$.

For $d=1$ and arbitrary $n$, the usual partial-sum argument gives the upper bound directly. The $n+1$ partial sums $0,g_1,g_1+g_2,\ldots,g_1+\cdots+g_n$ lie in a group of size $n$, so two are equal. The intervening nonempty selection sums to zero. The $n-1$ copies of a generator give the matching lower bound $D(\mathbb Z/n\mathbb Z)=n$.

The prime-power assumption in the algebra proof is essential to that proof: $(X_i-1)^n=X_i^n-1$ in characteristic $p$ uses $n=p^a$. The same argument does not establish the displayed formula for arbitrary composite $n$ with several prime factors.

Verification and audit: `verify.py` checks every multiset at the predicted threshold for the explicitly recorded small groups, using two independent operations: multiplication of the factors $1-X^g$ modulo $p$, and direct dynamic computation of subset sums. It separately verifies the lower-bound witnesses. `verification.json` records the complete finite ranges and counts. The algebraic proof covers all primes, exponents and dimensions without extrapolating finite data. All indexing, empty-selection and repeated-term conventions match the prompt.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); independent derivation, source checking, exact verification and scope audit.

Human contributors and roles: No human review or new human mathematical contribution is asserted.

References:

- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3384.txt
- N. Alon, *Tools from Higher Algebra*, author-hosted chapter, Theorem 6.2 and its complete group-ring proof, crediting Olson (1969). https://web.math.princeton.edu/~nalon/PDFS/tools1.pdf


## Reproducibility and review

Self-contained augmentation-ideal proof with matching lower witnesses;23750 complete small-group multisets checked by group-ring multiplication and independent subset-sum dynamic computation.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3384.txt
https://web.math.princeton.edu/~nalon/PDFS/tools1.pdf (Theorem 6.2 and complete group-ring proof)
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
