const prompts = require('prompts')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const manager = require("./manager");

async function run() {
    yargs(hideBin(process.argv))
        .scriptName('messh')
        //.demandCommand(1, '')
        .command('manage', 'Manage the messh config', (yargs) => {
            return yargs
                .command('server <name>', '', (yargs) => {
                    return yargs
                        .positional('name', {
                            describe: 'The name of the server, usually the hostname/alias'
                        })
                })
                .command('servers', 'Manage the hosts you can connect to', () => {}, (argv) => {
                    manager.servers()
                })
                .command('identities', 'Manage the identities you can use to connect', () => {}, (argv) => {
                    manager.identities()
                })
                // .command('keys')
                // .command('usernames')
                // .command('passwords')
                .command('settings', 'Manager general settings', () => {}, (argv) => {
                    manager.settings()
                })
        }, () => {
            manager.manage()
        })
        .help()
        .parse()
}

run().then()