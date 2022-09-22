function fn(x: string) {
  console.log("Hello, " + x.toLowerCase());
}
 
type StringOrNumberFunc = (ns: string | number) => void;
 
// Unsafe assignment
let func: StringOrNumberFunc = fn;
// Unsafe call - will crash
func(10);


type Methodish = {
  func(x: string | number): void;
};
 
function fn1(x: string) {
  console.log("Hello, " + x.toLowerCase());
}
 
// Ultimately an unsafe assignment, but not detected
const m: Methodish = {
  func: fn1,
};
m.func(10);