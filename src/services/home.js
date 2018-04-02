import request from '../utils/request'

export const getTest = () => request('GET', '/blog/list')
