import test from 'ava';
import validation from '../lib/validation';


const input = {
  target: {
    name: 'email',
    value: 'scott@foo.com',
  },
};

const settings = {
  target: {
    domains: ['foo.com', 'bar.com', 'baz.com'],
    regex: /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

test('validate text is email', t => {
  const ip = input;
  ip.target.value = 'scott@scott';
  t.is(validation(ip, settings), 'Not a valid e-mail address.', 'Must be an actual email address');
});

test('Validate email is not among default domains', t => {
  const ip = input;
  ip.target.value = 'scott@scott.com';
  t.is(validation(ip, settings), 'Email must be within the following domains: foo.com,bar.com,baz.com', 'Validate if entered email matches any default domains.');
});

test('Validate email is within a single implementation-defined domain', t => {
  const ip = input;
  ip.target.value = 'scott@test.com';
  const set = settings;
  set.target.domains = 'test.com';
  t.is(validation(ip, set), true, 'Validate if entered email is within a single, implementation-defined domain.');
});

test('Validate email is within an array of implementation-defined domains', t => {
  const ip = input;
  ip.target.value = 'scott@test.com';
  const set = settings;
  set.target.domains = ['test2.com', 'test.com'];
  t.is(validation(ip, set), true, 'Validate if entered email is within an array of implementation-defined domains');
});
