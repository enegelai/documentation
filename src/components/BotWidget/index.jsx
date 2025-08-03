import React, { useEffect } from 'react';
import './index.module.css'; // global style overrides for the widget

export default function BotWidget() {
    useEffect(() => {
        /* ──────────────────────────────────────────────────────────────── */
        /* 0.  DEV-ONLY: silence ResizeObserver loop warnings              */
        /*     (must run BEFORE widget script potentially triggers them)   */
        /* ──────────────────────────────────────────────────────────────── */
        const stopResizeObserverOverlay = () => {
            const MSG_A = 'ResizeObserver loop limit exceeded';
            const MSG_B = 'ResizeObserver loop completed with undelivered notifications.';

            /* a) intercept window error events in the capture phase */
            const errHandler = (e) => {
                if (e.message === MSG_A || e.message === MSG_B) {
                    e.stopImmediatePropagation(); // block overlay
                }
            };
            window.addEventListener('error', errHandler, true); // capture-phase

            /* b) patch console.error so overlay never sees the log */
            const rawError = console.error; // backup
            // eslint-disable-next-line no-console
            console.error = (...args) => {
                if (
                    typeof args[0] === 'string' &&
                    (args[0].startsWith(MSG_A) || args[0].startsWith(MSG_B))
                ) {
                    return; // swallow
                }
                rawError(...args); // everything else passes through
            };

            /* cleanup on unmount */
            return () => {
                window.removeEventListener('error', errHandler, true);
                // restore original console.error
                // eslint-disable-next-line no-console
                console.error = rawError;
            };
        };

        if (process.env.NODE_ENV === 'development') {
            stopResizeObserverOverlay();
        }

        /* ──────────────────────────────────────────────────────────────── */
        /* 1. helper: mount <enegelai-bot> once the class is defined       */
        /* ──────────────────────────────────────────────────────────────── */
        const mountBot = () => {
            if (
                customElements.get('enegelai-bot') &&
                !document.querySelector('enegelai-bot')
            ) {
                const el = document.createElement('enegelai-bot');
                el.setAttribute('name', '');
                el.setAttribute('url', 'bot-service.enegel.ai');
                el.setAttribute('org-id', 'c7o');
                el.setAttribute('bot-id', 'ow2gj743xv');
                el.setAttribute('anchor-open-svg', '<svg width="55" height="55" viewBox="0 0 484 484" xmlns="http://www.w3.org/2000/svg">\n' +
                    '    <defs>\n' +
                    '      <style>\n' +
                    '        path { fill: #fff; animation: 2s fadeIn 1; }\n' +
                    '        @keyframes fadeIn {\n' +
                    '          0% {fill: #1E1331} \n' +
                    '          35% {fill: #ffffff}\n' +
                    '          100% {fill: #ffffff}\n' +
                    '        }\n' +
                    '      </style>\n' +
                    '    </defs>\n' +
                    '    <rect class="st1" y="0" width="483.3" height="483.3" rx="241.7" ry="241.7" fill="#1e1331"></rect>\n' +
                    '    <path class="st0" d="M222.6,129.8c-5.3,0-8.6,6.3-8.6,6.3-.8,1.6-1.7,4.5-1.8,6.3l-7.9,95.1c-.2,1.8-.3,3.6-.3,3.9,0,.3.2,2.6.3,4.5l7.9,95.1c.2,1.8,1,4.7,1.8,6.3,0,0,3.3,6.3,8.6,6.3s8.6-6.3,8.6-6.3c.8-1.6,1.7-4.5,1.8-6.3l7.9-95.1c.2-1.8.3-3.6.3-3.9,0-.3-.1-2.6-.3-4.5l-7.9-95.1c-.1-1.8-1-4.7-1.8-6.3,0,0-3.3-6.3-8.6-6.3Z"></path>\n' +
                    '    <path class="st0" d="M196.3,145.8c-3,0-4.1,2.3-4.1,2.3-.8,1.6-1.6,4.5-1.7,6.3l-4.6,83.6c-.1,1.8-.2,3.4-.2,3.5s0,1.9.2,3.8l4.6,83.6c.1,1.8.9,4.7,1.7,6.3,0,0,1.2,2.3,4.1,2.3s4.1-2.3,4.1-2.3c.8-1.6,1.6-4.5,1.7-6.3l4.6-83.6c.1-1.8.2-3.4.2-3.5,0-.1,0-1.9-.2-3.8l-4.6-83.6c-.1-1.8-.9-4.7-1.7-6.3,0,0-1.2-2.3-4.1-2.3Z"></path>\n' +
                    '    <path class="st0" d="M175,161.8c-3,0-4.2,2.3-4.2,2.3-.8,1.6-1.6,4.5-1.7,6.3l-4.5,67.6c-.1,1.8-.2,3.5-.2,3.6,0,.1.1,2,.2,3.8l4.5,67.6c.1,1.8.9,4.7,1.7,6.3,0,0,1.2,2.3,4.2,2.3s4.2-2.3,4.2-2.3c.8-1.6,1.6-4.5,1.7-6.3l4.5-67.6c.1-1.8.2-3.5.2-3.6,0-.1-.1-2-.2-3.8l-4.5-67.6c-.1-1.8-.9-4.7-1.7-6.3,0,0-1.2-2.3-4.2-2.3Z"></path>\n' +
                    '    <path class="st0" d="M156.3,177.8c-2.2,0-2.8,1-2.8,1-.8,1.6-1.6,4.5-1.7,6.3l-3.3,53c-.1,1.8-.2,3.4-.2,3.5,0,0,.1,1.9.2,3.7l3.3,53c.1,1.8.9,4.7,1.7,6.3,0,0,.5,1,2.8,1s2.8-1,2.8-1c.8-1.6,1.6-4.5,1.7-6.3l3.3-53c.1-1.8.2-3.4.2-3.5,0,0-.1-1.9-.2-3.7l-3.3-53c-.1-1.8-.9-4.7-1.7-6.3,0,0-.5-1-2.8-1Z"></path>\n' +
                    '    <path class="st0" d="M140.3,193.8c-2.3,0-2.8,1-2.8,1-.8,1.6-1.7,4.5-1.8,6.3l-3.1,37c-.2,1.8-.3,3.4-.3,3.6s.1,2,.3,3.8l3.1,37c.1,1.8,1,4.7,1.8,6.3,0,0,.5,1,2.8,1s2.8-1,2.8-1c.8-1.6,1.7-4.5,1.8-6.3l3.1-37c.1-1.8.3-3.4.3-3.6s-.1-2-.3-3.8l-3.1-37c-.1-1.8-1-4.7-1.8-6.3,0,0-.5-1-2.8-1Z"></path>\n' +
                    '    <path class="st0" d="M126.4,210.6c-1.2-.5-2.1-.9-2.1-.9,0,0-.9.4-2.1.9-1.2.5-2.6,4.6-2.8,6.4l-2.6,20.8c-.2,1.8-.4,3.5-.4,3.7,0,.2.2,2.2.4,4.1l2.6,20.8c.2,1.8,1.1,4.6,2,6.2,0,0,.6,1,2.9,1s2.9-1,2.9-1c.9-1.6,1.8-4.4,2-6.2l2.6-20.8c.2-1.8.4-3.5.4-3.7,0-.2-.2-2.2-.4-4.1l-2.6-20.8c-.2-1.8-1.6-6-2.8-6.4Z"></path>\n' +
                    '    <path class="st0" d="M113.6,225c-.3-1.8-1.1-4.2-1.7-5.3-.6-1.1-3.5-2-3.5-2,0,0-1,.4-2.1.8s-2.8,4.6-3.1,6.4l-2.1,12.7c-.3,1.8-.6,3.5-.6,3.8,0,.3.3,2.5.6,4.3l2.1,12.7c.3,1.8,1.3,4.6,2.3,6.2,0,0,.6,1.1,2.9,1.1s2.9-1.1,2.9-1.1c.9-1.6,2-4.4,2.3-6.2l2.1-12.7c.3-1.8.6-3.5.6-3.8,0-.3-.3-2.5-.6-4.3l-2.1-12.7h0Z"></path>\n' +
                    '    <path class="st0" d="M283.4,240.5c0-.5-.2-2.3-.4-4.1l-10.1-108.1c-.2-1.8-1-4.7-1.9-6.3,0,0-4.8-9-11.5-9s-11.5,9-11.5,9c-.9,1.6-1.7,4.5-1.9,6.3l-10.1,108.1c-.2,1.8-.3,3.7-.4,4.1,0,.5.2,3.1.4,5l10.1,108.1c.2,1.8,1,4.7,1.9,6.3,0,0,4.7,9,11.5,9s11.5-9,11.5-9c.9-1.6,1.7-4.5,1.9-6.3l10.1-108.1c.2-1.8.4-4.5.4-5Z"></path>\n' +
                    '    <path class="st0" d="M327,241.9c0-.5-.2-2.7-.3-4.8l-10-126c-.2-2.1-1-5.4-1.8-7.3,0,0-4.7-10.5-11.4-10.5s-11.4,10.5-11.4,10.5c-.8,1.9-1.7,5.2-1.8,7.3l-10,126c-.2,2.1-.3,4.3-.3,4.8,0,.5.2,3.7.3,5.8l10,126c.2,2.1,1,5.4,1.8,7.3,0,0,4.7,10.5,11.4,10.5s11.4-10.5,11.4-10.5c.8-1.9,1.7-5.2,1.8-7.3l10-126c.2-2.1.4-5.3.3-5.8Z"></path>\n' +
                    '  </svg>');
                el.setAttribute('logo-svg', '<svg width="42" height="42" viewBox="0 0 484 484" xmlns="http://www.w3.org/2000/svg">\n' +
                    '    <defs>\n' +
                    '      <style>\n' +
                    '        path { fill: #fff; animation: 2s fadeIn 1; }\n' +
                    '        @keyframes fadeIn {\n' +
                    '          0% {fill: #1E1331} \n' +
                    '          35% {fill: #ffffff}\n' +
                    '          100% {fill: #ffffff}\n' +
                    '        }\n' +
                    '      </style>\n' +
                    '    </defs>\n' +
                    '    <rect class="st1" y="0" width="483.3" height="483.3" rx="241.7" ry="241.7" fill="#1e1331"></rect>\n' +
                    '    <path class="st0" d="M222.6,129.8c-5.3,0-8.6,6.3-8.6,6.3-.8,1.6-1.7,4.5-1.8,6.3l-7.9,95.1c-.2,1.8-.3,3.6-.3,3.9,0,.3.2,2.6.3,4.5l7.9,95.1c.2,1.8,1,4.7,1.8,6.3,0,0,3.3,6.3,8.6,6.3s8.6-6.3,8.6-6.3c.8-1.6,1.7-4.5,1.8-6.3l7.9-95.1c.2-1.8.3-3.6.3-3.9,0-.3-.1-2.6-.3-4.5l-7.9-95.1c-.1-1.8-1-4.7-1.8-6.3,0,0-3.3-6.3-8.6-6.3Z"></path>\n' +
                    '    <path class="st0" d="M196.3,145.8c-3,0-4.1,2.3-4.1,2.3-.8,1.6-1.6,4.5-1.7,6.3l-4.6,83.6c-.1,1.8-.2,3.4-.2,3.5s0,1.9.2,3.8l4.6,83.6c.1,1.8.9,4.7,1.7,6.3,0,0,1.2,2.3,4.1,2.3s4.1-2.3,4.1-2.3c.8-1.6,1.6-4.5,1.7-6.3l4.6-83.6c.1-1.8.2-3.4.2-3.5,0-.1,0-1.9-.2-3.8l-4.6-83.6c-.1-1.8-.9-4.7-1.7-6.3,0,0-1.2-2.3-4.1-2.3Z"></path>\n' +
                    '    <path class="st0" d="M175,161.8c-3,0-4.2,2.3-4.2,2.3-.8,1.6-1.6,4.5-1.7,6.3l-4.5,67.6c-.1,1.8-.2,3.5-.2,3.6,0,.1.1,2,.2,3.8l4.5,67.6c.1,1.8.9,4.7,1.7,6.3,0,0,1.2,2.3,4.2,2.3s4.2-2.3,4.2-2.3c.8-1.6,1.6-4.5,1.7-6.3l4.5-67.6c.1-1.8.2-3.5.2-3.6,0-.1-.1-2-.2-3.8l-4.5-67.6c-.1-1.8-.9-4.7-1.7-6.3,0,0-1.2-2.3-4.2-2.3Z"></path>\n' +
                    '    <path class="st0" d="M156.3,177.8c-2.2,0-2.8,1-2.8,1-.8,1.6-1.6,4.5-1.7,6.3l-3.3,53c-.1,1.8-.2,3.4-.2,3.5,0,0,.1,1.9.2,3.7l3.3,53c.1,1.8.9,4.7,1.7,6.3,0,0,.5,1,2.8,1s2.8-1,2.8-1c.8-1.6,1.6-4.5,1.7-6.3l3.3-53c.1-1.8.2-3.4.2-3.5,0,0-.1-1.9-.2-3.7l-3.3-53c-.1-1.8-.9-4.7-1.7-6.3,0,0-.5-1-2.8-1Z"></path>\n' +
                    '    <path class="st0" d="M140.3,193.8c-2.3,0-2.8,1-2.8,1-.8,1.6-1.7,4.5-1.8,6.3l-3.1,37c-.2,1.8-.3,3.4-.3,3.6s.1,2,.3,3.8l3.1,37c.1,1.8,1,4.7,1.8,6.3,0,0,.5,1,2.8,1s2.8-1,2.8-1c.8-1.6,1.7-4.5,1.8-6.3l3.1-37c.1-1.8.3-3.4.3-3.6s-.1-2-.3-3.8l-3.1-37c-.1-1.8-1-4.7-1.8-6.3,0,0-.5-1-2.8-1Z"></path>\n' +
                    '    <path class="st0" d="M126.4,210.6c-1.2-.5-2.1-.9-2.1-.9,0,0-.9.4-2.1.9-1.2.5-2.6,4.6-2.8,6.4l-2.6,20.8c-.2,1.8-.4,3.5-.4,3.7,0,.2.2,2.2.4,4.1l2.6,20.8c.2,1.8,1.1,4.6,2,6.2,0,0,.6,1,2.9,1s2.9-1,2.9-1c.9-1.6,1.8-4.4,2-6.2l2.6-20.8c.2-1.8.4-3.5.4-3.7,0-.2-.2-2.2-.4-4.1l-2.6-20.8c-.2-1.8-1.6-6-2.8-6.4Z"></path>\n' +
                    '    <path class="st0" d="M113.6,225c-.3-1.8-1.1-4.2-1.7-5.3-.6-1.1-3.5-2-3.5-2,0,0-1,.4-2.1.8s-2.8,4.6-3.1,6.4l-2.1,12.7c-.3,1.8-.6,3.5-.6,3.8,0,.3.3,2.5.6,4.3l2.1,12.7c.3,1.8,1.3,4.6,2.3,6.2,0,0,.6,1.1,2.9,1.1s2.9-1.1,2.9-1.1c.9-1.6,2-4.4,2.3-6.2l2.1-12.7c.3-1.8.6-3.5.6-3.8,0-.3-.3-2.5-.6-4.3l-2.1-12.7h0Z"></path>\n' +
                    '    <path class="st0" d="M283.4,240.5c0-.5-.2-2.3-.4-4.1l-10.1-108.1c-.2-1.8-1-4.7-1.9-6.3,0,0-4.8-9-11.5-9s-11.5,9-11.5,9c-.9,1.6-1.7,4.5-1.9,6.3l-10.1,108.1c-.2,1.8-.3,3.7-.4,4.1,0,.5.2,3.1.4,5l10.1,108.1c.2,1.8,1,4.7,1.9,6.3,0,0,4.7,9,11.5,9s11.5-9,11.5-9c.9-1.6,1.7-4.5,1.9-6.3l10.1-108.1c.2-1.8.4-4.5.4-5Z"></path>\n' +
                    '    <path class="st0" d="M327,241.9c0-.5-.2-2.7-.3-4.8l-10-126c-.2-2.1-1-5.4-1.8-7.3,0,0-4.7-10.5-11.4-10.5s-11.4,10.5-11.4,10.5c-.8,1.9-1.7,5.2-1.8,7.3l-10,126c-.2,2.1-.3,4.3-.3,4.8,0,.5.2,3.7.3,5.8l10,126c.2,2.1,1,5.4,1.8,7.3,0,0,4.7,10.5,11.4,10.5s11.4-10.5,11.4-10.5c.8-1.9,1.7-5.2,1.8-7.3l10-126c.2-2.1.4-5.3.3-5.8Z"></path>\n' +
                    '  </svg>');
                document.body.appendChild(el);
            }
        };

        /* 2. widget stylesheet (once) */
        if (!document.getElementById('enegelai-bot-css')) {
            const link = document.createElement('link');
            link.id = 'enegelai-bot-css';
            link.rel = 'stylesheet';
            link.href =
                'https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css';
            document.head.appendChild(link);
        }

        /* 3. widget runtime script (once) */
        if (!document.getElementById('enegelai-bot-script')) {
            const script = document.createElement('script');
            script.id = 'enegelai-bot-script';
            script.src =
                'https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js';
            script.async = true;
            script.onload = mountBot;   // mount after definition
            document.body.appendChild(script);
        } else {
            mountBot(); // script already loaded earlier
        }
    }, []);

    return null; // this component renders nothing
}
