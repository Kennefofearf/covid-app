# Intro

The purpose of this webpage is to demonstrate how to show data fetched from an API visually.

The data that this app uses is COVID-19 cases vs deaths for many countries around the world.

The API used for the webpage is found here: https://covid-api.com/api/

Edit: The API is no longer supported and will show data from March 10, 2023.

# Development

This consists of several components such as dropdowns, navigation bars and a main body to display the data. A data hook is also present of course and runs asyncronous to the rest of the code.

Due to the way this API is structured, two different URLs had to be used to fetch the proper data needed. The first URL is used to show a selectable list of countries when the dropdown menu is clicked. The second URL is used once the country is selected to display the data.

# Challenges

1. The most challenging part of the app's development was using two different URLs and switching between them when necessary. Since the hook is running asyncronous it seemed like a delicate logic problem throughout the app's creation.

2. The second URL relies on an ISO taken the first data fetch. This meant that changing the URL used could easily cause the ISO to be incorrect or NULL.

# Resolution

1. The solution to this dilemma was using saving the fetched country data from the first URL to it's own variable within a conditional. This conditional was checking for a flag to be set to "false" in order to execute. Once the code within the conditional was run, then the flag would set to true to prevent the data fetch from attempting to save data in the same variable again. From here the country list displays the data from the initial fetch and displays it each time the dropdown is clicked. This means the switch to second URL can remain permanent.

2. The ISO issue was solved using a similar method. Using a different variable the ISO data was stored separately and used the same index value as the country list to load the proper data.

# How to use

At the time of this messgae the API is no longer being supported with new data. However the data fetches will still work after a couple steps are taken.

1. Allow CORS

    Browsers by default do not allow CORS (Cross Origin Resource Sharing). To enable this, visit the Chrome webstore and add the extension: Allow CORS: Access-Control-Allow-Origin.

    The link to so and instructions are found here: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en-US

2. Accept the expired certificate

    Since the API is no longer supported with new data, the certificate needs to be accepted as well. This can be done by visiting the link below.

    https://covid-api.com/

    Once there you will see a security warning. Click "Advanced" followed by "Proceed to ____" to enable the cerificate.

From here reload the page and it will start displaying countries and covid cases, and covid deaths.
