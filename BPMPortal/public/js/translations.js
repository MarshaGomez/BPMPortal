/**
 * translations.js // Traducciones automaticas
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {
            // Define all menu elements
            LANGUAGE: 'Language',
            ENGLISH: 'English',
            SPANISH: 'Spanish',
            LOGOUT: 'Log out',
            // Define menu options
            HOME: 'Home',
            CRITERIAEDIT: 'Criteria List',
        })
        .translations('es', {
            // Define all menu elements
            LANGUAGE: 'Idioma',
            ENGLISH: 'Inglés',
            SPANISH: 'Español',
            LOGOUT: 'Cerrar Sesión',
            // Define menu options
            HOME: 'Inicio',
            CRITERIAEDIT: 'Criterios',
        });
    $translateProvider.preferredLanguage('en');
}

angular
    .module('BPMPortal')
    .config(config);
