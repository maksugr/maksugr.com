module.exports = {
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'source-sans-pro': ['Georgia', 'serif']
        },
        extend: {
            colors: {
                black: 'var(--color-black)',
                gray: 'var(--color-gray)',
                white: 'var(--color-white)',
                red: 'var(--color-red)'
            }
        }
    },
    plugins: []
};
