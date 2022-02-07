module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off', // require 모듈 변수에 담기 허용
    'import/extensions': 'off', // 확장자명 생략 가능
    quotes: ['error', 'single', { allowTemplateLiterals: true }], // 홑따움표, 백틱 사용
    'no-nested-ternary': 'off', // 중첩 삼항 연산자 사용 허용
    'prettier/prettier': 'error',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      // component 함수 유형 지정
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off', // props를 spread로 풀어 사용할 수 있음.
    'linebreak-style': ['error', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
