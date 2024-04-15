import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList, GraphQLSchema } from 'graphql';
import { list } from "./db/index.mjs";

const PayloadType = new GraphQLObjectType({
    name: 'Payload',
    fields: () => ({
        id: { type: GraphQLFloat },
        price_per_ton: { type: GraphQLFloat },
        offered_volume_in_tons: { type: GraphQLFloat },
        distribution_weight: { type: GraphQLFloat },
        name: { type: GraphQLString },
        country: { type: GraphQLString },
        image: { type: GraphQLString },
        supplier_name: { type: GraphQLString },
        earliest_delivery: { type: GraphQLString },
        description: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        markets: {
            type: new GraphQLList(PayloadType),
            resolve() {
                return list;
            }
        },
    }
});

export default new GraphQLSchema({ query: RootQuery });
