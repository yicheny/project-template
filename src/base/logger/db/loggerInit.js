import {logger} from "@base/logger/db/logger";
import {generateUniqueId} from "@common/utils";

let lastInteraction = null;

// 捕捉点击事件
document.addEventListener('click', (event) => {
    lastInteraction = {
        type: 'click',
        target: event.target.tagName,
        id: generateUniqueId(),
        timestamp: new Date().toISOString(),
    };

    logger.log('click', {
        target: event.target.tagName,
        id: lastInteraction.id,
        timestamp: lastInteraction.timestamp,
    });
});

// 捕捉 input 事件
document.addEventListener('input', (event) => {
    lastInteraction = {
        type: 'input',
        target: event.target.tagName,
        id: generateUniqueId(),
        timestamp: new Date().toISOString(),
    };

    logger.log('input', {
        target: event.target.tagName,
        value: event.target.value,
        id: lastInteraction.id,
        timestamp: lastInteraction.timestamp,
    });
});

// 捕捉错误事件
window.addEventListener('error', (event) => {
    logger.log('error', {
        message: event.message,
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error ? event.error.stack : null,
        lastInteraction,
    }, lastInteraction ? lastInteraction.id : null);
});

// 捕捉未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (event) => {
    logger.log('unhandledrejection', {
        message: event.reason.message,
        stack: event.reason.stack,
        lastInteraction,
    }, lastInteraction ? lastInteraction.id : null);
});

// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const formDetails = {};
//     formData.forEach((value, key) => {
//         formDetails[key] = value;
//     });
//
//     const id = generateUniqueId();
//     lastInteraction = {
//         id,
//         action: 'form_submit',
//         details: formDetails
//     };
//
//     logger.log('form_submit', lastInteraction.details, id);
// });
