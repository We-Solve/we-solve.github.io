# Complete sign-pattern realizability through degree four

**Problem:** TOP-2200011. **Claim:** Partial result.

This contribution completely classifies the admissible pairs in degrees 1
through 4, including multiplicities, and gives an elementary infinite family
of excluded pairs in higher even degrees. It supplies explicit integer
coefficient witnesses for every admitted low-degree case. The classification
is classical; Kostov's published introduction credits the quartic obstruction
to Grabiner [K]. No novelty is claimed. The general classification in arbitrary
degree is not supplied.

## Precise classification

Multiplication by a nonzero scalar preserves the roots. Normalize the leading
sign to plus by flipping the whole pattern when necessary. For degrees at most
3, every Descartes-admissible pair is realizable. In degree 4, exactly the two
following normalized cases are excluded:

| Signs, leading to constant | Positive roots | Negative roots |
|:---:|---:|---:|
| `++-++` | 2 | 0 |
| `+---+` | 0 | 2 |

Every other admissible quartic case occurs. Negative leading coefficient cases
are obtained by flipping every sign, without changing the root counts. Thus
there are 70 normalized admissible cases in degrees 1 through 4: respectively
2, 6, 16 and 46. Exactly 68 occur.

## The obstruction, including double roots

Let

$$P(x)=x^4+a x^3-bx^2+cx+e,\qquad a,b,c,e>0.$$

If $P(t)=0$ for some $t>0$, then

$$P(-t)=P(t)-2at^3-2ct<0.$$

On the other hand, $P(0)=e>0$ and $P(x)\to+\infty$ as
$x\to-\infty$. The intermediate value theorem gives two distinct negative
roots, one on each side of $-t$. Consequently this sign pattern cannot have
two positive roots and no negative roots. The argument applies even if its
positive root is double; it does not assume a sign change at that root.

Replacing $x$ by $-x$ exchanges positive and negative roots and changes
`++-++` into `+---+`. This proves the second exclusion.

## An all-degree family of obstructions

For every integer $m\ge2$ and every $1\le j\le m-1$, consider the
degree-$2m$ pattern whose coefficients are all positive except the coefficient
of $x^{2j}$. It has exactly two sign changes, so $(2,0)$ is admissible.
It is not realizable. Indeed the odd-degree coefficients are positive, and
for any positive root $t$,

$$P(-t)-P(t)=-2\sum_{\ell\text{ odd}}a_\ell t^\ell<0.$$

The positive constant and leading coefficients again force two distinct
negative roots. Reflection gives the analogous family excluding $(0,2)$.
This is a sufficient obstruction family, not an exhaustive description of all
excluded higher-degree cases.

## Constructive completeness of the low-degree list

The table below gives every admitted normalized case. A coefficient list
$[c_d,\ldots,c_0]$ means $c_dx^d+\cdots+c_0$. The accompanying
`verification.json` records a factorization of each polynomial into factors
$x-r$ with $r>0$, factors $x+r$ with $r>0$, and monic quadratic factors
with negative discriminant. These factorizations prove the root counts exactly;
they use no numerical root finder. Every listed coefficient is nonzero.

`verify.py` reconstructs each product using integers, checks the sign pattern
and factor discriminants, and enumerates every admissible pair for every
normalized pattern of these degrees. Its asserted set difference is exactly
the two excluded cases proved above. The bounded search locates positive
witnesses; no search failure is used as an impossibility proof.

Run `python3 verify.py` with Python 3.9 or later, without `-O`. The run passed
all 68 factor certificates and the 70-case coverage check. The complete table
is also stored separately as `witness_table.md`.

