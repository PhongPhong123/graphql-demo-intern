const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean } = require("graphql");
const { ERoleType } = require("./enum.type");

const RequireFieldUserInputType = new GraphQLInputObjectType({
    name: "Require_Field_User_Input",
    fields: {
        username: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
    }
});

const OptionalFieldUserInputType = new GraphQLInputObjectType({
    name: "Optional_Field_User_Input",
    fields: {
        age: {
            type: GraphQLInt
        },
        gender: {
            type: GraphQLString,
            defaultValue: 'unknown'
        },
        desc: {
            type: GraphQLString,
            defaultValue: 'User has no description'
        },
        active: {
            type: GraphQLBoolean,
            defaultValue: true
        },
        role: {
            type: ERoleType,
            defaultValue: ERoleType.CUSTOMER
        }
    }
});

module.exports = {
    userInputType: new GraphQLInputObjectType({
        name: "User_Input",
        fields: {
            require: {
                type: new GraphQLNonNull(RequireFieldUserInputType)
            },
            optional: {
                type: OptionalFieldUserInputType
            }
        }
    }),
    updateUserInputType: new GraphQLInputObjectType({
        name: "Update_User_Input",
        fields: {
            coreFields: { type: RequireFieldUserInputType },
            otherFields: { type: OptionalFieldUserInputType }
        }
    })
};