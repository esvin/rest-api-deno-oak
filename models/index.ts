
interface User{
    id: string;
    username: string;
}

interface Message {
    id: string;
    text: string;
    userId: String;
}

const users = new Map<string, User>();

users.set('1', {
    id: '1',
    username: 'Esvin Estrada'
});

users.set('2', {
    id: '2',
    username: 'Jose Estrada'
});

const messages = new Map<string, Message>();

messages.set('1', {
    id: '1',
    text: 'Hola Mundo',
    userId: '1',
});
messages.set('2', {
    id: '2',
    text: 'Cruel',
    userId: '2',
});

export default {
    users,
    messages,
};
