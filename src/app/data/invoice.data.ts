import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
    id: 1,
    name: 'Components of PC',
    client: {
        name: 'Juan Perez',
        lastname: 'Gonzalez',
        address:{
            country: 'Mexico',
            city: 'Ciudad de Mexico',
            street: 25
            
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 1234567890,
    },
    items: [ {
            id:1,
            product: 'Motherboard', 
            price: 2000,
            quantity: 1
        },
        {
            id:2,
            product: 'CPU I9', 
            price: 3500,
            quantity: 3
        },
        {
            id:3,
            product: 'gtx 1080', 
            price: 1000,
            quantity: 4
        },
    ]
}