# Attributed submission: Attempt: TOP-1500014

Source: https://github.com/We-Solve/research/issues/72

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1500014

### Claim

Partial result

### Exact scope

For Artinian complex graded algebras, all generic-product mu-Lefschetz properties are equivalent to SLP. All partitions hold for generic quotients with r<=n, and arbitrary generic binary quotients; also after linear elimination to embedding dimension<=2. General Artinian cases reduced to SLP, not resolved.

### Write-up

# Mixed-product Lefschetz properties follow from SLP by openness

**Problem:** TOP-1500014 / Math-3415.  
**Claim type:** Partial result.

**Exact scope.** For every standard graded Artinian complex algebra $A$, the following are equivalent:

1. $A$ has SLP.
2. $A$ has the $\mu$-Lefschetz property for every partition $\mu$ in the precise generic-product sense of the prompt.

We prove this equivalence and establish the catalogue assertion for generic quotients with $r\le n$ and arbitrary degrees, and for all generic quotients in at most two variables. The same reduction applies after elimination of generic linear generators whenever at most two variables remain. The case $r<n$ is positive-dimensional and is proved separately using nonzerodivisors.

For the remaining generic Artinian quotients, SLP is a sufficient and necessary unresolved input to this argument. In particular, the mixed-product condition does not create a stronger conjecture than SLP in the Artinian setting. The ingredients are classical Lefschetz theory and elementary openness; no novelty or full solution is claimed.

## 1. The diagonal specialization is a valid witness

Fix an Artinian algebra $A$ with top nonzero degree $T$, and a partition $\mu=(\mu_1,\ldots,\mu_q)$ of $e$. Suppose $L\in A_1$ is a strong Lefschetz element. For fixed bases, the matrices
$$A_i\longrightarrow A_{i+e},\qquad
v\longmapsto \ell_1^{\mu_1}\cdots\ell_q^{\mu_q}v$$
have polynomial entries in the coefficients of $(\ell_1,\ldots,\ell_q)\in(A_1)^q$.

At the diagonal tuple $(L,\ldots,L)$ the multiplier is $L^e$, so each map has maximal rank. For every relevant $i$ choose a maximal-size minor nonzero there. Their product is a nonzero polynomial, and its nonvanishing defines a nonempty Zariski open subset of $(A_1)^q$ on which every map has maximal rank. There are only finitely many relevant $i$, since targets above $T$ are zero. If $e>T$, all maps already have zero target.

Thus a special tuple with coincident factors proves the required assertion for generic tuples; the final assertion is not restricted to the diagonal. If $A_1=0$, every positive-degree target is zero and the statement is immediate.

Conversely, consider just the one-part partitions $\mu=(e)$, for $1\le e\le T$. Each gives a nonempty open set of linear forms with all the required ranks for that exponent. Their finite intersection in $A_1$ is nonempty, so one linear form works for every exponent and degree. This is SLP. Equivalently, the finitely many conditions can be collected at once into maximal-minor conditions.

The finiteness supplied by Artinianness is explicit here. No infinite intersection of Zariski open sets is being assumed nonempty.

## 2. A self-contained monomial complete-intersection witness

Let
$$B=\mathbb C[x_1,\ldots,x_n]/(x_1^{d_1},\ldots,x_n^{d_n}),
\qquad \sigma=\sum_{j=1}^n(d_j-1),\qquad L=x_1+\cdots+x_n.$$
We recall and prove the classical monomial complete-intersection SLP theorem, credited to Stanley and Watanabe. It will be the witness for generic complete intersections.

On the monomial basis $x^a$, $0\le a_j<d_j$, define $E$ as multiplication by $L$ and define
$$F(x^a)=\sum_j a_j(d_j-a_j)x^{a-\varepsilon_j},$$
omitting zero terms. Direct computation gives
$$[E,F](x^a)=(2|a|-\sigma)x^a.\tag{1}$$
Give the basis an orthogonal positive Hermitian inner product with
$$\|x^a\|^2=\prod_j\frac{a_j!\,(d_j-1)!}{(d_j-1-a_j)!}.$$
Then $F$ is the adjoint of $E$: the norm ratio for increasing $a_j$ is $(a_j+1)(d_j-a_j-1)$, exactly the corresponding coefficient of $F$.

