let remote = require('remote');
let Menu = remote.require('menu');

let template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Combat',
                accelerator: 'CmdOrCtrl+N'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'CmdOrCtrl+Q',
                selector: 'terminate:'
            }
        ]
    },
    {
        label: 'Tracker',
        submenu: [
            {
                label: 'Add PC'
            },
            {
                label: 'Add NPC'
            }
        ]
    }
];

let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
