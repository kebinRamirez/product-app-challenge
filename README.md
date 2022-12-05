# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To install the node package yo must run:

### `yarn install`

And then in the project directory, you can run to start the app:

### `yarn start`

## Description

This is a project done as a challenge in the main and only page you will find a product's list  of a chinise resturant. you can select a product and see it's details, edit it or delete it in the right side. you can search an spicific product or a list product by typing the name in the top input.

## Solution explanation
 This app use a constants array to show the data, located at src/app/constans. The data is handle it by a reducer created with React-Redux to handle the data states and its mutations. there are 3 actions with the data, delete to delete an specific product, edit to edit an specific product and search to filter by name the array of products
