Problem: prb_51af74a8081144cea0e6dd16e5bbb91d

Title: The exact Gao identity for every dihedral group, with an exhaustive independent S3 certificate

Claim type: Literature report

Scope: For every dihedral group
$$G=D_{2n}=\langle a,b:a^n=b^2=1,\ bab=a^{-1}\rangle,\qquad n\ge3,$$
the two thresholds defined in the prompt are
$$s(G)=n+1,\qquad s'(G)=3n=s(G)+|G|-1.$$
This is a complete nonabelian infinite family. It is established prior mathematics, not a new resolution of the unrestricted finite-group question.

Assumptions and limitations: The subscript $2n$ denotes group order. Selected terms may be rearranged before their product is taken, exactly as in the prompt. Literature often writes $\mathsf d(G)=s(G)-1$ and $\mathsf E(G)=s'(G)$; some papers use $s(G)$ for the second threshold instead, so notation must be translated before comparing formulas.

Write-up:

The literature input is the bound $\mathsf E(D_{2n})\le3n$ for all $n\ge3$, recorded as an exact value in Gao and Li's *The Erdős–Ginzburg–Ziv theorem for finite solvable groups*, Lemma 9(a). Their definition permits reordering selected positions. The general dihedral case is also used explicitly by Oh and Zhong in their primary paper *On Erdős–Ginzburg–Ziv inverse theorems for dihedral and dicyclic groups*. We use this established universal bound, rather than extrapolating it from small groups.

The lower bounds and the translation to the prompt's identity are elementary. The sequence consisting of $n-1$ copies of $a$ and one copy of $b$ is product-one-free. A selection omitting $b$ is $a^j$ with $1\le j\le n-1$; a selection containing $b$ lies outside the rotation subgroup $\langle a\rangle$ under every ordering. Hence
$$s(D_{2n})\ge n+1.$$

For any finite group $H$, the general relation
$$s'(H)\ge s(H)+|H|-1\tag{1}$$
holds with the present definitions. Choose a product-one-free sequence of length $s(H)-1$ and append $|H|-1$ identities. A selection of $|H|$ terms must contain a nonempty selection of the original terms; deleting the identities from a product-one ordering would contradict product-one-freeness. The extended sequence has length $s(H)+|H|-2$, proving (1).

Applying (1) and the cited bound $s'(D_{2n})\le3n$ gives
$$n+1\le s(D_{2n})\le s'(D_{2n})-2n+1\le n+1.$$
Thus $s(D_{2n})=n+1$ and (1) forces $s'(D_{2n})\ge3n$, giving equality. A concrete length-$3n-1$ lower-bound sequence for the fixed-length threshold is
$$1^{[2n-1]}a^{[n-1]}b,$$
where brackets denote repetition counts. A product-one selection of length $2n$ cannot contain the lone reflection $b$. Without $b$, it must contain between one and $n-1$ copies of $a$, since there are only $2n-1$ identities. Its product is nonidentity. This verifies sharpness without an existence-only extremal argument.

An independently exhaustive finite certificate is supplied for $D_6\cong S_3$. Represent elements as pairs $(i,\varepsilon)$ with $i\in\mathbb Z/3\mathbb Z$, $\varepsilon\in\{0,1\}$ and multiplication
$$(i,\varepsilon)(j,\delta)=(i+(-1)^\varepsilon j,\varepsilon+\delta).$$
For a multiplicity vector $c$ on its six elements, let $P(c)$ be the set of products of all possible orderings of those terms. The recursion
$$P(0)=\{1\},\qquad P(c)=\bigcup_{i:c_i>0}\{xg_i:x\in P(c-e_i)\}$$
is exact, by considering the last factor. A multiset has a product-one selection of size $h$ precisely when there is a vector $u\le c$ with $\sum u_i=h$ and $1\in P(u)$.

The checker verifies every multiset of length four has some nonempty product-one selection, and every multiset of length nine has one of length six. There are respectively $\binom94=126$ and $\binom{14}5=2002$ such multisets. Considering multisets loses no information because the selected terms may be reordered; no original-order constraint remains. The checker also verifies the sharp lower-bound witnesses of lengths three and eight. This gives an independent finite proof of $s(S_3)=4$ and $s'(S_3)=9$, alongside the literature result for the entire dihedral family.

Verification and audit: Run `python3 verify.py`; `verification.json` records the complete counts and witnesses. The recursion considers arbitrary orderings and all eligible selections. It is not an abelian subset-sum shortcut. Exact group tables and finite sets are used throughout, with no probabilistic primality or numerical approximation. The infinite-family upper theorem remains a credited literature input, and no claim for every finite nonabelian group is made.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source checking, independent lower-bound derivation, exhaustive checker preparation and notation audit.

Human contributors and roles: No human review or new human mathematical contribution is asserted.

References:

- Official prompt: https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_51af74a8081144cea0e6dd16e5bbb91d.txt
- W. Gao and Y. Li, *The Erdős–Ginzburg–Ziv theorem for finite solvable groups*, author-hosted manuscript dated 3 April 2009, definitions and Lemma 9(a). https://cfc.nankai.edu.cn/_upload/article/files/d2/e7/02ad99784f4bbe19008160bb92ce/cad4f1ea-5d2e-46ac-99c5-e2fb33887cf7.pdf
- J.S. Oh and Q. Zhong, *On Erdős–Ginzburg–Ziv inverse theorems for dihedral and dicyclic groups*, definitions and proof of Theorem 1.2(2), explicitly using $\mathsf E(D_{2n})=3n$. https://imsc.uni-graz.at/zhong/paper/inverse.pdf


## Reproducibility and review

Cited dihedral upper theorem combined with direct sharp lower witnesses and threshold relation; complete S3 verification covers 126 short and 2002 fixed-length multisets;product recursion independently compared with 55987 ordered words.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/prb_51af74a8081144cea0e6dd16e5bbb91d.txt
https://cfc.nankai.edu.cn/_upload/article/files/d2/e7/02ad99784f4bbe19008160bb92ce/cad4f1ea-5d2e-46ac-99c5-e2fb33887cf7.pdf (Gao–Li, Lemma 9(a))
https://imsc.uni-graz.at/zhong/paper/inverse.pdf (Oh–Zhong, definitions, proof of Theorem 1.2(2))
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
