/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:'lh3.googleusercontent.com'
            },
            {
                protocol: "https",
                hostname:'wafi-blog.vercel.app'
            },
            {
                protocol: "https",
                hostname:'ih1.redbubble.net'
            },
            {
                protocol: "https",
                hostname:'img.icons8.com'
            },
            {
                protocol: "https",
                hostname:'tse2.mm.bing.net'
            }
        ],
    },
};

export default nextConfig;
