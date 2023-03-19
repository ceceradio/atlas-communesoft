
const readline = require('readline/promises')
const child_process = require('child_process')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


queryPrintLabel().then(queryPrintLabel)


async function queryPrintLabel() {
    const answer =  await rl.question('How many days? ');
    await printLabel(answer)
}
async function printLabel(days) {
    return child_process.spawnSync('node', ['print.js', 'expires', days], {})
}
