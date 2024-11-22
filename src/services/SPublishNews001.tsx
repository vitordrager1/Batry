import { publishNews } from "../Database/moc";

type Params = {
    id?: number
    qt?: number
    idUser?: number
}

//obter um número X de notícias | pega sempre a partir dos últimos
export const getPublishNewsQt = (qt : number) => {
    if (qt > publishNews.length) {
        console.warn("O valor de x é maior que o tamanho do array.");
        return null;
    }
    return publishNews.slice(-qt)
}

//obter uma notícia por ID
export const getPublishNewsId = (id: number) => {
    const publishNew = publishNews.find((item) => item.id === id);
    return publishNew ? publishNew : null; // Retorna o nome se o usuário for encontrado, caso contrário, retorna null
}

//obter todas as reclamações por usuário