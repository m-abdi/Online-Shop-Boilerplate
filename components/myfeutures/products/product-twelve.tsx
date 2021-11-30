import { Box } from '@mui/system'
import ProductCard from '../product-card'
import React from 'react'
import styles from "../../../public/css/flex-utilities.module.css"
export default function TwelveProducts() {
    return (
        <div className={styles.betweenRow} style={{position: "relative"}}>
            <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          <ProductCard info={{
            id: 123,
            title: "کفش زنانه",
            price: "۳۶۵٫۰۰۰",
            picture: "/images/home/index.jpg",
            picture_2: "/images/home/index2.jpg",
          }}/>
          
        </div>
    )
}

