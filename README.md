### Context:
```
Buildings want to offer a marketplace that offers community, college, and business specific
items to sell to students. This marketplace will have the following features:
● The ability to sell multiple different types of products that contain unique metadata useful
to users, a list price, and an optional ability to keep track of stock
● Users can use multiple different payment sources to pay for the items
● For compliance purposes users must be able to retrieve a historical record of all invoices
● The building needs to be able to run a series of reports summarizing activity around the
inventory
● inventory can be supplied from multiple vendors dynamically through 3rd party stores
(i.e. Gopuff)
```

- 1. Create a simplistic mockup of the marketplace page for Users to view inventory, filter
products, and initiate a purchase. This can be as simple as boxes and squares or you
can get creative with it. The main purpose is to serve as a conversation piece and act as
an anchor to the following questions.

See Attached Document A

- 2. Write a pseudocode implementation of retrieving the information to power the mock-up
above. You can assume the API surface being called to retrieve the information is a
standard GraphQL API endpoint. Please denote any interesting cases you are
considering when preparing the data for use and consumption on the page.

useFecth
https://usehooks-ts.com/react-hook/use-fetch

import { useFetch } from 'utils/useFetch'

const url = `http://jsonplaceholder.typicode.com/posts`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default function Component() {
  const { data, error } = useFetch<Post[]>(url)

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return <p>{data[0].title}</p>
}


- 3. Write pseudo code to add live updates to pricing and inventory of assets for the
Marketplace.

```
const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/productList', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });
  countdown(res, 1, 10);
});

function updateProductList(res, product_id, product) {
  res.write(`id: ${product_id}\n`);
  res.write('event: update\n');
  res.write(`data: ${JSON.stringify({ product: product })}\n\n`);
  res.end();
}

app.listen(3000, () => console.log('SSE app listening on port 3000!'));
```

+ client

```
var source = new EventSource('http://localhost:3000/countdown');
  source.onmessage = function(event) {
    console.log(event);
  };

 OR Sockets

let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  socket.send("My name is John");
};

socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error]`);
};
```

- 4. Given the mockup created, what is the list of components that would be needed? What
frameworks would you use while creating those components and what factors would
make you choose them?

```
App
Root - Layout/ Global + third party Config
Header
Main
Filter Bar
Filter Modal
Search Input
Search Compound Component
Product
Compound Component
List
Item
Footer
```
```
Context - Will be needed to manage state of global filters and search
```


