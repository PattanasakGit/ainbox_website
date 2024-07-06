"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const authMiddleware_1 = require("./middleware/authMiddleware");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Security middlewares
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3001',
    credentials: true,
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api', limiter);
// Logging
app.use((0, morgan_1.default)('combined'));
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});
// Middleware
app.use(express_1.default.json({ limit: '10mb' }));
// Routes
app.use('/api', authRoute_1.default);
// Public route
app.get('/public', (req, res) => {
    res.json({ message: 'This is a public route' });
});
// Protected route
app.get('/protected', authMiddleware_1.authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
// Error handling middleware
app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});
const database = process.env.DATABASE;
const password = process.env.PASSWORD;
const port = process.env.PORT || 3002;
// Connect to MongoDB
mongoose_1.default
    .connect(`mongodb+srv://navapols:${password}@atlascluster.bc0euhx.mongodb.net/${database}?retryWrites=true&w=majority&appName=AtlasCluster`)
    // .connect(`mongodb+srv://navapols:${password}@cluster0.7lrhe8j.mongodb.net/${database}?retryWrites=true&w=majority`)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
})
    .catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
exports.default = app;
