/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PermissionsPlugin = require('webpack-permissions-plugin');
const path = require('path');

module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
    'class-transformer/storage',
  ];

  return {
    ...options,
    externals: [],
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: './prisma/schema.prisma', to: 'schema.prisma' },
          {
            from: './node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node',
            to: './libquery_engine-rhel-openssl-1.0.x.so.node',
          },
          {
            from: './node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node',
            to: './libquery_engine-debian-openssl-1.1.x.so.node',
          },
          {
            from: 'node_modules/swagger-ui-dist',
            to: '.',
            globOptions: {
              ignore: ['**/index.html'], // Exclude index.html from being copied
            },
          },
        ],
      }),
      new PermissionsPlugin({
        buildFiles: [
          {
            path: path.resolve(
              __dirname,
              `dist/libquery_engine-rhel-openssl-1.0.x.so.node`,
            ),
            fileMode: '755',
          },
        ],
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          },
        }),
      ],
    },
    output: {
      ...options.output,
      libraryTarget: 'commonjs2',
    },
    node: false,
  };
};
