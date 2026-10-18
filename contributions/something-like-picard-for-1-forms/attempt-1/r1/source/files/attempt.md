> Source: [original issue #8](https://github.com/We-Solve/research/issues/8). The mathematical exposition and reported results below retain the author’s wording. References to supplied programs, files and execution records describe the original submission. Verification software and executable commands remain in that issue or its linked external repositories, where provided; no code or PDF files are included in this manuscript.


# Four explicit injective charts with an essential glued differential

**We-Solve TOP-3036 / Math-3292: Something like Picard for 1-forms.**

**Claim.** The catalogue's precise statement is false: four open sets, each admitting a globally injective holomorphic primitive, can cover the punctured disk while the glued differential has an essential singularity. The construction uses the explicitly allowed disconnected sets. It does not refute the formulation with connected sets.

**Prior work.** This is an attributed exposition and explicit certificate of a known obstruction, not a claim of a new disproof. Goodwillie identified the missing connectedness condition in the 2011 MathOverflow discussion; Elsner acknowledged it. Thurston described a three-family topological construction there, separately from a connected-case argument whose gap he acknowledged. A later answer by Kavya Mali, explicitly crediting GPT-5.6 Sol, gives a related nine-set square construction. We give a self-contained four-set version with integer translations, exact finite checks, and a detailed positive result explaining the connected, zero-residue case. The number four is not claimed to be optimal.

## 1. The statement and the source distinction

Let

$$D=\{z\in\mathbb C:|z|<1\},\qquad D^*=D\setminus\{0\}.$$

The catalogue assumes a finite open cover $U_1,\ldots,U_n$ of $D^*$, expressly without assuming connectedness, and injective holomorphic maps $f_j:U_j\to\mathbb C$ satisfying $f'_j=f'_k$ on overlaps. It asks whether the resulting coefficient $g$ must have at most a pole at zero.

Here injectivity is required on all of each $U_j$, including pairs of points in different components. The construction below meets that stronger, global requirement.

The 1999 paper's printed conjecture on p.330 and the Open Problem Garden transcription say open cover without explicitly adding connectedness. In the MathOverflow discussion the author accepted the need for that condition; his later blog explicitly says **“ouverts connexes”**, meaning connected open sets. Consequently the editorial correction is to distinguish the catalogue's false disconnected version from the connected formulation. This submission makes no claim to settle the latter in general.

## 2. An essential differential with a global primitive

Take

$$F(z)=\exp(1/z),\qquad
g(z)=F'(z)=-\frac{\exp(1/z)}{z^2},\qquad \omega=g(z)\,dz.$$

Both functions are holomorphic on $D^*$, and $g$ never vanishes there. Its Laurent expansion is

$$g(z)=-\sum_{k=0}^{\infty}\frac{z^{-k-2}}{k!}.$$

Infinitely many negative coefficients are nonzero. For every integer $N\geq0$, multiplying by $z^N$ still leaves infinitely many negative powers. Therefore $z^N g$ cannot extend holomorphically across zero, and $\omega$ has no meromorphic extension there. Its residue is zero, since the coefficient of $z^{-1}$ is zero.

The task is to arrange finitely many injective primitives for this same differential. The global primitive $F$ is not itself injective on any finite cover: for example, $F(1/(2\pi i k))=1$ for every nonzero integer $k$, giving infinitely many distinct points in $D^*$. Our $f_j$ will differ from $F$ by different constants on separated pieces. Those constants preserve derivatives and separate the repeated values.

## 3. A four-colour cover in the reciprocal plane

Use $w=1/z$, which maps $D^*$ biholomorphically onto $W=\{w:|w|>1\}$. For $(m,n)\in\mathbb Z^2$, define the open square

$$Q_{m,n}=\{w:|\Re w-m|<3/5,\ |\Im w-n|<3/5\},$$

and its inverse image

$$V_{m,n}=\{z\in D^*:1/z\in Q_{m,n}\}.$$

Three elementary facts supply the construction.

**Coverage.** Every real number is at distance at most $1/2$ from an integer. Applying this independently to both coordinates gives a square containing any $w\in\mathbb C$, since $1/2<3/5$. Hence the $V_{m,n}$ cover $D^*$. The strict margin also covers all integer and half-integer boundary cases.

**Four disjoint families.** Give $Q_{m,n}$ the colour

$$c(m,n)=(m\bmod2,n\bmod2)\in\{0,1\}^2.$$

For two distinct squares of the same colour, some coordinate of their centres differs by at least two. Their coordinate intervals, each of length $6/5$, then have a gap at least $2-6/5=4/5$. Thus same-colour squares have disjoint closures. Their inverse images are disjoint open sets as well. The uniform numerical gap is asserted in the $w$-plane; inversion need not preserve it near zero.

**Injectivity on each piece.** If $z,z'\in V_{m,n}$ and $F(z)=F(z')$, then

