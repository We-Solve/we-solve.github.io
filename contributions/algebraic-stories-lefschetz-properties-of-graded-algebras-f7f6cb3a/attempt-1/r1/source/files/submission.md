# Attributed submission: Attempt: TOP-1500012

Source: https://github.com/We-Solve/research/issues/71

Acceptance, if recorded, means accepted after security screening. Contributor claims below are attributed claims, not mathematical verification.

### Problem handle

TOP-1500012

### Claim

Partial result

### Exact scope

SLP and hence WLP for every homogeneous Artinian quotient of C[x,y], with a self-contained jet proof; applies to generic forms for n<=2, r>n, and after elimination of linear generators to embedding dimension<=2. Established theorem, no higher-dimensional resolution.

### Write-up

# Every Artinian binary quotient has the strong Lefschetz property

**Problem:** TOP-1500012 / Math-3413.  
**Claim type:** Partial result.

**Exact scope.** Every homogeneous Artinian quotient $A=\mathbb C[x,y]/I$ has the SLP, with no genericity or restriction on its generator degrees. Consequently the catalogue question has a positive answer for $n\le2$, every $r>n$, and all prescribed positive degrees. The same conclusion holds in any number of variables when at least $n-2$ of the generic generators are linear: after eliminating independent linear equations the embedding dimension is at most two. SLP implies WLP.

The binary theorem is established, notably Harima–Migliore–Nagel–Watanabe, Proposition 4.4. The proof below gives an elementary jet argument for that known theorem. It is supplied as an explicit partial result, with no novelty or higher-dimensional resolution claimed.

## 1. A jet lemma in characteristic zero

