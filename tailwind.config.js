module.exports = {
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            georgia: ['Georgia', 'serif']
        },
        extend: {
            colors: {
                black: 'var(--color-black)',
                hoar: 'var(--color-hoar)',
                white: 'var(--color-white)',
                red: 'var(--color-red)'
            }
        }
    },
    plugins: []
};
