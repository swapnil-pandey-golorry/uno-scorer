module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: false,
    XMLHttpRequest: false,
    DevWarn: false,
    window: false,
    DevLog: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'prefer-const': 1,
    'no-use-before-define': [1, { functions: false, variables: false }],
    'no-unused-vars': 1,
    'no-underscore-dangle': 0, // mention in doc that underscore means the method shouldn't be called
    'react/forbid-prop-types': 1, // warning for vague prop-types (any, array, object) which have  more specific alternatives
    'arrow-parens': [2, 'always'], // TODO modify the ReadMe
    'react/jsx-equals-spacing': [2, 'always'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.json', '.jsx'] }],
    'max-classes-per-file': [0],
    // https://github.com/airbnb/javascript/pull/985
    'jsx-quotes': [2, 'prefer-single'],
    'react/no-multi-comp': 0,
    'react/jsx-boolean-value': 0, // no practical meaning for this rule
    'padded-blocks': 1, // aesthetically good to pad class declarations
    'global-require': 1, // import_paths.js needs local require

    'import/prefer-default-export': 0, // TODO change to not prefer default export
    'import/no-unresolved': [2, { ignore: ['\.png$'] }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'prefer-promise-reject-errors': 1,
    // TODO figure out how to pass objects to an Error object
    'comma-dangle': 1,
    // not stable recognition of object types, change from 2 to 1
    // arguments in function calls and spread rest variables shouldn't
    // apply this rule
    camelcase: 1,
    // exception only applies to variables from network data that follows
    // snake_case
    'react/no-array-index-key': 1,
    // exception only applies to static rendering that has non-changing
    // array data
    'react/prefer-stateless-function': 0,
    'class-methods-use-this': 0, // don't see a point
    'object-curly-newline': 0,
    'no-plusplus': 0,
    'dot-notation': 0,
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    'react/destructuring-assignment': [0],
    'react/state-in-constructor': [0],
    'react/jsx-props-no-spreading': [0],
    'react/static-property-placement': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/no-did-update-set-state': [0],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],
    'import/extensions': ['error', 'never', { ignorePackages: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
