import { expect } from "chai"
import circom_tester from "circom_tester"
import { cwd } from "process"

describe("isZero", () => {
    let circuit 
    before(async () => {
        circuit = await circom_tester.wasm(`${cwd()}/test/circuits/isZero.test.circom`)
    }) 
    it("should work when the input is zero", async () => {
        const witness = await circuit.calculateWitness({ "in": 0n })
        await circuit.checkConstraints(witness)
    })
    it("should fail when the input is not zero", async () => {
        const witness = await circuit.calculateWitness({ "in": 1n })
        expect(await circuit.checkConstraints(witness)).to.throw
    })
})