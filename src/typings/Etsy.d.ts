export namespace Etsy {
    export namespace GetActiveListings {
        export type Response = ListResponse<Listing>;
    }

    export namespace GetListingImages {
        export type Response = ListResponse<ListingImage>;
    }

    export namespace GetShop {
        export type Response = Shop;
    }

    export interface ListResponse<T> {
        count: number;
        results: T[];
    }

    export interface Listing {
        listing_id: number;
        user_id: number;
        shop_id: number;
        title: string;
        description: string;
        state: 'active' | 'inactive' | 'sold_out' | 'draft' | 'expired';
        quantity: number;
        featured_rank: number;
        url: string;
        num_favorers: number;
        listing_type: boolean;
        tags: string[];
        materials: string[];
        item_weight: number | null;
        item_weight_unit: 'oz' | 'lb' | 'g' | 'kg' | null;
        item_length: number | null;
        item_width: number | null;
        item_height: number | null;
        item_dimensions_unit: 'in' | 'ft' | 'mm' | 'cm' | 'm' | 'yd' | 'inches' | null;
        style: string[];
        price: {
            amount: number;
            divisor: number;
            currency_code: string;
        }
    }

    export interface ListingImage {
        listing_id: number;
        listing_image_id: number;
        hex_code: string | null;
        red: number | null;
        green: number | null;
        blue: number | null;
        hue: number | null;
        saturation: number | null;
        brightness: number | null;
        is_black_and_white: boolean | null;
        creation_tsz: number;
        rank: number;
        url_75x75: string;
        url_170x135: string;
        url_570xN: string;
        url_fullxfull: string;
        full_height: number | null;
        full_width: number | null;
    }

    export interface Shop {
        shop_id: number;
        user_id: number;
        shop_name: string;
        title: string | null;
        announcement: string | null;
        sale_message: string | null;
        create_date: number;
        update_date: number;
        listing_active_count: number;
        url: string;
        num_favorers: number;
        transaction_sold_count: number;
        review_count: number | null;
        review_average: number | null;
    }
}
