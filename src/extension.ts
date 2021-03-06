import * as vscode from 'vscode';
const js2coffee = require('js2coffee');

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.jstocoffee', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			let selection = editor.selection;
			let jsCode = editor.document.getText(selection);

			try {
				let jsCodeToCoffeeCode = js2coffee.build(jsCode).code;
				editor.edit(builder => builder.replace(selection, jsCodeToCoffeeCode));
			} catch (Error) {
				vscode.window.showErrorMessage(Error.message);
			}
		}
	});

	context.subscriptions.push(disposable);
}