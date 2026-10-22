import { DOCUMENT } from "@angular/common";
import { Component, inject } from "@angular/core";

@Component({
	selector: "app-root",
	standalone: true,
	styleUrl: "./app.component.css",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	private readonly document = inject(DOCUMENT);
	isDark = this.document.defaultView?.matchMedia("(prefers-color-scheme: dark)").matches ?? false;

	toggleTheme(): void {
		this.isDark = !this.isDark;
		this.document.documentElement.dataset.theme = this.isDark ? "dark" : "light";
	}
}
