
export enum CardColor {
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE',
    YELLOW = 'YELLOW',
    BLACK = 'BLACK'
}

export enum CardType {
    NUMBER = 'NUMBER',
    PLUS_TWO = 'PLUS_TWO',
    REVERSE = 'REVERSE',
    PLUS_FOUR = 'PLUS_FOUR',
    COLOR_CHANGE = 'COLOR_CHANGE',
    SKIP = 'SKIP'
}

export interface Card {
    value: number,
    color: CardColor,
    type: CardType
}