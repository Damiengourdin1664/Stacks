import { defaultOptions, runComponentTests } from "../../test/test-utils";
import "../../index";

["checkbox", "radio"].forEach((type) => {
    describe("s-check-control", () => {
        // TODO include indeterminate
        ["checked", "unchecked"].forEach((state) => {
            runComponentTests({
                type: "a11y",
                baseClass: "s-check-control",
                modifiers: {
                    global: ["has-warning", "has-error", "has-success"],
                },
                children: {
                    default: `
                        <input
                            class="s-${type}"
                            type="${type}"
                            id="test-input"
                            name=""
                            ${state === "checked" ? "checked" : ""}/>
                        <label class="s-label" for="test-input">
                            Label ${type}
                            <p class="s-input-message">Description</p>
                        </label>
                    `,
                },
                options: {
                    ...defaultOptions,
                    testidSuffix: `${state}-${type}`,
                },
            });
        });
    });
});
