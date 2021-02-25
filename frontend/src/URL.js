const development = process.env.NODE_ENV
export const url = development === 'production' ? '/' : 'http://localhost:8080/';

