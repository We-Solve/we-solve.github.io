# The quintuple theorem and the separate regular-extension assertion

**Problem:** prb_a6e88cf1ce8a4a9a922e99d1bbafb1de. **Claim type:** Literature report.

**Scope.** Part (1) of the recorded problem has a published affirmative resolution: there is no Diophantine quintuple of distinct positive integers. The result is due to He, Togbé, and Ziegler, not to this contribution. The stronger assertion in part (2), that every quadruple is regular, is not proved here. This report separates their quantifiers, verifies the regular-extension algebra, and supplies an exact infinite family of quadruples. It does not present a new proof of the quintuple theorem or claim a current resolution of part (2).

## The published resolution of part (1)

He, Togbé, and Ziegler's *There is no Diophantine quintuple*, Theorem 1 [1], excludes a set of five distinct positive integers for which every pairwise product plus one is a square. This is exactly part (1), with the same positivity and distinctness conventions. The paper was published in *Transactions of the American Mathematical Society* **371** (2019), 6665–6709. Its primary arXiv version was consulted, including Theorem 1, the introduction's separate Conjecture 1, and the proof outline. The full proof and its computational reductions were not independently reproduced.

The word “integer” matters: the theorem is not a statement about positive rational Diophantine tuples. Nor does the absence of five elements assert uniqueness of extensions from three elements to four.

## Why part (2) is a different assertion

Use precisely the corrected formula from the official prompt:
$$
d_+(a,b,c)=a+b+c+2abc+2rst,
\qquad r^2=ab+1,\ s^2=ac+1,\ t^2=bc+1,
$$
with $r,s,t$ positive. The term is $2abc$, not $2bc$. Dujella's original survey [2] displays this formula and states the universal regular-extension assertion separately as Conjecture 2.1; the same distinction appears as Conjecture 1 in [1]. This report does not settle that assertion.

The universal regular-extension assertion would imply no quintuple. Indeed, if
$$a<b<c<d<e$$
formed a quintuple, both $\{a,b,c,d\}$ and $\{a,b,c,e\}$ would be quadruples. Applying part (2) to each would give
$$d=d_+(a,b,c)=e,$$
a contradiction. The converse is not supplied by this argument or by the quoted quintuple theorem. In particular, a proof of part (1) should not be entered as a full solution of both parts of the recorded prompt.

## Exact regular-extension identities

Every positive integer Diophantine triple has at least one extension to a larger fourth integer, namely $d_+$. The square certificates are
$$
ad_++1=(at+rs)^2,\qquad
bd_++1=(bs+rt)^2,\qquad
cd_++1=(cr+st)^2.
\tag{1}
$$
For example,
$$
\begin{aligned}
(at+rs)^2
&=a^2(bc+1)+(ab+1)(ac+1)+2arst\\
&=2a^2bc+a^2+ab+ac+1+2arst\\
&=a\bigl(a+b+c+2abc+2rst\bigr)+1.
\end{aligned}
$$
The other two identities follow by permuting $a,b,c$. All quantities are positive integers, and $d_+>a+b+c>\max\{a,b,c\}$, so this really is a quadruple of distinct integers. These classical identities are explicitly recorded in [2]; the expansion is included to make the certificate checkable.

This is an existence construction. It does not prove that $d_+$ is the only possible fourth member.

## An explicit infinite family with all six square certificates

More generally, take positive integers $a,b,r$ with $r^2=ab+1$, and put
$$c=a+b+2r,\qquad d=4r(r+a)(r+b).$$
The six certificates are
$$
\begin{aligned}
ab+1&=r^2,& ac+1&=(a+r)^2,& bc+1&=(b+r)^2,\\
ad+1&=\bigl(2a(r+b)+1\bigr)^2,&
bd+1&=\bigl(2b(r+a)+1\bigr)^2,&
cd+1&=(2rc-1)^2.
\end{aligned}
\tag{2}
$$
These follow by expansion and $r^2=ab+1$. For the last identity, note that
$$
(r+a)(r+b)=r^2+r(a+b)+ab=rc-1,
$$
and therefore $cd+1=4rc(rc-1)+1=(2rc-1)^2$. This is the classical Euler quadruple construction also displayed in [1, equation (2)].

For the concrete one-parameter specialization $h\geq2$,
$$
\{1,\ h^2-1,\ h^2+2h,\ 4h(h+1)(h^2+h-1)\}
\tag{3}
$$
has four strictly increasing positive entries, with the six squares given by (2). It gives infinitely many different quadruples, since the second entry strictly increases with $h$. The first is $\{1,3,8,120\}$. Here $s=a+r$, $t=b+r$, and substituting these in the formula for $d_+$ gives $d=4r(r+a)(r+b)$; thus these examples are regular. They do not test the universal regularity assertion exhaustively.

## Reproduction, source limits, and attribution

Run `python3 verify.py` in this folder. It checks the **999** quadruples (3) for $2\leq h\leq1000$, their **5,994** pair-square identities, and equality with the regular extension. It also checks (1) on all **98** Diophantine triples whose entries are at most 120. All arithmetic uses exact arbitrary-precision integers and integer square roots. Results are in `verification.json`; the script refuses `python -O`. The infinite-family proof is algebraic, and these finite checks are not evidence for a new no-quintuple proof.

The journal details were checked against Dujella's bibliography [3], reference 350, and primary publisher search metadata. The publisher's full page returned HTTP 403; the actual theorem text was checked in the primary arXiv PDF. No conclusion about the latest global status of part (2) is inferred merely from the date of the older theorem or a survey. Its resolution is outside the claim here.

**Models and human roles.** OpenAI Codex, GPT-6, consulted the primary sources, checked the algebra, and wrote and ran the accompanying construction verifier. The exact serving revision and reasoning configuration are unknown. Gaven requested and authorized the work; no human mathematical review is claimed. Independent agent review is recorded separately when completed.

## Checked references

1. B. He, A. Togbé, V. Ziegler, *There is no Diophantine quintuple*, *Trans. Amer. Math. Soc.* **371** (2019), 6665–6709, DOI [10.1090/tran/7573](https://doi.org/10.1090/tran/7573). [Primary arXiv PDF, version 2](https://arxiv.org/pdf/1610.04020); [version record](https://arxiv.org/abs/1610.04020). Theorem 1; introduction's Conjecture 1; equation (2).
2. A. Dujella, *Diophantine m-tuples*, §2, “Diophantine quintuple conjecture,” original author survey. [Author page](https://web.math.pmf.unizg.hr/~duje/quint.html). Formula for $d_+$, its three square certificates, Conjecture 2.1, and Theorem 2.3 were checked.
3. A. Dujella, *Diophantine m-tuples: References*, entry 350. [Author bibliography](https://web.math.pmf.unizg.hr/~duje/ref.html).


## Reproducibility and review

Exact integer checker verifies 999 regular family quadruples and their 5,994 pair-square identities, plus all 98 Diophantine triples with entries at most 120 in the general extension formula. This only checks constructions; the published no-quintuple proof and its computational reductions were not independently reproduced.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

B. He, A. Togbé, V. Ziegler, There is no Diophantine quintuple, Trans. Amer. Math. Soc. 371 (2019), 6665–6709, DOI 10.1090/tran/7573; primary v2 PDF https://arxiv.org/pdf/1610.04020, Theorem 1 and Conjecture 1
A. Dujella, Diophantine m-tuples, §2; https://web.math.pmf.unizg.hr/~duje/quint.html
A. Dujella, Diophantine m-tuples: References, entry 350; https://web.math.pmf.unizg.hr/~duje/ref.html
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
