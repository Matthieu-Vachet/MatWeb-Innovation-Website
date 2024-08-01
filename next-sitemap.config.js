/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.matthieu-vachet.fr",
    generateRobotsTxt: true, // Générer automatiquement le fichier robots.txt
    generateIndexSitemap: false, // Ne pas générer un sitemap index
    sitemapSize: 5000, // Nombre maximum d'URL par fichier sitemap
    outDir: "./public", // Répertoire de sortie pour les fichiers sitemap
    additionalPaths: async (config) => [
        await config.transform(config, "/"),
        await config.transform(config, "/mentions-legales"),
        // Ajoutez d'autres chemins ici si nécessaire
    ],
};
