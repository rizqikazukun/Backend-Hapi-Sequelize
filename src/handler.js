const produk = require('./models')

const tambahProduk = (request, h) => {
  const {
    namaProduk,
    keterangan,
    harga,
    jumlah
  } = request.payload

  if (!namaProduk || !harga || !jumlah) {
    const response = h.response({
      status: 'fail',
      message: 'Harap isi Nama Produk, harga, dan Jumlah!'
    })
    response.code(400)
    return response
  }

  const produkBaru = produk.build({
    nama_produk: namaProduk,
    keterangan,
    harga,
    jumlah
  })

  produkBaru.save()
  const response = h.response({
    status: 'success',
    message: 'Produk Ditambah'
  })
  response.code(200)
  return response
}

const lihatProduk = async (request, h) => {
  const data = await produk.findAndCountAll()
  // Jika data 0 di front end harus kirim pesan
  // tidak ada barang
  const response = h.response({
    status: 'success',
    message: 'Ok',
    data
  })
  response.code(200)
  return response
}

const lihatDetailProduk = async (request, h) => {
  const { id } = request.params
  const data = await produk.findAndCountAll({ where: { id } })

  if (data.count === 0) {
    const response = h.response({
      status: 'fail',
      message: 'produk tidak ada atau sudah dihapus'
    })
    response.code(400)
    return response
  }

  const response = h.response({
    status: 'success',
    message: 'Ok',
    data
  })
  response.code(200)
  return response
}

const updateProduk = async (request, h) => {
  const {
    id,
    namaProduk,
    keterangan,
    harga,
    jumlah
  } = request.payload

  const data = await produk.findAndCountAll({ where: { id } })

  if (data.count === 0) {
    const response = h.response({
      status: 'fail',
      message: 'produk tidak ada atau sudah dihapus'
    })
    response.code(400)
    return response
  }

  if (!namaProduk || !harga || !jumlah) {
    const response = h.response({
      status: 'fail',
      message: 'Harap isi Nama Produk, harga, dan Jumlah!'
    })
    response.code(400)
    return response
  }

  await produk.update({
    nama_produk: namaProduk,
    keterangan,
    harga,
    jumlah
  }, {
    where: {
      id
    }
  })

  const response = h.response({
    status: 'success',
    message: 'Produk diubah'
  })
  response.code(200)
  return response
}

const deleteProduk = async (request, h) => {
  const { id } = request.params

  const data = await produk.findAndCountAll({ where: { id } })

  if (data.count === 0) {
    const response = h.response({
      status: 'fail',
      message: 'produk tidak ada atau sudah dihapus'
    })
    response.code(400)
    return response
  }

  await produk.destroy({ where: { id } })
  const response = h.response({
    status: 'success',
    message: 'Produk dihapus'
  })
  response.code(200)
  return response
}

module.exports = {
  tambahProduk,
  lihatProduk,
  updateProduk,
  lihatDetailProduk,
  deleteProduk
}
