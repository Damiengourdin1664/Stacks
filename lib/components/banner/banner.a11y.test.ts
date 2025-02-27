import { runComponentTests } from "../../test/test-utils";
import "../../index";

const bannerChild = `
    <div
        class="d-flex flex__center jc-space-between s-banner--container"
        role="alertdialog"
        aria-labelledby="banner-title"
        aria-describedby="banner-description"
    >
        <div aria-label="banner message">
            <h2 id="banner-title">Banner heading</h2>
            <p id="banner-description">Banner description</p>
        </div>
        <div class="ml-auto myn8">
            <span class="s-btn s-banner--btn">Close</span>
        </div>
    </div>
`;

describe("banner", () => {
    runComponentTests({
        type: "a11y",
        baseClass: "s-banner",
        variants: ["info", "success", "warning", "danger"],
        modifiers: {
            primary: ["important"],
        },
        attributes: {
            role: "alert",
            ariaHidden: "false",
        },
        children: {
            default: bannerChild,
        },
        // TODO: Most of those skipped tests should be fixed by the new Stacks 2.0 palette
        skippedTestids: [
            "s-banner-dark",
            "s-banner-dark-danger",
            "s-banner-dark-danger-important",
            "s-banner-dark-important",
            "s-banner-dark-info",
            "s-banner-dark-success",
            "s-banner-dark-success-important",
            "s-banner-dark-warning",
            "s-banner-dark-warning-important",
            "s-banner-light-success-important",
            "s-banner-light-warning-important",
        ],
    });
});
