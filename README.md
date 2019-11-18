## Instructions

Using JavaScript write a web page that has a form to input a website address. When submitted, the specified website's title, and any heading that contains the words (case insensitive) "cat", "kitten", "dog", or "puppy".

For example, if I enter `https://www.reddit.com/r/aww` into the form, hit submit, the web page should show:

**Title:**
- A subreddit for cute and cuddly pictures

**Headers:**
- Sleepy kitten doing a face hug
- I finally got a puppy. I couldn’t possibly wish for anything more. She’s beautiful.
- Kitten Drifting
- Cat devours dog

If I enter `https://www.cnn.com`, the webpage should just show

**Title:**
- CNN - Breaking News, Latest News and Videos

### Implementation Details

When submitted, the form should send a request with `axios` to the backend express REST API. 
That backend REST API should then request the webpage and scrape the title and headers, and return it. The request should again be run via `axios` (or a similar http client). This middle express server is necessary to avoid CORS rejections in the browser.

The client should then render the website title and headers.

You will likely need to add some libraries to assist with parsing content.


### Getting Started
Clone this repo

```bash
git clone https://github.com/chatmeter/robocat
```

Make sure you have node 10+ installed. Navigate to the `titlebot` folder, and run `npm i`.

To run the project (server and client). Run `npm run dev`.

When complete, send a forked repository or zip file of the completed source. 

