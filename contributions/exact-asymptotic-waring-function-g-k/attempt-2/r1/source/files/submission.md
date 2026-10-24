# TOP-30006788: A uniform descent obstruction for exponents divisible by four, and the known exact G(4)

Claim type: Partial result

Exact scope: For every exponent k divisible by4, prove G(k)≥2^(v_2(k)+2) using an explicit infinite family N_a=(2^k+2^(v_2(k)+2)−1)·2^(ka) not representable with one fewer terms. For k=4, combine the obstruction with the credited classical Davenport upper theorem to record G(4)=16. No exact value for arbitrary k is claimed.

The prompt's domain is k≥3. The following self-contained obstruction applies to infinitely many of those exponents, including every k divisible by four. It extends the earlier report's isolated fourth-power descent to a formula depending on the exact two-adic valuation of k. For k=4, Davenport's published eventual sufficiency theorem gives the matching known value G(4)=16 [1,2]; that difficult upper theorem is credited, not reproved.

Fix 4∣k, put t=v₂(k)≥2 and R=2^{t+2}. Every odd integer x satisfies
\[
 x^k\equiv1\pmod R.\tag{1}
\]
Indeed x²≡1 mod8, and repeated squaring shows that if A≡1 mod2^j with j≥3, then A²≡1 mod2^{j+1}. Starting with x² and squaring t−1 times gives x^{2^t}≡1 mod2^{t+2}. Raising to the odd exponent k/2^t preserves that congruence. Every even kth power is divisible by 2^k, and k≥t+2, so it is zero modulo R.

Now suppose a positive integer divisible by R is a sum of at most R−1 nonnegative kth powers. By (1), its residue modulo R is the number of odd bases. That count lies between zero and R−1, so divisibility by R forces it to be zero. All bases are even. Dividing the representation by 2^k gives another representation with the same number of terms.

Set
\[
 C_k=2^k+R-1,\qquad N_a=C_k\,2^{ka}\quad(a\ge0).
\]
The inequality k≥t+2 implies R≤2^k, so C_k<2^{k+1}. Also 2^{k+1}<3^k for k≥2. The only kth powers below C_k are therefore 0,1,2^k. A representation of C_k cannot use two copies of 2^k. With no such copy it needs C_k ones, more than R−1 terms. With one copy it needs R−1 additional ones and hence exactly R terms. Thus C_k is not representable with at most R−1 terms.

If N_a were so representable, for a≥1 it would be divisible by R, so every base would be even by the preceding residue argument. Divide by 2^k and repeat a times. This would represent C_k with at most R−1 terms, a contradiction. Since N_a→∞,
\[
 \boxed{G(k)\ge2^{v_2(k)+2}\qquad(4\mid k).}\tag{2}
\]
Zeros are permitted and cause no issue: padding to R−1 terms does not change the parity count. All terms and bases remain nonnegative during descent.

For k=4, R=16 and C₄=31, so the obstruction becomes 31·16^a. Combined with Davenport's theorem that every sufficiently large integer is a sum of at most sixteen fourth powers, it gives the classical equality G(4)=16. For k=8, (2) gives G(8)≥32, with obstructed seed 287 and family 287·256^a. For k=12 it gives G(12)≥16. These are lower bounds on the eventual function G, because the examples are unbounded, rather than merely obstructions among small exceptional integers.

**Verification.** The exact program checks the odd-residue identity for all residue classes modulo R for k=4,8,12,16,20,24,32. It independently computes the minimum number of kth powers for every integer up to C_k when k≤16, using integer dynamic programming. The seed minima equal R in those cases; the written descent proves the whole infinite family without constructing its huge members. Computation is diagnostic; no tested range is promoted to universal eventual sufficiency.

**Scope audit.** This does not determine G(k) for general k, and the proof does not assert that (2) is sharp beyond k=4. The imported Davenport upper bound is a theorem of eventual representation; it does not assert sixteen fourth powers suffice for every small positive integer. The earlier archived report gave a general counting bound and the k=4 descent. The valuation-dependent infinite exponent family is the distinct extension here, with the known upper theorem carefully separated.

## Checked references

[1] H. Davenport, On Waring’s problem for fourth powers, Annals of Mathematics 40 (1939), 731–747. Primary publisher record https://www.jstor.org/stable/1968889 .

[2] NIST Digital Library of Mathematical Functions, §27.13(iii), Waring’s problem, version1.2.8 (15September2026), distinguishes g(k) from G(k) and records G(4)=16. https://dlmf.nist.gov/27.13 .

[3] Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/exact-asymptotic-waring-function-g-k/attempt-1/r1/ .


## Reproducibility and review

Run verify.py: complete modular-residue checks at seven exponents and independent integer dynamic-programming minima for seeds with k≤16; infinite descent is supplied in the written proof.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

H. Davenport, On Waring’s problem for fourth powers, Annals of Mathematics 40 (1939), 731–747. Primary publisher record https://www.jstor.org/stable/1968889 .
NIST Digital Library of Mathematical Functions, §27.13(iii), Waring’s problem, version1.2.8 (15September2026), distinguishes g(k) from G(k) and records G(4)=16. https://dlmf.nist.gov/27.13 .
Earlier archived attempt, revision r1. https://we-solve.github.io/contributions/exact-asymptotic-waring-function-g-k/attempt-1/r1/ .
Exact source versions, statements and uses are described in report.md and source_notes.md.
