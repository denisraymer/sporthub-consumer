const CracoLessPlugin = require('craco-less');
// you can also use craco instead of customize-cra,
// which is now the most updated way in their current docs.

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@blue-6': '#3072C4',
                        // '@primary-color': '#3072C4',
                        '@link-color': '#1890ff',
                        '@component-background': '#F2F2F2',
                        '@success-color': '#52c41a',
                        '@warning-color': '#faad14',
                        '@error-color': '#f5222d',
                        '@font-size-base': '14px',
                        '@heading-color': 'rgba(0, 0, 0, 0.85)',
                        '@text-color': 'rgba(0, 0, 0, 0.65)',
                        '@text-color-secondary': 'rgba(0, 0, 0, 0.45)',
                        '@disabled-color': 'rgba(0, 0, 0, 0.25)',
                        '@border-radius-base': '2px',
                        '@border-color-base': '#d9d9d9',
                        '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    }],
};