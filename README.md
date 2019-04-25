# imaginator-node

##Install

To install do the following

1) Clone the repository
2) Install dependencies
npm install express --save
npm install sharp --save

## Run
Run the server:
node server.js

## Test
http://localhost:8000/?format=webp&width=500&height=400
http://localhost:8000/?format=png&width=300&height=300

## TBD

- Load original images with an ID through an API
- Improve caching headers
- Use sharp cache to cache already resized images

## Based on tutorial from
https://malcoded.com/posts/nodejs-image-resize-express-sharp/



