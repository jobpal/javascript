module.exports = {
  extends: [
    'eslint-config-airbnb'
  ],
  rules: {
    semi: ['error', 'never', {
      beforeStatementContinuationChars: 'any',
    }],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-underscore-dangle': ['off'],
    'no-unused-vars': ['error', {
      argsIgnorePattern: "^_|^e$|^err|^event$|^props$|^req$|^res$|^next$|^classes$|^theme$",
      ignoreRestSiblings: true,
      caughtErrors: 'none',
    }],
    'import/no-dynamic-require': ['allow'],
  }
}
