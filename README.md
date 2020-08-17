# Custom kaling

### Node-js package for building Kakaotalk-custom-attachment.

this code is **heavily based on** [kakao-message-template](https://github.com/delta-kor/kakao-message-template) 

## Installation

```bash
npm i custom-kaling
```

## Examples

### Feed

```jsx
const {MessageTemplate, MessageInfo, MessageType, FeedContent, Button} = require('kakao-message-template');

const Header = new MessageInfo(MessageType.FEED, 'http://example.com', 'App Name', 'http://example.com/icon.png');

const Content = new FeedContent('My Feed Message', 'Using kakao-message-template', 'https://example.com/mypage');
Content.Buttons.push(new Button('Homepage', 'http://example.com/'));
Content.Buttons.push(new Button('Signup', 'http://example.com/signup'));

const Message = new MessageTemplate(Header, Content);
```

### List

```jsx
const {MessageTemplate, MessageInfo, MessageType, ListContent, ArticleListItem} = require('kakao-message-template');

const Header = new MessageInfo(MessageType.LIST, 'http://example.com', 'App Name', 'http://example.com/icon.png');

const Content = new ListContent('Top 3');
Content.ArticleList.push(
    new ArticleListItem('Alice', 'HTML', 'http://example.com/alice'),
    new ArticleListItem('Bob', 'CSS', 'http://example.com/bob'),
    new ArticleListItem('Carol', 'JAVASCRIPT', 'http://example.com/carol')
);

const Message = new MessageTemplate(Header, Content);
```

### Slide

```jsx
var {MessageInfo,MessageType,SlideContent,FeedContent} = require("custom-kaling")

const Header = new MessageInfo(MessageType.SLIDE, 'htts://example.com', '', '');
Header.Message = 'TestTest'; 

const Content = new SlideContent(MessageType.FEED, 
		new FeedContent('Alice', 'HTML'), 
		new FeedContent('Bob', 'CSS'),
		new FeedContent('Carol', 'JS')
);

const Message = new MessageTemplate(Header, Content);
```
