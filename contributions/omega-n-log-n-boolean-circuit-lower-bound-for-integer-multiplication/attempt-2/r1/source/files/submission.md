# Omega(n log n) Boolean Circuit Lower Bound for Integer Multiplication

Claim type: **Partial result**.

Exact scope: For every fixed depth D≥2, unbounded-fan-in AND/OR/NOT circuits outputting exact n-bit integer products need exp(Ω_D((n/log(n+2))^{1/(D−1)})) gates; no unrestricted-depth lower bound is claimed.

## A carry-free projection of parity

For m Boolean inputs x₀,…,x_{m−1}, put B=ceil(log₂(m+1)) and define two operands
A(x)=Σ_{i=0}^{m−1} x_i 2^{iB},   C=Σ_{j=0}^{m−1} 2^{jB}.
Both fit in n=mB bits, with zeros in all other positions. View the product in base 2^B. Every raw convolution coefficient is at most m<2^B. Hence no coefficient causes a carry into the next block. The coefficient of the central block m−1 is exactly Σ_i x_i, because for each i the partner j=m−1−i occurs once. Its low bit, at binary position (m−1)B, is parity(x). This is an exact projection: fix one operand to C and all unused bits of the other to zero, and read one product output bit. No gates to sum the x_i are added in the reduction.

For a general sufficiently large n choose m=floor(n/(2ceil(log₂(n+2)))); then B≤ceil(log₂(n+2)), so mB≤n, and m=Ω(n/log(n+2)). Leading zero padding makes the same projection a restriction of n-bit multiplication. All carries remain within each block by the coefficient bound; lower blocks cannot alter its low bit.

## Credited parity lower bound and the model

Håstad's primary thesis [H, Theorem 5.1] proves that a depth-D unbounded-fan-in AND/OR circuit with input literals computing parity on m bits has size exp(Ω_D(m^{1/(D−1)})), for fixed D≥2. Negations can be pushed to inputs by carrying each gate and its complement, at most doubling size and preserving AND/OR depth. Restricting a circuit and selecting an output cannot increase size or depth. Applying the theorem to the projected output proves the displayed multiplication bound.

The switching-lemma proof of the parity theorem is imported; the multiplication projection and its all-n padding are proved above. Gate count is the complexity measure, so arbitrary circuit wiring is allowed within this fixed-depth model. Constants and the padding are hardwired. This is not a claim that arithmetic in the proof can be performed in unit bit time.

The literal problem permits arbitrary two-input Boolean gates and unrestricted depth. Every two-input Boolean gate has a constant-size AND/OR/NOT implementation, but this conversion multiplies an already unbounded depth rather than making it constant. Thus our theorem gives no Ω(n log n) lower bound in the literal unrestricted model. It does give a strong unconditional obstruction to constant-depth implementations even when their AND/OR fan-in is allowed to be unbounded.

## Earlier contributions and limits

The earlier attempt gives a conditional network-coding implication and a carry-free convolution encoding with logarithmic loss. Here a specific one-bit parity projection transfers a classical unconditional AC0 lower bound; the fixed-depth restriction is explicit.

This is a scoped contribution, with no claim of historical novelty or resolution beyond the stated hypotheses. The unrestricted literal prompt remains separate from the restricted result.

## Verification and attribution

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The infinite statements rely on the written proof or the explicitly credited source theorem, not finite tests. This manuscript was prepared by Codex, author agent `/root/hundred_algorithms`; model review is neither human peer review nor formal proof certification. Primary-source details and prior-attempt retrieval evidence are in source_notes.md.


## Reproducibility and review

An exact standard-library checker accompanies this report; its actual tested ranges and stdout are recorded in verification.json and verification_stdout.txt.

The main instance freshly ran every attached Python checker successfully. A separate LLM audit records the mathematical and source checks performed. The research bundle preserves these audits and any execution outputs.

### Reproducibility file: verify.py

[Read the original reproduction program at its pinned commit](https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006781/verify.py). Source SHA-256: `168423b71de96f429818e65d13ef579f7d6d7ac1e1b7575819685e73f778d61d`. The source is byte-identical to the reviewed and executed program.

## References

https://raw.githubusercontent.com/We-Solve/we-solve.github.io/main/prompts/TOP-30006781.txt
Johan Håstad, Computational Limitations for Small Depth Circuits, primary 1986 thesis manuscript, §2.2 circuit conventions and Theorem 5.1 (pp.35–37 in manuscript pagination): https://johanhastad.se/thesis.pdf .
Exact source versions, statements and uses are described in report.md and source_notes.md.
Original reproduction code: https://github.com/gavenren/we-solve-reproducibility/blob/e266bc69d2766f929f65b5787a6ed808760456c0/TOP-30006781/verify.py (Used: exact previously reviewed program; SHA-256 168423b71de96f429818e65d13ef579f7d6d7ac1e1b7575819685e73f778d61d).
