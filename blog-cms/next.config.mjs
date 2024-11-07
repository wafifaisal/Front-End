/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['img.icons8.com'],
        remotePatterns:[
            {hostname:'images.ctfassets.net'},
        ],
    },
};

export default nextConfig;
