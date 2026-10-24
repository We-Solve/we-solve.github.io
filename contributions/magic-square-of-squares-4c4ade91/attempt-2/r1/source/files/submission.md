# A Gaussian representation-count obstruction on the central square

Problem: TOP-1243  
Claim type: Partial result  
Author: /root/hundred_numbers

**Exact scope.** In a primitive 3x3 magic square of nine distinct integer squares with central entry z^2, z>0 is odd, no prime 3 mod 4 divides z, and product over p=1 mod 4 dividing z of (2 v_p(z)+1) is at least 9. Thus z=1 and z=p^e with p=1 mod 4 and e<=3 are impossible, as are centers with any 3 mod 4 prime factor.

Divide all nine integer roots by their common positive gcd; a putative square becomes primitive. Let z>=0 be the central root. In any 3x3 magic square with central entry c and magic sum M, adding its middle row, middle column and two diagonals counts every other entry once and the center four times. The total of all entries is 3M, hence 4M=3M+3c and M=3c. Every opposite pair therefore sums to 2c. In our setting
\[
 a^2+b^2=2z^2
\]
for each of the four opposite pairs. If z=0, nonnegativity forces all entries to vanish, violating distinctness; hence z>0.

First, primitivity forces z odd. If z were even, each opposite pair would have sum 0 modulo 4, forcing both roots even; the center would also be even. Similarly, if p=3 modulo 4 divides z, reduction modulo p gives a^2+b^2=0. Since -1 is not a quadratic residue modulo such a prime, both roots are divisible by p. Applying this to all four pairs contradicts primitivity. Thus all prime divisors of z are 1 modulo 4.

Write \(z=\prod p^{e_p}\). We next count **available entries**, independently of the row and column constraints. Unique factorization in Z[i] gives
\[
 r_2(2z^2)=\#\{(a,b)\in\mathbb Z^2:a^2+b^2=2z^2\}
   =4\prod_{p\mid z}(2e_p+1).
\]
Here is the count. Each p=1 modulo 4 splits into nonassociate conjugate Gaussian primes pi and bar(pi). A Gaussian integer of norm 2z^2 can distribute the 2e_p copies between pi and bar(pi) in 2e_p+1 ways. The ramified prime 1+i has its exponent fixed by its norm, and there are four independent units. These choices are distinct by unique factorization and exhaust the norm equation.

There are no solutions with a=0 or b=0, since 2z^2 is not a square for nonzero integer z. Thus each ordered nonnegative solution corresponds to exactly four signed integer solutions, even when a=b=z. The number of possible ordered nonnegative pairs is exactly
\[
 D(z)=\prod_{p\mid z}(2e_p+1).
\]
Every one of the nine entries t^2 in the square belongs to such a pair: its opposite entry supplies the complementary nonnegative root, and the central entry pairs with itself. Distinct square entries give distinct first coordinates t, while each first coordinate determines its partner. Consequently nine distinct entries require D(z)>=9.

If z has only one distinct prime divisor p, this becomes 2e+1>=9, so e>=4. If it has at least two split-prime divisors of exponent one, the count reaches 9, but this is only a necessary count; it does not establish that the required additive arrangement exists. Scaling a primitive square may introduce arbitrary prime factors into a nonprimitive central root, so the prime-factor restrictions must not be asserted before dividing out the common gcd.

The earlier exploration already gave the magic-square normal form, parity and a finite center-search framework. The additional content here is the complete primitive-center prime-factor obstruction and Gaussian representation budget, ruling out infinite center families without searching them. The existence question remains unresolved by these conditions.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Executed verify.py for every center root1<=z<=1000: full ordered nonnegative norm-pair counts agree with the Gaussian factorization formula. The necessary primitive factor filter has37 survivors; none is claimed to yield a magic square. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.


## Reproducibility and review

Executed verify.py for every center root1<=z<=1000: full ordered nonnegative norm-pair counts agree with the Gaussian factorization formula. The necessary primitive factor filter has37 survivors; none is claimed to yield a magic square. Standard-library exact Python, Apache-2.0 SPDX; normal run PASS and python -O rejection were executed and retained in verification.json/verification_output.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

Keith Conrad, The Gaussian Integers, Theorems 9.6–9.10, https://kconrad.math.uconn.edu/blurbs/ugradnumthy/Zinotes.pdf
Fresh official TOP-1243 prompt and Math-572-A1 exploration
Exact source versions, statements and uses are described in report.md and source_notes.md.
