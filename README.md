# RN Code Test

Your mission, if you choose to accept it is to build a simple React Native application displaying the current price of BTC (Bitcoin) in as many currencies as possible. We should display the timestamp of when the current price was obtained (available in the API we will be consuming) and it should be possible for the user to update the data that we're displaying. You're free to choose what update mechanism to implement.

## Prerequisites

You need Node installed locally and any dependencies that may be required to run React Native.

## Instructions

You should create a new React Native app either using [create-react-native-app](https://github.com/expo/create-react-native-app) or using [Expo](https://docs.expo.dev/get-started/create-a-new-app/). If given the choice of a template we recommend going with a "blank" app to make things as simple as possible. There are no requirements on the style of the app, use your imagination!

### APIs

We'll be consuming two different REST APIs to accomplish our goal:

#### Coindesk

Current BTC price which provides us with the price of BTC in EUR and USD:

    https://api.coindesk.com/v1/bpi/currentprice.json

#### Currency API by API Plant

For obtaining currency conversions, we have set up an API key for you already:

    https://api.getgeoapi.com/v2/currency/convert?api_key=a6d2b23eb2ae0f35e5b6aa0bff7541be101bccb6&from=EUR&amount=10&format=json

---

Good luck and please let us know if you have any questions!