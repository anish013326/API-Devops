console.log("Running test...");

// simple deterministic test
function sum(a, b) {
  return a + b;
}

if (sum(2, 2) !== 4) {
  console.error("Test failed ❌");
  process.exit(1);
}

console.log("Test passed ✅");
process.exit(0);