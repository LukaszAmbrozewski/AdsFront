//To stały plik który pozwala na działanie dodawania ścieżek z zewnątrz do naszej innej aplikacji TS
const {override} = require('customize-cra');
const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};