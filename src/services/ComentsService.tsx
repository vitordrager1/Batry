import { coments } from "../Database/moc";

type Params = {
    idComplaint?: number
    qt?: number
    idUser?: number
}

//obter um número X de reclamações | pega sempre a partir dos últimos
// export const getComents = () => {
//     if (qt > complaints.length) {
//         console.warn("O valor de x é maior que o tamanho do array.");
//         return null;
//     }
//     return complaints.slice(-qt)
// }

//obter todos os comentarios de uma reclamação
//parametro: id da reclamação
export const getComentsComplaint = (idComplaint: number) => {
    const coment = coments.filter((item) => item.idComplaint === idComplaint);
    return coment ? coment : null; // Retorna o nome se o usuário for encontrado, caso contrário, retorna null
}

//obter todas as reclamações por usuário