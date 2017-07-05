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
            CANCEL: 'Cancel',
            // Define menu options
            HOME: 'Home',
            CRITERIAEDIT: 'Criteria List',
            MAINTENANCE: 'Maintenance',
            TODO: 'To do',
            MYTASK: 'My tasks',
            DONETASK: 'Done Tasks',
            //Define login elements
            LOGIN: 'Login in',
            USERNAME: 'User',
            PASSWORD: 'Password',
            REMINDER: 'Remind the password',
            ACCOUNT_M1: 'Do not remember your password?',
            ACCOUNT_M2: 'Recover Password',
            ACCOUNT_M3: 'Create account',
            //Footer
            COPYRIGHT: 'Sistemas Galileo del Sur S.A Copyright 2017',
        })
        .translations('es', {
            // Define all menu elements
            LANGUAGE: 'Idioma',
            ENGLISH: 'Inglés',
            SPANISH: 'Español',
            LOGOUT: 'Cerrar Sesión',
            CANCEL: 'Cancelar',
            // Define menu options
            HOME: 'Inicio',
            CRITERIAEDIT: 'Criterios',
            MAINTENANCE: 'Mantenimiento',
            TODO: 'Por hacer',
            MYTASK: 'Mis tareas',
            DONETASK: 'Tareas realizadas',
            //Define login elements
            LOGIN: 'Iniciar Sesión',
            USERNAME: 'Usuario',
            PASSWORD: 'Constraseña',
            REMINDER: 'Recordar contraseña',
            ACCOUNT_M1: '¿Olvidó la contraseña?',
            ACCOUNT_M2: 'Recuperar Contraseña',
            ACCOUNT_M3: 'Crear cuenta',
            //Footer
            COPYRIGHT: 'Todos los Derechos Reservados Sistemas Galileo del Sur S.A 2017',
        })
    $translateProvider.preferredLanguage('es')
}

angular
    .module('BPMPortal')
    .config(config)