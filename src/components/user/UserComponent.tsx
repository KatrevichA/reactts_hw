import React, {FC} from 'react';
import {IUserModel} from "../../models/userModel/UserModel";
import {HairUserModel} from "../../models/userModel/HairUserModel";
import {AddressUserModel} from "../../models/userModel/AddressUserModel";
import {BankUserModel} from "../../models/userModel/BankUserModel";
import {CompanyUserModel} from "../../models/userModel/CompanyUserModel";


export type IUserTypeProps = IUserModel &  {children?: React.ReactNode};

const UserComponent:FC <IUserTypeProps> = ({
                                      id,
                                      firstName,
                                      lastName,
                                      maidenName,
                                      age,
                                      gender,
                                      email,
                                      phone,
                                      username,
                                      password,
                                      birthDate,
                                      image,
                                      bloodGroup,
                                      height,
                                      weight,
                                      eyeColor,
                                      hair,
                                      domain,
                                      ip,
                                      address,
                                      macAddress,
                                      university,
                                      bank,
                                      company,
                                      ein,
                                      ssn,
                                      userAgent
                                  }) => {


    return (
        <div>

            <div>
                <h4>{id} - {firstName}</h4>
                <img src={image} key={id} alt={firstName}/>
            </div>
            <button>Click Me</button>

        </div>
    );
};

export default UserComponent;