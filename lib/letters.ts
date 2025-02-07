export interface Letter {
    id: string;
    recipient: string;
    message: string;
    createdAt: string;
}

const letters: { [id: string]: Letter } = {};

export function saveLetter(letter: Letter) {
    letters[letter.id] = letter;
}

export function getLetter(id: string): Letter | undefined {
    return letters[id];
}
