import {CoordinatesAddressUserModel} from "./CoordinatesAddressUserModel";

export interface AddressUserModel{
    address: string,
    city: string,
    coordinates: CoordinatesAddressUserModel[],
    postalCode: string,
    state: string
}