# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Akhil Subbarao and Tommy Tran 
### https://ttran29.github.io/Lab5_Starter/explore.html
### https://ttran29.github.io/Lab5_Starter/expose.html

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
**Answer:** No, it would not be able to check if the message is actually delivered to another user. A Unit test could work for checking that a message has the right parts and was created correctly. So while I could use a unit test for message structure, I could not for checking the overall "message" feature.

1) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
**Answer:** I would use a unit test to test a "max message length" feature of a messaging application. This is because all the test would need to check is if the message is longer than 80 characters, and if it is, it fails the test. If it is shorter than 80 characters then it will pass the test.
