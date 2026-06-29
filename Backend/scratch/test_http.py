import urllib.request
import urllib.error

req = urllib.request.Request(
    'https://wealth-pboy.onrender.com/api/v1/assessment/', 
    method='POST', 
    headers={
        'X-API-Key': '24cea19beeeca11286f072a917e7368e2039698f8aecab60427fa4a85ba57682',
        'Content-Type': 'application/json'
    },
    data=b'{}'
)

try:
    res = urllib.request.urlopen(req)
    print("Success:", res.read().decode())
except urllib.error.HTTPError as e:
    print("HTTP Error", e.code)
    print("Response body:")
    print(e.read().decode())
except Exception as e:
    print("Other error:", str(e))
