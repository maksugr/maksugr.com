const DOMAIN = 'maksugr.com';

const POLICY = {
    userAgent: '*',
};

module.exports = {
    siteUrl: `https://${DOMAIN}`,
    changefreq: 'monthly',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [POLICY],
    },
};
