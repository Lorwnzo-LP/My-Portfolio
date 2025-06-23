import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (error) {
      res.status(500).json({ message: "erro ao cadastrar livro", erro: error });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const livroEncontrado = await livro.findById(req.params.id);
      res
        .status(201)
        .json({ message: "Livro encontrado", livro: livroEncontrado });
    } catch (error) {
      res.status(500).json({ message: "Livro não encontrado", erro: error });
    }
  }

  static async alterarLivro(req, res) {
    try {
      const livroAlterado = await livro.findByIdAndUpdate(
        req.params.id,
        req.body
      );

      res.status(201).json({ message: "Livro alterado", livro: livroAlterado });
    } catch (error) {
      res.status(500).json({ message: "Livro não encontrado", erro: error });
    }
  }

  static async deletarLivro(req, res) {
    try {
      await livro.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Livro deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Falha ao deletar o livro" });
    }
  }

  static async listarLivroPorEditora(req, res) {
    try {
      const livrosBuscados = await livro.find({ editora: req.query.editora });
      res
        .status(200)
        .json({ message: "Deu certo", livros_buscados: livrosBuscados });
    } catch (error) {
      res.status(500).json({ message: "Deu errado", erro: error });
    }
  }
}

export default LivroController;
