> Source: [original issue #23](https://github.com/We-Solve/research/issues/23). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# A degree-twenty-four counterexample to the shifted coefficient-parity bound

Problem: **TOP-2200014 / Math-3464**, *Problems Around Polynomials — Conjecture 9* (AMR-021-0014).

Claim type: **literature report**, including a complete explicit disproof of the recorded universal bound.

Scope: The positive-coefficient polynomial

$$
\boxed{P(x)=(x+1)^{22}(38x^2-188x+326)}
\tag{1}
$$

has exactly twenty-two real roots counted with multiplicity, whereas the catalogue's **shifted** coefficient-parity statistic is $v_9(P)=20$. We give its full coefficient and shifted-difference table, and prove a family of counterexamples in every degree $n\ge24$ with

$$
\boxed{N_{\mathbb R}(F_n)=n-2>n-4=v_9(F_n).}
\tag{2}
$$

The disproof and the primitive-family construction are due to **Olga Katkova, Boris Shapiro and Anna Vishnyakova**, *In search of Newton-type inequalities*, Section 5, published in *Journal of Mathematical Analysis and Applications* 538 (2024), article 128349. They show that the shifted conjecture fails in sufficiently large degrees. The calculations below put that family in closed form, identify all selected indices, and provide a concrete degree-twenty-four certificate. No new resolution or historical priority is claimed.

Assumptions and limitations: All coefficients are strictly positive. Real roots are counted with multiplicity, as required by the exact statement. An index is selected when its shifted difference is **strictly positive**. None of the shifted differences in our counterexamples is zero, so no tie convention is used. Degree twenty-four is the first counterexample within the particular family examined below over its defined range $n\ge15$; we do not claim it is the minimum degree among all possible polynomials. The proof is elementary polynomial algebra and exact integer arithmetic, with no numerical root approximation.

## 1. The statistic that must be computed

Write a degree-$n$ polynomial as $f(x)=\sum_{j=0}^n a_jx^j$, with $a_j>0$ throughout, and set $a_{-1}=a_{n+1}=0$. In this problem the local quantities are

$$
\widetilde c_j=(j+1)a_j^2-j a_{j-1}a_{j+1}
\qquad(0\le j\le n).
\tag{3}
$$

Select exactly the indices for which $\widetilde c_j>0$, in increasing order. The statistic $v_9(f)$ counts parity changes between consecutive indices in this selected list. The two endpoints are always selected because

$$
\widetilde c_0=a_0^2>0,\qquad
\widetilde c_n=(n+1)a_n^2>0.
$$

The conjecture is $N_{\mathbb R}(f)\le v_9(f)$. The weights in (3) matter: for an interior index define

$$
q_j(f)=\frac{a_j^2}{a_{j-1}a_{j+1}}>0.
$$

Then the exact selection rule is

$$
\boxed{
\widetilde c_j>0\quad\Longleftrightarrow\quad
q_j(f)>\frac{j}{j+1}.
}
\tag{4}
$$

This follows by dividing (3) by the positive quantity $a_{j-1}a_{j+1}$. All following comparisons use the threshold in (4).

## 2. A complete degree-twenty-four certificate

For (1), the coefficients can be computed by

$$
a_j=326\binom{22}{j}-188\binom{22}{j-1}
 +38\binom{22}{j-2},
\tag{5}
$$

where an out-of-range binomial coefficient is zero. Here is every coefficient and every shifted difference (3), listed in ascending powers. The entries are integers.

| $j$ | $a_j$ | $\widetilde c_j$ |
|---:|---:|---:|
| 0 | 326 | 106276 |
| 1 | 6984 | 74338704 |
| 2 | 71208 | 8794168128 |
| 3 | 459448 | 394916071264 |
| 4 | 2103948 | 8775575523792 |
| 5 | 7268184 | 110235412891296 |
| 6 | 19651016 | 846662913135424 |
| 7 | 42570792 | 4178913446643408 |
| 8 | 75018042 | 13690136363040324 |
| 9 | 108522832 | 30377077174435552 |
| 10 | 129442896 | 46156902434032896 |
| 11 | 127303344 | 48159575062913664 |
| 12 | 102757928 | 34312829998097728 |
| 13 | 67395888 | 16431783006328704 |
| 14 | 35302608 | 5123571429917952 |
| 15 | 14382544 | 972957153837856 |
| 16 | 4412826 | 92104477795044 |
| 17 | 1038312 | $-788604193872$ |
| 18 | 269192 | $-1006327990976$ |
| 19 | 127512 | $-903295008$ |
| 20 | 63756 | 28582834896 |
| 21 | 22264 | 4253549344 |
| 22 | 4968 | 250267968 |
| 23 | 648 | 5735664 |
| 24 | 38 | 36100 |

All twenty-five coefficients are positive, so $P$ satisfies the coefficient hypothesis. The shifted differences are negative exactly at indices $17,18,19$. The selected list is therefore

$$
0,1,\ldots,16,20,21,22,23,24.
\tag{6}
$$

The first part, zero through sixteen, contributes sixteen parity changes. The gap from sixteen to twenty is even-to-even and contributes none. The four steps from twenty through twenty-four contribute four. Hence

$$
v_9(P)=16+0+4=20.
\tag{7}
$$

The quadratic in (1) has discriminant

$$
(-188)^2-4\cdot38\cdot326=-14208<0.
$$

It has no real zero. Its value at $x=-1$ is $38+188+326=552\ne0$, so the root $-1$ of $P$ has multiplicity exactly twenty-two. These are all its real roots, counted with multiplicity. Consequently

$$
\boxed{N_{\mathbb R}(P)=22>20=v_9(P),}
\tag{8}
$$

which already disproves the full universal assertion in the actual catalogue.

For shorter arithmetic checks on the excluded indices, the same coefficients give

$$
q_{17}(P)=\frac{108}{119}<\frac{17}{18},\qquad
q_{18}(P)=\frac{133}{243}<\frac{18}{19},\qquad
q_{19}(P)=\frac{18}{19}<\frac{19}{20}.
\tag{9}
$$

In the last comparison, $18\cdot20=360<361=19^2$, so its small gap is nevertheless strictly positive in the required direction. Equations (5), (3) and the table give a finite exact certificate for every sign, including the endpoint cases.

## 3. A closed-form polynomial family and all its coefficients

For every integer $n\ge15$, define

$$
\boxed{
F_n(x)=(x+1)^{n-2}
 \left(38(x+1)^2-11n(x+1)+n(n-1)\right).
}
\tag{10}
$$

The polynomial in (1) is $F_{24}$. At $n=15$, (10) gives the integer scaling

$$
F_{15}(x)=(x+1)^{13}(38x^2-89x+83)
$$

of the degree-fifteen seed used in Katkova–Shapiro–Vishnyakova.

Introduce the positive quadratic function

$$
h(s)=s^2-12s+38=(s-6)^2+2.
$$

Every coefficient of $F_n$ has the explicit expression

$$
\boxed{A_j^{(n)}=[x^j]F_n(x)=\binom nj h(n-j)>0
\qquad(0\le j\le n).}
\tag{11}
$$

To verify it, expand (10) as

$$
38(x+1)^n-11n(x+1)^{n-1}
 +n(n-1)(x+1)^{n-2}.
$$

The coefficient of $x^j$ is

$$
38\binom nj-11n\binom{n-1}{j}
 +n(n-1)\binom{n-2}{j}.
$$

Using

$$
n\binom{n-1}{j}=(n-j)\binom nj,\qquad
n(n-1)\binom{n-2}{j}=(n-j)(n-j-1)\binom nj
$$

proves (11), with the usual zero convention covering the endpoint coefficients. This also proves positivity for the whole family without relying on a finite list of numerical checks.

The degree is exactly $n$, with leading coefficient $h(0)=38$. In the variable $y=x+1$, the quadratic factor is $38y^2-11ny+n(n-1)$. Its discriminant is

$$
121n^2-152n(n-1)=n(152-31n)<0
\qquad(n\ge15).
$$

Its value at $y=0$ is $n(n-1)>0$. Thus $F_n$ has exactly one distinct real root, $-1$, with multiplicity exactly $n-2$. In particular,

$$
N_{\mathbb R}(F_n)=n-2.
\tag{12}
$$

## 4. Determining every shifted-difference sign

For $1\le j\le n-1$, put $s=n-j$. Formula (11) yields

$$
q_j(F_n)=
\frac{(j+1)(s+1)}{js}
\frac{h(s)^2}{h(s-1)h(s+1)}.
\tag{13}
$$

The binomial factor $(j+1)(s+1)/(js)$ is strictly greater than one. A direct calculation gives

$$
\boxed{h(s)^2-h(s-1)h(s+1)=2(s-6)^2-5.}
\tag{14}
$$

For integer $s\notin\{5,6,7\}$, (14) is positive. At all corresponding indices, $q_j(F_n)>1>j/(j+1)$; by (4), the shifted difference is strictly positive. The two endpoints are strictly positive as well. Only the three positions

$$
j=n-7,\quad n-6,\quad n-5
\tag{15}
$$

remain to be examined.

At these positions, $h(5)=3$, $h(6)=2$, $h(7)=3$ and $h(4)=h(8)=6$. Equation (13) becomes:

| Position $j$ | $q_j(F_n)$ | Condition equivalent to $\widetilde c_j<0$ |
|:---:|:---:|:---:|
| $n-7$ | $\displaystyle\frac67\frac{j+1}{j}$ | $j^2-12j-6>0$ |
| $n-6$ | $\displaystyle\frac{14}{27}\frac{j+1}{j}$ | $13j^2-28j-14>0$ |
| $n-5$ | $\displaystyle\frac9{10}\frac{j+1}{j}$ | $j^2-18j-9>0$ |

These conditions follow by comparing each displayed ratio with $j/(j+1)$ and multiplying by its positive denominators. For example, in the third row the comparison is

$$
\frac9{10}\frac{j+1}{j}<\frac{j}{j+1}
\quad\Longleftrightarrow\quad
9(j+1)^2<10j^2
\quad\Longleftrightarrow\quad j^2-18j-9>0.
$$

For $n\ge24$, the first row has $j\ge17$; at $j=17$, its last expression is $79>0$, and it increases thereafter. The second row has $j\ge18$; at $j=18$, its expression is $3694>0$, and it too increases thereafter. The third row has $j\ge19$; at $j=19$, its expression is $10>0$, again increasing thereafter. Therefore all three shifted differences in (15) are strictly negative for every $n\ge24$.

Combining this with (14) proves the complete sign classification:

$$
\widetilde c_j(F_n)
\begin{cases}
<0,&j\in\{n-7,n-6,n-5\},\\
>0,&\text{all other }j\in\{0,\ldots,n\},
\end{cases}
\qquad n\ge24.
\tag{16}
$$

In particular, none of these differences is zero. This establishes the exact strict-positive selection rule for every member of the counterexample family.

## 5. The parity count and the threshold within this family

The full index list $0,1,\ldots,n$ has $n$ parity changes. Under (16), removing $n-7,n-6,n-5$ replaces the four consecutive steps from $n-8$ to $n-4$ by one gap of length four. Its endpoints have the same parity, so it contributes no change, while every remaining consecutive step still changes parity. Therefore

$$
v_9(F_n)=n-4\qquad(n\ge24).
\tag{17}
$$

Together, (12) and (17) prove (2) in every claimed degree.

The threshold can be checked exactly within this same family. For $n\ge15$, the first row of the sign table in Section 4 becomes negative exactly when $n\ge20$: its expression is $-6$ at $j=12$ ($n=19$) and $7$ at $j=13$ ($n=20$), and is increasing throughout $j\ge8$. The second row is already negative for all $n\ge15$, since its expression is $787>0$ at $j=9$ and increases thereafter. The third row becomes negative exactly when $n\ge24$: its expression is $-9$ at $j=18$ ($n=23$) and $10$ at $j=19$ ($n=24$), and is increasing throughout $j\ge10$.

No equality occurs in these ranges. Thus the complete family behavior is:

| Degrees | Excluded indices under the shifted rule | $v_9(F_n)$ | $N_{\mathbb R}(F_n)$ |
|:---:|:---:|:---:|:---:|
| $15\le n\le19$ | $n-6$ | $n-2$ | $n-2$ |
| $20\le n\le23$ | $n-7,n-6$ | $n-2$ | $n-2$ |
| $n\ge24$ | $n-7,n-6,n-5$ | $n-4$ | $n-2$ |

For the first row, deleting one index changes two parity transitions into an even gap, losing two changes. For the second, deleting two consecutive indices changes three transitions into an odd gap, also losing two. The third row was proved in (17). This explains why the degree-twenty-four instance is needed for this shifted statistic. It is a statement about (10), not a nonexistence result for other polynomials of degrees below twenty-four.

## 6. Relation to the published primitive construction, and distinct roots

For $n\ge16$, differentiation of (10) gives

$$
F_n'=nF_{n-1},\qquad F_n(-1)=0.
$$

Katkova–Shapiro–Vishnyakova start with

$$
Q_{15}(x)=\frac{1}{720720}
(x+1)^{13}(38x^2-89x+83)
$$

and define $Q_n(x)=\int_{-1}^{x}Q_{n-1}(t)\,dt$ for $n\ge16$. The exact scalar relation is

$$
\boxed{Q_n=\frac{15!}{720720\,n!}F_n\qquad(n\ge15).}
\tag{18}
$$

It follows from the derivative identity, the value at $-1$, and the starting case. A positive scalar multiplies each shifted difference by its square, and does not affect roots. Thus the family used here belongs to the published primitive construction, with its degree and shifted-difference comparisons explicitly determined by (11)–(16).

Although multiplicity is part of the catalogue statement, the failure also persists for appropriately split real roots. This can be proved without assuming that arbitrary perturbations of a multiple real root remain real. Fix $n\ge24$, write the quadratic factor of (10) in $x$ as $B_n(x)$, and consider the specific direction of perturbation

$$
F_{n,\varepsilon}(x)=B_n(x)
\prod_{r=1}^{n-2}(x+1+r\varepsilon),\qquad \varepsilon>0.
\tag{19}
$$

The coefficients of (19) converge to those of $F_n$ as $\varepsilon\to0$. There are finitely many coefficient-positivity conditions and shifted-difference sign conditions in (11) and (16), and all are strict. Each is a continuous function of the coefficients, so all the same signs hold for sufficiently small $\varepsilon>0$. In particular, $v_9(F_{n,\varepsilon})=n-4$ for such $\varepsilon$.

Its $n-2$ linear factors have distinct negative roots $-1-r\varepsilon$. The fixed quadratic $B_n$ has no real roots and has nonzero discriminant. Hence all roots of (19) are simple, and it has exactly $n-2$ distinct negative real roots. A positive rational $\varepsilon$ can be chosen inside the resulting open interval. This proves existence of rational-coefficient counterexamples with distinct real roots in every degree $n\ge24$. The concrete polynomial (1) and its full arithmetic table already suffice for the exact multiplicity convention asked in the catalogue.


### An explicit certificate with twenty-two distinct rational roots

The preceding continuity argument proves existence for every claimed degree. For a fully specified finite example, define

$$
\boxed{Q(x)=\frac{38x^2-188x+326}{1250}
\prod_{\substack{79\le r\le121\\r\ {\rm odd}}}(100x+r).}
\tag{20}
$$

There are twenty-two linear factors. The quadratic has content two, and exactly four linear factors, those with $r=85,95,105,115$, have content five; every other linear factor is primitive. Dividing these factors individually by their contents accounts for $2\cdot5^4=1250$ and exhibits $Q$ as a product of integer polynomials. The exact verifier also confirms that its full coefficient vector has content one.

The real roots are exactly

$$
-\frac{79}{100},-\frac{81}{100},\ldots,-\frac{121}{100}.
\tag{21}
$$

They are distinct, negative and separated by $1/50$. The quadratic still has discriminant $-14208$, so it supplies two distinct nonreal roots. Thus all twenty-four roots of $Q$ are simple.

For a direct coefficient certificate, write $Q(x)=\sum_{j=0}^{24}b_jx^j$ and
$\widetilde d_j=(j+1)b_j^2-jb_{j-1}b_{j+1}$, with the two outside coefficients zero. Exact factor multiplication gives the following table. Powers of ten shorten the notation for the displayed exact integers.

| $j$ | $b_j$ | Sign of $\widetilde d_j$ |
|---:|---:|:---:|
| 0 | $21789962301132936755693253591486906813780573$ | $+$ |
| 1 | $474762184617697607742791790367930028745715326$ | $+$ |
| 2 | $4919150583346622260771540584577631221818428349$ | $+$ |
| 3 | $32228834904320525942710058362856741372305776\cdot10^{3}$ | $+$ |
| 4 | $149743775397499409460229181118543833077059306\cdot10^{3}$ | $+$ |
| 5 | $52445127061221181674256327469353984466101728\cdot10^{4}$ | $+$ |
| 6 | $143645179735844005010318856748825678928128176\cdot10^{4}$ | $+$ |
| 7 | $3149978575039109620774550163536075349152\cdot10^{9}$ | $+$ |
| 8 | $56145667220198971733421372221633604328944\cdot10^{8}$ | $+$ |
| 9 | $8209053775655567851050718202865683392\cdot10^{12}$ | $+$ |
| 10 | $9888727356559406618041014531065831456\cdot10^{12}$ | $+$ |
| 11 | $981436525633132698254360882482176\cdot10^{16}$ | $+$ |
| 12 | $798852876284408511836164347631264\cdot10^{16}$ | $+$ |
| 13 | $52792665674798168469891859136\cdot10^{20}$ | $+$ |
| 14 | $27839426697008732891334670176\cdot10^{20}$ | $+$ |
| 15 | $1140516095744190103219072\cdot10^{24}$ | $+$ |
| 16 | $351089897356070403870944\cdot10^{24}$ | $+$ |
| 17 | $823660219527817584\cdot10^{29}$ | $-$ |
| 18 | $2108870112877378576\cdot10^{28}$ | $-$ |
| 19 | $100014285650048\cdot10^{32}$ | $-$ |
| 20 | $50468798462544\cdot10^{32}$ | $+$ |
| 21 | $1773015904\cdot10^{36}$ | $+$ |
| 22 | $396901616\cdot10^{36}$ | $+$ |
| 23 | $5184\cdot10^{40}$ | $+$ |
| 24 | $304\cdot10^{40}$ | $+$ |

Every $b_j$ is positive. The only negative shifted differences are

$$
\begin{aligned}
\widetilde d_{17}&=-375360024758830872708470594773202478427648\cdot10^{52},\\
\widetilde d_{18}&=-63780689347224003311675319116405632256\cdot10^{56},\\
\widetilde d_{19}&=-21639206681446417851610576289536\cdot10^{60}.
\end{aligned}
$$

All remaining shifted differences are strictly positive, as indicated in the table. These sign statements are finite integer subtractions using the displayed coefficients. The exact values of all twenty-five differences are also recorded in the verification output. Consequently the selected list is again (6), and

$$
\boxed{\#\{x\in\mathbb R:Q(x)=0\}=22>20=v_9(Q).}
\tag{22}
$$

This explicit certificate shows that counting distinct real roots instead of multiplicities would also fail to give the proposed bound.

## 7. Independent verification

The original accompanying verifier, `verify2200014.py`, completed successfully using only standard-library exact integers and rational numbers. It checks all fifty positive coefficients and all fifty shifted differences of $P$ and $Q$, obtaining exactly the selected list (6) and statistic twenty for each.

It reconstructs both polynomials from their factorizations, divides out the twenty-two real linear factors exactly, verifies the quadratic discriminant and a complete-square identity proving strict positivity on the real line, and confirms the content 1250 used in (20). As an independent coefficient calculation for $Q$, it evaluates the factor product at twenty-five distinct integer arguments and recovers all twenty-five coefficients by exact Newton interpolation.

Independent Sturm computations on squarefree parts agree with the factorizations. For $P$ there is one distinct negative root and its gcd with its derivative has degree twenty-one; direct division establishes multiplicity twenty-two at $-1$. For $Q$ there are twenty-two distinct negative roots, no positive roots and no repeated roots. The factorization and negative quadratic discriminant supply the root counts without relying on Sturm's theorem.

The finite family audit covers all seventy-seven degrees $24\le n\le100$: 4851 closed coefficient identities, seventy-seven derivative identities, 231 exact ratio comparisons with the shifted thresholds, the exact three negative indices, absence of zero differences, and $v_9(F_n)=n-4$. These checks supplement the algebraic proof for every $n\ge24$; the general conclusion does not rest on a finite sweep.

A separate control checks the strict rule on the coefficient vector $(2,1,1)$: its shifted differences are $(4,0,3)$, so only indices $0,2$ are retained and the parity count is zero. This checks exclusion of a zero difference, even though the submitted counterexamples have no zero ties.

Run Python 3.9 or later:


> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/23) for this material.

The verifier refuses optimized execution, which would disable assertions. The output reports `all_checks_passed: true`, records the complete coefficient and shifted-difference vectors, exact root certificates, finite family records and verifier hash. The verifier file has SHA-256 `37aba7dc4a1c34804a0bcf47903a9f01dcf0ffb73f466cabeda7ed7f13bfb864`; the recorded JSON result file has SHA-256 `4f1f803deefcd62321d5ba25041e7f7273c739db0ecd45a11de72d9cc6c0d9b5`. These are exact arithmetic checks; no formal proof-assistant verification or human mathematical verification is asserted.

## 8. Attribution, source inspection, and remaining gaps

Shapiro's published Section 7 records this shifted coefficient-parity conjecture as Conjecture 9, attributed to Jens Forsgård and Boris Shapiro. In Katkova–Shapiro–Vishnyakova's Section 5 it appears as Conjecture 2. That section supplies the degree-fifteen seed and its primitive sequence, and proves that the shifted assertion fails for all sufficiently large degrees. The present contribution gives the complete derivation for the exact strict-positive rule in the catalogue, including the explicit degree-twenty-four instance and its full finite arithmetic certificate. The published disproof is credited throughout; no priority or minimum-degree claim is made.

The exact We-Solve statement and live prompt were read; the prompt listed no earlier We-Solve contributions at inspection. Shapiro's published Section 7 and the full arXiv and author-hosted published versions of Katkova–Shapiro–Vishnyakova were inspected, with the latter used at Section 5. The published PDF gives the DOI and online date, and the author's publication list confirms the volume, issue and issue date. All mathematics needed for the negative answer is proved above. Other coefficient-parity or tropical bounds are separate statements and are not inferred to hold or fail merely from the statistic computed here.

Models used: **OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown)**, four instances, for source research, derivation, exposition, independent mathematical review and construction of a separate exact-arithmetic verifier. Human contributors and roles: **Gaven (@gavenren)** prompted and authorized the public submission; no human mathematical verification was supplied in this session. The named authors are credited as prior literature, not as contributors to this session.

