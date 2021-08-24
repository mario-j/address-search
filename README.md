# Address Search

This web app parses a CSV of address listings and displays them in a search window.

## Setup

Clone this repository using the ```git clone https://github.com/mario-j/address-search.git``` command in your terminal.

Navigate to the my-app directory using ```cd address-search/my-app```.

Install dependencies using ```npm install```.

Run the server locally using ```node server.js```.

Access the project at the ```localhost:4200``` url to bring up the landing page. 

![image](https://user-images.githubusercontent.com/54779892/130700962-c1460b04-7cfc-45e3-8592-1da04e16d2c5.png)

## CSV

The CSV currently being used is taken from Redfin and can be found here https://www.redfin.com/city/17151/CA/San-Francisco. The Download All link at the bottom of the page downloads a CSV of the listings. The server then parses the CSV to get the information of each listing.

## Project Layout

The project is set up in the ```server.js``` file. Two hosts are created on ports 4200 and 3000. The first is the Angular app hosted on port 4200. The angular app houses the UI and other client-related functionality. The second is hosted on 3000 and houses the API endpoint that the Angular app hits to retreive the search results from the csv list.
