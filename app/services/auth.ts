import { ApplicationSettings } from '@nativescript/core';

const CREDENTIALS = {
    email: 'admin@example.com',
    password: 'admin123'
};

export function isLoggedIn(): boolean {
    return ApplicationSettings.getBoolean('isLoggedIn', false);
}

export function Auth_login(email: string, password: string): boolean {
    if (email === CREDENTIALS.email && password === CREDENTIALS.password) {
        ApplicationSettings.setBoolean('isLoggedIn', true);
        return true;
    }
    return false;
}

export function logout(): void {
    ApplicationSettings.remove('isLoggedIn');
}