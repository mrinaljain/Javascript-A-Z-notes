function log(target, name, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args) {
    console.log(`Called ${name} with args: ${args}`);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  greet(name) {
    return `Hello, ${name}!`;
  }
}

const example = new Example();
example.greet("World"); // Logs: Called greet with args: [ 'World' ]
