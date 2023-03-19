const {convert} = require('convert-svg-to-png')
const child_process = require('child_process')
const { JSDOM } = require("jsdom")
const fs = require('fs')

const size = '40x30mm'
const dpi = 203

if(process.argv[2]) printLabel(process.argv[2]+'.svg', [
    process.argv[3]
])

async function printLabel(labelName, args) {
    const data = fs.readFileSync(labelName, 'utf-8')
    createSVG(data)
    .then((data) => setStrings(data, args))
    .then(saveSVGtoPNG)
    .then(printPNG)
}

const addDaysToDate = (dateObj, numberOfDays) => {
    dateObj.setDate(dateObj.getDate()+ numberOfDays);
    return dateObj;
}

const set = (dom, selector, data) => {
    if (dom.window.document.querySelector(selector)) {
        dom.window.document.querySelector(selector).innerHTML = data
    }
}

async function createSVG(fileData) {
    const dom = new JSDOM(fileData)
    return dom
}

async function setStrings(dom, args) {
    set(dom,'#expires-date', addDaysToDate(new Date(), parseInt(args[0]) || 0).toDateString())
    set(dom,'#printed-date', (new Date()).toDateString())
    return dom
}

async function saveSVGtoPNG(dom) {
    const svg = dom.serialize()
    const png = await convert(svg, {
        width: '40mm',
        height: '30mm',
        scale: dpi
    })
    return png
}

async function printPNG(input) {
    return child_process.spawnSync('lpr', [`-o media=Custom.${size}`], {
        input
    })
}