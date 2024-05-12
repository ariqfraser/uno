import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DeckGeneratorService } from "./shared/services/deck-generator.service";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    deckGenerator = inject(DeckGeneratorService);

    ngOnInit() {
        this.deckGenerator.generate();
    }
}
