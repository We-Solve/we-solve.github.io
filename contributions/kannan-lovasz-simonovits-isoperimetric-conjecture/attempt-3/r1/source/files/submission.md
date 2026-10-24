# KLS with an explicit constant for bounded Hessian condition number

Problem: prb_ffacccea279a4cd180b6337164b2c200

Claim type: Literature report

Exact scope: For a smooth density proportional to exp(-V) on R^d with mI<=Hess V<=MI, m>0, h(mu)>=sqrt(2m/pi) and h(mu)sqrt(||Cov(mu)||op)>=sqrt(2/(pi(M/m))). Thus every fixed Hessian condition-number class satisfies the literal dimension-free bound.

The imported input is Caffarelli's contraction theorem: the optimal transport from standard Gaussian measure to a measure with density exp(-W) relative to it, W convex, is 1-Lipschitz. We use Theorem1 and its explicitly stated approximation extension beyond compact support in Fathi--Gozlan--Prod'homme, author manuscript dated April6,2020, pp.1--2. Rescaling gives a map T taking gamma_d to mu with Lipschitz constant at most m^(-1/2), since V(x)-m|x|^2/2 is convex. The theorem is credited; its transport proof is not reproduced.

Here is a direct dimension-free Gaussian boundary estimate, to make the normalization and transfer transparent. For independent standard Gaussians X,Y and a smooth f, integrate along Z_theta=X cos(theta)+Y sin(theta), 0<=theta<=pi/2. Its derivative W_theta=-X sin(theta)+Y cos(theta) is an independent standard Gaussian at each fixed theta. Hence
\[
 E|f(X)-f(Y)|\le\int_0^{\pi/2}E|\nabla f(Z_\theta)\cdot W_\theta|\,d\theta
 =\sqrt{\pi/2}\,E\|\nabla f(X)\|.
\]
For a closed measurable B use the distance cutoff max(0,1-dist(x,B)/epsilon). Its gradient norm is at most 1/epsilon on B_epsilon minus B and zero elsewhere almost everywhere. Lipschitz approximation justifies the smooth calculation. Dominated convergence on the left yields 2p(1-p), where p=gamma(B), while the right is bounded by sqrt(pi/2)(gamma(B_epsilon)-p)/epsilon. Thus gamma^+(B)>=sqrt(2/pi)2p(1-p)>=sqrt(2/pi)min(p,1-p). A nonclosed set either has a closure of the same measure and the same distance enlargements, or its outer boundary measure is infinite. Therefore the estimate covers the Cheeger infimum's arbitrary measurable cuts.

If T has Lipschitz constant L and E=T^(-1)(B), then E_(epsilon/L) is contained in T^(-1)(B_epsilon). Pushforward and the preceding boundary estimate give h(mu)>=h(gamma)/L>=sqrt(2m/pi).

To compare with the requested covariance scale, fix a unit vector u and put Z=u dot(X-EX), A=partial_u V(X). Integration by parts gives E[ZA]=1 and E[A^2]=E[partial_uu V]<=M. These integrations are valid: strong convexity supplies Gaussian tails, and the upper Hessian bound makes the gradient grow at most linearly; cutoff boundary terms vanish. Cauchy--Schwarz gives Var(u dot X)>=1/M. In particular ||Cov(mu)||op>=1/M. Multiplication yields
\[
 h(\mu)\sqrt{\|\operatorname{Cov}(\mu)\|_{op}}
 \ge\sqrt{{2m\over\pi M}}.
\]
This bound depends only on kappa=M/m, not dimension or overall scale. It includes nonsymmetric nonproduct perturbations of quadratics. The upper Hessian bound is essential to this particular covariance conversion; mere strong convexity with no bound on M/m does not yield the claimed universal covariance constant by this proof. General nonsmooth and compactly supported log-concave measures are outside the stated class. This is a literature-based restricted result, not verification of a general KLS announcement.

Models used: Codex; exact serving model version is not exposed. Role: mathematical drafting and source inspection. Human contributors: none declared. No historical novelty, formal verification, or human peer review is claimed.

Verification record: Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.


## Reproducibility and review

Source-only/proof-only report: no code is attached or claimed executed. Verification consists of the written proof, exact literal-prompt/prior comparison, and the specifically cited primary theorem statements.

This report has proof/source review and no attached Python checker. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/prb_ffacccea279a4cd180b6337164b2c200.txt
https://www.normalesup.org/~mfathi/docs/Caffarelli%20CT.pdf — Fathi, Gozlan, Prod’homme, Theorem1, April6,2020 author manuscript; compact-support approximation paragraph checked.
Exact source versions, statements and uses are described in report.md and source_notes.md.
