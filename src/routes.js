const {
  tambahProduk,
  lihatProduk,
  lihatDetailProduk,
  updateProduk,
  deleteProduk
} = require('./handler')

const Routes = [
  {
    method: 'GET',
    path: '/api/getproduct',
    handler: lihatProduk,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'GET',
    path: '/api/getproduct/{id}',
    handler: lihatDetailProduk,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'POST',
    path: '/api/addproduct',
    handler: tambahProduk,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/updateproduct',
    handler: updateProduk,
    options: {
      cors: {
        origin: ['*']
      }
    }
  },
  {
    method: 'DELETE',
    path: '/api/deleteproduct/{id}',
    handler: deleteProduk,
    options: {
      cors: {
        origin: ['*']
      }
    }
  }

]

module.exports = Routes
