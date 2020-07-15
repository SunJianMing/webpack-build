module.exports = {
    "parser": "babel-eslint",
    "extends": "eslint-config-airbnb-base", //继承
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "indent": ["error", 4],
        "comma-dangle": ['error', 'never'],
        'arrow-parens': ["error", "as-needed"],
        'padded-blocks': ["error", "never"],
        'no-trailing-spaces': ["error", { "skipBlankLines": true }],
        'prefer-const': ["error", { "destructuring": "any" }],
        "arrow-body-style": ["error", "as-needed"],
        'import/newline-after-import': 0,
        'react/jsx-wrap-multilines': 0,
        'react/jsx-filename-extension': 0,
        'eol-last': ["error", "never"],
        'react/jsx-indent': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/jsx-tag-spacing': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'no-unused-vars':0
    }
}