import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

interface IProps {
    cars: ICarWithAuthModel[]
}

const CarsComponent: FC <IProps> = ({cars}) => {

    return (
        <div>
            {
            cars.map(value =>
                    <div key={value.id}> {value.id} -
                        {value.brand}
                    </div>)
            }
        </div>
    );
};

export default CarsComponent;