import {AddressCompanyUserModel} from "./AddressCompanyUserModel";

export interface CompanyUserModel{
    address: AddressCompanyUserModel[],
    department: string,
    name: string,
    title: string
}