import { Product } from './models';

export namespace IchorAPI {
    export namespace Products {
        export interface Response {
            products: Product[]
        }
    }
}