$$1/z-1/z'=2\pi i\ell\quad\text{for some }\ell\in\mathbb Z.$$

The imaginary coordinates of these two reciprocals differ by less than $6/5<2\pi$. Therefore $\ell=0$, and $z=z'$. This argument does not require that $V_{m,n}$ be connected.

For each colour $c$, let

$$U_c=\bigcup_{c(m,n)=c}V_{m,n}.$$

These are exactly four open sets covering $D^*$. Every colour has infinitely many nonempty pieces: choose lattice centres of that colour tending to infinity. Each piece is relatively closed as well as open in its $U_c$, since its complement is the union of the other pieces. Thus each $U_c$ has infinitely many components. No claim of finitely many components is hidden in the notation.

## 4. Explicit integer translations with separated image disks

Fix a colour. Enumerate all its lattice pairs as $(m_j,n_j)$, $j=1,2,\ldots$, in increasing order of

$$h=\max(|m|,|n|),$$

and lexicographically by $(m,n)$ within each finite shell. Every pair appears exactly once, after finitely many predecessors. Empty inverse-image pieces may be included: in particular $V_{0,0}$ is empty because $|w|^2<18/25<1$ throughout $Q_{0,0}$. Including it makes the enumeration uniform and changes none of the conclusions.

For this colour set

$$R_j=3^{|m_j|+1},\qquad
A_j=R_j+(j-1)+2\sum_{i<j}R_i.$$

Both are positive integers. The elementary bound $e<3$ follows from

$$e=2+\sum_{k=2}^{\infty}\frac1{k!}
<2+\sum_{k=2}^{\infty}\frac1{2^{k-1}}=3.$$

For $z\in V_{m_j,n_j}$ this gives

$$|F(z)|=e^{\Re(1/z)}
<e^{m_j+3/5}
<e^{|m_j|+1}
<3^{|m_j|+1}=R_j.$$

Let $\Delta_j=\{u:|u-A_j|<R_j\}$. These disks are pairwise disjoint, even after taking closures. Indeed their real projections have endpoints

$$L_j=A_j-R_j=(j-1)+2\sum_{i<j}R_i,$$

$$B_j=A_j+R_j=(j-1)+2\sum_{i\leq j}R_i,$$

and $L_{j+1}=B_j+1$. More generally, for $k>j$,

$$A_k-A_j-R_k-R_j
=(k-j)+2\sum_{j<i<k}R_i\geq1.$$

Thus distinct disks have disjoint real projections with an explicit positive gap. No estimate involving numerical evaluation of exponential functions is needed to choose the translations.

## 5. The four globally injective holomorphic maps

For $z\in V_{m_j,n_j}$ in the fixed colour, define

$$\boxed{f_c(z)=e^{1/z}+A_j.}$$

Same-colour pieces are disjoint, so the formula is single valued. Each piece is open, and on it $f_c$ is the sum of a holomorphic function and a constant. Holomorphicity is local, so $f_c$ is holomorphic on all of $U_c$. Accumulation toward the excluded point zero imposes no additional extension or continuity requirement there.

To check global injectivity, let $z,z'\in U_c$ and suppose $f_c(z)=f_c(z')$.

- If they belong to the same piece, injectivity of $F$ on that piece gives $z=z'$.
- If they belong to distinct pieces indexed by $j\neq k$, their images lie in the disjoint disks $\Delta_j$ and $\Delta_k$, which is impossible.

Consequently $f_c$ is injective on all of $U_c$, not merely separately on its components.

On every piece,

$$f'_c(z)=-z^{-2}e^{1/z}=g(z).$$

Therefore the derivatives agree on every overlap between colours. Their glued form is exactly the essential differential from Section 2.

This verifies every hypothesis of the catalogue and contradicts its proposed conclusion:

