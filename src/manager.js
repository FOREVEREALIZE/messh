const prompts = require('prompts')

async function manage() {
    let { action } = await prompts([
        {
            type: 'select',
            name: 'action',
            message: 'What kind of resource do you want to modify?',
            choices: [
                {
                    title: 'Servers',
                    description: 'The hosts you can connect to',
                    value: 'servers'
                },
                {
                    title: 'Identities',
                    description: 'The credentials / keys you can use to connect',
                    value: 'credentials'
                },
                {
                    title: 'Settings',
                    description: 'Settings for the application',
                    value: 'settings'
                },
            ],
            initial: 0
        }
    ])

    console.log(action)
}

async function servers() {
    console.log('Manage Servers')
}

async function identities() {
    console.log('Manage Ids')
}

async function settings() {
    console.log('Manage Setts')
}


module.exports = {
    manage,
    servers,
    identities,
    settings
}