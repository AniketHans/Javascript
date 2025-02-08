function func_a() {
  const var_a = "value_a";
  function func_b() {
    console.log(`The value of var_a is ${var_a}`);
  }
  return func_b;
}

const f = func_a();
f(); //The value of var_a is value_a
// Here, ideally in line f = func_a(), the func_a() after returning should be removed from call-stack along with its execution context.
// But, as func_a() returned the refrence of func_b and it is called as f() so func_a's execution context will be retainied so that
// any properties, methods if used by func_b can be retrieved.
// This is called closure.