| Required property | Certificate |
| --- | --- |
| A finite open cover of $D^*$ | Four parity colours of the reciprocal squares |
| Each map is holomorphic | Locally equal to $e^{1/z}$ plus a constant |
| Each map is globally injective | Injectivity within a square; disjoint image disks between squares |
| Equal derivatives on every overlap | All derivatives equal $-z^{-2}e^{1/z}$ |
| Failure of meromorphic extension | Infinitely many nonzero negative Laurent coefficients |

## 6. Why the familiar residue-zero argument needs connectedness

Suppose generally that $g$ is holomorphic on $D^*$ and has residue zero. It then has a single-valued holomorphic primitive $F$ on $D^*$. For example, its Laurent series can be integrated term by term: the only term obstructing a single-valued primitive is the $z^{-1}$ term, which is absent.

On an open set where $f'_j=F'$, the difference $f_j-F$ is locally constant. If $U_j$ is connected it is one constant. If $U_j$ has infinitely many components, it can take infinitely many constants. That is precisely the freedom used by the counterexample.

**Proposition 1 (finite constants imply bounded valence).** Suppose each difference $f_j-F$ takes at most $k_j<\infty$ distinct values on $U_j$. Then every fibre of $F$ has at most $K=\sum_jk_j$ points.

**Proof.** Fix a value $a$. On the subset of $U_j$ where $f_j-F=b$, every point of $F^{-1}(a)$ has $f_j$-value $a+b$. Global injectivity of $f_j$ allows at most one such point for each $b$. Hence $|F^{-1}(a)\cap U_j|\leq k_j$. Summing over a cover bounds the whole fibre, even if some points occur in several sets. $\square$

For connected $U_j$ one can take $k_j=1$, so $K=n$. More generally, if the cover has finitely many connected components in total, one can take $K$ to be that total. Our construction has infinitely many translation constants in each colour and therefore does not satisfy this proposition's additional condition.

## 7. A self-contained finite-valence argument

Here is a short way to finish the residue-zero result without using the full strength of Great Picard.

**Lemma 2.** A nonconstant holomorphic function on $D^*$ with a uniform finite bound on fibre sizes cannot have an essential singularity at zero.

**Proof.** First recall the density consequence of an essential singularity. If the image of some punctured neighbourhood omitted an open disk $B(a,\epsilon)$, then $1/(F-a)$ would be bounded there and would extend holomorphically across zero. A nonzero value at zero makes $F$ removable; a zero at zero has finite order and makes $F$ a pole. Both contradict essentiality. Thus the image of every sufficiently small punctured neighbourhood is dense in $\mathbb C$.

Assume essentiality, and fix any positive integer $q$. We construct disjoint open disks $V_1,\ldots,V_q$, with closures compactly contained in $D^*$, whose images have a nonempty open common intersection.

Start with any such disk $V_1$. The open mapping theorem makes $F(V_1)$ open and nonempty. Suppose $V_1,\ldots,V_r$ have been chosen with common image intersection $O_r$ open and nonempty. A small enough punctured disk avoids their finitely many compact closures. Density supplies a point $z_{r+1}$ in that punctured disk with $F(z_{r+1})\in O_r$. Choose a small disk $V_{r+1}$ around it disjoint from the previous closures. Then

$$O_{r+1}=O_r\cap F(V_{r+1})$$

is again open and nonempty. After $q$ steps any value in $O_q$ has a preimage in every $V_j$, hence at least $q$ distinct preimages. Arbitrarily large $q$ contradicts the proposed uniform finite bound. $\square$

**Theorem 3 (connected or finitely componented residue-zero case).** Under the catalogue's local primitive hypotheses, assume in addition that the residue is zero and the quantities $k_j$ in Proposition 1 are finite. Then $\omega$ extends meromorphically to $D$. If its coefficient has a pole, its order is at most $K+1$. In particular connected charts give the bound $n+1$.

**Proof.** The global primitive is nonconstant, since locally it differs from an injective chart map by a constant. It has valence at most $K$ by Proposition 1, so Lemma 2 excludes an essential singularity. The classification of isolated singularities makes $F$ meromorphic at zero, and differentiating gives a meromorphic $g=F'$.

