import os
import sys
sys.path.insert(0, r"c:\Users\admin\Desktop\Wealth\wealth_wisdom\Backend")
import scripts.test_api_flow

# Override the API key with the valid frontend API key
scripts.test_api_flow.API_KEY = "24cea19beeeca11286f072a917e7368e2039698f8aecab60427fa4a85ba57682"

if __name__ == "__main__":
    scripts.test_api_flow.main()
