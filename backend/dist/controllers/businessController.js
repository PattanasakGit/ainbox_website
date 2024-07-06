"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBusiness = void 0;
const businessModel_1 = __importDefault(require("../models/businessModel"));
const createBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessData = req.body;
        const newBusiness = new businessModel_1.default(businessData);
        yield newBusiness.save();
        res.status(201).json({ message: 'Business data saved successfully', business: newBusiness });
    }
    catch (err) {
        console.error('Error saving business data:', err);
        res.status(500).json({ error: 'Failed to save business data' });
    }
});
exports.createBusiness = createBusiness;
