# Quadratically many empty monochromatic triangles under fixed color imbalance

Problem: TOP-3081

Claim type: Partial result

Exact scope: If b is the minority color size and r=n-b, then E(P,c)>=ceil(r max(0,n-2-2b)/3). Hence every fixed positive imbalance gives the conjectured quadratic lower bound for arbitrary general-position geometry.

Fix a majority-colored point p. Order the n-1 rays from p to the other points cyclically. General position means these rays are distinct and no angular gap equals pi. At most one gap exceeds pi, because all gaps are positive and sum to 2pi. Therefore at least n-2 consecutive ray pairs have gap less than pi.

Each minority-colored point is an endpoint of just two consecutive pairs, so at most 2b such pairs have a minority endpoint. Consequently at least max(0,n-2-2b) consecutive pairs have both endpoints in the majority color and gap less than pi. For such a pair a,c, the interior of triangle pac lies strictly inside that angular sector: every interior vector from p is a positive combination of the two boundary vectors and, since their angle is below pi, has direction strictly between them. There is no point of P with a direction in this open sector, by consecutiveness. Thus the triangle is empty against all points of both colors, and it is monochromatic. Points on its sides are excluded by the given no-three-collinear hypothesis.

Repeat at all r majority points. An unordered triangle is counted at most three times, once at each vertex; no claim that it is counted exactly three times is needed. Thus
\[
 E(P,c)\ge\left\lceil {r\max(0,n-2-2b)\over3}\right\rceil. \tag{1}
\]
Small n can have a zero right-hand side; this causes no exception to the proof. The one-color case b=0 is included.

For a fixed epsilon in (0,1/2], suppose b<=(1/2-epsilon)n and n>=2/epsilon. Then n-2-2b>=2epsilon n-2>=epsilon n, while r>=n/2. Hence (1) gives
\[
 E(P,c)\ge {\epsilon\over6}n^2.
\]
The constants depend only on the prescribed imbalance epsilon and not on geometry, so this proves the desired type of estimate on every such infinite color class. The full prompt requires one absolute constant for balanced colorings as well; the estimate becomes ineffective when b is close to n/2. We do not discard opposite-colored blockers, assume convex position, or promote the imbalanced conclusion to the unrestricted conjecture.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: PASS 40 integer general-position geometries, 10200 complete binary colorings; independent full-set triangle emptiness. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: PASS 40 integer general-position geometries, 10200 complete binary colorings; independent full-set triangle emptiness. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-3081.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
