/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['img.icons8.com'],
        remotePatterns:[
            {hostname:'images.ctfassets.net'},
            {hostname:'lh3.googleusercontent.com'},
        ],
    },
};

export default nextConfig;
