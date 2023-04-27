import { expect } from "chai"
import circom_tester from "circom_tester"
import { cwd } from "process"

describe("isEqual", () => {
    let circuit 
    before(async () => {
        circuit = await circom_tester.wasm(`${cwd()}/test/circuits/isEqual.test.circom`)
    }) 
    it("should work when the two inputs are equal", async () => {
        const witness = await circuit.calculateWitness({ "in": [5n, 5n] })
        await circuit.checkConstraints(witness)
    })
    it("should fail when the two inputs are not", async () => {
        const witness = await circuit.calculateWitness({ "in": [5n, 3n ]})
        expect(await circuit.checkConstraints(witness)).to.throw
    })
})