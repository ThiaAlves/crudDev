import React, { Component, Fragment } from 'react';
import { readData, insertData, deleteData } from './Functions';
import Menu from "./Menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';

export default class developer extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            nome: '',
            sexo: '',
            idade: '',
            hobbie: '',
            dataNascimento: '',
            editable: false,
            developers: [],
            prev_page: '',
            next_page: '',
            current_page: '',
            last_page: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }
   
    componentDidMount() {
        this.getData(this.state.next_page)
    }

    getData(page_url) {
        readData(page_url)
        .then(promise => {
            this.setState({
                id: '',
                nome: '',
                sexo: '',
                idade: '',
                hobbie: '',
                dataNascimento: '',
                editable: false,
                developers: [...promise.data],
                prev_page: promise.prev_page_url,
                next_page: promise.next_page_url,
                current_page: promise.current_page,
                last_page: promise.last_page
            })
        })
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        let input_data = this.validateData(this.state)
        if(input_data) {
            input_data.id = this.state.id
            insertData(input_data, this.state.editable)
            .then(() => {
                this.setState({
                    id: '',
                    nome: '',
                    sexo: '',
                    idade: '',
                    hobbie: '',
                    dataNascimento: '',
                    editable: false,
                    developers: [],
                    prev_page: '',
                    next_page: '',
                    current_page: '',
                    last_page: ''
                })
                this.getData()
            })
            Swal.fire({
                title: 'Sucesso!',
                text: 'Desenvolvedor Cadastrado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Fechar'
                
            })
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível cadastrar desenvolvedor!',
                icon: 'error',
                confirmButtonText: 'Fechar'  
            })
        }
    }

    onCancel(event) {
        event.preventDefault()
        this.setState({
            nome: '',
            sexo: '',
            idade: '',
            hobbie: '',
            dataNascimento: '',
            editable: false
        })
    }

    validateData(input) {
        let data = Object.assign({}, input)
        delete data.id
        delete data.editable
        delete data.developers
        delete data.prev_page
        delete data.next_page
        delete data.current_page
        delete data.last_page
        for(let i in data) {
            if(!data[i]) {
                return null
            }
        }
        return data
    }
    

    onlyNumber(event) {
        let key_code = event.which;
        if(key_code < 48 || key_code > 57) {
            event.preventDefault()
        }
        return
    }

    nascValidate() {
        var dataNascimento = new Date($('#dataNascimento').val());
        var dataAtual =  new Date();
        typeof(dataAtual);
        var age = dataAtual.getFullYear(0) - dataNascimento.getFullYear(0);
        if(age == 0 || age > 120) {
            Swal.fire({
                title: 'Erro!',
                text: 'Data Inválida!',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
            $('#dataNascimento').val('');
        }
    }

    ageValidate() {
        var idade = $('#idade').val();
        if(idade > 122 || idade < 3) {
            Swal.fire({
                title: 'Erro!',
                text: 'Idade Inválida!',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
            var idade = $('#idade').val('');
        }
    }


    render() {
        return (
            <div className="layout row">
                <Menu />
                <div className="actionDiv col-9">
                    <div className="Formdiv">
                    <h1 className="text-center pb-5">Cadastrar Desenvolvedores</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-12 col-md-8">
                        <label for="nome">Nome:</label>
                            <input type="text" className="form-control" name="nome" maxLength="255" placeholder="Informe o seu nome" value={this.state.nome || ''} onChange={this.onChange}/>
                         </div> 
                         <div className="form-group col-12 col-md-4">
                        <label for="sexo">Sexo:</label>
                        <select className="form-control" name="sexo" required value={this.state.sexo || ''} onChange={this.onChange}>
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                        </select>
                        </div>
                        <div className="form-group col-12 col-md-6">  
                        <label for="dataNascimento">Data de Nascimento:</label>                      
                         <input type="date" className="form-control" id="dataNascimento" name="dataNascimento" value={this.state.dataNascimento || ''} onChange={this.onChange} onBlur={this.nascValidate}/>
                            </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="idade">Idade:</label>
                             <input type="text" name="idade" id="idade" className="form-control" maxLength="3" min="3" max="120" placeholder="Informe sua idade" value={this.state.idade || ''} onChange={this.onChange} onKeyPress={(event) => this.onlyNumber(event)} onBlur={this.ageValidate} />
                        </div>
                    <div className="form-group col-12 col-md-12">
                    <label for="hobbie">Hobbie:</label>     
                    <input type="text" className="form-control" name="hobbie" maxLength="255" placeholder="Hobbie" value={this.state.hobbie || ''} onChange={this.onChange} />
                        </div>
                    <div className="form-group p-3">
                            <button type="submit" className="btn btn-success" name="save" onclick={this.onSubmit}><FontAwesomeIcon icon="check"  className="icon"/>Salvar</button>
                    </div>
                </div>
                </form>                
                </div>
            </div>
           </div> 
        )
    }
}