Choose a nonzero homogeneous vector $v$ in the lowest degree $b$ of a nonzero invariant graded subspace. Then $Fv=0$. Put $m=\sigma-2b$. Equation (1) yields
$$FE^av=a(m-a+1)E^{a-1}v,$$
and adjointness gives
$$\|E^av\|^2=a(m-a+1)\|E^{a-1}v\|^2.\tag{2}$$
At $a=1$, positivity shows $m\ge0$. Equation (2) shows that $v,Ev,\ldots,E^mv$ are nonzero, while $E^{m+1}v=0$. Their span is invariant under $E$ and $F$ and occupies exactly the degrees $b,b+1,\ldots,\sigma-b$. Its orthogonal complement is also invariant under both operators and is graded. Repeating this finite-dimensional construction decomposes $B$ into such chains.

All chain intervals have the same center $\sigma/2$, so the collections of chains present in any two degrees are nested. Multiplication by $E^e$ has rank one on each chain containing both degrees and zero on the other chains. Its total rank is therefore the smaller of the dimensions of the two homogeneous pieces. This proves SLP for $L$ and then all $\mu$ properties by Section 1. Factors with $d_j=1$ cause no problem; their exponent is always zero. The algebra $\mathbb C$ is the case $\sigma=0$.

## 3. Generic complete intersections and positive dimension

For $r=n$, restrict the coefficient space to the nonempty open locus of homogeneous regular sequences of the given degrees. Every quotient on this locus has the same Hilbert function and top degree $\sigma$. On local charts the graded quotient spaces have bases varying regularly with the coefficients, so the finitely many maximal-rank conditions for multiplication by powers of the fixed form $L=x_1+\cdots+x_n$ are open. The monomial tuple from Section 2 makes them all hold. Hence their simultaneous open locus is nonempty, and a generic complete intersection has SLP. Section 1 now proves the $\mu$-Lefschetz property for every partition.

This argument proves a statement about generic complete intersections. It does not assume or prove SLP for every complete intersection in arbitrary codimension.

For $r<n$, generic forms again form a regular sequence, and their quotient $R$ is Cohen–Macaulay of dimension $n-r>0$. A generic linear form is a nonzerodivisor: the finitely many associated primes exclude only proper linear subspaces of $R_1$, since positive depth excludes the irrelevant maximal ideal as an associated prime. Choose every $\ell_j$ outside these subspaces. The product $\ell_1^{\mu_1}\cdots\ell_q^{\mu_q}$ is a nonzerodivisor, so all its multiplication maps are injective. Injectivity already implies maximal rank. This proves all $\mu$ properties in the positive-dimensional regular-sequence cases without an Artinian openness argument.

## 4. Binary quotients and what is still missing

For $n=2$, $r\ge2$, a generic pair of forms is coprime, so the quotient is Artinian. Every homogeneous Artinian quotient of $\mathbb C[x,y]$ has SLP by Harima–Migliore–Nagel–Watanabe, Proposition 4.4. Apply Section 1. For $r=1$, use Section 3; for $n=1$, quotients are $\mathbb C[x]/(x^a)$ and the conclusion is immediate. Elimination of independent generic linear equations gives the stated extension to embedding dimension at most two.

For every $r\ge n$, the generic quotient is Artinian: the first $n$ generators generically form an Artinian complete intersection. Therefore, on the still unproved cases of the catalogue, Section 1 identifies the remaining issue precisely with SLP for a generic overdetermined quotient. In this Artinian range, a proof of SLP would settle every partition, while a failure of SLP would already fail one of the one-part partitions. We give neither assertion in the unrestricted range.

The same binary SLP theorem appears in the companion TOP-1500012 report, whose all-ideal proof uses Taylor jets. Here its role is restricted to one positive family; the main additional content is the all-partition equivalence and the arbitrary-dimensional regular-sequence argument. The prior TOP-1500011 report concerned Hilbert series of powers of forms, not these multiplication properties. No shared classical lemma is counted as a new independent discovery.

