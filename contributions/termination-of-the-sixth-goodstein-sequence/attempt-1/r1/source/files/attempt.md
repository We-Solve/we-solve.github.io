> Source: [original issue #15](https://github.com/We-Solve/research/issues/15). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.

# The exact length of the sixth Goodstein sequence

Problem: **TOP-3336 / Math-3368**, *Termination of the sixth Goodstein Sequence* (OPG-2379).

Claim type: **Literature report with full resolution**, with attribution to the established fast-growing-hierarchy evaluation.

Scope: The catalogue starts at $g_0=6$ in hereditary base two and counts transitions to the first zero. With the functions defined below, its exact answer is

$$
\boxed{T=F_6(6)-3=E_6(5)-2.}
$$

The first zero is consequently the $(F_6(6)-2)$nd term when the initial six is called term one. We give a self-contained proof using only finite integer recursions and digit borrowing. This evaluates the particular sequence; it does not claim a new proof of the uniform Goodstein theorem or a new historical evaluation of this length.

Assumptions and limitations: Base changes precede subtraction, exactly as in the catalogue. Iterated-function notation in the answer is defined explicitly and is not exponentiation. No decimal expansion or exhaustive run of this enormous sequence is claimed. The known general evaluation is credited to Caicedo; the OPG discussion already displayed the corresponding first-zero term formula in 2010.

## 1. An exact integer expression

For a function $f$, write $f^{\langle j\rangle}$ for its $j$-fold composition, with $f^{\langle0\rangle}(x)=x$. Define, for nonnegative integers $d$ and positive integers $x$,

$$
F_0(x)=x+1,
\qquad
F_{d+1}(x)=F_d^{\langle x\rangle}(x).
\tag{1}
$$

Only the finite levels $0,1,\ldots,6$ are needed. This is the finite part of the Löb–Wainer fast-growing hierarchy, with the normalization used in Caicedo's paper. Its first levels are

$$
F_1(x)=2x,
\qquad F_2(x)=x2^x,
\qquad F_3(x)=(y\mapsto y2^y)^{\langle x\rangle}(x).
\tag{2}
$$

Thus $F_6(6)$ is an exact expression in a fixed hierarchy of finite integer iterations. It does not refer to hereditary base notation or to a search for a stopping time. In particular, for each fixed $d$, (1) defines an ordinary primitive recursive function by induction on the finite level $d$.

An alternative expansion of the answer is

$$
T=
F_5^{\langle5\rangle}\!\left(
 F_4^{\langle5\rangle}\!\left(
  F_3^{\langle5\rangle}\!\left(F_2^{\langle6\rangle}(6)\right)
 \right)
\right)-3.
\tag{3}
$$

For example, the innermost input in (3) is defined entirely by six applications of $u\mapsto u2^u$: $u_0=6$, $u_{i+1}=u_i2^{u_i}$ for $0\le i<6$. Formula (3) follows by repeatedly using $F_{d+1}(6)=F_d^{\langle6\rangle}(6)$ and splitting off the first application. It is not intended as a feasible numerical computation.

For the digit proof it is convenient to use the shifted hierarchy

$$
E_0(b)=b+1,
\qquad
E_{d+1}(b)=E_d^{\langle b+1\rangle}(b),
\qquad b\ge2.
\tag{4}
$$

Induction on $d$, and then on the number of iterates, gives

$$
E_d^{\langle j\rangle}(b)+1
=F_d^{\langle j\rangle}(b+1),
\qquad
\boxed{E_d(b)=F_d(b+1)-1.}
\tag{5}
$$

Indeed, the identity for $d=0$ is immediate. If $E_d(z)+1=F_d(z+1)$, its $j$-fold version follows by composition, and (4) gives
$E_{d+1}(b)+1=F_d^{\langle b+1\rangle}(b+1)=F_{d+1}(b+1)$.

## 2. Ordinary base changes and a block lemma

An **ordinary** base-change step writes the current integer in base $b$, replaces $b$ by $b+1$ while leaving its numerical exponents fixed, and subtracts one. This differs from a hereditary step, which also changes bases inside the exponents. We first prove an ordinary-step lemma; Section 4 will justify its use for the actual hereditary sequence.

If

$$
N=\sum_{i=0}^D c_i b^i,\qquad 0\le c_i<b,
$$

and $r$ is the least index with $c_r>0$, then an ordinary step has the explicit digit effect

$$
\sum_{i>r}c_i(b+1)^i
 +(c_r-1)(b+1)^r
 +b\sum_{i=0}^{r-1}(b+1)^i.
\tag{6}
$$

The last sum is empty for $r=0$. Formula (6) is just borrowing in the new base $b+1$; all newly filled lower digits equal $b$.

**Block lemma.** Fix a degree $d\ge0$ and current base $b\ge2$. Let $P(X)$ have nonnegative integer coefficients, no terms of degree below $d$, and suppose $P(b)+b^d$ has those indicated coefficients as valid base-$b$ digits. During ordinary base changes, one degree-$d$ unit can be completely removed while every coefficient belonging to $P$ remains unchanged. The base at the end of this block is exactly $E_d(b)$, and the remaining value is $P(E_d(b))$.

In particular, starting from the monomial $b^d$ with no context, the first zero occurs at base $E_d(b)$, after $E_d(b)-b$ transitions. The lemma permits a coefficient at degree $d$ inside $P$: it requires the *combined* initial coefficient at that degree to be less than $b$.

**Proof.** Induct on $d$.

For $d=0$, one step subtracts the designated constant unit. The base becomes $b+1=E_0(b)$ and the remaining value is $P(b+1)$.

Let $d\ge1$, and suppose the lemma is proved for all smaller degrees. By (6), the first transition from $P(b)+b^d$ produces

$$
P(b+1)+b\sum_{j=0}^{d-1}(b+1)^j.
\tag{7}
$$

Now clear the lower coefficients in increasing order of their degree $j=0,1,\ldots,d-1$. Immediately before clearing degree $j$, the current base is $E_j(b)$. For $j=0$, this is true because the first transition has made the base $b+1=E_0(b)$. The coefficient of degree $j$ is still $b$, and all lower coefficients are zero. Apply the degree-$j$ block lemma $b$ times. Each application removes one of those units and changes the current base by $E_j$; all higher coefficients stay fixed. Consequently the base at the end of this stage is

$$
E_j^{\langle b\rangle}(E_j(b))
=E_j^{\langle b+1\rangle}(b)
=E_{j+1}(b).
\tag{8}
$$

All uses of the induction hypothesis have valid digits. The unchanged coefficients were initially less than $b$; the new lower coefficients in (7) equal $b$, which is less than the current base $b+1$, and subsequent bases only increase. Borrowing inside a degree-$j$ block leaves every coefficient at degree at least $j$ other than the designated unit unchanged.

After the last stage, all terms added in (7) have disappeared, the current base is $E_d(b)$, and exactly $P(E_d(b))$ remains. Before this endpoint, the designated block has a positive digit somewhere; hence it has not vanished earlier. This proves both the contextual assertion and the first-zero assertion when $P=0$. $\square$

The proof also gives a general endpoint formula. For a valid initial ordinary expansion $\sum_{i=0}^D c_i b^i$, its final base is

$$
E_D^{\langle c_D\rangle}\circ\cdots\circ
E_1^{\langle c_1\rangle}\circ E_0^{\langle c_0\rangle}(b).
\tag{9}
$$

Process degree zero first, then degree one, and so on. At each stage the block lemma applies with the still unprocessed higher digits as context. Zero coefficients correspond to zero iterates. For the zero integer itself, (9) returns its initial base, as it should.

## 3. A complete small example

The ordinary process starting from $2^2=4$ in base two reaches zero at base

$$
E_2(2)=E_1^{\langle3\rangle}(2)=23,
\qquad E_1(b)=2b+1.
$$

Its 21 transitions can be grouped as follows. Each coefficient tuple lists the base digits from the largest displayed degree to the constant digit; the base shown is the current base.

| Base | Ordinary base expansion / digit tuple |
| --- | --- |
| $2$ | $b^2$, digits $(1,0,0)$ |
| $3$ | $2b+2$, digits $(2,2)$ |
| $4$ | $2b+1$, digits $(2,1)$ |
| $5$ | $2b$, digits $(2,0)$ |
| $6$ | $b+5$, digits $(1,5)$ |
| $7,8,9,10,11$ | $b+4,b+3,b+2,b+1,b$ |
| $12$ | constant $11$ |
| $13,14,\ldots,23$ | constants $10,9,\ldots,0$ |

This example is deliberately ordinary. The *hereditary* sequence starting from four has a changing exponent at its first transition and lasts much longer; Section 5 checks that convention separately.

## 4. The hereditary sequence starting from six

The first four transitions are exact:

| Transition index $t$ | Current base $t+2$ | $g_t$ in hereditary notation | Integer value |
| --- | --- | --- | --- |
| $0$ | $2$ | $2^{2^1}+2$ | $6$ |
| $1$ | $3$ | $3^{3^1}+2$ | $29$ |
| $2$ | $4$ | $4^{4^1}+1$ | $257$ |
| $3$ | $5$ | $5^{5^1}$ | $3125$ |
| $4$ | $6$ | $6^6-1=5\sum_{j=0}^{5}6^j$ | $46655$ |

For instance, the first step changes $2^{2^1}+2$ into $3^{3^1}+3$ and then subtracts one. The fourth changes $5^{5^1}$ into $6^{6^1}$ and then subtracts one.

At $t=4$, every exponent in the canonical base-six expansion lies in $\{0,1,\ldots,5\}$. These exponents are single digits in base six. From that moment on, hereditary and ordinary steps agree forever. To verify this claim inductively, suppose the current base is $b\ge6$ and every exponent is at most five. Hereditary base change does not alter any of these exponent digits, and subtraction cannot introduce an exponent larger than the largest one already present. Thus the same property holds at the next base. The initial rapidly changing hereditary exponents have ceased to change after the displayed borrowing step.

Apply (9) to the six digits equal to five at base six. The final base $B$ is

$$
B=E_5^{\langle5\rangle}\circ E_4^{\langle5\rangle}\circ
E_3^{\langle5\rangle}\circ E_2^{\langle5\rangle}\circ
E_1^{\langle5\rangle}\circ E_0^{\langle5\rangle}(6).
\tag{10}
$$

This composition telescopes through the hierarchy. First,

$$
E_0^{\langle5\rangle}(6)=11=E_1(5).
$$

For $j\ge1$,

$$
E_j^{\langle5\rangle}(E_j(5))
=E_j^{\langle6\rangle}(5)=E_{j+1}(5).
$$

Successively applying this identity to (10) gives

$$
\boxed{B=E_6(5)=F_6(6)-1.}
\tag{11}
$$

The current base at transition index $t$ is exactly $t+2$. Therefore reaching zero at base $B$ means

$$
T=B-2=E_6(5)-2=F_6(6)-3,
$$

which proves the claimed answer. Equivalently, the four displayed initial transitions followed by $B-6$ ordinary transitions give $4+(B-6)=B-2$ transitions in total.

## 5. A large independent convention check: the sequence starting from four

For hereditary starting value four, the first step is

$$
2^{2^1}\longmapsto3^{3^1}-1=2\cdot3^2+2\cdot3+2.
$$

At base three all exponents are at most two and are frozen. Formula (9), now with three digits equal to two, gives the endpoint base $E_3(2)$. Since

$$
E_2(b)=2^{b+1}(b+1)-1,
$$

we obtain

$$
\begin{aligned}
E_2(2)&=23,\\
E_2(23)&=24\cdot2^{24}-1=402653183,\\
E_3(2)&=E_2^{\langle3\rangle}(2)
=402653184\cdot2^{402653184}-1\\
&=3\cdot2^{402653211}-1.
\end{aligned}
$$

Hence the hereditary sequence starting from four uses exactly

$$
3\cdot2^{402653211}-3
$$

transitions, and its first zero has term number $3\cdot2^{402653211}-2$. These are the familiar two adjacent normalizations; Caicedo's Definition 1.5 and displayed $G(4)$ use the latter. This simultaneously checks the block indexing, the hereditary/ordinary distinction, and the final subtraction of two from the endpoint base.

## 6. Prior resolution, source scope, and verification

This answer is established mathematics. Caicedo's 2007 Theorem 1.11 gives the first-zero term number for every starting integer in terms of the Löb–Wainer hierarchy. The OPG page's September 2010 comment by Deedlit already displays $F_6(6)-2$ for the sixth sequence in that term-number convention. The catalogue explicitly asks for transitions, which is one less. The present contribution supplies a finite digit proof for this input and makes these conventions explicit; it claims no new historical resolution.

The accompanying verify3336.py was executed using exact integer arithmetic. All assertions passed; verification_results.json records the complete configurations and outcomes.

* The recursive hereditary base-change routine checks the prefix $6,29,257,3125,46655$ and its canonical digit trees at bases two through six, including the six digits equal to five at base six.
* It compares the next 1,000 hereditary and ordinary transitions, checking that all exponents remain at most five. This finite check supplements the all-time induction in Section 4.
* It directly simulates 377 manageable ordinary trajectory cases, totaling 457,694 transitions: all constant digits at bases two through twelve; all degree-at-most-one digit pairs at bases two through nine; and sixteen degree-two cases at bases two through five. Every actual transition is computed both by numerical base expansion and by an independent coefficient-borrow update. No endpoint formula skips or generates simulated steps.
* It checks 84 contextual degree-zero, degree-one and degree-two blocks, totaling 4,988 direct transitions. The surviving same-degree and higher coefficients are checked against the prescribed context, and the first clearing base is compared with the block formula.
* It checks 33 manageable $E_d(b)+1=F_d(b+1)$ identities and the closed forms for $d=0,1,2$, as well as the complete hereditary sequences starting at zero through three. The ordinary $2^2$ example and the displayed hereditary-four prefix are included.
* For the large starting-four convention check, only the first two manageable $E_2$ iterates and the exponent arithmetic are computed; its final value is retained symbolically. The sixth endpoint is likewise recorded symbolically and is explicitly marked as not numerically evaluated.

The run can be reproduced with Python 3 and its standard library:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/15) for this material.

