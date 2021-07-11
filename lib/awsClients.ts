import { DynamoDB } from 'aws-sdk';
import { Product } from '../typings';

class IchorDynamo {
    private readonly client = new DynamoDB.DocumentClient();

    public async getProducts(): Promise<Product[]> {
        const response = await this.client.scan({
            TableName: 'Products'
        }).promise();
        return response.Items as Product[];
    }
}

export const dynamoClient = new IchorDynamo();
