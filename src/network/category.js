import axios from './axios'


export function getCategory() {
  return axios({
    url: 'api/hy//category'
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: '/api/hy/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/api/hy/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
