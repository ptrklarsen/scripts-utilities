import requests
def url_ok(url):
    r = requests.head(url)
    return r.status_code == 200
 
url ="https://www.thinklabs.com/"

print(url_ok(url))
