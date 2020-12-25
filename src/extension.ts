import MarkdownIt = require('markdown-it');
import * as vscode from 'vscode';
import {} from 'vscode';
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "markdown-it-container-question" is now active!');
  // const userConfig = vscode.workspace.getConfiguration('markdown-it-container-question');

  return {
    extendMarkdownIt(md: MarkdownIt) {
      const mdc = require('markdown-it-container');
      const containerName = 'q';
      const ARG_REG = /^${containerName}\s+(.*)$/;

      md.use(mdc, containerName, {
        render: (tokens: any, idx: any) => {
          var m = tokens[idx].info.trim().match(ARG_REG);
          if (tokens[idx].nesting === 1) {
            return (
              `<details>` +
              `<summary class="question">` +
              md.utils.escapeHtml(m[1]) +
              '</summary>' +
              `<span class="answer">'` +
              `\n`
            );
          } else {
            return '</details>\n';
          }
        },
      });

      console.log(md.render('::: q click me\n*content*\n:::\n'));

      return md;
    },
  };
}

export function deactivate() {}
