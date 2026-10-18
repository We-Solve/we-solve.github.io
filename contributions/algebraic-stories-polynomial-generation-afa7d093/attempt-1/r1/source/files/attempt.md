> Source: [original issue #26](https://github.com/We-Solve/research/issues/26). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Exact finite-field cycle censuses through p = 31

**Problem:** TOP-1500021 (Math-3419; AMR-014-0021).

**Claim category:** Computational evidence, with elementary structural proofs.

## Scope and result

For a prime p, identify its field elements with their integer representatives 0,...,p−1 and put

\[
\phi(f)=\sum_{a\in\mathbb F_p:f(a)=0}x^{\bar a}.
\]

The exhaustive computations below find exactly one cycle, up to cyclic rotation, for every prime p≤31:

\[
0\longmapsto 1+x+\cdots+x^{p-1}\longmapsto x\longmapsto1\longmapsto0.
\]

The published source [1, §4.3, p.154, Problem O] already reports this classification for p≤17. The present calculations reproduce those cases and extend this finite census to p=19,23,29,31. They also give exact preperiod distributions through p=29 and sharp maximum preperiods through p=31. This is an executable, computer-assisted finite verification, not a proof for arbitrary primes. No claim of priority over unlocated later work is made.

Here the preperiod of a state is the least nonnegative number of iterations needed to reach a cycle. A cycle vertex therefore has preperiod zero. The binary column refers to polynomials of degree≤p−1 with all coefficients in {0,1}; the final column allows every polynomial in F_p[x], of any degree.

| p | Binary states checked | Cycles | Maximum binary preperiod | Maximum over all polynomials |
|---:|---:|---:|---:|---:|
| 2 | 4 | one, length 4 | 0 | 1 |
| 3 | 8 | one, length 4 | 2 | 3 |
| 5 | 32 | one, length 4 | 3 | 4 |
| 7 | 128 | one, length 4 | 4 | 5 |
| 11 | 2,048 | one, length 4 | 5 | 6 |
| 13 | 8,192 | one, length 4 | 5 | 6 |
| 17 | 131,072 | one, length 4 | 7 | 8 |
| 19 | 524,288 | one, length 4 | 7 | 8 |
| 23 | 8,388,608 | one, length 4 | 7 | 8 |
| 29 | 536,870,912 | one, length 4 | 10 | 11 |
| 31 | 2,147,483,648 | one, length 4 | 8 | 9 |

## Finite reduction and structural facts

Write I={0,...,p−1}, f_S=Σ_{j∈S}x^j for S⊆I, and

\[
F(S)=\{a\in\mathbb F_p:\sum_{j\in S}a^j=0\}.
\]

Use 0^0=1, as required for the constant monomial. Then φ(f_S)=f_{F(S)}. Every φ(f) is such a binary polynomial. Every periodic polynomial belongs to this finite set: if φ^r(f)=f with r>0, then f is itself an output of φ. Thus searching all 2^p subsets determines all cycles of φ on the whole polynomial ring.

The following observations are exact for every prime.

1. **The constant coefficient flips:** 0∈F(S) iff 0∉S, since f_S(0) is 1 or 0 according to whether 0∈S. Every cycle length is even. The evenness observation is already recorded in [1]; this gives its short proof.
2. **The coefficient of x disappears outside the standard cycle:** 1∈F(S) iff |S|≡0 mod p, hence iff S is empty or I. The maps of these two sets are I and {1}, respectively, and the standard four-cycle follows because Σ_{j=0}^{p−1}a^j vanishes precisely at a=1. Indeed, at a≠1 the sum is (a^p−1)/(a−1)=1, while at a=1 it is p=0. Consequently every nonstandard cycle avoids the exponent 1 at every vertex. Moreover, a nonempty subset avoiding 1 maps to another subset avoiding 1.
3. **Singletons cannot occur on a nonstandard cycle:** F({0}) is empty, and F({j})={0} for j>0. Thus every vertex of a nonstandard cycle has at least two elements.
4. For odd p, the field element −1 belongs to F(S) iff S contains equally many even and odd exponent representatives. Their difference is an integer of absolute value less than p, so its residue vanishes iff it is zero. This is an additional check on the transition evaluation.

In fact every state S on a nonstandard cycle has 2≤|S|≤p−2. For the upper bound, avoidance of exponent 1 means that a state of size p−1 would have to be I\{1}. A predecessor T would have a nonzero binary polynomial f_T of degree≤p−1 with exactly those p−1 roots. Hence f_T=c(x^p−x)/(x−1)=c(x+x²+⋯+x^{p−1}). Its binary coefficients force c=1, which puts exponent 1 in T, a contradiction.

These observations do not exclude the published nonstandard two-cycle at p=71. The certificate checker verifies that example directly, crediting [1].

## Sharp passage from binary to arbitrary polynomials

Suppose the maximum preperiod among binary polynomials is M>0. Then the maximum among all polynomials is exactly M+1.

The upper bound follows because one iteration enters the binary set. For the lower bound, choose S whose binary polynomial f_S has preperiod M and set

\[
h_S(x)=\prod_{a\in S}(x-a).
\]

Its field-valued root set is precisely S, so φ(h_S)=f_S. If h_S were binary, it would have preperiod M+1, contradicting the definition of M. It is therefore outside the binary set and not periodic; its preperiod is exactly M+1. This proves sharpness for every odd prime in the table. For p=2 all four binary states lie on the standard cycle, and x² is outside that set and maps to the constant polynomial 1, proving the sharp bound 1.

For p=19 a maximizing binary state is S={0,2,5,7,9,10}; for p=23 one is S={0,1,2,4,5,6,8,9,11,13,14,15,17}. Their product lifts have preperiod 8. For p=29 a maximizing state is encoded by the integer 2683965 under the convention below; its product lift has preperiod 11. The independent Python checker records the full orbits and every coefficient of these product witnesses.

## Exact distributions and finite witnesses

Encode S by the unsigned integer m(S)=Σ_{j∈S}2^j. The standard cycle has masks 0, 2^p−1, 2, 1. The number of binary states of each preperiod is:

| Preperiod | p=19 | p=23 | p=29 |
|---:|---:|---:|---:|
| 0 | 4 | 4 | 4 |
| 1 | 190,956 | 2,872,223 | 187,495,759 |
| 2 | 217,143 | 3,560,104 | 188,294,845 |
| 3 | 87,185 | 1,577,134 | 99,601,633 |
| 4 | 19,674 | 319,314 | 39,915,326 |
| 5 | 7,550 | 54,828 | 8,220,547 |
| 6 | 1,724 | 4,844 | 11,236,250 |
| 7 | 52 | 157 | 2,047,857 |
| 8 | 0 | 0 | 52,475 |
| 9 | 0 | 0 | 6,160 |
| 10 | 0 | 0 | 56 |
| Total | 524,288 | 8,388,608 | 536,870,912 |

The smallest maximizing masks are 1701, 191351, and 2683965, respectively. Each maximum has both an exhaustive upper-bound check and a direct Horner-evaluated orbit attaining it.

## Search algorithm and completeness

The supplied C++17 programs use only exact integers and arithmetic modulo p. There are no random samples in the census and no floating-point decisions. Runtime measurements are informational only.

`census.cpp` builds every transition in reflected Gray order: adjacent masks change one coefficient j, so every field evaluation updates by ±a^j mod p. Precomputed powers include a^0=1 even at a=0. The changed bit in step i is the index of the least significant set bit of i. Starting at the zero mask visits each coefficient subset exactly once. After computing the whole graph, repeatedly removing indegree-zero vertices leaves exactly the cycle vertices. Reverse removal order then gives each remaining state's depth and basin. Its optional `audit` argument reevaluates every transition by direct Horner evaluation, independently of the power-update method.

`reduced.cpp` removes coefficient bit 1 from storage. Its 2^(p−1) states are exactly the subsets avoiding exponent 1. All nonempty such states remain in the domain; empty and {0} are seeded as standard-cycle vertices at true preperiod zero, so their exceptional transitions can be treated as absorbing for the purpose of depths to that cycle. Path traversal finds every additional cycle or reaches an already classified vertex. If there are no extra cycles, a second full-domain Gray pass obtains each non-cycle state's exact depth as 1+depth(F(S)); the four standard vertices are counted separately. Every state is then included once in the histogram. The program aborts on a depth-byte overflow rather than silently truncating it. The largest declared run uses 1,342,177,280 bytes for its two principal arrays; it is capped at p=29 and has an explicit allocation guard.

`independent_audit.cpp` was written separately and uses direct Horner evaluation in ordinary numeric-mask order and path-based graph traversal. It does not use Gray updates or indegree peeling. At p=17,19,23 its complete cycle lists, histograms, maxima and first maximizing masks agree with `census.cpp`. Thus all 8,388,608 transitions at p=23 have been independently reevaluated, not just sampled. Reduced and full searches agree at p=17,19,23. The p=29 reduced run classifies 268,435,456 stored masks and evaluates all 536,870,912 inputs for the full histogram.

`check_certificates.py` is a dependency-free, separate Python implementation using Horner evaluation. It exhaustively reproduces p=2,3,5,7,11,13, checks the structural membership identities on every state there, verifies maximum-depth witnesses and product lifts for p=17,19,23,29, checks the p=31 image-depth-7 witness, and verifies the published p=71 two-cycle.

`image_census.cpp` gives a lower-memory exhaustive verification through p=31. Its first pass visits all 2^p inputs by Gray code and stores only the distinct images in a bitset, removing bit 1 and handling the two images with that bit separately as known cycle vertices. Every cycle lies in the image set. The program then evaluates the successor of every retained image by direct Horner evaluation, verifies closure by binary search in the image list, and classifies that much smaller graph by paths. At p=29 there are 114,354 retained images; at p=31 there are 199,233. Each count includes the two retained standard-cycle masks 0 and 1; adding the separately handled full mask and mask 2 gives the actual image cardinalities 114,356 and 199,235. The p=31 bitset uses 134,217,728 bytes. The final p=29 and p=31 runs also directly compare every 4,096th nonzero Gray step with Horner evaluation: 131,071 and 524,287 input spot checks respectively, all passing. These input checks are sampled; the image enumeration and the Horner evaluation of every retained image edge are exhaustive. This implementation uses a different graph domain and Horner evaluation on all its vertices, while its initial image enumeration shares the Gray-code technique with the other search programs.

To justify the maximum from this smaller graph, let M be the maximum preperiod in the full binary graph and D the maximum among image vertices, including the four standard-cycle vertices. For odd p the binary map is not injective: both 1 and 1+x^{p−1} have empty root set. Thus M>0. Every image vertex of depth d>0 has a predecessor of depth d+1, and a binary vertex of maximum depth M maps to an image vertex of depth M−1. Therefore M=D+1. The retained image histogram for p=31 is 0:2, 1:72735, 2:70180, 3:42370, 4:12103, 5:1706, 6:132, 7:5; adding the two omitted cycle vertices changes only the depth-zero count. Consequently D=7 and M=8. This is an image histogram, not the preperiod distribution on all 2^31 inputs. A directly checked depth-7 image witness has masks 100761972 → 537141249 → 1073873024 → 167772193 → 4325376 → 1753251841 → 4 → 1. Its membership in the image set is established by the exhaustive enumeration, which supplies the existence of a depth-8 binary predecessor.

## Reproduction and limits

Review provenance: a separate audit instance exhaustively recomputed the full p=17,19,23 graphs, reran the p=29 image census with its input spot checks, reviewed all four C++ sources and the reduction proofs, and independently checked the p=31 witness. The p=31 exhaustive run itself was performed by the computation instance. Both main and audit instances separately checked the explicit product-lift witnesses. Model review is distinguished from human review throughout.

Compile with a C++17 compiler, for example:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

The full graph program has a larger memory footprint than the reduced program; use the full and independent graph programs only through p=23 as in this report. Supply a prime input. Recorded outputs and machine-readable witness checks accompany the source.

No classification is established here for primes p≥37, no list of all possible even periods is obtained, and no general upper bound of 11 is proposed. In particular, the p=71 example shows that the sole-cycle conclusion cannot hold for all primes. The independent checks are LLM-authored computational reviews; there has been no human mathematical review or formal proof-assistant verification.

## Checked references

[1] R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, Arnold Mathematical Journal 4 (2018), 137–160, §4.3, pp.153–154, published Problem O. DOI: https://doi.org/10.1007/s40598-018-0088-z . Checked published PDF: https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf . Used for the definition, previously reported p≤17 census, period parity, standard four-cycle and p=71 two-cycle. Those facts are credited to the source.

[2] We-Solve, TOP-1500021 / Math-3419, https://we-solve.github.io/problems/algebraic-stories-polynomial-generation-afa7d093/ . Used to identify the catalogue task and its handle. The preprint's Problem N corresponds to published Problem O; this report uses the published numbering.

Original exposition and computations in this contribution: CC BY 4.0. Software: Apache-2.0. No third-party paper is included in the research bundle.


## Complete executable source

### census.cpp

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

### reduced.cpp

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

### independent_audit.cpp

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

### image_census.cpp

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

### check_certificates.py

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/26) for this material.

