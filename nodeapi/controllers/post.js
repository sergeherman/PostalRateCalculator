exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {'Letters (Stamped) Weight Not Over 1 (oz.)': '$0.55'},
      {'Letters (Stamped) Weight Not Over 2 (oz.)': '$0.70'},
      {'Letters (Stamped) Weight Not Over 3 (oz.)': '$0.85'},
      {'Letters (Stamped) Weight Not Over 4 (oz.)': '$1.00'},
      {'Letters (Metered) Weight Not Over 1 (oz.)': '$0.50'},
      {'Letters (Metered) Weight Not Over 2 (oz.)': '$0.65'},
      {'Letters (Metered) Weight Not Over 3 (oz.)': '$0.80'},
      {'Letters (Metered) Weight Not Over 4 (oz.)': '$0.95'},
      {'Large Envelops (Flats) Weight Not Over 1 (oz.)': '$1.00'},
      {'Large Envelops (Flats) Weight Not Over 2 (oz.)': '$1.20'},
      {'Large Envelops (Flats) Weight Not Over 3 (oz.)': '$1.40'},
      {'Large Envelops (Flats) Weight Not Over 4 (oz.)': '$1.60'},
      {'First-Class Package Service - Retail': '$3.15'}
    ]
  });
};