| Degree | Signs | $(u,v)$ | Coefficients, descending |
|---:|:---:|:---:|---|
| 1 | `++` | (0,1) | `[1, 1]` |
| 1 | `+-` | (1,0) | `[1, -1]` |
| 2 | `+++` | (0,0) | `[1, 1, 1]` |
| 2 | `+++` | (0,2) | `[1, 3, 2]` |
| 2 | `++-` | (1,1) | `[1, 1, -2]` |
| 2 | `+-+` | (0,0) | `[1, -1, 1]` |
| 2 | `+-+` | (2,0) | `[1, -3, 2]` |
| 2 | `+--` | (1,1) | `[1, -1, -2]` |
| 3 | `++++` | (0,1) | `[1, 1, 1, 1]` |
| 3 | `++++` | (0,3) | `[1, 6, 11, 6]` |
| 3 | `+++-` | (1,0) | `[1, 1, 1, -3]` |
| 3 | `+++-` | (1,2) | `[1, 4, 1, -6]` |
| 3 | `++-+` | (0,1) | `[1, 1, -1, 2]` |
| 3 | `++-+` | (2,1) | `[1, 1, -10, 8]` |
| 3 | `++--` | (1,0) | `[1, 1, -3, -6]` |
| 3 | `++--` | (1,2) | `[1, 2, -1, -2]` |
| 3 | `+-++` | (0,1) | `[1, -1, 1, 3]` |
| 3 | `+-++` | (2,1) | `[1, -4, 1, 6]` |
| 3 | `+-+-` | (1,0) | `[1, -2, 2, -1]` |
| 3 | `+-+-` | (3,0) | `[1, -6, 11, -6]` |
| 3 | `+--+` | (0,1) | `[1, -1, -3, 6]` |
| 3 | `+--+` | (2,1) | `[1, -2, -1, 2]` |
| 3 | `+---` | (1,0) | `[1, -1, -1, -2]` |
| 3 | `+---` | (1,2) | `[1, -1, -10, -8]` |
| 4 | `+++++` | (0,0) | `[1, 1, 2, 1, 1]` |
| 4 | `+++++` | (0,2) | `[1, 3, 3, 3, 2]` |
| 4 | `+++++` | (0,4) | `[1, 10, 35, 50, 24]` |
| 4 | `++++-` | (1,1) | `[1, 1, 1, 3, -6]` |
| 4 | `++++-` | (1,3) | `[1, 11, 29, 1, -42]` |
| 4 | `+++-+` | (0,0) | `[1, 1, 2, -1, 3]` |
| 4 | `+++-+` | (0,2) | `[1, 4, 2, -1, 6]` |
| 4 | `+++-+` | (2,0) | `[1, 1, 1, -25, 22]` |
| 4 | `+++-+` | (2,2) | `[1, 12, 1, -102, 88]` |
| 4 | `+++--` | (1,1) | `[1, 1, 1, -1, -2]` |
| 4 | `+++--` | (1,3) | `[1, 5, 5, -5, -6]` |
| 4 | `++-++` | (0,0) | `[1, 1, -3, 1, 20]` |
| 4 | `++-++` | (0,2) | `[1, 1, -2, 2, 4]` |
| 4 | `++-++` | (2,2) | `[1, 1, -19, 11, 30]` |
| 4 | `++-+-` | (1,1) | `[1, 1, -1, 1, -2]` |
| 4 | `++-+-` | (3,1) | `[1, 1, -31, 71, -42]` |
| 4 | `++--+` | (0,0) | `[1, 2, -1, -2, 10]` |
| 4 | `++--+` | (0,2) | `[1, 3, -2, -2, 12]` |
| 4 | `++--+` | (2,0) | `[1, 1, -5, -7, 10]` |
| 4 | `++--+` | (2,2) | `[1, 1, -7, -1, 6]` |
| 4 | `++---` | (1,1) | `[1, 1, -2, -6, -4]` |
| 4 | `++---` | (1,3) | `[1, 4, -1, -16, -12]` |
| 4 | `+-+++` | (0,0) | `[1, -1, 2, 1, 3]` |
| 4 | `+-+++` | (0,2) | `[1, -1, 1, 25, 22]` |
| 4 | `+-+++` | (2,0) | `[1, -4, 2, 1, 6]` |
| 4 | `+-+++` | (2,2) | `[1, -12, 1, 102, 88]` |
| 4 | `+-++-` | (1,1) | `[1, -2, 1, 2, -2]` |
| 4 | `+-++-` | (3,1) | `[1, -5, 5, 5, -6]` |
| 4 | `+-+-+` | (0,0) | `[1, -2, 3, -2, 1]` |
| 4 | `+-+-+` | (2,0) | `[1, -4, 6, -5, 2]` |
| 4 | `+-+-+` | (4,0) | `[1, -10, 35, -50, 24]` |
| 4 | `+-+--` | (1,1) | `[1, -2, 2, -1, -6]` |
| 4 | `+-+--` | (3,1) | `[1, -11, 29, -1, -42]` |
| 4 | `+--++` | (0,0) | `[1, -2, -1, 2, 10]` |
| 4 | `+--++` | (0,2) | `[1, -1, -5, 7, 10]` |
| 4 | `+--++` | (2,0) | `[1, -3, -2, 2, 12]` |
| 4 | `+--++` | (2,2) | `[1, -1, -7, 1, 6]` |
| 4 | `+--+-` | (1,1) | `[1, -1, -2, 6, -4]` |
| 4 | `+--+-` | (3,1) | `[1, -4, -1, 16, -12]` |
| 4 | `+---+` | (0,0) | `[1, -1, -3, -1, 20]` |
| 4 | `+---+` | (2,0) | `[1, -1, -2, -2, 4]` |
| 4 | `+---+` | (2,2) | `[1, -1, -19, -11, 30]` |
| 4 | `+----` | (1,1) | `[1, -1, -1, -1, -2]` |
| 4 | `+----` | (1,3) | `[1, -1, -31, -71, -42]` |

