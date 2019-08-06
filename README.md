# Project for studying Kubernetes

# Secrets
For PGPASSWORD, which should be a secret environment variable, was used the command below

```kubectl create secret generic pgpassword --from-literal PGPASSWORD=12345asdf```

Where the password can be any password accepted by postgres