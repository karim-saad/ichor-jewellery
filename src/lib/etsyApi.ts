import axios, { AxiosInstance } from 'axios';
import { Etsy, Listing, ListingImage, ListingWithImages, Shop } from '../typings';

export class EtsyApi {
    private readonly api: AxiosInstance;

    constructor(
        private readonly shopId: string,
        apiKey: string
    ) {
        this.api = axios.create({
            baseURL: 'https://openapi.etsy.com/v3/application',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            }
        });
    }

    public async getActiveListings(): Promise<Listing[]> {
        const { data: { results: listings } } = await this.api.get<Etsy.GetActiveListings.Response>(`shops/${this.shopId}/listings/active`);
        return listings.map(listing => {
            const { listing_id, title, description, quantity, featured_rank, url, price: { amount }, item_dimensions_unit, item_height, item_length, item_weight, item_weight_unit, item_width } = listing;
            return {
                listingId: listing_id,
                title,
                description,
                quantity,
                featuredRank: featured_rank,
                etsyUrl: url,
                price: amount,
                itemMeasurements: {
                    weight: item_weight,
                    weightUnit: item_weight_unit,
                    height: item_height,
                    width: item_width,
                    length: item_length,
                    dimensionsUnit: item_dimensions_unit
                }
            };
        });
    }

    public async getListingImages(listingId: number): Promise<ListingImage[]> {
        const { data: { results: listingImages } } = await this.api.get<Etsy.GetListingImages.Response>(`shops/${this.shopId}/listings/${listingId}/images`);
        return listingImages.map(listingImage => {
            const { listing_id, listing_image_id, rank, full_height, full_width, url_75x75, url_170x135, url_fullxfull } = listingImage;
            return {
                listingId: listing_id,
                listingImageId: listing_image_id,
                imageRank: rank,
                height: full_height,
                width: full_width,
                imageUrl: {
                    small: url_75x75,
                    medium: url_170x135,
                    full: url_fullxfull
                }
            };
        });
    }

    public async getListingsWithImages(): Promise<ListingWithImages[]> {
        const listings = await this.getActiveListings();
        const listingsWithImages: ListingWithImages[] = [];
        for await (const listing of listings) {
            const listingImages = await this.getListingImages(listing.listingId);
            listingsWithImages.push({
                ...listing,
                images: listingImages
            });
        }
        return listingsWithImages;
    }

    public async getShop(): Promise<Shop> {
        const { data: shop } = await this.api.get<Etsy.GetShop.Response>(`shops/${this.shopId}`);
        const { shop_id, shop_name, title, announcement, review_count, review_average } = shop;
        if (!title) {
            throw new Error(`Title not found for shop ${shop_id}`);
        }

        return {
            shopId: shop_id,
            shopName: shop_name,
            title,
            announcement,
            reviewAverage: review_average,
            reviewCount: review_count
        };
    }
}
