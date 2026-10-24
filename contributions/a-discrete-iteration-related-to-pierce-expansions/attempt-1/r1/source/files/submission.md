Problem: TOP-3348

Title: The 19/59 Pierce-chain bound and an elementary exact certificate

Claim type: Literature report

Scope: For every epsilon>0 the maximum official chain length at numerator a is O_epsilon(a^(19/59+epsilon)), by Chase–Pandey. Independently prove the explicit bound P(a,b)<=ceil(sqrt(a))-1+floor(a/ceil(sqrt(a))) and certify all numerators through 2000. The logarithm-squared target is not established.

Write-up:

Let $L(a)=\max_{1\le b<a}P(a,b)$, with exactly the counting convention of the prompt: count positive denominators, excluding the final zero. Chase and Pandey’s Theorem 1.1 proves
$$L(a)\ll_\varepsilon a^{1/3-2/177+\varepsilon}=a^{19/59+\varepsilon}\qquad(\varepsilon>0).$$
Their definition counts iterations until zero and has the same fixed-numerator recurrence; changing an initial indexing label makes no difference. Their Theorem 1.2 also gives $L(a)\gg\log a/\log\log a$ for every sufficiently large $a$. These theorems improve the polynomial bound while leaving the prompt’s much stronger $O((\log a)^2)$ assertion undecided. They are credited results, not new theorems or a claim about the very latest possible exponent.

Here is a completely elementary uniform bound with explicit constants. Write $b_{i+1}=a-q_i b_i$, where $q_i=\lfloor a/b_i\rfloor$, while $b_i>0$. If the next denominator is positive, then
$$b_i>\frac a{q_i+1},\qquad b_{i+1}<\frac a{q_i+1}.$$
Thus $q_{i+1}\ge q_i+1$ and $q_i\ge i$. In particular $b_i\le a/i$. For any integer $k\ge1$, either the chain has fewer than $k$ terms, or after its first $k-1$ terms at most $b_k\le\lfloor a/k\rfloor$ positive integer denominators remain, since they strictly decrease. Therefore
$$P(a,b)\le k-1+\lfloor a/k\rfloor$$
whenever the chain reaches its $k$th term; the same bound holds in the shorter-chain case if $k\le a$. Taking $k=\lceil\sqrt a\rceil$ proves the explicit claim. The endpoint $a=2$ is included.

The exact dynamic program uses $D_a(0)=0$ and
$$D_a(b)=1+D_a(a\bmod b),\qquad1\le b<a.$$
Every dependency has smaller denominator, so computing in increasing $b$ is a proof-producing finite calculation, not an iteration cutoff. It examines all pairs with $2\le a\le2000$, writes each maximum and a maximizing chain, and checks every value against the explicit bound. An independent literal simulation checks all pairs through numerator 300, including strictly increasing quotients and strict denominator decrease. The optimal integer choice of $k$ may improve the displayed explicit bound; no optimality of that bound is asserted.

Verification: run `python3 verify.py`. The program also checks the exact rational exponent identity $1/3-2/177=19/59$. Its finite data and the elementary inequality do not imply the conjectured logarithm-squared bound.

Models used: OpenAI Codex, GPT-6 (exact serving revision and reasoning configuration unknown); source inspection, independent mathematical derivation, exact checker preparation and scope audit.

Human contributors and roles: The referenced authors receive credit for their stated results. No human review of this contribution is claimed.

References:

- Z. Chase and M. Pandey, On the length of Pierce expansions, arXiv:2211.08374v1 (15 November 2022), Theorems 1.1–1.2 and notation: https://arxiv.org/html/2211.08374v1


## Reproducibility and review

All 1,999,000 numerator/denominator pairs through a=2000 checked by exact dynamic programming; independent literal paths through a=300; exact exponent calculation. Python -O rejected.
The main instance freshly ran every attached verifier; all assertions passed. Separate LLM audit notes in the research bundle record the proof and source checks actually performed. These reviews are not human peer review.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://github.com/We-Solve/we-solve.github.io/blob/main/prompts/TOP-3348.txt
Z. Chase and M. Pandey, On the length of Pierce expansions, arXiv:2211.08374v1 (15 November 2022), Theorems 1.1–1.2 and notation: https://arxiv.org/html/2211.08374v1
Only the listed sources and the exact source statements in report.md are relied on. Full source details and theorem/version scope appear in report.md and source_notes.md.