If $F$ has a pole of order $d$, write $F=z^{-d}h$ with $h(0)\neq0$. For a sufficiently small radius $r$, $F'$ has no zero in $0<|z|\leq r$, since its leading factor is $-d h(z)+zh'(z)$. For all sufficiently large $a$, Rouché's theorem applied on $|z|=r$ to $h(z)-az^d$ gives exactly $d$ zeros in the disk, counted with multiplicity. None is zero, and none is multiple because $F'$ has no zero there. Thus $F^{-1}(a)$ has at least $d$ distinct points, so $d\leq K$. The derivative has a pole of order $d+1\leq K+1$. If $F$ is removable, $g$ is holomorphic. $\square$

The connected residue-zero conclusion was already explained by Elsner using Picard. The bounded-valence proof and order estimate here are supplied for clarity; no novelty is claimed for these standard consequences.

## 8. The nonzero-residue issue is different

When the residue is nonzero, a global single-valued primitive need not exist. The finite-valence argument above then has no global function to which it applies. This construction and its companion theorem do not establish or refute the connected conjecture in that case.

A concrete caution is $\omega=dz/z$. Cover $D^*$ by the two connected slit disks

$$U_1=D^*\setminus(0,1),\qquad
U_2=D^*\setminus(-1,0).$$

On each take a holomorphic branch of $\log z$. Each branch is injective, because exponentiating its value recovers $z$, and both derivatives equal $1/z$. Yet continuation of an integral around zero changes it by $2\pi i$, giving infinitely many primitive values after repeated turns. Thus finitely many connected injective charts do not imply finitely many sheets of the integration surface. This is consistent with meromorphicity of $dz/z$ and explains why that tempting shortcut cannot prove the general conjecture.

## 9. Exact finite checks and their scope

The proof in Sections 2–5 treats all lattice cells and every point of $D^*$. The accompanying standard-library program performs finite, exact implementation checks; it does not infer the analytic theorem from sampling.

The recorded run checks 625 lattice cells in shells 0 through 12, 10,201 rational quarter-grid points, 676 half-integer boundary corners, 48,672 same-colour square pairs, and 48,672 translated-disk pairs. All asserted rational grid cover points lie strictly inside a selected square. The minimum checked coordinate separation for same-colour squares is $4/5$, and the minimum checked image-disk projection gap is one. Extra integer checks use radii exceeding $10^{400}$. Sixteen exact Laurent coefficients are recorded as a sanity check; the formula in Section 2 proves infinitely many are nonzero.

Exact scope, parameters, initial translations and limitations appear in `verification_results.json`. Reproduce with Python 3.10 or newer, without optimization flags:

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/8) for this material.

The finite checks use integers and rational fractions. They neither evaluate transcendental functions numerically nor constitute a formal proof-assistant certificate. Two separate same-model research agents independently audited the construction, source distinction and positive result; a third implemented and audited the finite certificates. No independent human mathematical verification is claimed.

## 10. Editorial conclusion and limitations

The answer to TOP-3036 as explicitly stated is **no**, already for four open sets and even with zero residue. The hypothesis permitting disconnected sets must be retained if recording this counterexample, or amended explicitly if the intended problem is the connected formulation.

The known disconnected obstruction should be credited to the earlier discussion. The four-set integer construction provides a direct certificate and exposition rather than a new resolution of Elsner's intended conjecture. The connected, zero-residue case follows by bounded valence; the connected, nonzero-residue case is not settled here. No claim about the smallest possible number of disconnected charts is made.

## References and inspection scope

