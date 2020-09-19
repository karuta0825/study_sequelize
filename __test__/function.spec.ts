import * as assert from 'power-assert';

// describe("func", () => {
//   it('h関数呼び出し', () => {
//     assert(h() === 'h');
//   });

//   it('g関数呼び出し', () => {
//     assert(func.g() === 'g');
//   });
// });

// describe("class", () => {
//   it("Person", () => {
//     const p = new Person("adam");
//     assert(p instanceof Person);
//   });

//   it("call", () => {
//     const p = new Person("adam");
//     assert(p.callName() === "adam");
//   });
// });

const table = [
  [1, 1, 2, 'case1'],
  [1, 2, 3, 'case2'],
  [2, 1, 3, 'case3'],
];

it.each(table)('.add(%i, %i)', (a: number, b: number, expected, casename) => {
  console.log(casename);
  assert.equal(a + b, expected);
});

for (const [a, b, e, n] of table as any) {
  it(n, () => {
    assert.equal(a + b, e);
  });
}
