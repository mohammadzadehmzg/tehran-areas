/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/pages'
    serverRuntimeConfig: {
        secret: process.env.SECRET,
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
    },
}


module.exports = nextConfig
