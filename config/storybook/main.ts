import path from 'path'
import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),
    docs: {
        autodocs: 'tag'
    },
    webpackFinal: async (config) => {
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            app: path.resolve(__dirname, '../../src/app'),
            features: path.resolve(__dirname, '../../src/features'),
            entities: path.resolve(__dirname, '../../src/entities'),
            pages: path.resolve(__dirname, '../../src/pages'),
            shared: path.resolve(__dirname, '../../src/shared'),
            widgets: path.resolve(__dirname, '../../src/widgets')
        }

        return config
    }
}
export default config
