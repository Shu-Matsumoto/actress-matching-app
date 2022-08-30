/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponents�̗L����
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // �{�Ԋ��ł�React Testing Library�Ŏg�p����data-testid�������폜
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }

    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
