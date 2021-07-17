import { Component } from "react";

import Tabela from './Tabela';
import Alerta from './Alerta';

class Livro extends Component {

    state = {
        listaObjetos: [ {id : 1, titulo : "React PWA", autor : "Mauricio" , ano : 2021},
                        {id : 2, titulo : "React Hooks", autor : "Mauricio" , ano : 2021}],
        objectRemoved: -1
    }

    remover = objeto => {
        if (window.confirm("Remover este livro?")){
            const listaObjetos = this.state.listaObjetos.filter(p => p.id !== objeto.id);
            this.setState({ listaObjetos });
            this.setState({objectRemoved:1});
        }else{
            this.setState({objectRemoved:0});
        }
    }

    render() {
        return (
            <div>
            {this.state.objectRemoved === 1 && <Alerta msgAlert="Objeto removido com sucesso!" typeAlert="alert alert-success"></Alerta>}
            {this.state.objectRemoved === 0 && <Alerta msgAlert="Erro ao remover o objeto!" typeAlert="alert alert-danger"></Alerta>}
            <Tabela listaObjetos={this.state.listaObjetos} remover={this.remover}/>  
            </div>
        );
    }

}

export default Livro;