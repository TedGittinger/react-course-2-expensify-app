const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello big dummy ${name}!`;

test('some message', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('testing generateGreeting', () => {
  const theGreeting = generateGreeting('Ted');

  expect(theGreeting).toBe('Hello big dummy Ted!');
});

test('test anonymous greeting', () => {
  const theAnonymousGreeting = generateGreeting();

  expect(theAnonymousGreeting).toBe('Hello big dummy Anonymous!');
});
