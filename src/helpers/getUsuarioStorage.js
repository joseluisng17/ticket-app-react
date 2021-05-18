
export const getUsuarioStorare = () => {
    return {
        agente: localStorage.getItem('agente') || null,
        escritorio: localStorage.getItem('escritorio') || null,
    }
}