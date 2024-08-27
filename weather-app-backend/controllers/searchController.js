const Search = require('../models/Search');

exports.saveSearch = async (req, res) => {
    const { city } = req.body;
    try {
        const newSearch = new Search({
            userId: req.user.id,
            city,
        });
        const search = await newSearch.save();
        res.json(search);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getSearchHistory = async (req, res) => {
    try {
        const searches = await Search.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(searches);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

