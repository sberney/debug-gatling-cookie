# Debugging Gatling's Cookies

Gatling Recorder ignores the `Cookie: ` header as well the `Set-Cookie: ` header,
meaning that the Recording feature cannot be used with Web Apps which use cookies.

# Usage

```bash
npm install
npm start
```

## Case 1, `Cookie: 'IdentityCookie=admin'` ignored

* Get Gatling (2.3.0) set up.
* Navigate to `http://yourcomputer.yourdomain.com:1139`.
* Click on the different buttons. `Admin Cookie` button should result in Status `200`.
* Replay behavior in Gatling.

All requests to the protected `/admin-page` in Gatling fail with status `401`,
because no cookies are sent.

And of course if you examine the Simulation file, it didn't make note of these headers.

## Case 2, `Set-Cookie: IdentityCookie=admin; Path=/` ignored

* Get Gatling (2.3.0) set up.
* Navigate to `http://yourcomputer.yourdomain.com:1139/login`.
* Make sure cookies are cleared.
* Click on `Login as Admin`.
* When redirected, click on `Existing Cookies`.
* Replay behavior in Gatling.

No reference to `IdentityCookie` is contained in the Simulation file,
and the request to the protected `/admin-page` in Gatling fails with status `401`.
