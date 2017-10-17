import axios from 'axios'

export const importReportData = data => {
  return axios.post('/api/save', data)
}

export const getReportData = data => {
  return axios.get('/api/getReport', {params: data})
}
