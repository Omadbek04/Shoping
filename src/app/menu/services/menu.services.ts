import { Injectable } from '@angular/core';
import { Item } from '../interface/items';

@Injectable({ providedIn: 'root' })
export class MenuService {
  readonly items: Item[] = [
    {
      id: '12edasdasda',
      title: 'iPhone 8',
      imgSrc:
        'https://tse1.mm.bing.net/th?id=OIP.e_070MCyDExptdUj00QVLgHaHa&pid=Api',
      sllerName: 'Apple Store',
      price: 300,
    },
    {
      id: '12edasdasdassssssssssssa',
      title: 'iPhone 11',
      imgSrc:
        'https://openshop.fra1.cdn.digitaloceanspaces.com/public/uploads/products/photos/jfnqNIJZRbwykFYTyF5dxZgXc3ULQhGQwFCR0Hm0.jpeg',
      sllerName: 'Apple Store',
      price: 400,
    },
    {
      id: '12edasdasda2112ssssssssaxxxxxxxxxxxxaxzaxsa',
      title: 'iPhone 12 Pro Max',
      imgSrc:
        'https://tse1.mm.bing.net/th?id=OIP.6w2D-q5XvYjAXtx2nKUXLAHaHB&pid=Api',
      sllerName: 'Apple Store',
      price: 450,
    },
    {
      id: '12edassssssssssssxsacsausdasda',
      title: 'iPhone 13',
      imgSrc:
        'https://minapi.beemarket.uz/prod-media/productImages/thumbnails/medium/1718283224qTX6qYTqDcQq.webp',
      sllerName: 'Apple Store',
      price: 500,
    },
    {
      id: '12edasdasda',
      title: 'iPhone 14 Pro Max',
      imgSrc:
        'https://minapi.beemarket.uz/prod-media/productImages/thumbnails/medium/1718099428hENpsJcAbGK8.webp',
      sllerName: 'Apple Store',
      price: 650,
    },
    {
      id: '12edasd1222222222231232414asda',
      title: 'iPhone 15 Pro Max',
      imgSrc:
        'https://minapi.beemarket.uz/prod-media/productImages/thumbnails/medium/1718104602UgpMYDmCLaL9.webp',
      sllerName: 'Apple Store',
      price: 1200,
    },
    {
      id: '12edasdasdsap[okdasjdbcvagsahfsfa',
      title: 'iPhone 16 Pro Max',
      imgSrc:
        'https://minapi.beemarket.uz/prod-media/productImages/thumbnails/medium/1726833324sz9XjTKYyXY8.webp',
      sllerName: 'Apple Store',
      price: 2000,
    },
    {
      id: 'ssssssssssssssssssssssssa[okdasjdbcvagsahfsfa',
      title: 'iPhone 16 Pro Max',
      imgSrc:
        'https://minapi.beemarket.uz/prod-media/productImages/thumbnails/medium/1726834437OHIFEMxr0Z6k.webp',
      sllerName: 'Apple Store',
      price: 1900,
    },
  ];
}
