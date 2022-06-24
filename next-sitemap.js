const DOMAIN = 'maksugr.com';

const POLICY = {
    userAgent: '*',
    disallow: '/notes/'
};

module.exports = {
    siteUrl: `https://${DOMAIN}`,
    changefreq: 'monthly',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [POLICY],
    },
    exclude: ['/notes*']
};
