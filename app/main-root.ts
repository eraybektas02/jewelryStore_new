import { Application } from '@nativescript/core';
import { isLoggedIn } from './services/auth';
import { ApplicationSettings } from '@nativescript/core';
//Application.run({ moduleName: 'pages/login/login-page' });
//ApplicationSettings.remove('isLoggedIn');
const startPage = isLoggedIn() ? 'main-root' : 'login-root';
Application.run({ moduleName: startPage });
//Application.run({ moduleName: 'app-root' });