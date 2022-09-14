module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic' //para nao precisar importar React em todo arq
        }]
    ]
};