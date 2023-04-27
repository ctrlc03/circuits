pragma circom 2.0.0;

template IsZero() {
    // write a template that returns true if the input is zero
    signal input in;
    signal output out;

    // the inverse of the signal 
    signal inv; 
    // if the input is zero, then the inverse is zero
    // otherwise, the inverse is 1 / input
    inv <-- in != 0 ? 1 / in : 0;

    out <== -in * inv + 1;

    // constraint that out is opposite of in 
    in * out === 0;
}