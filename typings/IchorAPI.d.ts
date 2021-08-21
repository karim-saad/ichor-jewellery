import { Product as ProductModel } from './models';

export namespace IchorAPI {
    export namespace Products {
        export interface Response {
            products: ProductModel[]
        }
    }
}
