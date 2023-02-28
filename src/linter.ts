import { Linter } from "eslint";
import * as plugin from "eslint-plugin-jsonc";
import * as parser from "jsonc-eslint-parser";

class JSON5Linter extends Linter {
  /** Initialize this linter. */
  constructor() {
    super();
    this.defineParser("jsonc-eslint-parser", parser);

    plugin;
    // for (const name of Object.keys(plugin.rules)) {
    //   this.defineRule(`vue/${name}`, plugin.rules[name]);
    // }
  }

  /** @inheritdoc */
  verify(
    textOrSourceCode: string,
    config: Linter.Config,
    options: Linter.LintOptions
  ) {
    return super.verify(textOrSourceCode, config, {
      ...options,
    });
  }

  /** @inheritdoc */
  verifyAndFix(
    text: string,
    config: Linter.Config,
    options: Linter.LintOptions
  ) {
    return super.verifyAndFix(text, config, {
      ...options,
    });
  }
}
export const linter = new JSON5Linter();
