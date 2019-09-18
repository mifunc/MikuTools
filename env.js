import pinyin from './pinyin';

export default {
    title: 'USE.IM',
    domain:
        process.env.NODE_ENV === 'development'
            ? 'use.im:3000'
            : 'use.im',
    description: '一个轻量的工具集合',
    url:
        process.env.NODE_ENV === 'development'
            ? 'https://use.im:3000'
            : 'https://use.im',
    apiUrl:
        process.env.NODE_ENV === 'development'
            ? 'https://use.im:3001'
            : 'https://use.im',
    pinyin: pinyin,
    development: process.env.NODE_ENV === 'development',
    axios:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:3001'
            : 'https://use.im'
};
