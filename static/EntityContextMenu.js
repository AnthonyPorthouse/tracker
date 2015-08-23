let remote = require('remote');
let Menu = remote.require('menu');
let BrowserWindow = remote.require('browser-window');

let menu = Menu.buildFromTemplate([
    {
        label: "Thing"
    },
    {
        label: "Thing 2"
    }
]);

export function popupMenu() {
    let window = BrowserWindow.getFocusedWindow();
    menu.popup(window);
}