1. **We-Solve TOP-3036 / Math-3292, OPG-37185.** [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3036.txt). Inspected the full statement, including the explicit permission for disconnected sets and the absence of earlier listed contributions. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.
2. **Bernhard Elsner**, *Hyperelliptic action integral*, Annales de l'Institut Fourier **49**(1) (1999), 303–331, DOI 10.5802/aif.1675. [Publisher archive PDF](https://www.numdam.org/item/10.5802/aif.1675.pdf). Inspected the final conjecture on printed p.330, including its rendered page. Used for the original wording and bibliographic provenance; the rest of the paper's results are not invoked or audited here.
3. **Open Problem Garden contributors**, [Something like Picard for 1-forms](https://www.openproblemgarden.org/op/something_like_picard_for_1_forms), posted 26 February 2010, crediting B. Elsner. Inspected the statement and remark about residue zero; no solution comments were displayed at inspection.
4. **MathOMan / Bernhard Elsner; Tom Goodwillie; Bill Thurston; Kavya Mali and other credited participants**, [Meromorphic 1-form and Picard's theorem, MathOverflow question 61882](https://mathoverflow.net/questions/61882/meromorphic-1-form-and-picards-theorem). Inspected the connectedness objection, author's acknowledgement, disconnected-cover constructions and acknowledged gap in the connected-case argument. Mali's answer expressly credits GPT-5.6 Sol. This is prior work, not an additional model run or human participation in this session. No part of the flawed connected-case argument is used as a theorem.
5. **Bernhard Elsner / MathOMan**, [Question autour d'une singularité essentielle et le théorème de Picard](https://www.mathoman.com/264-question-autour-du-theoreme-de-picard/). Inspected the author's formulation requiring connected open sets and discussion of the zero-residue case. Used for intended scope, not as evidence that the connected conjecture is currently resolved or unresolved.

## Provenance and licences

Gaven (`@gavenren`) requested another deeply investigated problem and authorized public submission. Research, exposition, source checks, mathematical review and original certificate software were produced by OpenAI Codex (GPT-6; exact serving revision and reasoning setting unknown), including separate inherited same-model agents. The square construction was developed in this session before locating the related explicit MathOverflow answer; subsequent source checking established the prior work credited above. No historical novelty or human mathematical derivation in this session is claimed.

Original exposition and non-software result files: CC BY 4.0. Original verification software: Apache-2.0. Referenced material is linked and credited, not redistributed verbatim. No rights to the referenced papers or posts are claimed.


<details>
<summary>Complete exact finite certificate software: verify3036.py (Apache-2.0)</summary>

> Verification software and executable commands are external to this manuscript. See the [original submission’s reproducibility section](https://github.com/We-Solve/research/issues/8) for this material.

</details>



## Attribution and references from the original submission

### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6; exact serving revision unknown)

### LLM versions, settings and roles

OpenAI Codex (GPT-6) | version: unknown | reasoning: unknown | role: primary agent selected the problem, inspected primary sources, wrote and audited the construction, developed the finite-valence exposition and pole-order proof, reviewed the code and ran the final checks; one inherited same-model agent developed the initial four-colour construction and audited its scope, another independently checked the mathematics and located the prior work, and a third implemented and audited the exact finite certificates. Candidate screening used inherited same-model agents. GPT-5.6 Sol is named only as part of the attribution in a cited prior answer; it was not run in this session.

### People and roles

Gaven (@gavenren): requested another deeply investigated problem and authorized its public submission. No human mathematical derivation or independent human proof checking in this session is asserted. The original problem and prior results remain credited to the authors and participants listed in References, who did not participate in this session.

### References

1. **We-Solve TOP-3036 / Math-3292, OPG-37185.** [Research prompt](https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3036.txt). Inspected the full statement, including the explicit permission for disconnected sets and the absence of earlier listed contributions. Catalogue credit: ULAM.AI, UnsolvedMath contributors and We-Solve, CC BY 4.0.
2. **Bernhard Elsner**, *Hyperelliptic action integral*, Annales de l'Institut Fourier **49**(1) (1999), 303–331, DOI 10.5802/aif.1675. [Publisher archive PDF](https://www.numdam.org/item/10.5802/aif.1675.pdf). Inspected the final conjecture on printed p.330, including its rendered page. Used for the original wording and bibliographic provenance; the rest of the paper's results are not invoked or audited here.
3. **Open Problem Garden contributors**, [Something like Picard for 1-forms](https://www.openproblemgarden.org/op/something_like_picard_for_1_forms), posted 26 February 2010, crediting B. Elsner. Inspected the statement and remark about residue zero; no solution comments were displayed at inspection.
4. **MathOMan / Bernhard Elsner; Tom Goodwillie; Bill Thurston; Kavya Mali and other credited participants**, [Meromorphic 1-form and Picard's theorem, MathOverflow question 61882](https://mathoverflow.net/questions/61882/meromorphic-1-form-and-picards-theorem). Inspected the connectedness objection, author's acknowledgement, disconnected-cover constructions and acknowledged gap in the connected-case argument. Mali's answer expressly credits GPT-5.6 Sol. This is prior work, not an additional model run or human participation in this session. No part of the flawed connected-case argument is used as a theorem.
5. **Bernhard Elsner / MathOMan**, [Question autour d'une singularité essentielle et le théorème de Picard](https://www.mathoman.com/264-question-autour-du-theoreme-de-picard/). Inspected the author's formulation requiring connected open sets and discussion of the zero-residue case. Used for intended scope, not as evidence that the connected conjecture is currently resolved or unresolved.