## Recorded exact output

### p19.txt

```text
p=19 states=524288 cycles=1 peeled=524284
cycle 1 length=4 basin=524288
  0 []
  524287 [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  2 [1]
  1 [0]
max_preperiod=7 first_state=1701 [0,2,5,7,9,10]
max_preperiod_orbit=1701,268704,263169,131076,266497,65544,262145,0
preperiod_histogram=0:4,1:190956,2:217143,3:87185,4:19674,5:7550,6:1724,7:52,
build_seconds=0.00762608 total_seconds=0.588222
transition_audit=ALL_EXACT_HORNER
```

### p23-audited.txt

```text
p=23 states=8388608 cycles=1 peeled=8388604
cycle 1 length=4 basin=8388608
  0 []
  8388607 [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  2 [1]
  1 [0]
max_preperiod=7 first_state=191351 [0,1,2,4,5,6,8,9,11,13,14,15,17]
max_preperiod_orbit=191351,297472,295041,4263936,65665,131076,4194305,0
preperiod_histogram=0:4,1:2872223,2:3560104,3:1577134,4:319314,5:54828,6:4844,7:157,
build_seconds=0.120274 total_seconds=14.0678
transition_audit=ALL_EXACT_HORNER
```

### reduced-p29.txt

```text
p=29 full_states=536870912 reduced_states=268435456 extra_cycles=0 reduced_max_preperiod=10
full_max_preperiod=10 first_state=2683965
preperiod_histogram=0:4,1:187495759,2:188294845,3:99601633,4:39915326,5:8220547,6:11236250,7:2047857,8:52475,9:6160,10:56,
build_seconds=5.09674 total_seconds=32.4863
```

