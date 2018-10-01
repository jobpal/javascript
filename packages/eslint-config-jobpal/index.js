module.exports = {
  extends: [ 'eslint-config-airbnb' ],
  rules: {
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-underscore-dangle': ['off'],
    'no-unused-vars': ['error', {
      argsIgnorePattern: "^_|^e$|^err|^event$|^props$|^req$|^res$|^next$|^classes$|^theme$",
      ignoreRestSiblings: true,
      caughtErrors: 'none',
    }],
    'import/no-dynamic-require': ['off'],
    'max-len': ['warn', { code: 120 }],
    'no-prototype-builtins': ['off'],
    'no-shadow': ['off'],
    'camelcase': ['error', {
      'ignoreDestructuring': true,
      'properties': 'never',
    }]
  },
}

