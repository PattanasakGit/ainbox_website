"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const BusinessSchema = new mongoose_1.Schema({
    page_id: { type: String, required: true, unique: true },
    details: {
        ai_name: String,
        ai_behavior: String,
        ai_age: String,
        ai_gender: String,
        business_name: String,
        business_type: String,
        address: {
            detailedAddress: String,
            subdistrict: String,
            district: String,
            province: String,
            zipcode: String,
        },
        phone: String,
        email: String,
        website: String,
        opentime: {
            type: Map,
            of: {
                open: Boolean,
                from: String,
                to: String,
            },
        },
        description: String,
        product: [{
                name: String,
                price: String,
                description: String,
            }],
    },
});
exports.default = mongoose_1.default.model('business', BusinessSchema);