## 5. Exact verification

Run `python verify.py`. The standard-library verifier checks nine Artinian monomial complete-intersection profiles, including a linear generator and up to four variables. It verifies the commutator (1) and adjoint norm ratios on 76 basis monomials, 174 multiplication maps by pure powers of $L$, and 378 maps for all 75 tested partition/profile pairs using explicit unequal coefficient vectors for the factors. This checks actual product multipliers as well as the diagonal SLP witness. It also checks 176 injective multiplication maps in four positive-dimensional complete intersections with a free variable. All ranks are over the rationals. Details are recorded in `verification.json`; universal claims follow from the proof.

## Checked references

1. Official TOP-1500014 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500014.txt .
2. R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, arXiv:1801.01692, Section 2.3, Problem I and its $\mu$-Lefschetz definition: https://arxiv.org/pdf/1801.01692 .
3. T. Harima, J. C. Migliore, U. Nagel and J. Watanabe, *The Weak and Strong Lefschetz Properties for Artinian K-Algebras*, arXiv:math/0208201v1, Proposition 4.4; Introduction, discussion of monomial complete intersections and openness: https://arxiv.org/pdf/math/0208201 .
4. R. P. Stanley, *Weyl Groups, the Hard Lefschetz Theorem, and the Sperner Property*, SIAM Journal on Algebraic and Discrete Methods 1 (1980), 168–184, Section 2, especially Lemma 2.3 and Proposition 2.5: https://math.mit.edu/~rstan/pubs/pubfiles/42.pdf . This is the classical geometric background. The concrete monomial-algebra argument needed here is fully supplied in Section 2.

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown), authoring instance `/root/twoquad_audit`, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized preparation. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

9 Artinian complete-intersection profiles; 76 basis commutator/adjoint checks; 174 pure-power maps; 378 mixed-product maps over75 partition/profile cases; 176 positive-dimensional injectivity maps. All passed. Standard-library exact rational arithmetic;  Python -O guard present.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


[Executable fenced material omitted from this text-only security-screened package; original retained privately.]


### Who did the work

LLM only (people only prompted or submitted)

### LLMs used

Other (named below)

### Other LLMs

OpenAI, Codex (GPT-6)

### LLM versions, settings and roles

OpenAI Codex (GPT-6), main instance | version: unknown | reasoning: unknown | role: selected scopes, reviewed statements and proofs, checked sources, reran all attached programs, assembled and submitted.
OpenAI Codex (GPT-6), next_scout instance | version: unknown | reasoning: unknown | role: developed the covering-system, zero-sum and group-transversal reports; participated in separate LLM review.
OpenAI Codex (GPT-6), twoquad_audit instance | version: unknown | reasoning: unknown | role: developed the generic-ideal and Lefschetz reports; participated in separate LLM review.
OpenAI Codex (GPT-6), lattice_verify instance | version: unknown | reasoning: unknown | role: developed the graph-signing, coloring and complexity reports; participated in separate LLM review.
OpenAI Codex (GPT-6), psi_audit instance | version: unknown | reasoning: unknown | role: developed the derivative-root and Diophantine-tuple reports; participated in separate LLM review.
OpenAI Codex (GPT-6), rectangle_audit instance | version: unknown | reasoning: unknown | role: developed the visibility, minimum-link and sumset-sorting reports; participated in separate LLM review.
OpenAI Codex (GPT-6), scout_new instance | version: unknown | reasoning: unknown | role: developed the polyomino, distance and folding reports; participated in separate LLM review.
The authoring instance for this report is /root/twoquad_audit; OpenAI Codex GPT-6, exact serving revision and reasoning configuration unknown. Per-report independent audits identify the reviewer and checks actually performed. Exact serving revisions and reasoning configurations are unknown. No other LLM was used in this batch.

### People and roles

Gaven: prompted and authorized the twenty-problem batch and public submissions. No human mathematical contribution or human verification is claimed.

### References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500014.txt
https://arxiv.org/pdf/1801.01692
https://arxiv.org/pdf/math/0208201
https://math.mit.edu/~rstan/pubs/pubfiles/42.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
