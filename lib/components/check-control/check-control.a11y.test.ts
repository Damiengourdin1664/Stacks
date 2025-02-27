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
                // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
                skippedTestids: [
                    /^s-check-control-dark-has-error-(checked|unchecked)-(checkbox|radio)$/,
                    /^s-check-control-light-has-(success|warning)-(checked|unchecked)-(checkbox|radio)$/,
                    "s-check-control-dark-has-success-checked-checkbox",
                    "s-check-control-light-has-error-checked-checkbox",
                    "s-check-control-dark-has-success-unchecked-checkbox",
                    "s-check-control-light-has-error-unchecked-checkbox",
                    "s-check-control-dark-has-success-checked-radio",
                    "s-check-control-light-has-error-checked-radio",
                    "s-check-control-dark-has-success-unchecked-radio",
                    "s-check-control-light-has-error-unchecked-radio",
                ],
            });
        });
    });
});
