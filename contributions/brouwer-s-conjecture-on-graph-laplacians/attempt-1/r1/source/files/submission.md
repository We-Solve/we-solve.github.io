# Brouwer’s Laplacian inequality for every threshold graph

Problem: TOP-1388

Claim type: Partial result.

Exact scope: For every finite threshold graph and every k, prove the recorded Laplacian partial-sum inequality by induction under isolated-vertex and dominating-vertex addition.

## The graph class

A threshold graph is any graph obtained from the empty graph by repeatedly adding either an isolated vertex or a vertex adjacent to every existing vertex. All graphs here are simple. Let S_k(G) be the sum of its k largest Laplacian eigenvalues, with S_0=0. We prove S_k(G)≤m(G)+k(k+1)/2 for all 1≤k≤n(G).

For every simple n-vertex graph the case k=n follows from tr L=2m and m≤n(n-1)/2≤n(n+1)/2. This also covers the one-vertex starting case.

Adding an isolated vertex appends a zero eigenvalue. Thus for k≤n-1 the required assertion is exactly the induction hypothesis for the old graph; k=n was just settled.

Now let G be obtained by adding a dominating vertex to H, where |H|=n-1≥1. If the old eigenvalues are μ_1≥...≥μ_{n-1}=0, the new eigenvalues are

n, 1+μ_1,...,1+μ_{n-2},0.

To check the formula, vectors (x,0) with x perpendicular to the all-one vector are acted on by L_H+I. The all-one vector is in the kernel, while (1,...,1,-(n-1)) is an eigenvector of eigenvalue n. These give n independent eigenvectors. Moreover μ_i≤n-1: on the perpendicular subspace L_H+L_complement=(n-1)I and both matrices are positive semidefinite. Hence the displayed list really is in descending order, allowing ties.

For 1≤k≤n-1 it follows that

S_k(G)=n+(k-1)+S_{k-1}(H)
≤n+k-1+m(H)+k(k-1)/2
=m(G)+k(k+1)/2,

because m(G)=m(H)+n-1. For k=1 the induction term S_0 is zero, so there is no missing boundary case. The trace argument handles k=n. Induction through the construction proves all cases.

## What this establishes

The statement is uniform in construction length, order and k, including disconnected threshold graphs. The spectral recurrence is derived rather than inferred from numerical eigenvalues. General graphs need not have an isolated or dominating vertex, so this induction supplies no all-graph proof.

## Evidence and limits

This is a scoped contribution; no priority claim is made. The proof and the explicitly credited external inputs carry the infinite quantifiers. No human review, formal proof verification, or public submission is claimed. Executed verify.py on all1,023 isolated/dominating construction patterns of orders1..10. An independent exact characteristic polynomial from matrix traces is factored by integer root division and every partial-sum inequality is checked; the cone recurrence is not used as the spectral oracle. Standard-library exact arithmetic only; verification_stdout.txt and verification.json preserve the run. Python -O is rejected; optimization_guard.txt records that rejection. The bounded checks supplement the proof and do not extend its scope.

## References

- https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1388.txt


## Reproducibility and review

Executed verify.py on all1,023 isolated/dominating construction patterns of orders1..10. An independent exact characteristic polynomial from matrix traces is factored by integer root division and every partial-sum inequality is checked; the cone recurrence is not used as the spectral oracle. All assertions enabled; a separate python -O run was rejected as required. Source and infinite-proof limitations are stated in report.md.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-1388.txt
Exact source versions, statements and uses are described in report.md and source_notes.md.
