const mongoose = require('mongoose');
const SearchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Search', SearchSchema);


