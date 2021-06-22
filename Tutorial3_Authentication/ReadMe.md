Video: https://www.youtube.com/watch?v=H7qkTzxk_0I&ab_channel=CodingGarden

Github: https://github.com/w3cj/users-stickers-CRUD

Signup process, after user submits form:
1) check email is not in use
2) Hash the user password using BCrypt
3) Store email/hashed password in DB

ensure the email format is valid

Authenticate and Authorize:
-users can sign up to the app with unique email
-users cannot sign up with dublicat email
-users can login to the app with valid email/password
-users cannot login to the app with blank or incorrect email/password
-There is a resource that can only be seen by a specfic user
-that resource has links/content that only appears when logged in

Harden server-side application against vunerabilities:
-Password is hahed in the DB, using slow-hashing alg
-cookies are HTTPOnly
-cookies are secure
-cookies are encrypted
-encryption  keys are set in environment variable