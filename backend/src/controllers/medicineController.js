const Medicine = require('../models/medicineModel')

// CRIAR REMÉDIO
exports.createMedicine = async (req, res) => {
  try{
    // "Pegando" os dados dos campos pela requisição
    const { image, name, description, bula, price } = req.body

    // Criando o novo remédio
    const newMedicine = new Medicine({
      image,
      name,
      description,
      bula,
      price
    })

    // Se não tiver nenhum erro: mostrar remédio criado
    await newMedicine.save()
    res.status(201).send(newMedicine)
  }
  catch (error){
    // Caso tenha erro, mostra o erro
    res.status(400).send({
      error: 'Erro ao criar remédio: ' + error.message
    })
  }
}

// LISTAR TODOS REMÉDIOS
exports.listMedicine = async (req, res) => {
  try {
    // Procura todos os remédios
    const medicines = await Medicine.find()
    res.status(200).send(medicines);
  }
  // Caso não consiga procurar
  catch (error) {
    res.status(500).send({
      error: 'Erro ao procurar remédios: ' + error.message
    });
  }
};

// LISTAR REMÉDIO POR ID
exports.getMedicine = async (req, res) => {
  try{
    // Tenta achar algum remédio com o ID
    const medicine = await Medicine.findById(req.params.id)

    // Caso não encontre o remédio
    if(!medicine){
      return res.status(404).send({
        error: 'Remédio não encontrado'
      })
    }

    // Caso encontre o remédio
    res.status(200).send(medicine)
  }

  // Caso não consiga buscar
  catch(error){
    res.status(500).send({
      error: "Erro ao buscar o remédio: " + error.message
    })
  }
}

// ATUALIZAR REMÉDIO
exports.updateMedicine = async (req, res) => {
  try{
    const { image, name, description, bula, price } = req.body

    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      {image, name, description, bula, price},
      {new: true, rundValidators: true} // Retorna o remédio atualizado e validado
    )
    
    // Caso não ache o remédio
    if(!medicine){
      return res.status(404).send({
        error: 'Remédio não encontrado'
      })
    }
    // Caso ache o usuário
    res.status(200).send(medicine)
  }
  catch (error){
    // Casa não consiga atualizar
    res.status(400).send({
      error: "Erro ao atualizar o remédio: " + error.message
    })
  }
}

// DELETAR REMÉDIO
exports.deleteMedicine = async (req, res) => {
  try{
    const medicine = await Medicine.findByIdAndDelete(req.params.id)

    // Caso não ache o remédio
    if(!medicine){ 
      return res.status(404).send({
        error: "Remédio não encontrado"
      })
    }

    // Caso ache o remédio
    res.status(200).send({
      message: "Remédio deletado com sucesso"
    })

  }
  // Caso de erro ao deletar
  catch(error){
    res.status(500).send({
      error: "Erro ao deletar o remédio: " + error.message
    })
  }

  
}
