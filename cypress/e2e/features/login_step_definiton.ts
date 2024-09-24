import {When,Then,Before,DataTable}from '@badeball/cypress-cucumber-preprocessor';
import Login from '../Specs/Login.cy';

When the user enters the correct username and password
When the user clicks on the button sign in
Then the user should be successfully logged in