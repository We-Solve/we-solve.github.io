# Primitive denominator and modular obstructions for four rational square distances

Problem: prb_b2e8f6b94b4c48e1be5ac45b2e3cadf1

Claim type: Partial result

Exact scope: Any point at rational distance from all four vertices of the unit square has rational coordinates X/D,Y/D in primitive common-denominator form, with 12 dividing D; it lies on neither diagonal. Complete conditional residue filters modulo 5 and 11 are also given.

Let r_00,r_10,r_01,r_11 be the four rational distances. Subtracting their squares gives
\[
 2x=1+r_{00}^2-r_{10}^2,\qquad
 2y=1+r_{00}^2-r_{01}^2.
\]
Hence x,y are rational. Write x=X/D,y=Y/D with integers D>0 and gcd(X,Y,D)=1. Each scaled distance D r_ab is rational and its square is the integer (X-aD)^2+(Y-bD)^2, so it is an integer: a rational number with integral square has denominator one in lowest terms.

If D were odd, one of X,X-D would be odd and one of Y,Y-D would be odd. The corresponding corner's squared distance would be 2 modulo 4, impossible for an integer square. Thus D is even. X,Y cannot both be odd, by the same obstruction at corner (0,0), and cannot both be even by primitivity. Interchange coordinates if necessary so X is odd and Y is even. An odd square is 1 modulo 8; if Y were 2 modulo 4, X^2+Y^2 would be 5 modulo 8, impossible. Thus 4 divides Y. Applying the same argument to X^2+(Y-D)^2 forces 4|(Y-D), hence 4|D. All four integer scaled distances are odd.

If 3 did not divide D, at least one of X,X-D would be nonzero modulo 3, and likewise one of Y,Y-D would be nonzero. Choosing those two coordinates gives squared distance 2 modulo 3, also impossible. Therefore 12|D.

Neither square diagonal is possible. On x=y, rationality of x and of sqrt(2)|x| forces x=0, but its distance to (1,1) is then irrational. On x+y=1, the distance to (1,0) is sqrt(2)|1-x|, forcing x=1; its distance to (0,1) is then irrational. This uses no assumption that the putative point lies inside the square.

There are further exact conditional filters. If p does not divide D, normalize u=X D^(-1), v=Y D^(-1) in F_p. All four values u^2+v^2, (u-1)^2+v^2, u^2+(v-1)^2, (u-1)^2+(v-1)^2 must be quadratic residues including zero. Exhausting F_p^2 gives precisely
\[
 p=5:\quad (u,v)\in\{(0,3),(1,3),(3,0),(3,1)\},
\]
\[
 p=11:\quad (u,v)\in\{(0,6),(1,6),(6,0),(6,1)\}.
\]
The attached standard-library checker computes squares and tests all pairs independently, certifying these two finite tables. The logical reduction to residue conditions is the proof above. No condition is inferred at a prime dividing D, since inversion is then unavailable. Nor does the presence of modular candidates produce an actual rational-distance point: every displayed condition is necessary only. The existence problem remains unresolved here. This arithmetic obstruction uses all four square corners and is distinct from constructions of rational-distance sets on a circle.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Executed check_exact.py with assertions enabled: mod 5 [(0, 3), (1, 3), (3, 0), (3, 1)]; mod 11 [(0, 6), (1, 6), (6, 0), (6, 1)]; PASS complete mod5,11 tables and 11648 primitive-at2,3 residue triples mod24; possible denominator classes [0, 12]. python -O was separately executed and refused. These are finite exact checks only.


## Reproducibility and review

Executed check_exact.py with assertions enabled: mod 5 [(0, 3), (1, 3), (3, 0), (3, 1)]; mod 11 [(0, 6), (1, 6), (6, 0), (6, 1)]; PASS complete mod5,11 tables and 11648 primitive-at2,3 residue triples mod24; possible denominator classes [0, 12]. python -O was separately executed and refused. These are finite exact checks only.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: check_exact.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_b2e8f6b94b4c48e1be5ac45b2e3cadf1.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
