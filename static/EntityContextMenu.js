let remote = require('remote');
let Menu = remote.require('menu');
let BrowserWindow = remote.require('browser-window');

let menu = Menu.buildFromTemplate([
    {
        label: "Add Alert"
    },
    {
        label: "Add Timer"
    }
]);

export function popupMenu() {
    let window = BrowserWindow.getFocusedWindow();
    menu.popup(window);
}
