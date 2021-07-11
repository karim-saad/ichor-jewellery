import { DynamoDB, config } from 'aws-sdk';
import { Product } from '../typings';

config.update({
    /* eslint-disable no-undef */
    credentials: {
        accessKeyId: process.env.ICHOR_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.ICHOR_AWS_SECRET_ACCESS_KEY
    },
    region: process.env.ICHOR_AWS_REGION
    /* eslint-enable no-undef */
});
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
