import { Observable } from '@nativescript/core';
import { customersStore } from '../../store/customers-store';
import { Customer } from '../../models/customer';
import { showImagePreview } from '../../utils/image-preview';

export class CustomerDetailViewModel extends Observable {
    private _customer: Customer;
    private _formattedDate: string;
    private _frontIdImage: string;
    private _backIdImage: string;
    private _formattedAmount: string;

    constructor(customerId: string) {
        super();
        const customer = customersStore.getCustomerById(customerId);
        if (customer) {
            this._customer = customer;
            this._formattedDate = customer.formattedDate;
            this._frontIdImage = customer.frontIdImage || '';
            this._backIdImage = customer.backIdImage || '';
            this._formattedAmount = customer.formattedAmount;
        }
    }

    async showFrontIdPreview() {
        if (this._frontIdImage) {
            const base64Data = this._frontIdImage.replace('data:image/jpeg;base64,', '');
            await showImagePreview(base64Data);
        }
    }

    async showBackIdPreview() {
        if (this._backIdImage) {
            const base64Data = this._backIdImage.replace('data:image/jpeg;base64,', '');
            await showImagePreview(base64Data);
        }
    }

    get customer(): Customer {
        return this._customer;
    }

    get formattedDate(): string {
        return this._formattedDate;
    }

    get frontIdImage(): string {
        return this._frontIdImage;
    }

    get backIdImage(): string {
        return this._backIdImage;
    }

    get formattedAmount(): string {
        return this._formattedAmount;
    }
}