module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'vue', 'typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': ['error', 'never'],
    'no-whitespace-before-property': 'error',
    semi: ['error', 'always'],
    'max-len': 'off',
    'prefer-rest-params': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { singleline: { requireLast: true } },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, variables: false },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Function: {
            message:
              'The `Function` type accepts any function-like value. Use something like "(arg: string) => void" as a type instead (preferably on interface). Read more here: https://stackoverflow.com/questions/29689966/typescript-how-to-define-type-for-a-function-callback-as-any-function-type-no',
          },
        },
      },
    ],
    'vue/valid-v-for': 'warn',
    'vue/attribute-hyphenation': 'warn',
    'vue/max-attributes-per-line': 'off',
    'vue/html-indent': 'off',
    'vue/attributes-order': 'off',
    'vue/html-self-closing': 'off',
    'vue/require-v-for-key': 'warn',
    'vue/no-use-v-if-with-v-for': 'warn',
    'vue/html-closing-bracket-newline': [
      'warn',
      { singleline: 'never', multiline: 'never' },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': [
      'warn',
      { ignores: ['pre', 'textarea', 'code'] },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'kebab-case'],
    'vue/require-default-prop': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-model-argument': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
  },
};
