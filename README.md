# elysian

This repository contains the code for building and deploying the name endpoints to GCP. It assumes Terraform state is managed locally rather than backed by a bucket (which it should be).

The content below outlines:

-   how to run each function locally
-   how to test the deployed endpoints/frontend
-   some improvements to consider over the next few months

## Service Account

`node ./scripts/create-service-account.js` will create a service account with the correct permissions to deploy from terraform.

## Run locally

0. Make sure you're using the corrent node version `cat .nvmrc`
1. CD into the appropriate function `cd ./functions/get_name`
2. Build and run `npm run build && npm run start`

## Build & Deploy (assumes local tf state)

1. Build each function and create lib `node ./scripts/build-functions.js --keep`
2. Create the TF for the functions `node ./scripts/create-terraform.js`
3. Deploy to GCP `terraform apply --auto-approve`

## Calling deployed endpoints

0. To use the frontend you can visit: [https://ifuller1.github.io/elysian/](https://ifuller1.github.io/elysian/)

1. To add a person:

```
curl --location 'https://europe-west1-elysian-client-services.cloudfunctions.net/accept_webhook' \
--header 'Content-Type: application/json' \
--data '{"payload_type":"PersonAdded","payload_content":{"person_id":"3d0ee3a3-1f62-447a-9c3a-44c346a99d99","name":"Person 328","timestamp":"2024-05-21T15:56:50.879203Z"}}'
```

2. To rename a person:

```
curl --location 'https://europe-west1-elysian-client-services.cloudfunctions.net/accept_webhook' \
--header 'Content-Type: application/json' \
--data '{"payload_type":"PersonRenamed","payload_content":{"person_id":"3d0ee3a3-1f62-447a-9c3a-44c346a99d99","name":"Renamed Person 7625","timestamp":"2024-05-21T18:25:12.444519Z"}}'
```

3. To remove a person

```
curl --location 'https://europe-west1-elysian-client-services.cloudfunctions.net/accept_webhook' \
--header 'Content-Type: application/json' \
--data '{"payload_type":"PersonRemoved","payload_content":{"person_id":"3d0ee3a3-1f62-447a-9c3a-44c346a99d99","timestamp":"2024-05-21T18:24:32.072185Z"}}'
```

4. To query a person

```
curl --location 'https://europe-west1-elysian-client-services.cloudfunctions.net/get_name' \
--header 'Content-Type: application/json' \
--data '{"person_id":"3d0ee3a3-1f62-447a-9c3a-44c346a99d99"}'
```

5. Query with natural language

```
curl --location 'https://europe-west1-elysian-client-services.cloudfunctions.net/query_name' \
--header 'Content-Type: text/plain' \
--data 'What name does user 3d0ee3a3-1f62-447a-9c3a-44c346a99d99 have?'
```

## Future improvements

### 30 Days

1. Unit Tests:
   Develop comprehensive unit tests for all existing API endpoints to ensure they function correctly.
   Utilize a testing framework like Jest or Mocha for robust test coverage.

2. GitHub Actions Build:
   Implement continuous integration (CI) with GitHub Actions to automate the build and test process for every code push.
   Ensure the CI pipeline includes linting, unit tests, and deployment scripts.

3. Authentication:
   Implement authentication mechanisms to secure the API.
   Use Firebase Authentication or another OAuth provider to manage user access.

4. Terraform State:
   Manage Google Cloud resources with Terraform to ensure infrastructure as code (IaC).
   Store Terraform state securely in Google Cloud Storage or a similar backend.

### 60 Days

1. Remove Any Duplicate Logic from Code:
   Conduct a code review to identify and refactor any duplicate logic.
   Improve code maintainability by following DRY (Don't Repeat Yourself) principles.

2. Better Type Handling:
   Enhance type safety by leveraging TypeScript features more effectively.
   Ensure all functions and variables are explicitly typed to prevent runtime errors.

3. Logging with Trace IDs:
   Implement structured logging with trace IDs for better traceability and debugging.
   Use Google Cloud Logging to capture and analyze logs.

4. Monitoring:
   Set up monitoring for the API using Google Cloud Monitoring or a similar tool.
   Define key metrics (e.g., response time, error rates) and set up alerts for anomalies.

### 90 Days

1. Integration Tests:
   Write integration tests to verify that different parts of the system work together as expected.
   Use tools like Postman or Cypress to automate API testing.

2. Incident Management Tooling:
   Integrate incident management tools like PagerDuty or Opsgenie for timely alerts and response.
   Define escalation paths and roles for incident resolution.

3. Audit Log:
   Set up audit logging to track changes and access to resources.
   Ensure compliance and security by logging important events and actions.

4. Extend API Spec to Document Response Types:
   Update the API documentation to include detailed response types for all endpoints.
   Use tools like Swagger or Postman to maintain and publish the API documentation.

5. Proper Front-End with Tailwind et al:
   Develop a front-end interface using a modern framework like React or Vue.js.
   Style the front-end with Tailwind CSS for a responsive and clean design.
