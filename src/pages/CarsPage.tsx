import React, {useEffect, useState} from 'react';
import {carService} from "../services/api.service";
import CarsComponent from "../components/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import PaginationComponent from "../components/PaginationComponent";

const CarsPage = () => {

    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });
    useEffect(() => {
        carService.getCars().then(value => {
            if (value){
                setCarsPaginatedObject(value);
            }
        });
    }, []);

    const changePage = (action: string) => {
        switch (action){
            case 'prev':
        //         todo set param
                break;
                case 'next':
                    // todo set param
                    break;
        }
    }

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent changePage={changePage} next={carsPaginatedObject.next} prev={carsPaginatedObject.prev}/>
        </div>
    );
};

export default CarsPage;