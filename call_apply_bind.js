let obj = { name: "suyog" };
function greting(a, b) {
  return a + " " + this.name + "," + b;
}
console.log(greting.call(obj, "hello", "bye"));
console.log(greting.apply(obj, ["hello", "bye"]));

const test = greting.bind(obj);
console.log(test("hello", "bye"));
