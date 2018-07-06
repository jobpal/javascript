module.exports = {
  extends: [
    'eslint-config-airbnb'
  ],
  rules: {
    semi: ['error', 'never', {
      'beforeStatementContinuationChars': 'any',
    }]
  }
}
