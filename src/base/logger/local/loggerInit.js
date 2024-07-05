import {logger} from "@base/logger/local/logger";

let lastInteraction = null;

document.addEventListener('click', (event) => {
    const target = event.target;
    lastInteraction = {
        action: 'click',
        details: {
            tag: target.tagName,
            id: target.id,
            classes: target.className,
            text: target.innerText,
        }
    };
    logger.log('click', lastInteraction.details);
});

document.addEventListener('input', (event) => {
    const target = event.target;
    lastInteraction = {
        action: 'input',
        details: {
            tag: target.tagName,
            id: target.id,
            classes: target.className,
            value: target.value,
        }
    };
    logger.log('input', lastInteraction.details);
});

window.addEventListener('error', (event) => {
    logger.log('error', {
        message: event.message,
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error ? event.error.stack : null,
        lastInteraction,
    });
});

window.addEventListener('unhandledrejection', (event) => {
    logger.log('unhandledrejection', {
        message: event.reason.message,
        stack: event.reason.stack,
        lastInteraction,
    });
});