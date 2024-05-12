import { CardType } from './../types/card.types';
import { TestBed } from "@angular/core/testing";

import { DeckGeneratorService } from "./deck-generator.service";

describe("DeckGeneratorService", () => {
    let service: DeckGeneratorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DeckGeneratorService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    describe('generate', () => {
        it('should generate 20 number cards for each color', () => {
            const cards = service.generate();
            const numberCards = cards.filter(({type}) => type === CardType.NUMBER);

            expect(numberCards.length).toEqual(4 * 20);
        });
    });
});
