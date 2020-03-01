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

export { formatter };
