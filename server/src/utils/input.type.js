const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID } = require("graphql");
const { ERoleType } = require("./enum.type");

const RequireFieldUserInputType = new GraphQLInputObjectType({
    name: "Require_Field_User_Input",
    fields: {
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
    }
});

const RequireFieldUserAllowNullInputType = new GraphQLInputObjectType({
    name: "Require_Field_User_Allow_Null_Input",
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

const NoRequireFieldUserInputType = new GraphQLInputObjectType({
    name: "No_Require_Fields_User_Input",
    fields: {
        user_id: { type: GraphQLID },
        username: {
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

const IDInput = new GraphQLInputObjectType({
    name: "ID_Input",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
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
            coreFields: { type: RequireFieldUserAllowNullInputType },
            otherFields: { type: OptionalFieldUserInputType }
        }
    }),
    idInputType: new GraphQLInputObjectType({
        name: "Id_Input",
        fields: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        }
    }),
    loggingInputType: new GraphQLInputObjectType({
        name: "Logging_Input",
        fields: {
            username: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) }
        }
    }),
    RequireFieldUserInputType,
    RequireFieldUserAllowNullInputType,
    NoRequireFieldUserInputType,
    OptionalFieldUserInputType,
    IDInput
};