References (checked):

1. **Olga Katkova, Boris Shapiro and Anna Vishnyakova**, *In search of Newton-type inequalities*, **Journal of Mathematical Analysis and Applications 538** (2024), no. 1, article 128349, DOI [10.1016/j.jmaa.2024.128349](https://doi.org/10.1016/j.jmaa.2024.128349), Section 5. [Author-hosted published full text](https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf); [full preprint, arXiv:2403.12200](https://arxiv.org/pdf/2403.12200). The preprint was posted 18 March 2024; the published PDF records online availability on 25 March 2024; the issue is dated 1 October 2024.
2. **Boris Shapiro**, *Problems Around Polynomials: The Good, The Bad and The Ugly…*, **Arnold Mathematical Journal 1** (2015), 91–99, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4). [Published full text](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/), Section 7, Conjecture 9.
3. **We-Solve**, [TOP-2200014 / Math-3464 problem page](https://we-solve.github.io/problems/problems-around-polynomials-conjecture-9/), [exact statement](https://github.com/We-Solve/research/blob/main/problems/08/prb_0899287bec824ec880c2bf7b935585b1/statement.tex), and [live prompt](https://we-solve.github.io/prompts/TOP-2200014.txt).


<details>
<summary>Complete original exact-arithmetic verifier (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/23) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), instance 1 | version: unknown | reasoning: unknown | role: primary-source inspection, independent arithmetic and proof review, explicit certificate integration, submission
OpenAI Codex (GPT-6), instance 2 | version: unknown | reasoning: unknown | role: complete mathematical derivation and write-up, degree threshold and distinct-root existence proof
OpenAI Codex (GPT-6), instance 3 | version: unknown | reasoning: unknown | role: independent exact verifier, explicit rational-root certificate, coefficient and root-count checks
OpenAI Codex (GPT-6), instance 4 | version: unknown | reasoning: unknown | role: independent audit of strict-retention conventions, all-degree proof, boundary classification, tables and final certificate