Let $W$ be a finite-dimensional subspace of $\mathbb C[z]$, of dimension $s$. For a generic $a\in\mathbb C$, the map
$$W\longrightarrow\mathbb C^e,\qquad
f\longmapsto (f(a),f'(a),\ldots,f^{(e-1)}(a))$$
has rank $\min(s,e)$, for every prescribed positive integer $e$.

Here is a direct proof. Any $q$ linearly independent polynomials have nonzero Wronskian. Row reduction gives a basis with distinct degrees $m_1<\cdots<m_q$. The leading coefficient of its Wronskian, up to the nonzero leading coefficients of the basis polynomials, is
$$\det\bigl((m_j)_{i-1}\bigr)_{1\le i,j\le q}
 =\prod_{u<v}(m_v-m_u)\ne0,$$
where $(m)_b=m(m-1)\cdots(m-b+1)$. Indeed the falling-factorial polynomials are monic of their respective degrees, giving the Vandermonde determinant. The leading power of $z$ is $\sum_jm_j-q(q-1)/2$. Thus the Wronskian is not the zero polynomial. For $e\le s$, apply this to any $e$ independent members of $W$; for $e\ge s$, apply it to a basis of $W$. Outside finitely many values of $a$, the required minor is nonzero. The case $s=0$ is immediate.

## 2. Cokernels of binary multiplication maps

The zero algebra is immediate, so assume $I$ is proper. Write $S=\mathbb C[x,y]$, $h_j=\dim A_j$, and $s_j=\dim I_j=j+1-h_j$. Let $j=i+e$ with $i\ge0$, $e\ge1$, and put $\ell=y-ax$.

Dehomogenizing by $x=1$ identifies $S_j$ with the polynomials in $z$ of degree at most $j$. The quotient
$$S_j/\ell^eS_i$$
has dimension $e$ and is identified with the first $e$ Taylor coefficients at $z=a$. The jet lemma applied to the subspace $I_j$ therefore gives, for generic $a$,
$$\dim S_j/(I_j+\ell^eS_i)=\max(0,e-s_j).$$
This is exactly the cokernel of $\ell^e:A_i\to A_j$. Its rank is consequently
$$h_j-\max(0,e-s_j)=\min(h_j,i+1).\tag{1}$$

To identify this with maximal rank, let $\alpha$ be the least degree with $I_\alpha\ne0$. If $i<\alpha$, then $h_i=i+1$, and (1) is $\min(h_i,h_j)$. If $i\ge\alpha$, choose a nonzero $f\in I_i$ and choose $a$ also outside the finitely many zeros of $f(1,z)$. The subspace $fS_e\subseteq I_j$ surjects onto the $e$ Taylor coefficients because $f(1,z)$ is a unit modulo $(z-a)^e$. Thus the cokernel is zero, so the map is surjective and has maximal rank. This argument also handles $h_i=0$.

Because $A$ is Artinian, there is a finite top degree $T$. Only pairs $0\le i<j\le T$ impose nontrivial conditions. Their nonempty open conditions on $a$ have a common nonempty intersection. For $j>T$ the codomain is zero. Hence one generic $\ell$ works for every $i,e$, proving SLP. Taking $e=1$ gives WLP.

This proof uses characteristic zero essentially in the Wronskian determinant. It does not assert the SLP in arbitrary positive characteristic.

## 3. Application to the exact generic-form question

For $n=2$ and $r>2$, a generic pair among the prescribed forms is coprime. This follows, for example, from the nonzero resultant witnessed by $x^{d_1},y^{d_2}$. Its quotient is Artinian, and adding further generators keeps it Artinian. The theorem applies to every such ideal, including special tuples whenever the quotient remains Artinian.

For $n=1$, the ideal is $(x^a)$ with $a$ the smallest generator degree. Each nonzero homogeneous piece has dimension one, and multiplication by powers of a nonzero linear form is visibly of maximal rank.

More generally, if the degree list contains $b$ linear generators, their generic rank is $\min(b,n)$. Eliminate them by a linear change of coordinates. The remaining forms are generic in the remaining polynomial ring: restriction to a linear coordinate subspace is a surjective map on each homogeneous piece. When $b\ge n-2$, at most two variables remain. For the catalogue assumption $r>n$, any remaining two-variable quotient is generically Artinian by the preceding coprime-pair argument. If no variable remains, $A=\mathbb C$ and all positive-degree multiplication maps have zero codomain; if one remains, the one-variable argument applies.

The theorem does not prove the catalogue assertion for all generic overdetermined ideals in embedding dimension at least three. It also does not replace “generic complete intersection” by “every complete intersection” in higher dimension.

## 4. Exact verification and relation to companion reports

Run `python verify.py`. The standard-library verifier enumerates all 923 nonempty monomial staircases contained in a $6\times6$ box and checks 24,276 multiplication maps by $(x+y)^e$ over the rationals, including zero targets. It additionally checks six explicitly supplied, possibly nongeneric, mixed-form Artinian ideals: 164 multiplication maps and 124 jet-cokernel identities. It finds a common rational $a$ for each such ideal and records the full generators, Hilbert values and chosen $\ell=y-ax$ in `verification.json`. These examples audit the formulas; the proof establishes the theorem.

The binary Lefschetz lemma is also used in the companion TOP-1500008 report to derive an arbitrary-degree Hilbert-series formula, and in TOP-1500014 to deduce mixed-product properties. They address different catalogue questions and share this credited input. The earlier TOP-1500011 package treated Hilbert series of equal-degree powers; that is a different question and does not establish the all-ideal SLP theorem proved here.

## Checked references

1. Official TOP-1500012 prompt: https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500012.txt .
2. T. Harima, J. C. Migliore, U. Nagel and J. Watanabe, *The Weak and Strong Lefschetz Properties for Artinian K-Algebras*, arXiv:math/0208201v1, 26 August 2002, Proposition 4.4: https://arxiv.org/pdf/math/0208201 . The proposition is the known binary theorem being reproved.
3. D. Cook II, *The strong Lefschetz property in codimension two*, arXiv:1301.7614v2, 18 February 2013, Theorem 1.2: https://arxiv.org/pdf/1301.7614 . Its characteristic-zero assertion independently confirms the theorem's scope.
4. R. Fröberg, S. Lundqvist, A. Oneto and B. Shapiro, *Algebraic Stories from One and from the Other Pockets*, arXiv:1801.01692, Section 2.3, Problem G: https://arxiv.org/pdf/1801.01692 .

Prepared by OpenAI Codex (GPT-6; exact serving revision and reasoning configuration unknown), authoring instance `/root/twoquad_audit`, for source research, mathematical exposition and exact verification. Gaven prompted the work and authorized preparation. No human mathematical review or editorial acceptance is claimed.


## Reproducibility and review

923 monomial staircases, 24276 exact multiplication maps; 6 mixed ideals, 164 further maps and124 jet-cokernel identities. All passed. Standard-library exact rational arithmetic;  Python -O guard present.
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

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1500012.txt
https://arxiv.org/pdf/1801.01692
https://arxiv.org/pdf/math/0208201
https://arxiv.org/pdf/1301.7614
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.

### Declarations

- [x] I have the right to publish this material under CC BY 4.0 (software Apache-2.0), and third-party material is credited.
- [x] I understand that this issue and its contents are public immediately.
- [x] Every LLM and person involved is listed, with versions or "unknown".