### image-p29-audited.txt

```text
p=29 full_states=536870912 image_bitset_bytes=33554432 compressed_image_states=114354 extra_cycles=0 sampled_input_Horner_checks=131071
image_preperiod_histogram=0:2,1:40234,2:32468,3:26366,4:10975,5:2646,6:899,7:756,8:4,9:4,
full_max_preperiod=10
maximum_image_mask=35727376 image_orbit=35727376,6293505,403836928,33554945,134218240,135169,516,272638577,69730304,1
image_enumeration_seconds=8.40587 total_seconds=8.76788
```

### independent-image-p29.txt

```text
p=29 full_states=536870912 image_bitset_bytes=33554432 compressed_image_states=114354 extra_cycles=0 sampled_input_Horner_checks=131071
image_preperiod_histogram=0:2,1:40234,2:32468,3:26366,4:10975,5:2646,6:899,7:756,8:4,9:4,
full_max_preperiod=10
maximum_image_mask=35727376 image_orbit=35727376,6293505,403836928,33554945,134218240,135169,516,272638577,69730304,1
image_enumeration_seconds=8.08132 total_seconds=8.44475
```

### image-p31-audited.txt

```text
p=31 full_states=2147483648 image_bitset_bytes=134217728 compressed_image_states=199233 extra_cycles=0 sampled_input_Horner_checks=524287
image_preperiod_histogram=0:2,1:72735,2:70180,3:42370,4:12103,5:1706,6:132,7:5,
full_max_preperiod=8
maximum_image_mask=100761972 image_orbit=100761972,537141249,1073873024,167772193,4325376,1753251841,4,1
image_enumeration_seconds=34.7644 total_seconds=35.6375
```



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected the problem, checked primary sources, developed structural arguments, wrote the report and independent Python checks, assembled and submitted the contribution.
OpenAI Codex (GPT-6), computation instance | version: unknown | reasoning: unknown | role: wrote the full, reduced and image-set C++ censuses, executed exact enumerations and modular-power witness checks.
OpenAI Codex (GPT-6), audit instance | version: unknown | reasoning: unknown | role: reviewed proofs and code, wrote a separate direct-Horner graph census and witness checks, exhaustively audited p=17,19,23 and reran the p=29 image census.
OpenAI Codex (GPT-6), scouting instance | version: unknown | reasoning: unknown | role: researched a different candidate problem during selection; did not author this contribution's mathematical results or code.

### People and roles

Gaven (@gavenren): prompted the work and authorized public submission. No human mathematical review was performed. Authors of credited prior literature were not session collaborators.

### References

R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, Algebraic Stories from One and from the Other Pockets, Arnold Mathematical Journal 4 (2018), 137–160, §4.3, pp.153–154, published Problem O. DOI https://doi.org/10.1007/s40598-018-0088-z ; checked published PDF https://amj.math.stonybrook.edu/pdf-Springer-final/018-0088.pdf . Used: definition, previously reported uniqueness through p=17, evenness, standard four-cycle, and p=71 two-cycle.
We-Solve, TOP-1500021 / Math-3419, https://we-solve.github.io/problems/algebraic-stories-polynomial-generation-afa7d093/ . Used: task statement, identifiers and source mapping.

