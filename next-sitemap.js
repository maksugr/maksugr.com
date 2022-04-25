const domain = 'maksugr.com';

const policy = {
    userAgent: '*',
};

module.exports = {
    siteUrl: `https://${domain}`,
    changefreq: 'monthly',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [policy],
    },
};
