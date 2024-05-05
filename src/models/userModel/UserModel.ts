import {HairUserModel} from "./HairUserModel";
import {AddressUserModel} from "./AddressUserModel";
import {BankUserModel} from "./BankUserModel";
import {CompanyUserModel} from "./CompanyUserModel";

export interface IUserModel {
    id: number,
    firstName: string,
    lastName?: string,
    maidenName?: string,
    age?: number,
    gender?: string,
    email?: string,
    phone?: string,
    username?: string,
    password?: string,
    birthDate?: string,
    image: string,
    bloodGroup?: string,
    height?: number,
    weight?: number,
    eyeColor?: string,
    hair?: HairUserModel[],
    domain?: string,
    ip?: string,
    address?: AddressUserModel[],
    macAddress?: string,
    university?: string,
    bank?: BankUserModel[],
    company?: CompanyUserModel[],
    ein?:string,
    ssn?: string,
    userAgent?: string
}