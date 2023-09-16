/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/pages'
    serverRuntimeConfig: {
        secret: process.env.SECRET,
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
    },
    env: {
        customKey: 'my-value',
    },
    domains: ["tehran-area.vercel.app"],

}


module.exports = nextConfig
