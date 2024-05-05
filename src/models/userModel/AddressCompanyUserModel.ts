import {CoordinatesAddressUserModel} from "./CoordinatesAddressUserModel";

export interface AddressCompanyUserModel{
    address: string,
    city: string,
    coordinates: CoordinatesAddressUserModel[],
    postalCode: string,
    state: string
}