Separate inherited same-model agents reviewed the proof and the finite-check design. No independent human mathematical verification or formal proof-assistant certification is claimed.

The proof does not infer the final value from experiments. Finite tests can check the hereditary prefix, manageable ordinary trajectories, and contextual block identities. They cannot execute the whole sixth sequence or print its length in decimal. Its exact length follows from the block induction and the six-level expression (1).

## 7. References and inspected material

1. **Andrés Eduardo Caicedo**, *Goodstein's function*, Revista Colombiana de Matemáticas **41**(2) (2007), 381–391. [Author's full published paper](https://andrescaicedo.wordpress.com/wp-content/uploads/2010/04/goodsteins.pdf). Inspected Definitions 1.1–1.7, Theorem 1.11, and the endpoint-base method in Section 2. The paper defines $G(n)$ as the one-based index of the first zero. Its full general theorem provides historical context and an independent evaluation; the finite proof above establishes the particular answer without invoking its transfinite induction.
2. **Open Problem Garden**, [Termination of the sixth Goodstein Sequence](https://www.openproblemgarden.org/op/termination_of_the_sixth_goodstein_sequence), posted 7 October 2008, attributed to Ronald L. Graham. Inspected the original sequence convention and the June–September 2010 discussion, including Deedlit's fast-growing-hierarchy evaluation. No claim is made about any prize's current availability or award.
3. **We-Solve / UnsolvedMath TOP-3336**, OPG-2379. [Catalogue statement](https://github.com/We-Solve/research/blob/main/problems/51/prb_51d47e1f6b76422b8d1495c662b0032a/statement.tex). Inspected the precise definition of $g_t$, starting base, and transition count $T$. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.

## Provenance and licences

Gaven (`@gavenren`) requested continued deeply investigated problems and authorized public submission. Source inspection, mathematical derivation and review, exposition, and original verification software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including inherited same-model agents. The established general hierarchy evaluation remains credited to Caicedo, with the prior OPG discussion acknowledged. No original historical solution or independent human mathematical verification in this session is claimed.

Original exposition and non-software result files: CC BY 4.0. Original software: Apache-2.0. Linked source material retains its original attribution and rights; the source papers are not redistributed.


<details>
<summary>Complete executable finite verification software (Python standard library; Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/15) for this material.

</details>



## Attribution and references from the original submission

### Who did the work
LLM only (people only prompted or submitted)

### LLMs used
Other (named below)

### Other LLMs
OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles
OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary-source inspection, input-specific finite mathematical derivation and exposition, exact verification software, independent same-model proof and convention review, and submission preparation. Separate inherited same-model agents checked the proof, indexing and software. No formal proof-assistant certification or independent human mathematical verification is claimed.

### People and roles
Gaven (@gavenren) requested continued deeply investigated contributions and authorized public submission. No human mathematical derivation or proof checking in this session is asserted. Andrés Eduardo Caicedo is credited for the established general evaluation; the prior OPG contributors, including Deedlit, are acknowledged.

### References
Full references and inspection scope are in the write-up. Primary source: Andrés Eduardo Caicedo, Goodstein's function, Revista Colombiana de Matemáticas 41(2) (2007), 381–391, author-hosted full paper; Definitions 1.1–1.7, Theorem 1.11 and the endpoint method in Section 2 were inspected. The OPG problem and 2010 discussion, and the exact We-Solve transition convention, were checked. The proof above uses only finite integer induction; no uninspected transfinite theorem is a proof dependency. Source papers are not redistributed.

