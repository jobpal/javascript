module.exports = {
  extends: [
    'eslint-config-airbnb'
  ],
  rules: {
    semi: ['error', 'never', {
      'beforeStatementContinuationChars': 'any',
    }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-underscore-dangle': ['off'],
  }
}
