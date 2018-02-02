import request from '../utils/request'

export const getTest = () => request('GET', '/comm/sysFileEnum/list')
