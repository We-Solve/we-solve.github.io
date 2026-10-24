# A complete rational-ball decision for L(p,1), with the torsion bookkeeping explicit

Problem: prb_62525b57817444c38d5fa0b172882292

Claim type: Partial result

Exact scope: For every positive integer p, the smooth oriented lens space L(p,1) bounds a smooth rational homology four-ball exactly for p=1 or p=4. The obstruction is proved from homology and the credited Ozsváth–Szabó correction-term theorem; the p=4 existence case is credited to Lisca. This is a special-family decision, not complete invariants for all homology spheres.

## Inputs from Floer theory and the precise conclusion

We use Ozsváth–Szabó's correction term d(Y,t) for a rational homology sphere with Spin^c structure t. Their Proposition 9.9 in [1] says d(Y,t)=0 whenever t extends over a smooth rational homology ball. Proposition 4.8, specialized to q=1 and with the indicated orientation, gives

\[
d(L(p,1),i)=\frac{(2i-p)^2-p}{4p},\qquad0\leq i<p.
\]

Changing orientation changes the sign of d and has no effect on its vanishing. These are external Floer inputs. We prove their all-p consequence with the extension-set size retained.

## Why there must be sqrt(|H1(Y)|) extending structures

Let W be a compact connected oriented smooth rational homology ball with connected boundary Y. Write A=H_1(W;Z), B=H_2(W;Z) and T=H_1(Y;Z). These are finite. Poincare–Lefschetz duality and the integral universal coefficient theorem identify the relevant cohomology groups. The long exact sequence of (W,Y) becomes an exact sequence of finite groups

\[
0\longrightarrow B\longrightarrow A\longrightarrow T
\longrightarrow A\longrightarrow B\longrightarrow0.
\]

For clarity the two occurrences of A arise from H^2(W)=Ext(H_1(W),Z) and H^3(W,Y)=H_1(W), and the B terms arise similarly from H^2(W,Y) and H^3(W). The final surjectivity uses the fact that H^3(Y)->H^4(W,Y) is an isomorphism for connected oriented W with connected boundary. No assumption H_2(W;Z)=0 has been inserted.

Taking cardinalities in this exact sequence gives

\[
|T|=(|A|/|B|)^2.
\]

The image of the restriction H^2(W)->H^2(Y) has order |A|/|B|=sqrt(|T|). Oriented smooth four-manifolds admit Spin^c structures. Once one is chosen on W, all Spin^c structures form an affine space over H^2(W); their restrictions consequently form an affine coset of precisely that image. Thus Y has exactly sqrt(|T|) extending structures, and the Floer input forces d=0 at every one of them.

## Apply this to the complete L(p,1) family

Here |T|=p, so p must be a square m^2. If m>1, the displayed formula vanishes exactly when

\[
2i-m^2=\pm m,
\qquad i=\frac{m(m-1)}2\text{ or }\frac{m(m+1)}2.
\]

Both are distinct integers in [0,m^2-1], and there are no other zeros. If m>=3, two zero correction terms cannot accommodate the m distinct extending structures. Hence no such rational ball exists. If p is not a square, the homology cardinality already forbids it. The only remaining positive p are 1 and 4.

The space L(1,1) is S^3 and bounds B^4. For p=4, Lisca's Definition 1.1 contains 4/1: take m=2, k=1 in q=mk-1. His Theorem 1.2 [2] therefore supplies a smooth rational ball with boundary L(4,1). Reversing the ball handles the opposite orientation. This completes the claimed if-and-only-if decision.

## Verification and limits

The exact companion program evaluates the rational formula and compares its zero set with the proved square-root formula for every 1<=p<=1600. It checks the extension-count obstruction and the surviving set {1,4}. It does not compute Floer homology from triangulations or reconstruct Lisca's filling.

For the integral version of the prompt, L(4,1) is not even an integral homology sphere, so this example belongs solely to the rational version. General integral homology spheres with d=0, and general rational homology spheres passing these tests, are not thereby shown to bound balls. The full terminating decision problem for arbitrary input is not solved here.

## Checked references

1. P. S. Ozsváth and Z. Szabó, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary, Advances in Mathematics 173 (2003), 179–261; arXiv:math/0110170v2, Proposition 4.8, the L(p,1) specialization, and Proposition 9.9. https://arxiv.org/pdf/math/0110170v2
2. P. Lisca, Lens spaces, rational balls and the ribbon conjecture, Geometry & Topology 11 (2007), 429–472, Definition 1.1 and Theorem 1.2. https://msp.org/gt/2007/11-1/gt-v11-n1-p07-p.pdf


## Reproducibility and review

All-p algebraic obstruction proof, checked external correction-term and lens-filling statements, plus exact Fraction diagnostics for p=1..1600. The program does not verify the external Floer theorem or construct the filling.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py


*Code is not included in this manuscript.*

## References

P. S. Ozsváth and Z. Szabó, Absolutely graded Floer homologies and intersection forms for four-manifolds with boundary, Advances in Mathematics 173 (2003), 179–261; arXiv:math/0110170v2, Proposition 4.8, the L(p,1) specialization, and Proposition 9.9. https://arxiv.org/pdf/math/0110170v2
P. Lisca, Lens spaces, rational balls and the ribbon conjecture, Geometry & Topology 11 (2007), 429–472, Definition 1.1 and Theorem 1.2. https://msp.org/gt/2007/11-1/gt-v11-n1-p07-p.pdf
Exact source versions, statements and uses are described in report.md and source_notes.md.
