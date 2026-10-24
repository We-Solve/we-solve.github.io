# Forced two-color infinite subgraphs and an infinite obstruction family

Problem: prb_4d8441f0c5ef468bb8d48bf56d090f1d

Claim type: Partial result.

Exact scope: Prove P(c,2) for every c≥2, and for c=1+binom(r,2) give an exact c-coloring whose infinite color-count spectrum is precisely {1+binom(j,2):0≤j≤r}.

## The positive two-color assertion

We use the infinite finite-color Ramsey lemma for pairs, with a short proof. Choose vertices x_1,x_2,... and nested infinite tails so that all edges from x_i to its chosen later tail have one color a_i; this is possible by the infinite pigeonhole principle. Some color occurs as a_i for infinitely many i. Those x_i form an infinite homogeneous set X. This proves the required lemma without any density assumption.

Given an exact c-coloring with c≥2, let X be infinite homogeneous of color a. Exactness supplies an edge uv of a different color b. Remove u,v from X. Restrict to an infinite subset on which all edges from u have a single color d. If d≠a, then u together with that subset realizes exactly two colors. Otherwise d=a. Restrict again so that all edges from v have a single color e. If e≠a, then v and that subset realize exactly two colors. In the remaining case both stars have color a. Then {u,v} together with the final infinite subset realizes exactly a and b. Thus P(c,2) holds for every c≥2. P(c,1) follows from the lemma and P(c,c) from the full vertex set.

## An exact infinite family of negative instances

Fix r≥2 and distinguish a finite set F of r vertices. Give each of its binom(r,2) internal edges its own private color. Give every other edge one common color0. This is an exact c=1+binom(r,2) coloring, since the infinite complement supplies color0.

Every infinite W contains infinitely many vertices outside F. If j=|W∩F|, its colors are exactly color0 and the private colors on pairs in W∩F. Hence its color count is 1+binom(j,2). Conversely every 0≤j≤r occurs by taking j selected vertices of F and the entire infinite complement. This proves the exact spectrum, not merely an upper bound on it.

For each r≥3, every m between1 and c that is not of this form is therefore excluded by an explicit coloring. For instance c=7 permits exactly1,2,4,7 and excludes3,5,6. The counterexamples are infinite graphs with exact finite palettes; they do not replace the required infinite W by finite subgraphs.

This proves the positive part for1,2,c and an unbounded family of negative pairs. It does not prove that every pair3≤m<c admits an obstruction, since the displayed family leaves its triangular-number-plus-one spectrum intact.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Proof/source review only; no program is attached at authoring time.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_4d8441f0c5ef468bb8d48bf56d090f1d.txt


## Reproducibility and review

Proof/source review only; no code attached at authoring time. Exact hypotheses and boundary cases are addressed in report.md; external theorem proofs are credited rather than claimed independently verified.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_4d8441f0c5ef468bb8d48bf56d090f1d.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
