import { gql } from '@apollo/client';
import createApolloClient from '@/app/apollo-client';
import { IProduct } from '@/app/shared/types';

export async function getMarkets(): Promise<{ markets: IProduct[] }> {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Countries {
        markets {
          id
          price_per_ton
          offered_volume_in_tons
          name
          image
          description
        }
      }
    `
  });

  return data;
}
