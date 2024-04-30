import React, {FC} from 'react';
import styles from './Product.module.css';


export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": string,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images"?: string[]
}

export type IProductTypeProps = IProductProps & {children?: React.ReactNode};

const Product:FC<IProductTypeProps> = ({id,
                                    title,
                                    description,
                                    price,
                                    discountPercentage,
                                    rating,
                                    stock,
                                    brand,
                                    category,
                                    thumbnail,
                                    images}) => {
    return (
        <div className={styles.cart}>
            <div className={styles.product}>
                <h4>{id} - {title}</h4>
                <h6>{description}: Price -{price}</h6>
                <h6>Discount - {discountPercentage} Rating - {rating}</h6>
                <h6>Stock - {stock} : {brand}</h6>
                <h6>{category} - <a href={thumbnail}>{category}</a></h6>
            </div>
            <div className={styles.image}>
                {
                    images?.map((image, index) =>
                        <img src={image} key={index} alt={title}/>
                    )
                }
            </div>


        </div>
    );
};

export default Product;