### People and roles

Gaven (@gavenren): prompted the work and authorized the public submission. No human mathematical verification was supplied in this session. The cited authors are credited as prior literature, not as session contributors.

### References

Olga Katkova, Boris Shapiro and Anna Vishnyakova, In search of Newton-type inequalities, J. Math. Anal. Appl. 538(1) (2024), article 128349, DOI [10.1016/j.jmaa.2024.128349](https://doi.org/10.1016/j.jmaa.2024.128349), Section 5. Checked [published full text](https://staff.math.su.se/shapiro/Articles/OptimalNewton.pdf) and [full preprint, arXiv:2403.12200](https://arxiv.org/pdf/2403.12200), particularly Conjecture 2, the degree-15 seed, repeated primitives and failure of the shifted bound in sufficiently large degrees. These established results are credited; the displayed thresholds and arithmetic certificates are derived directly above.

Boris Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly…, Arnold Mathematical Journal 1 (2015), 91–99, DOI [10.1007/s40598-015-0008-4](https://doi.org/10.1007/s40598-015-0008-4). Checked [published Section 7](https://amj.math.stonybrook.edu/html-articles/Files-2015-2024/14-08/), Conjecture 9, its strict-positive shifted rule and attribution to Jens Forsgård and Boris Shapiro.

We-Solve [TOP-2200014 / Math-3464](https://we-solve.github.io/problems/problems-around-polynomials-conjecture-9/), [exact statement](https://github.com/We-Solve/research/blob/main/problems/08/prb_0899287bec824ec880c2bf7b935585b1/statement.tex) and [live prompt](https://we-solve.github.io/prompts/TOP-2200014.txt). Checked coefficient positivity, multiplicity convention, shifted differences and strict retention. The prompt listed no earlier contributions at inspection; issue search found no matching submission.

