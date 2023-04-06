import { log } from "console";

const usuarios: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const buscarUsuarios = (
    usuarios: { nome: string, idade: number, status: boolean }[],
    filtro: string)
    : { nome: string, idade: number, status: boolean }[] => {

    const usuariosEncontrados = usuarios.filter(usuario => {
        return usuario.nome.toLowerCase().includes(filtro.toLowerCase());
    })
    return usuariosEncontrados;
}

const buscarUsuariosAtivos = (
    usuarios: { nome: string, idade: number, status: boolean }[])
    : { nome: string, idade: number, status: boolean }[] => {

    const usuariosEncontrados = usuarios.filter(usuario => {
        return usuario.status;
    })
    return usuariosEncontrados;
}

// console.log(buscarUsuarios(usuarios, 'Gui'));
console.log(buscarUsuariosAtivos(usuarios));