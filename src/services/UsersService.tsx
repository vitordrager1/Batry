import { users } from '../Database/moc'

//retorna o nome de um usuário
export const getUserName = (id: number) => {
    const user = users.find((item) => item.id === id);
    return user ? user.name : null; // Retorna o nome se o usuário for encontrado, caso contrário, retorna null
};

