pragma circom 2.0.0;

include "IsZero.circom";

template IsEqual() {
    // input signals
    signal input in[2];
    signal output out;

    // we can use isZero 
    component zero = IsZero();
    // if they are equal, is zero will be true
    zero.in <== in[0] - in[1];

    out <== zero.out; 
}