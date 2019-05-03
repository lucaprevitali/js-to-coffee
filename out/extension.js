"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const js2coffee = require('js2coffee');
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.jstocoffee', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            let selection = editor.selection;
            let jsCode = editor.document.getText(selection);
            try {
                let jsCodeToCoffeeCode = js2coffee.build(jsCode).code;
                editor.edit(builder => builder.replace(selection, jsCodeToCoffeeCode));
            }
            catch (Error) {
                vscode.window.showErrorMessage(Error.message);
            }
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
//export function deactivate() {}
//# sourceMappingURL=extension.js.map