## Instructions

Using JavaScript write a web page that has a form to input a website address. When submitted, the specified website's title should be shown in the web-page.

### Details

When submitted, the form should send a request with `axios` to the backend express REST API. 
That backend REST API should then request the webpage and scrape the title, and return it. The request should again be run via `axios`. This middle api is necessary to avoid cors rejections in the browser.
The client should then render the website.

For example, if I enter `https://www.reddit.com/r/aww` into the form, hit submit, the web page should show `A subreddit for cute and cuddly pictures`

### Getting Started
Clone this repo

```bash
git clone https://github.com/chatmeter/titlebot
```

Make sure you have node 10+ installed. Navigate to the `titlebot` folder, and run `npm i`.

To run the project (server and client). Run `npm run dev`.

When complete, send a forked repository or zip file of the completed source. 

