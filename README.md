# Google Scopes and APIs

## The Question

The goal of this little project is to find out what is the relation between Google (OAuth) scopes and Google APIs. Can a Google scope be shared by multiple Google APIs?

## The Answer

Yes, some Google scopes are shared by multiple Google APIs, but the vast majority (84%) of Google scopes are specific to only one Google API.

<!--
225/268 = 0.83955... = 84%
-->

## The Methodology

To answer that question, we have parsed the <https://developers.google.com/identity/protocols/oauth2/scopes> page.

```text
npm install request cheerio
```

```text
node parse > google-scopes-and-apis.csv
```

## Analysis

We have used Excel "PivotTable" to find the following results:

* There are 149 different Google APIs.

* There are 268 different Google scopes.

* Out of the 268 Google scopes, 225 Google scopes are used in one and only one Google API, it's 84% of the Google scopes.

* Here is the list of Google scopes that are used by more than one Google API:

| Google scope                                                   | Number of Google APIs using it |
|:-------------------------------------------------------------- |:------------------------------:|
| https://www.googleapis.com/auth/cloud-platform                 | 86                             |
| https://www.googleapis.com/auth/cloud-platform.read-only       | 14                             |
| https://www.googleapis.com/auth/userinfo.email                 | 7                              |
| https://www.googleapis.com/auth/drive                          | 5                              |
| https://www.googleapis.com/auth/firebase                       | 4                              |
| https://www.googleapis.com/auth/drive.readonly                 | 4                              |
| https://www.googleapis.com/auth/bigquery                       | 4                              |
| https://www.googleapis.com/auth/drive.file                     | 4                              |
| openid                                                         | 4                              |
| https://www.googleapis.com/auth/devstorage.read_only           | 3                              |
| https://www.googleapis.com/auth/service.management             | 3                              |
| https://www.googleapis.com/auth/devstorage.read_write          | 3                              |
| https://www.googleapis.com/auth/compute                        | 3                              |
| https://www.googleapis.com/auth/androidpublisher               | 3                              |
| https://www.googleapis.com/auth/devstorage.full_control        | 3                              |
| https://www.googleapis.com/auth/spreadsheets                   | 3                              |
| https://www.googleapis.com/auth/youtube.readonly               | 2                              |
| https://www.googleapis.com/auth/games                          | 2                              |
| https://www.googleapis.com/auth/admin.directory.group          | 2                              |
| https://www.googleapis.com/auth/compute.readonly               | 2                              |
| https://www.googleapis.com/auth/monitoring.write               | 2                              |
| profile                                                        | 2                              |
| https://www.googleapis.com/auth/yt-analytics.readonly          | 2                              |
| https://www.googleapis.com/auth/datastore                      | 2                              |
| https://www.googleapis.com/auth/firebase.readonly              | 2                              |
| https://www.googleapis.com/auth/spreadsheets.readonly          | 2                              |
| https://www.googleapis.com/auth/monitoring                     | 2                              |
| https://www.googleapis.com/auth/userinfo.profile               | 2                              |
| https://www.googleapis.com/auth/adexchange.buyer               | 2                              |
| https://www.googleapis.com/auth/webmasters.readonly            | 2                              |
| https://www.googleapis.com/auth/documents                      | 2                              |
| https://mail.google.com/                                       | 2                              |
| https://www.googleapis.com/auth/yt-analytics-monetary.readonly | 2                              |
| https://www.googleapis.com/auth/webmasters                     | 2                              |
| https://www.googleapis.com/auth/admin.directory.user           | 2                              |
| https://www.googleapis.com/auth/youtube                        | 2                              |
| https://www.googleapis.com/auth/drive.appdata                  | 2                              |
| https://www.googleapis.com/auth/youtubepartner                 | 2                              |
| https://www.googleapis.com/auth/analytics                      | 2                              |
| https://www.googleapis.com/auth/bigquery.readonly              | 2                              |
| https://www.googleapis.com/auth/analytics.readonly             | 2                              |
| https://www.googleapis.com/auth/doubleclickbidmanager          | 2                              |
| email                                                          | 2                              |

## References

* <https://developers.google.com/identity/protocols/oauth2/scopes>

* <https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping>