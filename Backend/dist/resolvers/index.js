"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const brand_1 = require("./brand");
const brandSocial_1 = require("./brandSocial");
const socialNetwork_1 = require("./socialNetwork");
const tier_1 = require("./tier");
exports.resolvers = {
    Query: {
        readBrand: brand_1.readBrand,
        readBrandSocial: brandSocial_1.readBrandSocial,
        readSocialNetwork: socialNetwork_1.readSocialNetwork,
        readTier: tier_1.readTier
    },
    Mutation: {
        createBrand: brand_1.createBrand,
        deleteBrand: brand_1.deleteBrand,
        updateBrand: brand_1.updateBrand,
        createBrandSocial: brandSocial_1.createBrandSocial,
        deleteBrandSocial: brandSocial_1.deleteBrandSocial,
        updateBrandSocial: brandSocial_1.updateBrandSocial,
        createSocialNetwork: socialNetwork_1.createSocialNetwork,
        deleteSocialNetwork: socialNetwork_1.deleteSocialNetwork,
        updateSocialNetwork: socialNetwork_1.updateSocialNetwork,
        createTier: tier_1.createTier,
        deleteTier: tier_1.deleteTier,
        updateTier: tier_1.updateTier
    }
};
//# sourceMappingURL=index.js.map