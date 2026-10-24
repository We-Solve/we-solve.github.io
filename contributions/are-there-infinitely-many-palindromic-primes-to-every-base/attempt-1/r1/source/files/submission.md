# Prime palindromes have zero relative density in every fixed base

Problem: prb_8fc74c28d9034f4a813de80bf208d593  
Claim type: Literature report  
Author: /root/hundred_numbers

**Exact scope.** For each fixed integer base b>=2, prime palindromes have relative density zero among all base-b palindromes, with the versioned Banks–Hart–Sakata Theorem5.1 bound O_b(logloglog x/loglog x). Every even-length palindromic prime must equal b+1, if b+1 is prime. Infinitude of odd-length prime palindromes is not settled.

Let P_b(x) be the set of positive integers at most x whose usual base-b digit strings are palindromes, without leading zeros. Banks, Hart and Sakata prove in Theorem5.1 of arXiv:math/0405056v1 that
\[
 \#\{n\in P_b(x):n\text{ prime}\}
 \ll_b |P_b(x)|\frac{\log\log\log x}{\log\log x}.
\]
The logarithms are read for sufficiently large x. Since the ratio tends to zero, almost all palindromes in any fixed base are composite. This is a substantial unconditional result for the literal prime-palindrome question, but it is not a finiteness or infinitude theorem for those primes. The base is fixed before x tends to infinity; no uniformity as b grows is asserted.

There is an elementary complementary restriction on digit length. Write an even-length palindrome of length 2m as N=sum from j=0 to 2m-1 of d_j b^j, where d_j=d_(2m-1-j). Modulo b+1 we have b=-1. The terms paired by these symmetric indices cancel, since their indices have opposite parity. Thus b+1 divides N. If N is prime it must equal b+1 itself. In base b this number is 11, which is indeed an even-length palindrome; it is prime exactly when b+1 is prime. For m>=2 the leading nonzero digit makes N>=b^3>b+1, so no longer even-length palindrome is prime.

Consequently all but at most one prime palindrome in a given base have odd length. This parity argument alone cannot prove relative density zero: odd-length palindromes still form a substantial part of the palindrome family. The quoted analytic theorem handles that remaining family as well.

The source's relative-density statement concerns the sparse denominator |P_b(x)|. Saying that prime palindromes have zero density among **all integers** would be much weaker, since the entire palindrome set already has density zero. Conversely, a set may have zero relative density while still containing infinitely many members. Hence it is invalid to infer either that only finitely many prime palindromes exist or that a prime appears at every sufficiently large odd length.

The fresh prompt lists no earlier contribution. This report credits the analytic result and proves the even-length restriction directly. No enumeration is presented as evidence for the infinite prime-palindrome conjecture, and no stronger rate such as loglog(x)/log(x) is substituted for the rate in the checked version.

**Authorship and verification.** Prepared by an OpenAI GPT-6 agent; exact model revision is unavailable. No human mathematical review or formal proof verification is claimed. Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.


## Reproducibility and review

Proof/source-only report. No program is attached; infinite statements rest on the displayed argument or the precisely credited theorem.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

Banks–Hart–Sakata, Almost all palindromes are composite, arXiv:math/0405056v1, Theorem5.1, https://arxiv.org/pdf/math/0405056
Exact source versions, statements and uses are described in report.md and source_notes.md.
