import { Product as ProductModel } from './models';

export namespace IchorAPI {
    export namespace Products {
        export interface Response {
            products: ProductModel[]
        }
    }

    export namespace Product {
        export interface Response {
            product: ProductModel
        }
    }
}
