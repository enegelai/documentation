---
sidebar_position: 1
---

# Enable Bot on your Website

To enable Crescendo.ai Bot on your WebSite, we provide Bot Widget that can be quickly added to your site. 
You can use simple embed code to enable Bot. You can also customize appearance of the bot widget, by passing parameters and configuring CSS variables.


## Bot Widget embed code

Here is an example embed code you would need to add to your website to enable Bot:

```html
<!-- Enegel.ai bot widget begin -->
<link href="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css" rel="stylesheet">
<script src="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js" type="text/javascript" async></script>
<enegelai-bot
        name="Your Bot Name"
        url="<bot service url>"
        org-id="<your org id>"
        bot-id="<bot id>"
>
</enegelai-bot>
<!-- Enegel.ai bot widget end -->
```

## Bot Widget parameters

You can pass the following parameters to Bot Widget:


| Name                  | Description                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------------|
| name                  | Bot Name. Will be shown in Bot Header.                                                              |
| url                   | Bot Service URL.                                                                                    |
| org-id                | Your Org ID.                                                                                        |
| bot-id                | ID of your bot.                                                                                     |
| logo-svg              | Your Logo icon (svg)                                                                                |
| logo-url              | Your Logo URL. Use either `logo-svg`, or `logo-url`.                                                |
| bot-icon-svg          | Icon to use for messages from Bot                                                                   |
| user-icon-svg         | Icon to use for messages from User                                                                  |
| system-icon-svg       | Icon to use for system messages                                                                     |
| always-open           | Keep bot UI always open                                                                             |
| prefilled-form-fields | Prefilled form field values. Serialized JSON. See [Pre-filled Form Values](#pre-filled-form-values) |

Here is an example how to customize logo:

```html
<!-- Enegel.ai bot widget begin -->
<link href="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css" rel="stylesheet">
<script src="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js" type="text/javascript" async></script>
<enegelai-bot
        name="Your Bot Name"
        url="<bot service url>"
        org-id="<your org id>"
        bot-id="<bot id>"
        logo-svg='<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3481 14.0672C22.533 17.2743 20.3563 19.0776 15.6489 19.598C10.4618 20.1771 6.17492 16.8088 4.48156 14.2944C6.64105 15.0536 8.94167 15.3339 11.2218 15.1154C15.4497 14.7306 17.8624 13.0702 19.5927 10.3506C19.8546 9.94378 20.5629 8.66828 19.3234 8.23945C18.1871 7.84727 17.143 7.83627 16.3314 9.02014C15.0143 10.9517 13.4722 11.6921 10.2442 12.044C5.9425 12.5021 0.777569 9.67256 0.179913 10.2627C-0.889966 11.3182 2.58161 22.9224 15.3759 22.7795C19.9837 22.7281 23.2192 21.1668 26.2481 17.2816C26.9859 16.3396 26.7572 15.1961 25.9492 14.1222C25.4512 13.4587 24.7429 13.4111 24.3629 14.0818" fill="#FFFFFF"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7123 7.10689C29.4278 2.66462 27.7713 -0.131961 27.1368 -1.24653e-05C26.6203 0.11361 25.6611 3.03481 24.296 4.73548C19.7066 2.64629 16.8253 4.54489 16.8917 5.55283C16.9471 6.39217 20.7249 5.7874 24.2702 8.85154C28.0369 12.0953 28.1476 15.6102 29.2249 15.5956C30.0881 15.5956 31.9217 12.1759 27.7123 7.10689Z" fill="#FFFFFF"/>
                    </g>
                    </svg>'
>
</enegelai-bot>
<!-- Enegel.ai bot widget end -->
```

## Customizing appearance

You can use CSS variables to customize appearance of certain elements of the Bot Widget.
Here is the list of supported CSS variables:


| Name                                      | Description                                                                                                                                                     |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --enegelai-bot-max-height                 | Max height Bot widget can take, i.e. 100vh - full height                                                                                                        |
| --enegelai-bot-height-top-margin          | Margin from the top of the screen (i.e. 200px) - regular screen size                                                                                            |
| --enegelai-bot-height-top-margin-sm       | Margin from the top of the screen (i.e. 100px) - small screen size - for mobile                                                                                 |
| --enegelai-bot-header-color               | Header color                                                                                                                                                    |
| --enegelai-bot-header-background          | Header background color                                                                                                                                         |
| --enegelai-bot-message-bot-color          | Bot message color                                                                                                                                               |
| --enegelai-bot-message-bot-background     | Bot message background color                                                                                                                                    |
| --enegelai-bot-message-user-color         | User message color                                                                                                                                              |
| --enegelai-bot-message-user-background    | User message background color                                                                                                                                   |
| --enegelai-bot-message-system-color       | System message color                                                                                                                                            |
| --enegelai-bot-message-system-background  | System message background color                                                                                                                                 |
| --enegelai-bot-popup-color                | Engage popup message text color                                                                                                                                 |
| --enegelai-bot-popup-background           | Engage popup message background color                                                                                                                           |
| --enegelai-bot-popup-logo-color           | Logo color on Engage popup message                                                                                                                              |
| --enegelai-bot-popup-close-color          | Close button color on Engage popup message                                                                                                                      |
| --enegelai-bot-anchor-popup-position      | Position of popup message relative to anchor button (top,top-start,top-end,bottom,bottom-start,bottom-end,right,right-start,right-end,left,left-start,left-end) | 
| --enegelai-bot-user-message-avatar-position | User message avatar position (right,left)                                                                                                                     |


Here is an example how to use CSS variables:

```html
<!-- Enegel.ai bot widget begin -->
<link href="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css" rel="stylesheet">
<script src="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js" type="text/javascript" async></script>
<style>
    enegelai-bot {
        --enegelai-bot-header-color: rgba(255, 255, 255, 0.9);
        --enegelai-bot-header-background: rgba(67, 156, 144, 0.5);
    }
</style>
<enegelai-bot
        name="Your Bot Name"
        url="<bot service url>"
        org-id="<your org id>"
        bot-id="<bot id>"
        logo-svg='<svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3481 14.0672C22.533 17.2743 20.3563 19.0776 15.6489 19.598C10.4618 20.1771 6.17492 16.8088 4.48156 14.2944C6.64105 15.0536 8.94167 15.3339 11.2218 15.1154C15.4497 14.7306 17.8624 13.0702 19.5927 10.3506C19.8546 9.94378 20.5629 8.66828 19.3234 8.23945C18.1871 7.84727 17.143 7.83627 16.3314 9.02014C15.0143 10.9517 13.4722 11.6921 10.2442 12.044C5.9425 12.5021 0.777569 9.67256 0.179913 10.2627C-0.889966 11.3182 2.58161 22.9224 15.3759 22.7795C19.9837 22.7281 23.2192 21.1668 26.2481 17.2816C26.9859 16.3396 26.7572 15.1961 25.9492 14.1222C25.4512 13.4587 24.7429 13.4111 24.3629 14.0818" fill="#FFFFFF"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7123 7.10689C29.4278 2.66462 27.7713 -0.131961 27.1368 -1.24653e-05C26.6203 0.11361 25.6611 3.03481 24.296 4.73548C19.7066 2.64629 16.8253 4.54489 16.8917 5.55283C16.9471 6.39217 20.7249 5.7874 24.2702 8.85154C28.0369 12.0953 28.1476 15.6102 29.2249 15.5956C30.0881 15.5956 31.9217 12.1759 27.7123 7.10689Z" fill="#FFFFFF"/>
                    </g>
                    </svg>'
>
</enegelai-bot>
<!-- Enegel.ai bot widget end -->
```

## Pre-filled Form Fields Values

Bot may show a form to collect data from the user. For example, to collect contact information, such as name, email and phone number. 

At the same time, these values may already be known in the web application, for example, in case when user is already authenticated. 
It would be redundant to ask user to enter this data again in the bot. 

For such situations, Bot provides possibility to specify pre-filled values for the form fields. 
You may do so by passing values in a Bot attribute `prefilled-form-fields` or by calling method `setPrefilledFormFields`

:::info
When pre-filled form field values are provided, Bot will still show the form, initially filled with these values. 
This allows user to double-check that the information is correct, and make any adjustments if necessary before submitting the form.   
:::

Pre-filled form fields should be an object, where keys are form field names, and values are form field values. 
For example:
```javascript
const prefilledFields = {
  name:'John Smith',
  email:'john.smith@gmail.com',
  phone:'1-415-1112233'
}
```

### Set pre-filled form fields via attribute value

Set value of the Bot widget attribute `prefilled-form-fields` to JSON representation of the object with form fields:

```html
<enegelai-bot
    name="Your Bot Name"
    url="<bot service url>"
    org-id="<your org id>"
    bot-id="<bot id>"
    prefilled-form-fields='{"name":"John Smith","email":"john.smith@gmail.com","phone":"1-415-1112233"}'
>
</enegelai-bot>

```

:::info
The value of the attribute must be properly formatted JSON.
:::


### Set pre-filled form fields using method call

You may need to make an API call to your backend to get the data for pre-filled form fields.
For these cases, use method `setPrefilledFormFields` to set the data when it becomes available. 

```html
<script>
    window.addEventListener('load', () => {
        const chatBot = document.querySelector('enegelai-bot');
        chatBot.setPrefilledFormFields({
            name: 'John Smith',
            email: 'john.smith@gmail.com',
            phone: '1-415-1112233'
        });
    });
</script>
```

### Full example 

Here is a full example setting pre-filled form fields using data from URL query string

```html
    <!-- Enegel.ai bot widget begin -->
    <link href="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.css" rel="stylesheet">
    <script src="https://unpkg.com/@enegelai/bot-widget/dist/enegelaibot.umd.js" type="text/javascript" async></script>
    <script>
        (function() {
            let el = document.createElement('enegelai-bot');
            el.setAttribute('name', '');
            el.setAttribute('url', '<service URL>');
            el.setAttribute('org-id', '<your Org Id>');
            el.setAttribute('bot-id', '<your Bot Id>');
            // Set prefilled form fields using values from query string
            const searchParams = new URLSearchParams(window.location.search);
            const prefilledFormFields = {
                name: searchParams.get('name') || '',
                email: searchParams.get('email') || '',
                phoneNumber: searchParams.get('phoneNumber') || '',
            };
            el.setAttribute('prefilled-form-fields', JSON.stringify(prefilledFormFields));
            document.body.appendChild(el);
        })();
    </script>
    <!-- Enegel.ai bot widget end -->
```

## Anchor button

### Position Anchor button

You may position Bot Widget Anchor button anywhere on the screen, using css.  
For example:

```css
    enegelai-bot::part(anchor){
        position: fixed;
        right: 25px;
        top: 25px;
    }
```

If you change default position of the anchor button, you may also need to adjust position of the popup message relative to the anchor button.
For this, set appropriate value for `--enegelai-bot-anchor-popup-position` CSS variable.

### Hide Anchor button 

Sometimes you may need to hide anchor button, for example when Bot Widget should always stay open. 
It's possible to do by adding this to style:

```css
    enegelai-bot::part(anchor) {
        display: none;
    }
```

## Bot Widget Javascript API

You can call Bot Widget methods from your Javascript code to control Bot Widget programmatically.

### `setOpen`

Allows you to open or close the Bot Widget programmatically.

#### Parameters

- `state` (boolean): Pass `true` to open the Bot Widget, or `false` to close it.

#### Example

```javascript
function onBotOpen() {
  const chatBot = document.querySelector('enegelai-bot');
  if (chatBot) {
    chatBot.setOpen(true);
  }
}
``` 

### `getOpen`

Returns current Bot Widget open state. Returns `true` if Bot Widget is open, and `false` if it is closed.

#### Example

```javascript
function onBotOpen() {
  const chatBot = document.querySelector('enegelai-bot');
  if (chatBot) {
    const openState = chatBot.getOpen();
  }
}
``` 

### `toggleOpen`

Toggles Bot Widget open state. Opens it if it closed, closes it if it is open.

#### Example

```javascript
function onBotOpen() {
  const chatBot = document.querySelector('enegelai-bot');
  if (chatBot) {
    chatBot.toggleOpen();
  }
}
``` 


### `setPrefilledFormFields`

Allows you to pre-fill form fields values programmatically, for example, when they are known in advance, or retrieved from your backend.

#### Parameters

- `data` (object): Object with form field names as keys, and form field values as values.

#### Example

```javascript
window.addEventListener('load', () => {
    const chatBot = document.querySelector('enegelai-bot');
    if (chatBot) {
        chatBot.setPrefilledFormFields({
            name: 'John Smith',
            email: 'john.smith@gmail.com',
            phone: '1-415-1112233'
        });
    }
});
``` 

### `clearConversation`

Clears current Bot conversation and starts new one.

#### Example

```javascript    
function onClearConversation() {
    const chatBot = document.querySelector('enegelai-bot');
    if(chatBot) {
        chatBot.clearConversation();
    }
}
```


### `setInputValue`

Allows you to set the value of the input field in the Bot Widget.
You can use this method to set suggested message in the bot input field, 
for example, based on how user navigates on your website.

#### Parameters

- `value` (string): Text to set as value of input field. Pass empty string as value to clear the input field.

#### Example

```javascript    
function onSetInputValue() {
    const chatBot = document.querySelector('enegelai-bot');
    if(chatBot) {
        chatBot.setInputValue('Suggested Message Text');
    }
}
```

### `setContext`

Allows you to pass information about user to the Bot, so Bot can use this information in answers.
You can use this method to pass information like user name, what is user currently looking at one the website (e.g., current product page), 
or any other information that may be useful for the Bot to provide better answers.

#### Parameters

- `data` (object): Javascript object with data. Give keys self-explanatory names, so the Bot can understand better what information this is and how it can be used.

#### Example

```javascript    
  window.addEventListener('load', () => {
    chatBot = document.querySelector('enegelai-bot');

    // Set context
    chatBot.setContext({
        UserName: 'John Smith',
        UserSubscriptionLevel: 'Premium',
        CurrentProduct: {
            name: '<product name>',
            description: '<product description>',
        }
    });
  });
```

## Bot Widget Events

You can subscribe to the events Bot Widget emits during chat processing. This can be useful to track bot conversation state and user activities in the bot widget.
You can also use information from the Bot Widget events to send data to your backend for further processing.

### `c7o:bot:conversationStart`

Event "c7o:bot:conversationStart" is emitted when user starts conversation with the bot by sending the first message.
Expect object with the following information in the event.detail:

```json
{
    "conversationId": "66kheifsn0",
    "timestamp": 1750411316902,
    "author": "user",
    "type": "text",
    "data": {
        "text": "hello"
    },
    "id": "r80ftm4p4i"
}
```

### `c7o:bot:open`

Event "c7o:bot:open" is emitted when user opens the bot widget.

### `c7o:bot:close`

Event "c7o:bot:close" is emitted when user closes the bot widget.

### `c7o:bot:formSubmit`

Event "c7o:bot:formSubmit" is emitted when user submits the form with contact information before being connected to the agent.
Expect object with form data in the event.detail:

```json
{
  "conversationId": "66kheifsn0",
  "formData": {
      "name": "John Smith",
      "email": "john.smith@gmail.com"
  }
}
```


### Example  

```html
<script>

    function subscribeToBotEvents(){
        const chatBotElement = document.querySelector('enegelai-bot');

        // Event "c7o:bot:conversationStart" is emitted when user sends the first message in the conversation
        chatBotElement.addEventListener('c7o:bot:conversationStart',(event)=>{
            /* Expect object with the following information in the event.detail:
                {
                    "conversationId": "66kheifsn0",
                    "timestamp": 1750411316902,
                    "author": "user",
                    "type": "text",
                    "data": {
                        "text": "hello"
                    },
                    "id": "r80ftm4p4i"
                }
            */
            console.log(`Bot Event: c7o:bot:conversationStart`,event.detail);
            // Store information that bot conversation was started (to check when navigated to other pages)
            localStorage.setItem("c7o_bot_conversation_started", Date.now());
        });

        // Event "c7o:bot:open" is emitted when user opens the bot
        chatBotElement.addEventListener('c7o:bot:open',(event)=>{
            console.log(`Bot Event: c7o:bot:open`);
        });

        // Event "c7o:bot:open" is emitted when user closes the bot
        chatBotElement.addEventListener('c7o:bot:close',(event)=>{
            console.log(`Bot Event: c7o:bot:close`);
        });

        // Event "c7o:bot:formSubmit" is emitted when user submits the form
        chatBotElement.addEventListener('c7o:bot:formSubmit',(event)=>{
            /* Expect object with form data in the event.detail:
                {
                  "conversationId": "66kheifsn0",
                  "formData": {
                      "name": "John Smith",
                      "email": "john.smith@gmail.com"
                  }
                }
            */
            console.log(`Bot Event: c7o:bot:formSubmit`,event.detail);
        });
    }

    window.addEventListener('load', () => {
        const chatBot = document.querySelector('enegelai-bot');
        if(!chatBot){
            return; // Bot not created
        }
        subscribeToBotEvents();
        const clearConvBtn = document.querySelector('#clearConv');
        if(!clearConvBtn){
            return; // Button not found
        }
        clearConvBtn.addEventListener('click', (e) => {
            console.log('Clear conversation clicked');
            chatBot.clearConversation();
            localStorage.removeItem("c7o_bot_conversation_started");
        });
    });
</script>

```




