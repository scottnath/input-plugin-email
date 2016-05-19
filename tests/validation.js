import test from 'ava';
import validation from '../lib/validation';


const input = {
  target: {
    name: 'email',
    value: 'scott@foo.com',
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

test('validate text is email', t => {
  const ip = input;
  ip.target.value = 'scott@scott';
  t.is(validation(ip), 'Not a valid e-mail address.', 'Must be an actual email address');
});

