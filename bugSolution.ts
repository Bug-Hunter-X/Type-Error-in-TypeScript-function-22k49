function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}

let user = ["Jane", "Doe"];
let user2 = "Jane Doe";

console.log(greeter(user)); // Output: Hello, Jane Doe
console.log(greeter(user2));// Output: Hello, Jane Doe