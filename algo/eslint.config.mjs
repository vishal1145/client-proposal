import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: process.cwd(),
});

export default [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react/no-unescaped-entities": [
                "error",
                {
                    "forbid": [
                        {
                            "char": "'",
                            "alternatives": ["&apos;"]
                        }
                    ]
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "varsIgnorePattern": "^_",
                    "argsIgnorePattern": "^_"
                }
            ],
            "@typescript-eslint/ban-ts-comment": "off",
            "@next/next/no-img-element": "off"
        }
    }
];
