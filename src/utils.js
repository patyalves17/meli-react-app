function formatter(value, currency) {
  if (value && currency) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: `${currency}`
    }).format(value);
  } else {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { formatter };

// export default { formatter };
// module.exports = { formatter };
