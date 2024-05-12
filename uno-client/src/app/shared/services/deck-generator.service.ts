import { Injectable } from "@angular/core";
import { Card, CardColor, CardType } from "../types/card.types";

@Injectable({
    providedIn: "root",
})
export class DeckGeneratorService {
    generate(): Card[] {
        const deck: Card[] = [];
        for (const c in CardColor) {
            const color = c as CardColor;
            if (color !== CardColor.BLACK) {
                for (let i = 0; i < 10; i++) {
                    deck.push(this.generateNumber(color, i));
                    deck.push(this.generateNumber(color, i));
                }
            }

            deck.push(this.generateSkip(color));
            deck.push(this.generateSkip(color));
            deck.push(this.generateReverse(color));
            deck.push(this.generateReverse(color));
            deck.push(this.generatePlusTwo(color));
            deck.push(this.generatePlusTwo(color));
            deck.push(this.generatePlusFour());
            deck.push(this.generatePlusFour());
            deck.push(this.generateColorChange());
        }
        return deck;
    }

    private generateNumber(color: CardColor, n: number): Card {
        return {
            color,
            type: CardType.NUMBER,
            value: n,
        };
    }

    private generateSkip(color: CardColor): Card {
        return {
            color,
            type: CardType.SKIP,
            value: 0,
        };
    }

    private generateReverse(color: CardColor): Card {
        return {
            color,
            type: CardType.REVERSE,
            value: 0,
        };
    }

    private generatePlusTwo(color: CardColor): Card {
        return {
            color,
            type: CardType.PLUS_TWO,
            value: 0,
        };
    }

    private generatePlusFour(): Card {
        return {
            color: CardColor.BLACK,
            type: CardType.PLUS_FOUR,
            value: 0,
        };
    }

    private generateColorChange(): Card {
        return {
            color: CardColor.BLACK,
            type: CardType.COLOR_CHANGE,
            value: 0,
        };
    }
}
