import { complaints } from "../Database/moc";

type Params = {
    id?: number
    qt?: number
    idUser?: number
}

//obter um número X de reclamações | pega sempre a partir dos últimos
export const getComplaintQt = (qt : number) => {
    if (qt > complaints.length) {
        console.warn("O valor de x é maior que o tamanho do array.");
        return null;
    }
    return complaints.slice(-qt)
}

//obter uma reclamação por ID
export const getComplaintId = (id: number) => {
    const complaint = complaints.find((item) => item.id === id);
    return complaint ? complaint : null; // Retorna o nome se o usuário for encontrado, caso contrário, retorna null
}

//obter todas as reclamações por usuário