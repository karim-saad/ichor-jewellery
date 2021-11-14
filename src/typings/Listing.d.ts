export interface Listing {
    listingId: number;
    title: string;
    description: string;
    quantity: number;
    featuredRank: number;
    etsyUrl: string;
    price: number;
    itemMeasurements: {
        weight: number | null;
        weightUnit: 'oz' | 'lb' | 'g' | 'kg' | null;
        height: number | null;
        width: number | null;
        length: number | null;
        dimensionsUnit: 'in' | 'ft' | 'mm' | 'cm' | 'm' | 'yd' | 'inches' | null;
    }
}

export interface ListingImage {
    listingId: number;
    listingImageId: number;
    imageRank: number;
    imageUrl: {
        small: string;
        medium: string;
        full: string;
    }
    height: number | null;
    width: number | null;
}

export type ListingWithImages = Listing & {
    images: ListingImage[]
};
