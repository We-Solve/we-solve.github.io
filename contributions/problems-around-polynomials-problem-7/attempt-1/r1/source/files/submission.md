# All quartic derivative words, with exact witnesses and obstruction lifts

**Problem:** TOP-2200017. **Claim type:** Partial result.

**Scope.** This contribution proves the complete strict-word classification for degree four, supplies integer-root polynomial witnesses for all ten realizable words, and gives explicit Rolle-admissible but unrealizable words in every degree $n\geq4$. The quartic classification is established literature, credited below. No arbitrary-degree classification, novelty, or asymptotic count is claimed.

The symbols have exactly the meaning in the official prompt: $j$ denotes a zero of $P^{(j)}$, and zeros of different derivative orders must be distinct. A word is called Rolle-admissible here when each adjacent-symbol projection alternates, starting and ending with the lower symbol.

## The complete degree-four classification

There are twelve Rolle-admissible words of degree four. Exactly these two fail to occur:
$$0102310210,\qquad0120132010.$$
They are reversals of one another. The other ten occur, as witnessed below. This is the quartic result stated and proved by Shapiro and Shapiro [2, §2], where it is attributed to B. Anderson's 1993 paper. Anderson's original article was not independently consulted here.

Here is a proof of the exclusion. Suppose that the first word occurs. Write the roots of $P,P',P'',P'''$ as $x_1<\cdots<x_4$, $y_1<y_2<y_3$, $z_1<z_2$, and $t$, respectively. The word says
$$
x_1<y_1<x_2<z_1<t<y_2<x_3<z_2<y_3<x_4.
\tag{1}
$$
By dividing by its leading coefficient, translating the variable to remove the cubic term, and applying a positive scaling, any such quartic becomes
$$p(x)=x^4-6x^2+q x+r.$$
Indeed the depressed quadratic coefficient must be negative because $p''$ has two distinct real roots. These transformations preserve the word. Now $z_1=-1$, $z_2=1$, and $t=0$. The signs of a monic quartic between its consecutive roots and (1) give
$$p(-1)>0,\qquad p(1)<0.$$
Subtracting yields $2q=p(1)-p(-1)<0$, so $p'(0)=q<0$. But $p'$ is strictly decreasing on $(-1,1)$ and has its middle root $y_2$ there. Therefore $p'(0)<0$ implies $y_2<0=t$, contradicting (1). Reflection proves the exclusion of the reverse word.

The full list of admitted words and witnesses is as follows. In every row the realizing polynomial is the product of $x$ minus the four displayed integers.

| Word | Four roots of a realizing polynomial |
|---|---|
| `0102103210` | $0,1,3,9$ |
| `0102130210` | $0,1,3,5$ |
| `0102132010` | $0,1,5,7$ |
| `0102312010` | $0,2,6,7$ |
| `0120103210` | $0,1,2,6$ |
| `0120130210` | $0,1,2,4$ |
| `0120310210` | $0,2,3,4$ |
| `0120312010` | $0,2,4,5$ |
| `0123010210` | $0,4,5,6$ |
| `0123012010` | $0,6,8,9$ |

For completeness, the twelve possible combinatorial words can be enumerated without choosing polynomial roots. Give the $n-j$ occurrences of symbol $j$ separate increasing labels $(j,k)$, impose their row order and the interlacing relations
$$
(j,k)<(j+1,k)<(j,k+1),
$$
and enumerate all linear extensions. This produces exactly the ten table entries and the two excluded words when $n=4$. The supplied verifier carries out this finite enumeration. The table witnesses prove that the two proved exclusions are the only quartic exclusions; failure of a numerical search is not used as an obstruction.

## An obstruction family in every higher degree

For a strict real-rooted polynomial $P$ of degree $n\geq4$, the derivative $Q=P^{(n-4)}$ is a strict real-rooted quartic: its four levels of zeros are among the distinct levels already present for $P$. Therefore restricting the word of $P$ to symbols
$$n-4,n-3,n-2,n-1$$
and subtracting $n-4$ from them cannot give either forbidden quartic word. This is an explicit necessary condition valid in all degrees.

It excludes Rolle-admissible words for every $n\geq4$, not just isolated quartic words. The following construction proves that assertion. Start with either forbidden degree-four word. Given a Rolle-admissible word of degree $m$, increment every symbol by one, prepend a new symbol $0$, and insert a new $0$ immediately after each occurrence of the incremented symbol $1$. The resulting word has $m+1$ occurrences of $0$ and has alternating $0,1$ projection. Every other adjacent projection retains the old alternation. Thus it is Rolle-admissible of degree $m+1$.

After any number of such lifts, the highest four levels project to the initial forbidden quartic word. Hence none of these lifted words is realizable by a polynomial. This argument uses symbols as integers, so it applies also when $n\geq10$; digit concatenation is only a convenient display for the small cases.

## Verification and remaining scope

Run `python3 verify.py` in this folder. It writes `verification.json` and `witness_table.md`. All arithmetic is exact rational arithmetic using the Python standard library. For each of the ten witnesses it forms
$$H=P P' P'' P'''$$
and verifies $\gcd(H,H')=1$, thereby ruling out all cross-level coincidences. Rational Sturm isolation of all ten roots of $H$, followed by exact root counts for the individual derivatives on the isolating intervals, certifies the displayed word. It separately enumerates all twelve combinatorial quartic words and checks both lifted obstruction families for degrees 4 through 9, giving **12 sample lifts**. All checks pass. The script refuses `python -O`.

The proof of the lifted obstruction is for every degree; the twelve finite lift checks only test the implementation. The complete word problem for arbitrary $n$ is not solved here. The conditions proved here need not be sufficient in higher degree. Shapiro's original Problem 7 [1] remains the exact target, while this report covers a known low-degree classification and an explicitly proved obstruction family.

**Models and human roles.** OpenAI Codex, GPT-6, read the primary source, supplied the exposition and witness construction, and wrote and ran the exact verifier. Its exact serving revision and reasoning configuration are unknown. Gaven requested and authorized this work; no human mathematical review is claimed. Independent agent review is recorded separately when completed.

## Checked references

1. B. Shapiro, *Problems Around Polynomials: The Good, The Bad and The Ugly…* (2015), Problem 7. [Primary author PDF](https://staff.math.su.se/shapiro/Articles/ProblemsWithPolynomials.pdf); [arXiv:1503.05295](https://arxiv.org/abs/1503.05295).
2. B. Shapiro and M. Shapiro, *A Few Riddles Behind Rolle's Theorem*, author-hosted manuscript, §2, pp. 5–6. [Primary PDF](https://staff.math.su.se/shapiro/Articles/MonthlyFinal.pdf). The quartic exclusion and the count $10\ne12$ are explicitly stated there. The normalization above changes only their convenient quadratic coefficient.


## Reproducibility and review

Exact rational Sturm isolation and squarefree product checks certify all 10 witness words and absence of cross-level coincidences. Exhaustive poset enumeration finds all 12 quartic Rolle words. Twelve sample lifts (both excluded words in degrees 4 through 9) pass; the all-degree obstruction has a separate proof.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

B. Shapiro, Problems Around Polynomials: The Good, The Bad and The Ugly (2015), Problem 7; https://staff.math.su.se/shapiro/Articles/ProblemsWithPolynomials.pdf
B. Shapiro and M. Shapiro, A Few Riddles Behind Rolle’s Theorem, §2 pp.5–6; https://staff.math.su.se/shapiro/Articles/MonthlyFinal.pdf
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