## Attribution and limits

The low-degree classification agrees with [K, introduction, printed pp.40–41].
The proof and integer witness certificates above make this scoped result
self-contained, rather than requiring acceptance of a classification table
from the literature. Kostov's 2026 paper [K26] is a further primary source for
the broader realization problems, not a claim here that their arbitrary-degree
classification is resolved. The separate both-positive conjecture is handled
by a companion literature report for TOP-2200012; its degree-eleven result is
not needed to prove this degree-four classification.

Checked references:

1. **V. P. Kostov**, *Polynomials, sign patterns and Descartes' rule of signs*,
   Mathematica Bohemica **144** (2019), no.1, 39–67, introduction,
   DOI [10.21136/MB.2018.0091-17](https://doi.org/10.21136/MB.2018.0091-17).
   [Published full text](https://dml.cz/bitstream/handle/10338.dmlcz/147638/MathBohem_144-2019-1_4.pdf).
   The original Grabiner article was not separately retrieved; its priority is
   reported as credited by this checked source.
2. **V. P. Kostov**, *Three realization problems about univariate polynomials*,
   arXiv:2601.10529 (2026), [full preprint](https://arxiv.org/pdf/2601.10529).
   Read for the problem distinction and quartic discussion; no publication or
   complete proof audit of that preprint is asserted.
3. **We-Solve**, [exact TOP-2200011 prompt](https://we-solve.github.io/prompts/TOP-2200011.txt),
   retrieved from the official website repository on 18 October 2026. Its
   earlier-contribution section listed none at inspection.

OpenAI Codex, GPT-6 (exact serving revision and reasoning setting unknown),
performed source research, derivation, code and exposition. Gaven prompted and
authorized the research batch; no human mathematical review is asserted.
Original exposition/data: CC BY 4.0. Original verifier: Apache-2.0.


## Reproducibility and review

Standard-library verifier passed all 68 integer factorization witnesses, all nonreal quadratic discriminants, all coefficient signs and complete enumeration of 70 normalized admissible cases. Two excluded cases proved analytically, not by search failure.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

V. P. Kostov, Polynomials, sign patterns and Descartes’ rule of signs, Mathematica Bohemica 144 (2019), 39–67, introduction; https://doi.org/10.21136/MB.2018.0091-17 ; published PDF https://dml.cz/bitstream/handle/10338.dmlcz/147638/MathBohem_144-2019-1_4.pdf
V. P. Kostov, Three realization problems about univariate polynomials, arXiv:2601.10529 (2026); https://arxiv.org/pdf/2601.10529
Official TOP-2200011 prompt, https://we-solve.github.io/prompts/TOP-2200011.txt
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
