# TOP-3372: A finite-factor certificate valid for every Fermat index: repeated factors and Wieferich order

Claim type: Partial result

Exact scope: For any odd prime q and n≥0, q² divides F_n iff ord_q(2)=2^(n+1) and 2^(q−1)≡1 mod q². Exact enumeration proves that no prime q≤100000 is a repeated factor of any Fermat number, with no upper bound on n. The universal square-freeness conjecture remains open.

A useful audit separates the bound on a possible prime divisor from the bound on the Fermat index. The following equivalence proves an exclusion for **every** index n once a finite set of primes q has been classified. It does not assert that all prime divisors lie in that finite set.

**Order-lifting lemma.** Let q be an odd prime, d=ord_q(2), and e=v_q(2^d−1). Then
\[
 v_q(2^{q-1}-1)=e.\tag{1}
\]
Indeed d divides q−1. Write q−1=dk, where q∤k. Put A=2^d=1+q^eu with q∤u. The binomial expansion of A^k−1 has first term kq^eu, of valuation e; every later term has valuation at least 2e>e. Therefore the valuation is e. This argument proves exactly the lifting statement needed; it does not invoke a general lifting formula without checking q∤k.

If q divides F_n=2^{2^n}+1, then 2^{2^n}≡−1 mod q and hence d=2^{n+1}. Conversely, if d=2^{n+1}, the element 2^{2^n} has order two in the prime field, so it equals −1 and q divides F_n. Set A=2^{2^n}. Since q is odd and A≡−1 mod q, q∤A−1. Factoring A²−1 gives
\[
 v_q(F_n)=v_q(2^{2^{n+1}}-1)=v_q(2^d-1).
\]
Together with (1) this proves
\[
 \boxed{q^2\mid F_n\iff
 \bigl(\mathrm{ord}_q(2)=2^{n+1}\bigr)
 \ \text{and}\ \bigl(2^{q-1}\equiv1\pmod{q^2}\bigr).}\tag{2}
\]
It holds also for n=0 and n=1. The only prime divisor q=2 is absent because every F_n is odd. The base-2 Wieferich condition alone is insufficient; the order must be a power of two, and that order uniquely determines the possible Fermat index.

**A complete finite-prime exclusion with unbounded index.** The attached program enumerates every prime q≤100000 by an exact sieve. For each odd q it computes pow(2,q−1,q²). Precisely q=1093 and q=3511 satisfy the Wieferich condition in this bounded prime set. Their exact orders are
\[
 \mathrm{ord}_{1093}(2)=364=2^2\cdot7\cdot13,\qquad
 \mathrm{ord}_{3511}(2)=1755=3^3\cdot5\cdot13.
\]
Neither is a power of two. By (2), no q≤100000 is a repeated prime factor of any F_n, including indices far beyond any directly constructed term. This statement is stronger than merely checking F₀,…,F_N for an arbitrarily chosen N; it has a different quantifier order and an explicit remaining prime-divisor range.

Order certificates are short. The program verifies 2^d≡1 mod q and, for every distinct prime ℓ dividing d, 2^{d/ℓ}≠1 mod q. These conditions prove exact order d: a proper divisor of d omits at least one prime factor and would divide d/ℓ. Factoring q−1 by trial division is complete because the inputs here are at most 99999. All arithmetic is integer and the program rejects optimized Python execution that would disable assertions.

**What remains.** Equation (2) reduces a counterexample to finding a base-2 Wieferich prime whose order is a power of two; excluding only the known small Wieferich primes does not exclude all such primes. No claim about a current worldwide search bound or the complete list of Wieferich primes is made. The primary computational paper [1] supplies historical context for their search; our stated cutoff is supported by our own executed exact sieve, not borrowed from its numerical frontier. No earlier report is listed on this handle in the fresh prompt. The theorem is an elementary standard order/valuation reduction and is not claimed as novel.

## Checked references

[1] F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .


## Reproducibility and review

Run verify.py: complete prime sieve through 100000, modular Wieferich tests, exact order certificates for both hits, and exclusion of power-of-two order.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .
Exact source versions, statements and uses are described in report.md and source_notes.md.
