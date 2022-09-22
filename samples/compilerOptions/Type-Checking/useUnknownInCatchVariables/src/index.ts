try {
  // ...
} catch (err) {
  // We have to verify err is an
  // error before using it as one.
  if (err instanceof Error) {
    console.log(err.message);
  }
}

try {
  throw new Error("777")
} catch (error) {
  console.log(error)
}