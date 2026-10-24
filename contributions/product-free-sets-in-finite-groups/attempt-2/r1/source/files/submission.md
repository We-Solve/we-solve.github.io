# The exact product-free maximum at every prime group order

Claim type: Partial result

Exact scope: For every prime p, the unique group of order p has largest product-free subset of size floor((p+1)/3); thus the prompt’s extremal problem is solved exactly at every prime order.

Identify the cyclic group C_p additively with F_p. We first prove the sumset estimate
\[
 |A+B|\ge\min(p,|A|+|B|-1)\tag{1}
\]
for nonempty subsets. Here equal summands are allowed, as required by the prompt.

The polynomial coefficient lemma needed for (1) is elementary. If |A|=a and |B|=b and a polynomial F(X,Y) has total degree at most a+b−2, its coefficient of X^{a−1}Y^{b−1} equals
\[
 \sum_{x\in A,y\in B}\frac{F(x,y)}{\prod_{u\in A\setminus\{x\}}(x-u)\prod_{v\in B\setminus\{y\}}(y-v)}.
\]
Check this on monomials. The one-variable Lagrange sums are zero for exponent below a−1 and one at a−1. For a monomial of the allowed total degree, either both exponents have exactly these values or at least one is smaller, proving the formula.

If a+b−1≤p and |A+B|≤a+b−2, enlarge A+B to a set C of exactly a+b−2 elements and apply the lemma to F=product_{c∈C}(X+Y−c). It vanishes on A×B, but its indicated coefficient is binomial(a+b−2,a−1), nonzero modulo p because all factorial arguments are <p. This is a contradiction. If a+b−1>p, choose nonempty subsets A'⊂A,B'⊂B with |A'|+|B'|−1=p, and apply the just-proved case. Then A'+B'=F_p. This proves (1).

For a nonempty sum-free A put a=|A|. Disjointness of A and A+A gives a+|A+A|≤p. The value p in the minimum in (1) is impossible, so
\[
 3a-1\le p,\qquad a\le\lfloor(p+1)/3\rfloor.
\]
The empty set cannot improve this maximum.

To attain it for odd p, use the interval of residues strictly between p/3 and 2p/3, endpoints included only when integral. Explicitly if p=3k+1 take {k+1,…,2k}, and if p=3k+2 take {k+1,…,2k+1}. In the first case its integer sums lie between 2k+2 and 4k; before or after subtracting p these residues miss the interval. In the second they lie between 2k+2 and 4k+2, and again miss it modulo p. The sizes are k and k+1 respectively. For p=3 take {1}; for p=2 take {1}. These reach the stated floor in every case.

Every group of prime order is cyclic: a nonidentity element has order dividing p and hence generates the group. There is therefore only one isomorphism type to compare at each such order, and the numerical minimum over groups of that order equals the value just found. Composite-order groups and growing nonabelian families remain unresolved by this calculation. No asymptotic extremizer among all finite groups is inferred.

Relation to earlier contributions. The earlier report proves quotient lifting, the half-density/index-two characterization and a reduction of power lower bounds to simple groups. It does not compute the exact prime-order maximum; the present sumset proof and matching construction supply that different infinite-order regime.

Verification. Source-only report: no program is attached. The advertised deduction is the written argument, with imported theorems identified explicitly. No numerical experiment, formal proof assistant verification, historical novelty, or human peer review is claimed.

References checked.

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_a0644402cf7b4b7b9227f842eb9c7e1e.txt


## Reproducibility and review

Source-only: literal prompt, prior full texts and stated references checked; written deduction audited by author, without formal or human verification.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_a0644402cf7b4b7b9227f842eb9c7e1e.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
