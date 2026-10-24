# TOP-3374: A finite-factor exclusion for all prime-exponent Mersenne numbers

Claim type: Partial result

Exact scope: For primes p,q, q² divides 2^p−1 iff q is an odd base-2 Wieferich prime with ord_q(2)=p. Exact enumeration excludes every q≤100000 as a repeated factor for every prime exponent p, without an exponent cutoff. No universal square-freeness conclusion is drawn.

The exponent prime p and a possible repeated divisor q play different roles. The exact order of 2 modulo q, together with a Wieferich congruence, gives a complete characterization of a repeated factor. This produces a rigorous finite-prime exclusion that is uniform over all prime exponents, not a table of finitely many Mersenne numbers.

Suppose first q² divides 2^p−1. The number is odd, so q is odd. The order d=ord_q(2) divides the prime p and cannot be one, because 2≢1 mod any prime. Thus d=p. Lagrange gives p∣q−1, so q≠p. Put q−1=pk; then q∤k. The factorization
\[
 (2^p)^k-1=(2^p-1)(1+2^p+\cdots+2^{p(k-1)})
\]
has second factor congruent to k modulo q. It is a q-adic unit. Consequently
\[
 v_q(2^{q-1}-1)=v_q(2^p-1).\tag{1}
\]
In particular q is a base-2 Wieferich prime. Conversely assume ord_q(2)=p and 2^{q−1}≡1 mod q². The same identity (1) applies, so v_q(2^p−1)≥2. Therefore
\[
 \boxed{q^2\mid2^p-1\iff
 \mathrm{ord}_q(2)=p\ \text{and}\
 2^{q-1}\equiv1\pmod{q^2}.}\tag{2}
\]
This includes p=2: M₂=3, whose single factor 3 has order two but is not Wieferich, so it is not repeated.

Equation (2) proves two distinctions that can otherwise cause false counterexamples. A Wieferich prime q can have composite order; such a q is not a repeated factor of a Mersenne number whose exponent is prime. And testing 2^{p−1} modulo p² uses the wrong parameter: it says something about a possible repeated factor equal to p, whereas q=p cannot divide M_p at all, since Fermat's theorem gives 2^p−1≡1 mod p for odd p.

**Uniform exclusion of small repeated divisors.** The exact program sieves all primes q≤100000. Its base-2 Wieferich hits are exactly 1093 and 3511, with orders 364 and 1755 respectively. It proves these orders by modular exponentiation plus certificates excluding d/ℓ for each prime ℓ∣d. Both orders are composite. Therefore (2) rules out every prime q≤100000 as a repeated divisor of **every** prime-exponent Mersenne number, regardless of the size of p. In this bounded divisor range the prime-exponent restriction has eliminated both candidates; the corresponding general-exponent Mersenne numbers 2^364−1 and 2^1755−1 do have repeated prime factors 1093² and 3511². These last divisibilities are also checked directly modulo q² and are not counterexamples to the prompt.

The program separately verifies that 364 and 1755 are composite, factors them exactly, and checks the modular examples just mentioned. The finite sieve is complete because every composite integer at most its bound has a prime divisor at most its square root, and the sieve marks the multiples of every such prime. No probable-prime test is used. No worldwide search limit is being asserted: 100000 is the actual range recomputed here.

**Boundary and scope audit.** The theorem classifies precisely what a counterexample would require, but it does not prove that no future Wieferich prime has prime order. Its quantified finite conclusion has no exponent bound yet retains a prime-divisor bound. Raising that bound alone never settles the universal claim without a separate argument limiting all potential q. The result is a standard elementary order-lifting reduction, not a new solution or a claim to have discovered the known Wieferich primes. The fresh prompt lists no earlier contributions; the supplied historical primary search reference [1] is credited only for context, and all reported arithmetic is independently reproducible.

## Checked references

[1] F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .


## Reproducibility and review

Run verify.py: complete sieve q≤100000, Wieferich tests, exact order/compositeness witnesses, and direct q² divisibilities at composite exponents.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

F. G. Dorais and D. Klyve, A Wieferich prime search up to 6.7×10^15, Journal of Integer Sequences 14 (2011), Article 11.9.2. https://cs.uwaterloo.ca/journals/JIS/VOL14/Klyve/klyve3.html .
Exact source versions, statements and uses are described in report.md and source_notes.md.
