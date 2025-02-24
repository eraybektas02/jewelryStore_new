import { Observable, Frame } from '@nativescript/core';
import { Login } from '../../models/login';
import { Auth_login } from '../../services/auth';

export class LoginViewModel extends Observable {
    private _testx: string = '';
    private _email: string = '';
    private _password: string = '';
    private _errorMessage: string = '';
    private _isLoading: boolean = false;
    constructor() {
        super();
    }

    async login() {
        try {
            this.isLoading = true; // İşlem başlamadan yükleniyor göstergesi açılabilir.
            const success = await Auth_login(this.email, this.password); // await ekledik
            if (success) {
                Frame.topmost().navigate({
                    moduleName: "app-root",
                    clearHistory: true
                });
                alert('success');
            } else {
                this.errorMessage = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
            }
        } catch (error) {
            console.error('Login error:', error);
            this.errorMessage = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
        } finally {
            this.isLoading = false;
        }
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }
    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    get errorMessage(): string {
        return this._errorMessage;
    }
    set errorMessage(value: string) {
        if (this._errorMessage !== value) {
            this._errorMessage = value;
            this.notifyPropertyChange('errorMessage', value);
        }
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
            this.notifyPropertyChange('isLoading', value);
        }
    }

    save(){
        this.test = 'dhjkh';
        alert('x');
    }

    // Getters and setters
    get test(): string {
        return this._testx;
    }
    set test(value: string) {
        if (this._testx !== value) {
            this._testx = value;
            this.notifyPropertyChange('_testx', value);
        }
    }
}